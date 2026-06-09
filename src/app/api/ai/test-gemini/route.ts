import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getPortfolioContext } from "@/lib/ai/portfolioContext";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function GET() {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
    });

    const prompt = `${getPortfolioContext()} : Who is the developer?`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return NextResponse.json({
        text: response.text(),
    });
}