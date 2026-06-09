import { db } from "@/db";
import { messages } from "@/db/schema";

export async function POST(req: Request) {
  const body = await req.json();

  await db.insert(messages).values({
    senderName: body.name,
    senderEmail: body.email,
    subject: body.subject,
    body: body.message,

    isRead: false,
    status: "new",
  });

  return Response.json({ success: true });
}