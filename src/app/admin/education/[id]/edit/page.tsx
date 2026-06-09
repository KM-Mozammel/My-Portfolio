"use client";

import { useEffect, useState } from "react";

export default function EditEducation({ params }: any) {
  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/admin/education/${params.id}`)
      .then((r) => r.json())
      .then(setForm);
  }, [params.id]);

  const update = async () => {
    await fetch(`/api/admin/education/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(form),
    });

    alert("Updated!");
  };

  if (!form) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-2">
      <input
        value={form.institute || ""}
        onChange={(e) =>
          setForm({ ...form, institute: e.target.value })
        }
      />

      <input
        value={form.degree || ""}
        onChange={(e) =>
          setForm({ ...form, degree: e.target.value })
        }
      />

      <input
        value={form.field || ""}
        onChange={(e) =>
          setForm({ ...form, field: e.target.value })
        }
      />

      <input
        value={form.startYear || ""}
        onChange={(e) =>
          setForm({
            ...form,
            startYear: e.target.value,
          })
        }
      />

      <input
        value={form.endYear || ""}
        onChange={(e) =>
          setForm({
            ...form,
            endYear: e.target.value,
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
      />

      <button onClick={update}>
        Update
      </button>
    </div>
  );
}