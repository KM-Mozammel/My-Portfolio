import { db } from "@/db";
import { Settings } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(req: Request) {
  const body = await req.json();

  // always update row id = 1 (single record system)
  await db
    .update(Settings)
    .set({
      siteTitle: body.siteTitle,
      siteDescription: body.siteDescription,

      email: body.email,
      phone: body.phone,
      location: body.location,

      github: body.github,
      linkedin: body.linkedin,
      facebook: body.facebook,
      twitter: body.twitter,

      heroTitle: body.heroTitle,
      heroSubtitle: body.heroSubtitle,

      aboutMe: body.aboutMe,
      resumeUrl: body.resumeUrl,

      updatedAt: new Date(),
    })
    .where(eq(Settings.id, body.id));

  return Response.json({ success: true });
}