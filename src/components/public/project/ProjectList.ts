import type { Project } from "./ProjectType";
import { projectsData } from "./projectsData";

export async function getProjects(): Promise<Project[]> {
    try {
        const res = await fetch("/api/admin/projects", { cache: "no-store" });

        if (!res.ok) {
            throw new Error("Failed to fetch projects");
        }

        const data = await res.json();

        return data.map((p: any) => ({
            id: p.id,
            title: p.title,
            description: p.description,

            images: (() => {
                const imgs = p.images;

                if (!imgs) return [];

                if (Array.isArray(imgs)) return imgs;

                if (typeof imgs === "string") {
                    try {
                        const parsed = JSON.parse(imgs);
                        return Array.isArray(parsed) ? parsed : [parsed];
                    } catch {
                        // not JSON → treat as single URL string
                        return [imgs];
                    }
                }

                return [];
            })(),

            githubUrl: p.githubUrl,
            link: p.liveUrl || p.githubUrl || "#",
            featured: p.featured || false,
        }));
    } catch (error) {
        console.error("Falling back to local projectsData:", error);
        return projectsData;
    }
}