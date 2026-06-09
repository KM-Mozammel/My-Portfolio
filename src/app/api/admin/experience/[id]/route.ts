import { db } from "@/db";
import { experience } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const data = await db
    .select()
    .from(experience)
    .where(eq(experience.id, id));

  return NextResponse.json(data[0] ?? null);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  await db
    .update(experience)
    .set({
      company: body.company,
      role: body.role,
      location: body.location,
      startDate: body.startDate,
      endDate: body.endDate,
      description: body.description,
    })
    .where(eq(experience.id, id));

  return NextResponse.json({ success: true });
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await db.delete(experience).where(eq(experience.id, id));

  return NextResponse.json({ success: true });
}