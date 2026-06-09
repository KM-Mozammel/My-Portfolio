import { db } from "@/db";
import { education } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  const data = await db
    .select()
    .from(education)
    .orderBy(desc(education.startDate));

  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  await db.insert(education).values({
    institution: body.institution,
    degree: body.degree,
    fieldOfStudy: body.fieldOfStudy,
    startDate: body.startDate,
    endDate: body.endDate,
    description: body.description,
  });

  return Response.json({ success: true });
}