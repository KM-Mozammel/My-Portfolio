import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const project = await db
    .select()
    .from(projects)
    .where(eq(projects.id, id))
    .limit(1);

  return NextResponse.json(project[0] ?? null);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  const updateData: any = {};

  if (body.title !== undefined) updateData.title = body.title;
  if (body.description !== undefined) updateData.description = body.description;
  if (body.imageUrl !== undefined) updateData.imageUrl = body.imageUrl;
  if (body.githubUrl !== undefined) updateData.githubUrl = body.githubUrl;
  if (body.liveUrl !== undefined) updateData.liveUrl = body.liveUrl;
  if (body.featured !== undefined) updateData.featured = body.featured;

  updateData.updatedAt = new Date();

  await db.update(projects).set(updateData).where(eq(projects.id, id));

  return NextResponse.json({ success: true });
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await db.delete(projects).where(eq(projects.id, id));

  return NextResponse.json({ success: true });
}