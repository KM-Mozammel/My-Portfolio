import { db } from "@/db";
import { experience } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  const data = await db
    .select()
    .from(experience)
    .orderBy(desc(experience.startDate));

  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  await db.insert(experience).values({
    company: body.company,
    role: body.role, // ✅ FIXED
    location: body.location,
    startDate: body.startDate,
    endDate: body.endDate,
    description: body.description,
  });

  return Response.json({ success: true });
}