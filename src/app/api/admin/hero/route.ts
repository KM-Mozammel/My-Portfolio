import { db } from "@/db";
import { heroSections } from "@/db/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function PUT(req: Request) {
    const body = await req.json();

    const hero = await db.query.heroSections.findFirst();

    if (!hero) {
        return NextResponse.json(
            { error: "Hero not found" },
            { status: 404 }
        );
    }

    await db
        .update(heroSections)
        .set({
            greeting: body.greeting,
            name: body.name,
            tagline: body.tagline,
            animatedServices: body.animatedServices,
            roleTags: body.roleTags,
            primaryButton: body.primaryButton,
            secondaryButton: body.secondaryButton,
            updatedAt: new Date(),
        })
        .where(eq(heroSections.id, hero.id));

    return NextResponse.json({
        success: true,
    });
}