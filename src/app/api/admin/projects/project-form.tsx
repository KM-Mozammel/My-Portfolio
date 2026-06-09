"use client";

import { useState } from "react";

export default function ProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    await fetch("/api/admin/projects", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    alert("Created");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
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
          setDescription(
            e.target.value
          )
        }
        placeholder="Description"
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="border px-4 py-2"
      >
        Save
      </button>
    </form>
  );
}