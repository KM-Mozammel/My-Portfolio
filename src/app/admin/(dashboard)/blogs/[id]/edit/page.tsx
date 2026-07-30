"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

type Props = {
  initialData?: any;
  id?: string;
};

export default function BlogForm({ initialData, id }: Props) {
  const router = useRouter();
  const isEdit = !!id;

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // hydrate initial data
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setSlug(initialData.slug || "");
      setExcerpt(initialData.excerpt || "");
      setContent(initialData.content || "");
      setStatus(initialData.status || "draft");
    }
  }, [initialData]);

  // auto slug generator (only for create)
  useEffect(() => {
    if (!isEdit) {
      const generated = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      setSlug(generated);
    }
  }, [title]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const payload = {
      title,
      slug,
      excerpt,
      content,
      status,
    };

    try {
      const res = await fetch(
        isEdit ? `/api/admin/blogs/${id}` : "/api/admin/blogs",
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to save blog");
      }

      router.push("/admin/blogs");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded">
          {error}
        </div>
      )}

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 w-full"
      />

      <input
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Slug"
        className="border p-2 w-full"
      />

      <textarea
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        placeholder="Excerpt"
        className="border p-2 w-full"
      />

      <div data-color-mode="light">
        <MDEditor
          value={content}
          onChange={(value) => setContent(value || "")}
          height={500}
        />
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <button
        disabled={loading}
        className="bg-black text-white px-4 py-2 disabled:opacity-50"
      >
        {loading ? "Saving..." : isEdit ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
}