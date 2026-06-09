import { createEmbedding } from "@/lib/ai/embedding";

export async function GET() {
  try {
    const result = await createEmbedding("Next.js blog system");

    return Response.json({
      success: true,
      vector: result,
      length: result?.length || 0,
    });
  } catch (error) {
    console.error("AI API ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "AI generation failed",
        error: String(error),
      },
      { status: 500 }
    );
  }
}