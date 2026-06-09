import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(_: Request, { params }: any) {
  const data = await db
    .select()
    .from(testimonials)
    .where(eq(testimonials.id, params.id));

  return Response.json(data[0]);
}

export async function PUT(req: Request, { params }: any) {
  const body = await req.json();

  await db
    .update(testimonials)
    .set({
      name: body.name,
      position: body.position,
      company: body.company,
      photo: body.photo,
      message: body.message,
      rating: body.rating,
      featured: body.featured,
    })
    .where(eq(testimonials.id, params.id));

  return Response.json({ success: true });
}

export async function DELETE(_: Request, { params }: any) {
  await db.delete(testimonials).where(eq(testimonials.id, params.id));

  return Response.json({ success: true });
}