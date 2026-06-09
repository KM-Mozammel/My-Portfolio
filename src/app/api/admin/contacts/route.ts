// src/app/api/admin/contacts/route.ts
import { db } from "@/db";
import { contacts } from "@/db/schema";

export async function GET() {
  const data = await db.select().from(contacts);
  return Response.json(data);
}