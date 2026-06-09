"use client";

import { useEffect, useState } from "react";

export default function ContactsPage() {
  const [form, setForm] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/admin/contacts")
      .then((r) => r.json())
      .then((data) => setForm(data[0]));
  }, []);

  const update = async () => {
    try {
      setLoading(true);

      await fetch("/api/admin/contacts/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Contacts Updated!");
    } catch (err) {
      alert("Failed to update contacts");
    } finally {
      setLoading(false);
    }
  };

  if (!form) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div
          className="px-6 py-4 rounded-xl"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border-color)",
            color: "var(--text-muted)",
          }}
        >
          Loading contacts...
        </div>
      </div>
    );
  }

  const Input = (props: any) => (
    <input
      {...props}
      className="w-full p-3 rounded-xl outline-none"
      style={inputStyle}
    />
  );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
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
          Contact Settings
        </h1>

        <p style={{ color: "var(--text-muted)" }}>
          Manage your public contact and social links.
        </p>
      </div>

      {/* CARD */}
      <div
        className="rounded-2xl p-6 space-y-8"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        {/* BASIC CONTACT */}
        <section>
          <h2 className="text-lg font-semibold mb-4">
            Basic Contact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              value={form.email || ""}
              onChange={(e: any) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              placeholder="Email"
            />

            <Input
              value={form.phone || ""}
              onChange={(e: any) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              placeholder="Phone"
            />

            <Input
              className="md:col-span-2"
              value={form.location || ""}
              onChange={(e: any) =>
                setForm({
                  ...form,
                  location: e.target.value,
                })
              }
              placeholder="Location"
            />

            <Input
              className="md:col-span-2"
              value={form.website || ""}
              onChange={(e: any) =>
                setForm({
                  ...form,
                  website: e.target.value,
                })
              }
              placeholder="Website"
            />
          </div>
        </section>

        {/* SOCIAL LINKS */}
        <section>
          <h2 className="text-lg font-semibold mb-4">
            Social Links
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              value={form.github || ""}
              onChange={(e: any) =>
                setForm({
                  ...form,
                  github: e.target.value,
                })
              }
              placeholder="GitHub"
            />

            <Input
              value={form.linkedin || ""}
              onChange={(e: any) =>
                setForm({
                  ...form,
                  linkedin: e.target.value,
                })
              }
              placeholder="LinkedIn"
            />

            <Input
              value={form.facebook || ""}
              onChange={(e: any) =>
                setForm({
                  ...form,
                  facebook: e.target.value,
                })
              }
              placeholder="Facebook"
            />

            <Input
              value={form.twitter || ""}
              onChange={(e: any) =>
                setForm({
                  ...form,
                  twitter: e.target.value,
                })
              }
              placeholder="Twitter"
            />
          </div>
        </section>

        {/* SAVE */}
        <div className="pt-4 flex justify-end">
          <button
            onClick={update}
            disabled={loading}
            className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
            style={{
              background: "var(--hero-gradient)",
              color: "#fff",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            {loading ? "Saving..." : "Save Contacts"}
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