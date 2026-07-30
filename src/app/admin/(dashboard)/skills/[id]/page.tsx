"use client";

import { useState } from "react";

export default function NewSkill() {
  const [form, setForm] = useState({
    name: "",
    category: "Frontend",
    level: 50,
    icon: "",
  });

  const submit = async () => {
    await fetch("/api/admin/skills", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Skill Created!");
  };

  return (
    <div className="p-4 space-y-2">
      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      >
        <option>Frontend</option>
        <option>Backend</option>
        <option>Database</option>
        <option>DevOps</option>
        <option>Tools</option>
      </select>

      <input
        type="number"
        placeholder="Level (0-100)"
        onChange={(e) =>
          setForm({ ...form, level: Number(e.target.value) })
        }
      />

      <input
        placeholder="Icon (optional)"
        onChange={(e) =>
          setForm({ ...form, icon: e.target.value })
        }
      />

      <button onClick={submit}>
        Create Skill
      </button>
    </div>
  );
}