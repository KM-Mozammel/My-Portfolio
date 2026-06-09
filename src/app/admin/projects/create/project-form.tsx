"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProjectForm({
  initialData,
  id,
}: any) {
  const router = useRouter();

  const [title, setTitle] = useState(
    initialData?.title || ""
  );

  const [description, setDescription] =
    useState(initialData?.description || "");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const isEdit = !!id;

    await fetch(
      isEdit
        ? `/api/admin/projects/${id}`
        : "/api/admin/projects",
      {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      }
    );

    router.push("/admin/projects");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Title"
        className="border p-2 w-full"
      />

      <textarea
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        placeholder="Description"
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="border px-4 py-2"
      >
        {id ? "Update" : "Create"}
      </button>
    </form>
  );
}