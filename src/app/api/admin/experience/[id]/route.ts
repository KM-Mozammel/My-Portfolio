import { db } from "@/db";
import { experience } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const data = await db
    .select()
    .from(experience)
    .where(eq(experience.id, params.id));

  return Response.json(data[0] ?? null);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
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
    .where(eq(experience.id, params.id));

  return Response.json({ success: true });
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await db.delete(experience).where(eq(experience.id, params.id));

  return Response.json({ success: true });
}