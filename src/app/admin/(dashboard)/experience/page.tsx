"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Experience = {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string | null;
  description: string;
};

export default function ExperiencePage() {
  const [data, setData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/admin/experience");
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
      "Delete this experience record?"
    );

    if (!ok) return;

    await fetch(`/api/admin/experience/${id}`, {
      method: "DELETE",
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
              background:
                "var(--hero-gradient)",
              WebkitBackgroundClip:
                "text",
              WebkitTextFillColor:
                "transparent",
            }}
          >
            Experience
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
            }}
          >
            Manage your professional work
            experience and career history.
          </p>
        </div>

        <Link
          href="/admin/experience/create"
          className="px-4 py-2 rounded-xl font-semibold transition hover:scale-[1.02]"
          style={{
            background:
              "var(--hero-gradient)",
            color: "#fff",
            boxShadow:
              "var(--shadow-glow)",
          }}
        >
          + Add Experience
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
            Loading experience...
          </div>
        )}

        {!loading && data.length === 0 && (
          <div
            style={{
              color: "var(--text-muted)",
            }}
          >
            No experience records found.
          </div>
        )}

        {data.map((e) => (
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
            {/* TITLE */}
            <h2 className="font-semibold text-lg">
              {e.role} — {e.company}
            </h2>

            {/* LOCATION */}
            {e.location && (
              <p
                style={{
                  color: "var(--text-muted)",
                }}
              >
                📍 {e.location}
              </p>
            )}

            {/* DATE RANGE */}
            <p
              style={{
                color: "var(--text-muted)",
              }}
            >
              {e.startDate} →{" "}
              {e.endDate || "Present"}
            </p>

            {/* DESCRIPTION */}
            <p
              style={{
                color: "var(--text-color)",
              }}
            >
              {e.description}
            </p>

            {/* ACTIONS */}
            <div className="flex gap-2 pt-2">
              <Link
                href={`/admin/experience/${e.id}/edit`}
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