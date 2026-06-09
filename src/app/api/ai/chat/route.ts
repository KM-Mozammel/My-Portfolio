// src/app/api/ai/chat/route.ts

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { getProjects } from "@/lib/ai/tools/getProjects";
import { getSkills } from "@/lib/ai/tools/getSkills";
import { getBlogs } from "@/lib/ai/tools/getBlogs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// -----------------------------
// TOOL PLANNER (Gemini decides tools)
// -----------------------------
async function planTools(model: any, message: string): Promise<string[]> {
    const prompt = `
You are a tool routing system for a portfolio AI.

User message:
"${message}"

Available tools:
- projects
- skills
- blogs

Return ONLY a valid JSON array like:
["projects", "skills"]

Rules:
- If user asks general introduction → return all tools
- If no tool needed → return []
- Do NOT include explanations
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    try {
        return JSON.parse(text);
    } catch (err) {
        return [];
    }
}

// -----------------------------
// MAIN API
// -----------------------------
export async function POST(req: Request) {
    let message = "";

    try {
        const body = await req.json();
        message = body.message;
    } catch {
        message = await req.text();
    }

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
    });

    // STEP 1: Decide tools using Gemini
    const tools = await planTools(model, message);

    let context = "";

    // STEP 2: Load Projects
    if (tools.includes("projects")) {
        const projects = await getProjects();

        context += `
PROJECTS:
${projects
    .map(
        (p) => `
Title: ${p.title}
Description: ${p.description}
`
    )
    .join("\n")}
`;
    }

    // STEP 3: Load Skills
    if (tools.includes("skills")) {
        const skills = await getSkills();

        context += `
SKILLS:
${skills
    .map(
        (s) => `
${s.name} - ${s.category} - Level: ${s.level}
`
    )
    .join("\n")}
`;
    }

    // STEP 4: Load Blogs
    if (tools.includes("blogs")) {
        const blogs = await getBlogs();

        context += `
BLOGS:
${blogs
    .map(
        (b) => `
${b.title} - ${b.excerpt ?? ""}
`
    )
    .join("\n")}
`;
    }

    // STEP 5: Final prompt
    const prompt = `
You are Mozammel Khandakar's AI Portfolio Assistant.

Rules:
- Only use provided data
- Never hallucinate projects, skills, or blogs
- Be concise and professional
- If data is missing, say "I don't have that information"

Portfolio Data:
${context}

User Question:
${message}

Answer:
`;

    const result = await model.generateContent(prompt);

    return NextResponse.json({
        reply: result.response.text(),
        toolsUsed: tools, // helpful for debugging
    });
}