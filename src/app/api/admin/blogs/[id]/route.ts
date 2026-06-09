import { NextResponse } from "next/server";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const blog = await db
            .select()
            .from(blogs)
            .where(eq(blogs.id, id));

        if (!blog.length) {
            return NextResponse.json(
                { message: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(blog[0]);
    } catch {
        return NextResponse.json(
            { message: "Failed to fetch blogs" },
            { status: 500 }
        );
    }
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const body = await req.json();

        const updated = await db
            .update(blogs)
            .set({
                title: body.title,
                slug: body.slug,
                excerpt: body.excerpt,
                content: body.content,
                coverImage: body.coverImage,
                status: body.status,
                author: body.author,
                updatedAt: new Date(),

                publishedAt:
                    body.status === "published"
                        ? new Date()
                        : null,
            })
            .where(eq(blogs.id, id))
            .returning();

        return NextResponse.json(updated[0]);
    } catch {
        return NextResponse.json(
            { message: "Failed to update blog" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        await db
            .delete(blogs)
            .where(eq(blogs.id, id));

        return NextResponse.json({
            success: true,
        });
    } catch {
        return NextResponse.json(
            { message: "Failed to delete blog" },
            { status: 500 }
        );
    }
}