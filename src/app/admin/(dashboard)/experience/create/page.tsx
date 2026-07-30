"use client";

import { useState } from "react";

export default function NewExperience() {
  const [form, setForm] = useState({
    company: "",
    role: "",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);

      await fetch("/api/admin/experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Experience Added!");

      window.location.href =
        "/admin/experience";
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
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* HEADER */}
      <div>
        <h1
          className="text-4xl font-bold mb-2"
          style={{
            background: "var(--hero-gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor:
              "transparent",
          }}
        >
          Add Experience
        </h1>

        <p
          style={{
            color: "var(--text-muted)",
          }}
        >
          Create a new professional
          experience entry.
        </p>
      </div>

      {/* FORM CARD */}
      <div
        className="rounded-2xl p-6 space-y-5"
        style={{
          background: "var(--card-bg)",
          border:
            "1px solid var(--border-color)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="w-full p-3 rounded-xl outline-none"
            style={inputStyle}
            placeholder="Company Name"
            value={form.company}
            onChange={(e) =>
              setForm({
                ...form,
                company:
                  e.target.value,
              })
            }
          />

          <input
            className="w-full p-3 rounded-xl outline-none"
            style={inputStyle}
            placeholder="Role (e.g. Software Engineer)"
            value={form.role}
            onChange={(e) =>
              setForm({
                ...form,
                role: e.target.value,
              })
            }
          />

          <input
            className="w-full p-3 rounded-xl outline-none"
            style={inputStyle}
            placeholder="Location"
            value={form.location}
            onChange={(e) =>
              setForm({
                ...form,
                location:
                  e.target.value,
              })
            }
          />

          <div>
            <label
              className="block mb-2 text-sm"
              style={{
                color:
                  "var(--text-muted)",
              }}
            >
              Start Date
            </label>

            <input
              type="date"
              className="w-full p-3 rounded-xl outline-none"
              style={inputStyle}
              value={form.startDate}
              onChange={(e) =>
                setForm({
                  ...form,
                  startDate:
                    e.target
                      .value,
                })
              }
            />
          </div>

          <div>
            <label
              className="block mb-2 text-sm"
              style={{
                color:
                  "var(--text-muted)",
              }}
            >
              End Date
            </label>

            <input
              type="date"
              disabled={
                form.currentlyWorking
              }
              className="w-full p-3 rounded-xl outline-none disabled:opacity-50"
              style={inputStyle}
              value={form.endDate}
              onChange={(e) =>
                setForm({
                  ...form,
                  endDate:
                    e.target
                      .value,
                })
              }
            />
          </div>
        </div>

        {/* CURRENTLY WORKING */}
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={
              form.currentlyWorking
            }
            onChange={(e) =>
              setForm({
                ...form,
                currentlyWorking:
                  e.target.checked,
                endDate:
                  e.target.checked
                    ? ""
                    : form.endDate,
              })
            }
          />

          <span
            style={{
              color:
                "var(--text-color)",
            }}
          >
            Currently Working Here
          </span>
        </label>

        {/* DESCRIPTION */}
        <div>
          <label
            className="block mb-2 text-sm"
            style={{
              color:
                "var(--text-muted)",
            }}
          >
            Description
          </label>

          <textarea
            className="w-full p-3 rounded-xl outline-none min-h-[140px]"
            style={inputStyle}
            placeholder="Write responsibilities, achievements, technologies used..."
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description:
                  e.target.value,
              })
            }
          />
        </div>

        {/* SUBMIT */}
        <button
          onClick={submit}
          disabled={loading}
          className="w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
          style={{
            background:
              "var(--hero-gradient)",
            color: "#fff",
            boxShadow:
              "var(--shadow-glow)",
          }}
        >
          {loading
            ? "Saving..."
            : "Create Experience"}
        </button>
      </div>
    </div>
  );
}