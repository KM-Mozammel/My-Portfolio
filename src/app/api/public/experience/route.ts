// src/app/api/public/experience/route.ts
import { db } from "@/db";
import { experience } from "@/db/schema";

export async function GET() {
  const data = await db
    .select()
    .from(experience)
    .orderBy(experience.startDate);

  return Response.json(data);
}