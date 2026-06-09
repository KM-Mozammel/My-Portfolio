import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const slug = searchParams.get("slug");

    if (!slug) {
        return NextResponse.json(
            { error: "slug is required" },
            { status: 400 }
        );
    }

    const blog = await db
        .select()
        .from(blogs)
        .where(eq(blogs.slug, slug));

    return NextResponse.json(blog[0] || null);
}