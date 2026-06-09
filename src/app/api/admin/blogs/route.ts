import { NextResponse } from "next/server";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { createEmbedding } from "@/lib/ai/embedding";

// ================= GET ALL BLOGS =================
export async function GET() {
  try {
    const data = await db
      .select()
      .from(blogs)
      .orderBy(desc(blogs.createdAt));

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// ================= CREATE BLOG + AI =================
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      status,
      author,
    } = body;

    // ================= VALIDATION =================
    if (!title || !slug || !content) {
      return NextResponse.json(
        { message: "title, slug, content required" },
        { status: 400 }
      );
    }

    // ================= DUPLICATE SLUG CHECK =================
    const existing = await db
      .select()
      .from(blogs)
      .where(eq(blogs.slug, slug))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { message: "Slug already exists" },
        { status: 409 }
      );
    }

    // ================= AI EMBEDDING =================
    const fullText = `${title || ""} ${excerpt || ""} ${content || ""}`;

    let embedding: number[] = [];

    try {
      embedding = await createEmbedding(fullText);
    } catch (err) {
      console.error("Embedding failed:", err);

      // fallback safe vector (prevents crash)
      embedding = Array(20).fill(0);
    }

    // ================= INSERT BLOG =================
    const blog = await db
      .insert(blogs)
      .values({
        title,
        slug,
        excerpt,
        content,
        coverImage,
        status: status || "draft",
        author,
        embeddings: embedding,
        publishedAt:
          status === "published" ? new Date() : null,
      })
      .returning();

    return NextResponse.json(blog[0]);
  } catch (error) {
    console.error("BLOG CREATE ERROR:", error);

    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    );
  }
}