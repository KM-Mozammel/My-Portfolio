import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function createEmbedding(text: string) {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(`
Convert this text into a compact semantic feature vector representation.
Return ONLY a JSON array of 20 numbers between -1 and 1.

Text: ${text}
`);

    const response = await result.response;
    const raw = response.text();

    try {
        return JSON.parse(raw);
    } catch {
        // fallback safe vector
        return new Array(20).fill(0).map(() => Math.random() * 0.1);
    }
}