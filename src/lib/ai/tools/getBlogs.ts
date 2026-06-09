import { db } from "@/db";
import { blogs } from "@/db/schema";

export async function getBlogs() {
  return await db.select().from(blogs);
}