import ProjectForm from "../create/project-form";

async function getProject(id: string) {
    const res = await fetch(
        `http://localhost:3000/api/admin/projects/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch project");
    }

    return res.json();
}

export default async function EditProjectPage({
    params,
}: {
    params: { id: string };
}) {
    const project = await getProject(params.id);

    return (
        <div>
            <h1 className="text-2xl mb-6">
                Edit Project
            </h1>

            <ProjectForm
                initialData={project}
                id={params.id}
            />
        </div>
    );
}