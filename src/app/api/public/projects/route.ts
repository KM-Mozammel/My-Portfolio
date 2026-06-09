// src/app/api/public/projects/route.ts
import { db } from "@/db";
import { projects } from "@/db/schema";
import { count } from "drizzle-orm";

export async function GET() {
  const total = await db.select({ total: count() }).from(projects);
  const data = await db.select().from(projects);

  return Response.json({
    total: total[0].total,
    projects: data,
  });
}