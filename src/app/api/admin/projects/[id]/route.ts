import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const project = await db
    .select()
    .from(projects)
    .where(eq(projects.id, id))
    .limit(1);

  return Response.json(project[0] ?? null);
}

// export async function PUT(req: Request, { params }: any) {
//   const body = await req.json();

//   await db
//     .update(projects)
//     .set({
//       title: body.title,
//       slug: body.slug,
//       shortDescription: body.shortDescription,
//       fullDescription: body.fullDescription,
//       thumbnail: body.thumbnail,
//       githubUrl: body.githubUrl,
//       liveUrl: body.liveUrl,
//       featured: body.featured,
//       status: body.status,
//       displayOrder: body.displayOrder,
//       updatedAt: new Date(),
//     })
//     .where(eq(projects.id, params.id));

//   return Response.json({ success: true });
// }

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();

  const updateData: any = {};

  if (body.title !== undefined) updateData.title = body.title;
  if (body.description !== undefined) updateData.description = body.description;
  if (body.imageUrl !== undefined) updateData.imageUrl = body.imageUrl;
  if (body.githubUrl !== undefined) updateData.githubUrl = body.githubUrl;
  if (body.liveUrl !== undefined) updateData.liveUrl = body.liveUrl;
  if (body.featured !== undefined) updateData.featured = body.featured;

  updateData.updatedAt = new Date();

  await db.update(projects).set(updateData).where(eq(projects.id, id));

  return Response.json({ success: true });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  await db.delete(projects).where(eq(projects.id, id));

  return Response.json({ success: true });
}