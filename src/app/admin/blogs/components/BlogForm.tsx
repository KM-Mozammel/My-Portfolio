"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function BlogForm({
  initialData,
  id,
}: any) {
  const router = useRouter();

  const [title, setTitle] = useState(
    initialData?.title || ""
  );

  const [slug, setSlug] = useState(
    initialData?.slug || ""
  );

  const [excerpt, setExcerpt] = useState(
    initialData?.excerpt || ""
  );

  const [content, setContent] = useState(
    initialData?.content || ""
  );

  const [status, setStatus] = useState(
    initialData?.status || "draft"
  );

  const [coverImage, setCoverImage] = useState(
    initialData?.coverImage || ""
  );

  const inputStyle = {
    background: "var(--section-bg)",
    border: "1px solid var(--border-color)",
    color: "var(--text-color)",
  };

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const payload = {
      title,
      slug,
      excerpt,
      content,
      status,
      author: "Admin",
      coverImage,
    };

    if (id) {
      await fetch(`/api/admin/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/admin/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }

    router.push("/admin/blogs");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* TITLE */}
      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Blog Title"
        className="w-full p-3 rounded-xl outline-none"
        style={inputStyle}
      />

      {/* COVER IMAGE */}
      <input
        value={coverImage}
        onChange={(e) =>
          setCoverImage(e.target.value)
        }
        placeholder="Cover Image URL"
        className="w-full p-3 rounded-xl outline-none"
        style={inputStyle}
      />

      {/* SLUG */}
      <input
        value={slug}
        onChange={(e) =>
          setSlug(e.target.value)
        }
        placeholder="Slug (e.g. my-first-blog)"
        className="w-full p-3 rounded-xl outline-none"
        style={inputStyle}
      />

      {/* EXCERPT */}
      <textarea
        value={excerpt}
        onChange={(e) =>
          setExcerpt(e.target.value)
        }
        placeholder="Short description / excerpt"
        className="w-full p-3 rounded-xl outline-none min-h-[120px]"
        style={inputStyle}
      />

      {/* CONTENT (MD EDITOR) */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          border:
            "1px solid var(--border-color)",
        }}
      >
        <div data-color-mode="dark">
          <MDEditor
            value={content}
            onChange={(value) =>
              setContent(value || "")
            }
            height={500}
          />
        </div>
      </div>

      {/* STATUS */}
      <div>
        <label
          className="block mb-2 font-medium"
          style={{
            color: "var(--text-muted)",
          }}
        >
          Status
        </label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="w-full p-3 rounded-xl outline-none"
          style={inputStyle}
        >
          <option value="draft">
            Draft
          </option>
          <option value="published">
            Published
          </option>
        </select>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: "var(--hero-gradient)",
          color: "#fff",
          boxShadow: "var(--shadow-glow)",
        }}
      >
        Save Blog
      </button>
    </form>
  );
}