"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();
      setMessages(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const updateMessage = async (msg: any, payload: any) => {
    await fetch(`/api/admin/messages/${msg.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...msg,
        ...payload,
      }),
    });

    load();
  };

  const markRead = (msg: any) =>
    updateMessage(msg, { isRead: true, status: "READ" });

  const archive = (msg: any) =>
    updateMessage(msg, { status: "ARCHIVED" });

  const remove = async (id: string) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: "DELETE",
    });

    load();
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
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
          Messages Inbox
        </h1>

        <p style={{ color: "var(--text-muted)" }}>
          Manage incoming contact messages from visitors.
        </p>
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
          <div style={{ color: "var(--text-muted)" }}>
            Loading messages...
          </div>
        )}

        {!loading && messages.length === 0 && (
          <div style={{ color: "var(--text-muted)" }}>
            No messages found.
          </div>
        )}

        {messages.map((m: any) => (
          <div
            key={m.id}
            className="rounded-xl p-4 space-y-2 transition-all"
            style={{
              background: m.isRead
                ? "var(--section-bg)"
                : "rgba(255,255,255,0.03)",
              border: "1px solid var(--border-color)",
            }}
          >
            {/* HEADER ROW */}
            <div className="flex justify-between gap-4">
              <h2 className="font-semibold">
                {m.name} — {m.subject}
              </h2>

              <span
                className="text-xs px-2 py-1 rounded-md"
                style={{
                  background:
                    m.status === "READ"
                      ? "rgba(34,197,94,0.15)"
                      : m.status === "ARCHIVED"
                        ? "rgba(156,163,175,0.15)"
                        : "rgba(59,130,246,0.15)",
                  color:
                    m.status === "READ"
                      ? "#22c55e"
                      : m.status === "ARCHIVED"
                        ? "#9ca3af"
                        : "#3b82f6",
                }}
              >
                {m.status}
              </span>
            </div>

            {/* META */}
            <div style={{ color: "var(--text-muted)" }}>
              {m.email}
            </div>

            {/* MESSAGE */}
            <p style={{ color: "var(--text-color)" }}>
              {m.message}
            </p>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => markRead(m)}
                className="px-3 py-1 rounded-lg text-sm transition"
                style={{
                  background:
                    "rgba(34,197,94,0.15)",
                  color: "#22c55e",
                  border:
                    "1px solid rgba(34,197,94,0.3)",
                }}
              >
                Mark Read
              </button>

              <button
                onClick={() => archive(m)}
                className="px-3 py-1 rounded-lg text-sm transition"
                style={{
                  background:
                    "rgba(156,163,175,0.15)",
                  color: "#9ca3af",
                  border:
                    "1px solid rgba(156,163,175,0.3)",
                }}
              >
                Archive
              </button>

              <Link
                href={`/admin/messages/${m.id}`}
                className="px-3 py-1 rounded-lg text-sm transition"
                style={{
                  background:
                    "rgba(59,130,246,0.15)",
                  color: "#3b82f6",
                  border:
                    "1px solid rgba(59,130,246,0.3)",
                }}
              >
                View
              </Link>

              <button
                onClick={() => remove(m.id)}
                className="px-3 py-1 rounded-lg text-sm transition"
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