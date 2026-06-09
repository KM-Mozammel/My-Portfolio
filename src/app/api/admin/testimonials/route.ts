import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  const data = await db
    .select()
    .from(testimonials)
    .orderBy(desc(testimonials.createdAt));

  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  await db.insert(testimonials).values({
    name: body.name,
    position: body.position,
    company: body.company,
    photo: body.photo,
    message: body.message,
    rating: body.rating,
    featured: body.featured ?? false,
  });

  return Response.json({ success: true });
}