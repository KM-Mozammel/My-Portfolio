"use client";

import { useEffect, useState } from "react";

export default function EditTestimonial({ params }: any) {
  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/admin/testimonials/${params.id}`)
      .then((r) => r.json())
      .then(setForm);
  }, [params.id]);

  const update = async () => {
    await fetch(`/api/admin/testimonials/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(form),
    });

    alert("Updated!");
  };

  if (!form) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-2">
      <input
        value={form.name || ""}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        value={form.position || ""}
        onChange={(e) =>
          setForm({ ...form, position: e.target.value })
        }
      />

      <input
        value={form.company || ""}
        onChange={(e) =>
          setForm({ ...form, company: e.target.value })
        }
      />

      <input
        value={form.photo || ""}
        onChange={(e) =>
          setForm({ ...form, photo: e.target.value })
        }
      />

      <textarea
        value={form.message || ""}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
      />

      <input
        type="number"
        value={form.rating || 5}
        onChange={(e) =>
          setForm({
            ...form,
            rating: Number(e.target.value),
          })
        }
      />

      <label>
        <input
          type="checkbox"
          checked={form.featured || false}
          onChange={(e) =>
            setForm({
              ...form,
              featured: e.target.checked,
            })
          }
        />
        Featured
      </label>

      <button onClick={update}>
        Update
      </button>
    </div>
  );
}