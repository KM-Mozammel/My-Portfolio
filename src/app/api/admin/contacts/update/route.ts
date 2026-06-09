import { db } from "@/db";
import { contacts } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(req: Request) {
  const body = await req.json();

  await db
    .update(contacts)
    .set({
      email: body.email,
      phone: body.phone,
      location: body.location,
      website: body.website,

      github: body.github,
      linkedin: body.linkedin,
      facebook: body.facebook,
      twitter: body.twitter,
    })
    .where(eq(contacts.id, body.id));

  return Response.json({ success: true });
}