import { db } from "@/db";
import { projects, skills, blogs, testimonials, contacts, messages } from "@/db/schema";
import { count, desc } from "drizzle-orm";

export async function GET() {
  const [projectCount] = await db.select({ count: count() }).from(projects);
  const [skillCount] = await db.select({ count: count() }).from(skills);
  const [blogCount] = await db.select({ count: count() }).from(blogs);
  const [testimonialCount] = await db.select({ count: count() }).from(testimonials);
  const [messageCount] = await db.select({ count: count() }).from(messages);

  const recentMessages = await db
    .select()
    .from(messages)
    .orderBy(desc(messages.createdAt))
    .limit(5);

  const recentBlogs = await db
    .select()
    .from(blogs)
    .orderBy(desc(blogs.createdAt))
    .limit(5);

  return Response.json({
    totalProjects: projectCount.count,
    totalSkills: skillCount.count,
    totalBlogs: blogCount.count,
    totalTestimonials: testimonialCount.count,
    totalMessages: messageCount.count,
    recentMessages,
    recentBlogs,
  });
}