import { db } from "@/db";
import { projects } from "@/db/schema";

export async function getProjects() {
  return await db.select().from(projects);
}