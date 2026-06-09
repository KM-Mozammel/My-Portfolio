import { db } from "@/db";
import { messages } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  const data = await db
    .select()
    .from(messages)
    .orderBy(desc(messages.createdAt));

  return Response.json(data);
}