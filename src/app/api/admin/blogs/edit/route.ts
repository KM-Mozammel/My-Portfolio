import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: {
        params: Promise<{ slug: string }>
    }
) {

    const { slug } = await params;

    const blog = await db
        .select()
        .from(blogs)
        .where(eq(blogs.slug, slug));

    return NextResponse.json(blog[0]);
}