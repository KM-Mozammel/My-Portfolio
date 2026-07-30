"use client";

import BlogForm from "../components/BlogForm";

export default function NewBlogPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* HEADER */}
      <div>
        <h1
          className="text-4xl font-bold mb-2"
          style={{
            background: "var(--hero-gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Create Blog
        </h1>

        <p style={{ color: "var(--text-muted)" }}>
          Write and publish a new blog post.
        </p>
      </div>

      {/* FORM CARD */}
      <div
        className="rounded-2xl p-6"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        <BlogForm />
      </div>
    </div>
  );
}