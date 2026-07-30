"use client";

import { useState } from "react";

export default function NewTestimonial() {
  const [form, setForm] = useState<any>({
    name: "",
    position: "",
    company: "",
    photo: "",
    message: "",
    rating: 5,
    featured: false,
  });

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);

      await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Testimonial Created!");
    } catch {
      alert("Failed to create testimonial");
    } finally {
      setLoading(false);
    }
  };

  const Input = (props: any) => (
    <input
      {...props}
      className="w-full p-3 rounded-xl outline-none"
      style={inputStyle}
    />
  );

  const Textarea = (props: any) => (
    <textarea
      {...props}
      className="w-full p-3 rounded-xl outline-none min-h-[120px]"
      style={inputStyle}
    />
  );

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
          Create Testimonial
        </h1>

        <p style={{ color: "var(--text-muted)" }}>
          Add a new client testimonial to your portfolio.
        </p>
      </div>

      {/* CARD */}
      <div
        className="rounded-2xl p-6 space-y-4"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e: any) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <Input
          placeholder="Position"
          value={form.position}
          onChange={(e: any) =>
            setForm({
              ...form,
              position: e.target.value,
            })
          }
        />

        <Input
          placeholder="Company"
          value={form.company}
          onChange={(e: any) =>
            setForm({
              ...form,
              company: e.target.value,
            })
          }
        />

        <Input
          placeholder="Photo URL"
          value={form.photo}
          onChange={(e: any) =>
            setForm({
              ...form,
              photo: e.target.value,
            })
          }
        />

        <Textarea
          placeholder="Message"
          value={form.message}
          onChange={(e: any) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
        />

        {/* Rating */}
        <div>
          <label
            className="block mb-2 font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            Rating (1-5)
          </label>

          <Input
            type="number"
            min={1}
            max={5}
            value={form.rating}
            onChange={(e: any) =>
              setForm({
                ...form,
                rating: Number(e.target.value),
              })
            }
          />
        </div>

        {/* Featured */}
        <label
          className="flex items-center gap-2"
          style={{ color: "var(--text-muted)" }}
        >
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e: any) =>
              setForm({
                ...form,
                featured: e.target.checked,
              })
            }
          />
          Featured
        </label>

        {/* SUBMIT */}
        <div className="pt-4">
          <button
            onClick={submit}
            disabled={loading}
            className="w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
            style={{
              background: "var(--hero-gradient)",
              color: "#fff",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            {loading
              ? "Creating..."
              : "Create Testimonial"}
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  background: "var(--section-bg)",
  border: "1px solid var(--border-color)",
  color: "var(--text-color)",
};