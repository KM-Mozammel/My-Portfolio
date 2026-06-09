// src/app/api/public/skills/route.ts
import { db } from "@/db";
import { skills } from "@/db/schema";

export async function GET() {
  const data = await db.select().from(skills);

  return Response.json(data);
}