import { db } from "@/db";
import { education } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(_: Request, { params }: any) {
    const data = await db
        .select()
        .from(education)
        .where(eq(education.id, params.id));

    return Response.json(data[0]);
}

export async function PUT(req: Request, { params }: any) {
    const body = await req.json();

    await db
        .update(education)
        .set({
            institution: body.institution,
            degree: body.degree,
            fieldOfStudy: body.fieldOfStudy,
            startDate: body.startDate,
            endDate: body.endDate,
            description: body.description,
        })
        .where(eq(education.id, params.id));

    return Response.json({ success: true });
}

export async function DELETE(_: Request, { params }: any) {
    await db.delete(education).where(eq(education.id, params.id));

    return Response.json({ success: true });
}