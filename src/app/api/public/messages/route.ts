import { db } from "@/db";
import { messages } from "@/db/schema";

export async function POST(req: Request) {
    const body = await req.json();

    const { senderName, senderEmail, subject, body: messageBody } = body;

    if (!senderName || !senderEmail || !messageBody) {
        return Response.json(
            { error: "Missing required fields" },
            { status: 400 }
        );
    }

    await db.insert(messages).values({
        senderName,
        senderEmail,
        subject,
        body: messageBody,
        status: "new",
        isRead: false,
    });

    return Response.json({ success: true });
}