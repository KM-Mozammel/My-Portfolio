"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function EducationPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/education");
      const json = await res.json();
      setData(json || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteItem = async (id: string) => {
    const ok = confirm(
      "Delete this education record?"
    );
    if (!ok) return;

    await fetch(
      `/api/admin/education/${id}`,
      {
        method: "DELETE",
      }
    );

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
              background:
                "var(--hero-gradient)",
              WebkitBackgroundClip:
                "text",
              WebkitTextFillColor:
                "transparent",
            }}
          >
            Education
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
            }}
          >
            Manage your academic background
            and qualifications.
          </p>
        </div>

        <Link
          href="/admin/education/create"
          className="px-4 py-2 rounded-xl font-semibold transition hover:scale-[1.02]"
          style={{
            background:
              "var(--hero-gradient)",
            color: "#fff",
            boxShadow:
              "var(--shadow-glow)",
          }}
        >
          + Add Education
        </Link>
      </div>

      {/* CONTENT CARD */}
      <div
        className="rounded-2xl p-6 space-y-4"
        style={{
          background: "var(--card-bg)",
          border:
            "1px solid var(--border-color)",
        }}
      >
        {loading && (
          <div
            style={{
              color: "var(--text-muted)",
            }}
          >
            Loading education...
          </div>
        )}

        {!loading && data.length === 0 && (
          <div
            style={{
              color: "var(--text-muted)",
            }}
          >
            No education records found.
          </div>
        )}

        {data.map((e: any) => (
          <div
            key={e.id}
            className="rounded-xl p-4 space-y-2"
            style={{
              background:
                "var(--section-bg)",
              border:
                "1px solid var(--border-color)",
            }}
          >
            <h2 className="font-semibold">
              {e.degree} — {e.institute}
            </h2>

            <p
              style={{
                color: "var(--text-muted)",
              }}
            >
              {e.field}
            </p>

            <p
              style={{
                color: "var(--text-muted)",
              }}
            >
              {e.startYear} →{" "}
              {e.endYear || "Present"}
            </p>

            <p
              style={{
                color: "var(--text-color)",
              }}
            >
              {e.description}
            </p>

            <div className="flex gap-2 pt-2">
              <Link
                href={`/admin/education/${e.id}/edit`}
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
                onClick={() =>
                  deleteItem(e.id)
                }
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