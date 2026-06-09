import { db } from "@/db";
import { skills } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  const data = await db
    .select()
    .from(skills)
    .orderBy(desc(skills.displayOrder));

  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  await db.insert(skills).values({
    name: body.name,
    category: body.category,
    level: body.level,
    icon: body.icon,
    displayOrder: body.displayOrder ?? 0,
  });

  return Response.json({ success: true });
}