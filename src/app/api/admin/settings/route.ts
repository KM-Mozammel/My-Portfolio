import { db } from "@/db";
import { Settings } from "@/db/schema";

export async function GET() {
  const data = await db.select().from(Settings).limit(1);

  return Response.json(data[0]);
}