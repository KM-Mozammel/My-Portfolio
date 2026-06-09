// src/app/api/admin/projects/route.ts
import { db } from "@/db";
import { projects } from "@/db/schema";

export async function GET() {
  const data = await db.select().from(projects);
  return Response.json(data);
}

// export async function POST(req: Request) {
//   const body = await req.json();

//   const inserted = await db.insert(projects).values({
//     title: body.title,
//     slug: body.slug,
//     shortDescription: body.shortDescription,
//     fullDescription: body.fullDescription,
//     thumbnail: body.thumbnail,
//     githubUrl: body.githubUrl,
//     liveUrl: body.liveUrl,
//     featured: body.featured ?? false,
//     status: body.status ?? "draft",
//     displayOrder: body.displayOrder ?? 0,
//   });

//   return Response.json(inserted);
// }

export async function POST(
  req: Request
) {
  const body = await req.json();

  await db.insert(projects).values({
    title: body.title,
    description: body.description,
  });

  return Response.json({
    success: true,
  });
}