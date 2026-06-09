import { db } from "@/db";
import { blogs } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await db
            .select()
            .from(blogs)
            .where(eq(blogs.status, "published"))
            .orderBy(desc(blogs.publishedAt));

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(
            { error: "Failed to fetch blogs" },
            { status: 500 }
        );
    }
}