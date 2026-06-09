import { db } from "@/db";
import { skills } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(_: Request, { params }: any) {
  const data = await db
    .select()
    .from(skills)
    .where(eq(skills.id, params.id));

  return Response.json(data[0]);
}

export async function PUT(req: Request, { params }: any) {
  const body = await req.json();

  await db
    .update(skills)
    .set({
      name: body.name,
      category: body.category,
      level: body.level,
      icon: body.icon,
      displayOrder: body.displayOrder,
    })
    .where(eq(skills.id, params.id));

  return Response.json({ success: true });
}

export async function DELETE(_: Request, { params }: any) {
  await db.delete(skills).where(eq(skills.id, params.id));

  return Response.json({ success: true });
}