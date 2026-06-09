// src/app/api/public/profile/route.ts
import { db } from "@/db";
import { profile } from "@/db/schema";

export async function GET() {
  const data = await db.select().from(profile).limit(1);

  return Response.json(data[0] || null);
}