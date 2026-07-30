"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  status: string;
  created_at: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function loadBlogs() {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/blogs");
      const data = await res.json();

      setBlogs(data || []);
    } catch (error) {
      console.error("Failed to load blogs:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteBlog(id: string) {
    const ok = confirm("Delete this blog?");
    if (!ok) return;

    try {
      setBlogs((prev) => prev.filter((b) => b.id !== id));

      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("Failed to delete blog");
        loadBlogs();
      }
    } catch (error) {
      console.error("Delete error:", error);
      loadBlogs();
    }
  }

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-end">
        <div>
          <h1
            className="text-4xl font-bold mb-2"
            style={{
              background: "var(--hero-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Blogs
          </h1>

          <p style={{ color: "var(--text-muted)" }}>
            Manage your articles and publish content.
          </p>
        </div>

        <Link
          href="/admin/blogs/create"
          className="px-4 py-2 rounded-xl font-semibold transition hover:scale-[1.02]"
          style={{
            background: "var(--hero-gradient)",
            color: "#fff",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          + New Blog
        </Link>
      </div>

      {/* CONTENT CARD */}
      <div
        className="rounded-2xl p-6 space-y-4"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        {loading && (
          <div style={{ color: "var(--text-muted)" }}>
            Loading blogs...
          </div>
        )}

        {!loading && blogs.length === 0 && (
          <div style={{ color: "var(--text-muted)" }}>
            No blogs found.
          </div>
        )}

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-xl p-4 flex justify-between items-center gap-4"
            style={{
              background: "var(--section-bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            {/* LEFT */}
            <div className="space-y-1">
              <h2 className="font-semibold">
                {blog.title}
              </h2>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "13px",
                }}
              >
                {new Date(
                  blog.created_at
                ).toLocaleDateString()}
              </p>
            </div>

            {/* STATUS */}
            <span
              className="text-xs px-2 py-1 rounded-md"
              style={{
                background:
                  blog.status === "published"
                    ? "rgba(34,197,94,0.15)"
                    : "rgba(245,158,11,0.15)",
                color:
                  blog.status === "published"
                    ? "#22c55e"
                    : "#fbbf24",
                border:
                  blog.status === "published"
                    ? "1px solid rgba(34,197,94,0.3)"
                    : "1px solid rgba(245,158,11,0.3)",
              }}
            >
              {blog.status}
            </span>

            {/* ACTIONS */}
            <div className="flex gap-2">
              <Link
                href={`/admin/blogs/${blog.id}/edit`}
                className="px-3 py-1 rounded-lg text-sm"
                style={{
                  background:
                    "rgba(59,130,246,0.15)",
                  color: "#3b82f6",
                  border:
                    "1px solid rgba(59,130,246,0.3)",
                }}
              >
                Edit
              </Link>

              <button
                onClick={() => deleteBlog(blog.id)}
                className="px-3 py-1 rounded-lg text-sm"
                style={{
                  background:
                    "rgba(239,68,68,0.15)",
                  color: "#ef4444",
                  border:
                    "1px solid rgba(239,68,68,0.3)",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}