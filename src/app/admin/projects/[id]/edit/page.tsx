"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Project = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
};

export default function EditProject() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [form, setForm] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadProject = async () => {
      try {
        const res = await fetch(`/api/admin/projects/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to load project");
        }

        const data = await res.json();
        setForm(data);
      } catch (error) {
        console.error(error);
        alert("Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  const updateProject = async () => {
    if (!form) return;

    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Update failed");
      }

      alert("Project updated successfully");

      router.push("/admin/projects");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update project");
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!form) {
    return <div className="p-6">Project not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Edit Project</h1>

      <div>
        <label className="block mb-1 font-medium">Title</label>

        <input
          type="text"
          value={form.title ?? ""}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Slug</label>

        <input
          type="text"
          value={form.slug ?? ""}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Short Description
        </label>

        <textarea
          rows={5}
          value={form.shortDescription ?? ""}
          onChange={(e) =>
            setForm({
              ...form,
              shortDescription: e.target.value,
            })
          }
          className="w-full border rounded p-2"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={updateProject}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update Project
        </button>

        <button
          onClick={() => router.push("/admin/projects")}
          className="border px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}