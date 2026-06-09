"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EditSkill() {
  const params = useParams();
  const id = params.id as string;

  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/admin/skills/${id}`)
      .then((r) => r.json())
      .then(setForm);
  }, [id]);

  const update = async () => {
    await fetch(`/api/admin/skills/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  };

  if (!form) return <div>Loading...</div>;

  return (
    <div>
      <input
        value={form.name || ""}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <button onClick={update}>Update</button>
    </div>
  );
}