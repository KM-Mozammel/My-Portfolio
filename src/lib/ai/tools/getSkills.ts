import { db } from "@/db";
import { skills } from "@/db/schema";

export async function getSkills() {
  return await db.select().from(skills);
}