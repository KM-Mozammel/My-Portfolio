import { getProjects } from "@/lib/ai/tools/getProjects";

export async function GET() {
  const projects = await getProjects();

  return Response.json(projects);
}