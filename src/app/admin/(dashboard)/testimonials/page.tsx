"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TestimonialsPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/testimonials");
      const json = await res.json();
      setData(json);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteItem = async (id: string) => {
    await fetch(`/api/admin/testimonials/${id}`, {
      method: "DELETE",
    });

    load();
  };

  const toggleFeatured = async (item: any) => {
    await fetch(`/api/admin/testimonials/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...item,
        featured: !item.featured,
      }),
    });

    load();
  };

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
            Testimonials
          </h1>

          <p style={{ color: "var(--text-muted)" }}>
            Manage client testimonials and reviews.
          </p>
        </div>

        <Link
          href="/admin/testimonials/create"
          className="px-4 py-2 rounded-xl font-semibold transition hover:scale-[1.02]"
          style={{
            background: "var(--hero-gradient)",
            color: "#fff",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          + Add Testimonial
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
            Loading testimonials...
          </div>
        )}

        {!loading && data.length === 0 && (
          <div style={{ color: "var(--text-muted)" }}>
            No testimonials found.
          </div>
        )}

        {data.map((t: any) => (
          <div
            key={t.id}
            className="rounded-xl p-4 space-y-3 transition"
            style={{
              background: "var(--section-bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            {/* HEADER */}
            <div className="flex justify-between">
              <h2 className="font-semibold">
                {t.name}{" "}
                <span style={{ color: "#fbbf24" }}>
                  ⭐ {t.rating}/5
                </span>
              </h2>

              {t.featured && (
                <span
                  className="text-xs px-2 py-1 rounded-md"
                  style={{
                    background:
                      "rgba(245,158,11,0.15)",
                    color: "#fbbf24",
                    border:
                      "1px solid rgba(245,158,11,0.3)",
                  }}
                >
                  Featured
                </span>
              )}
            </div>

            {/* INFO */}
            <p style={{ color: "var(--text-muted)" }}>
              {t.position} @ {t.company}
            </p>

            <p style={{ color: "var(--text-color)" }}>
              {t.message}
            </p>

            {/* PHOTO */}
            {t.photo && (
              <img
                src={t.photo}
                className="w-12 h-12 rounded-full border"
                style={{
                  borderColor:
                    "var(--border-color)",
                }}
              />
            )}

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Link
                href={`/admin/testimonials/${t.id}/edit`}
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
                onClick={() => deleteItem(t.id)}
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

              <button
                onClick={() => toggleFeatured(t)}
                className="px-3 py-1 rounded-lg text-sm"
                style={{
                  background:
                    "rgba(245,158,11,0.15)",
                  color: "#fbbf24",
                  border:
                    "1px solid rgba(245,158,11,0.3)",
                }}
              >
                {t.featured
                  ? "Unfeature"
                  : "Feature"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}