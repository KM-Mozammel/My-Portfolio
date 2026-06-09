import { db } from "@/db";
import { messages } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(_: Request, { params }: any) {
  const data = await db
    .select()
    .from(messages)
    .where(eq(messages.id, params.id));

  return Response.json(data[0]);
}

export async function PUT(req: Request, { params }: any) {
  const body = await req.json();

  await db
    .update(messages)
    .set({
      isRead: body.isRead,
      status: body.status,
    })
    .where(eq(messages.id, params.id));

  return Response.json({ success: true });
}

export async function DELETE(_: Request, { params }: any) {
  await db
    .delete(messages)
    .where(eq(messages.id, params.id));

  return Response.json({ success: true });
}