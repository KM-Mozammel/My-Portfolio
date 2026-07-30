"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type ExperienceForm = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

export default function EditExperience() {
  const params = useParams<{ id: string }>();

  const [form, setForm] = useState<ExperienceForm | null>(null);

  useEffect(() => {
    fetch(`/api/admin/experience/${params.id}`)
      .then((r) => r.json())
      .then(setForm);
  }, [params.id]);

  const update = async () => {
    await fetch(`/api/admin/experience/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Updated!");
  };

  if (!form) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-2">
      <input
        value={form.company || ""}
        onChange={(e) =>
          setForm({ ...form, company: e.target.value })
        }
        placeholder="Company"
      />

      <input
        value={form.role || ""}
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
        placeholder="Role"
      />

      <input
        value={form.location || ""}
        onChange={(e) =>
          setForm({ ...form, location: e.target.value })
        }
        placeholder="Location"
      />

      <input
        type="date"
        value={form.startDate?.slice(0, 10) || ""}
        onChange={(e) =>
          setForm({
            ...form,
            startDate: e.target.value,
          })
        }
      />

      <input
        type="date"
        value={form.endDate?.slice(0, 10) || ""}
        onChange={(e) =>
          setForm({
            ...form,
            endDate: e.target.value || null,
          })
        }
      />

      <textarea
        value={form.description || ""}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
        placeholder="Description"
      />

      <button onClick={update}>
        Update
      </button>
    </div>
  );
}