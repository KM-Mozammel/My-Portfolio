"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Skill = {
  id: string;
  name: string;
  category: string;
  level: string;
};

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/admin/skills");
      const data = await res.json();
      setSkills(data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteSkill = async (id: string) => {
    const ok = confirm("Delete this skill?");

    if (!ok) return;

    await fetch(`/api/admin/skills/${id}`, {
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
              background: "var(--hero-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
            }}
          >
            Manage your technical and professional skills.
          </p>
        </div>

        <Link
          href="/admin/skills/new"
          className="px-4 py-2 rounded-xl font-semibold transition hover:scale-[1.02]"
          style={{
            background: "var(--hero-gradient)",
            color: "#fff",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          + Add Skill
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
          <div
            style={{
              color: "var(--text-muted)",
            }}
          >
            Loading skills...
          </div>
        )}

        {!loading && skills.length === 0 && (
          <div
            style={{
              color: "var(--text-muted)",
            }}
          >
            No skills found.
          </div>
        )}

        {skills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-xl p-4 flex justify-between items-center"
            style={{
              background: "var(--section-bg)",
              border:
                "1px solid var(--border-color)",
            }}
          >
            <div>
              <h2 className="font-semibold text-lg">
                {skill.name}
              </h2>

              <p
                style={{
                  color:
                    "var(--text-muted)",
                }}
              >
                {skill.category}
              </p>

              <p
                style={{
                  color:
                    "var(--text-muted)",
                }}
              >
                Level: {skill.level}
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/admin/skills/${skill.id}/edit`}
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
                  deleteSkill(skill.id)
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