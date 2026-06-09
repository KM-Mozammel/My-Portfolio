import { db } from "@/db";
import { heroSections } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
    const hero = await db.query.heroSections.findFirst();
    // const data = await db.select().from(heroSections);


    return NextResponse.json(hero);
}