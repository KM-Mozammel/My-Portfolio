"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewSkill() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "Frontend",
    level: 50,
    icon: "",
  });

  const submit = async () => {
    try {
      setLoading(true);

      await fetch("/api/admin/skills", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Skill Created!");

      router.push("/admin/skills");
    } catch {
      alert("Failed to create skill");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: "var(--section-bg)",
    border: "1px solid var(--border-color)",
    color: "var(--text-color)",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* HEADER */}
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
          Create New Skill
        </h1>

        <p
          style={{
            color:
              "var(--text-muted)",
          }}
        >
          Add a new skill to your
          portfolio.
        </p>
      </div>

      {/* CARD */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "var(--card-bg)",
          border:
            "1px solid var(--border-color)",
        }}
      >
        {/* BODY */}
        <div className="p-6 space-y-6">
          {/* NAME */}
          <div>
            <label className="block mb-2 font-medium">
              Skill Name
            </label>

            <input
              type="text"
              placeholder="React.js"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target
                    .value,
                })
              }
              className="w-full p-3 rounded-xl outline-none"
              style={inputStyle}
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category:
                    e.target
                      .value,
                })
              }
              className="w-full p-3 rounded-xl outline-none"
              style={inputStyle}
            >
              <option>
                Frontend
              </option>
              <option>
                Backend
              </option>
              <option>
                Database
              </option>
              <option>DevOps</option>
              <option>Tools</option>
            </select>
          </div>

          {/* LEVEL */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">
                Skill Level
              </label>

              <span className="font-semibold">
                {form.level}%
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={form.level}
              onChange={(e) =>
                setForm({
                  ...form,
                  level: Number(
                    e.target
                      .value
                  ),
                })
              }
              className="w-full"
            />

            <div
              className="w-full h-2 rounded-full mt-3 overflow-hidden"
              style={{
                background:
                  "var(--border-color)",
              }}
            >
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${form.level}%`,
                  background:
                    "var(--hero-gradient)",
                }}
              />
            </div>
          </div>

          {/* ICON */}
          <div>
            <label className="block mb-2 font-medium">
              Icon
            </label>

            <input
              type="text"
              placeholder="SiReact"
              value={form.icon}
              onChange={(e) =>
                setForm({
                  ...form,
                  icon: e.target
                    .value,
                })
              }
              className="w-full p-3 rounded-xl outline-none"
              style={inputStyle}
            />

            <p
              className="text-sm mt-2"
              style={{
                color:
                  "var(--text-muted)",
              }}
            >
              Example: SiReact,
              FaNodeJs,
              TbBrandNextjs
            </p>
          </div>

          {/* PREVIEW */}
          <div
            className="rounded-xl p-5"
            style={{
              background:
                "var(--section-bg)",
              border:
                "1px solid var(--border-color)",
            }}
          >
            <h3 className="font-semibold mb-4">
              Preview
            </h3>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">
                  {form.name ||
                    "Skill Name"}
                </p>

                <p
                  style={{
                    color:
                      "var(--text-muted)",
                  }}
                >
                  {
                    form.category
                  }
                </p>
              </div>

              <span className="font-bold">
                {form.level}%
              </span>
            </div>

            <div
              className="w-full h-2 rounded-full mt-4 overflow-hidden"
              style={{
                background:
                  "var(--border-color)",
              }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${form.level}%`,
                  background:
                    "var(--hero-gradient)",
                }}
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="px-6 py-4 flex justify-end gap-3"
          style={{
            borderTop:
              "1px solid var(--border-color)",
          }}
        >
          <button
            type="button"
            onClick={() =>
              router.push(
                "/admin/skills"
              )
            }
            className="px-5 py-2 rounded-xl"
            style={{
              background:
                "var(--section-bg)",
              border:
                "1px solid var(--border-color)",
              color:
                "var(--text-color)",
            }}
          >
            Cancel
          </button>

          <button
            onClick={submit}
            disabled={loading}
            className="px-5 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
            style={{
              background:
                "var(--hero-gradient)",
              color: "#fff",
              boxShadow:
                "var(--shadow-glow)",
            }}
          >
            {loading
              ? "Creating..."
              : "Create Skill"}
          </button>
        </div>
      </div>
    </div>
  );
}