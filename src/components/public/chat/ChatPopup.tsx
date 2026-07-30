// src/components/chat/ChatPopup.tsx
"use client";

import { useState } from "react";

export default function ChatPopup({
    onClose,
}: {
    onClose: () => void;
}) {
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setInput("");

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                text: userMsg,
            },
        ]);

        setLoading(true);

        try {
            const res = await fetch("/api/ai/chat", {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    message: userMsg,
                }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: data.reply,
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed bottom-20 right-6 w-96 h-[550px] rounded-2xl flex flex-col z-50 overflow-hidden"
            style={{
                background: "var(--card-bg)",
                border:
                    "1px solid var(--border-color)",
                boxShadow: "var(--shadow-glow)",
            }}
        >
            {/* HEADER */}
            <div
                className="flex justify-between items-center px-4 py-3"
                style={{
                    borderBottom:
                        "1px solid var(--border-color)",
                }}
            >
                <div>
                    <h2 className="font-semibold">
                        Ask About Mozammel
                    </h2>

                    <p
                        className="text-xs"
                        style={{
                            color:
                                "var(--text-muted)",
                        }}
                    >
                        AI Portfolio Assistant
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="text-lg transition hover:opacity-70"
                    style={{
                        color:
                            "var(--text-muted)",
                    }}
                >
                    ✕
                </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.length === 0 && (
                    <div
                        className="text-sm"
                        style={{
                            color:
                                "var(--text-muted)",
                        }}
                    >
                        Ask me about projects,
                        experience, skills, education,
                        or portfolio details.
                    </div>
                )}

                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex ${msg.role === "user"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                    >
                        <div
                            className="max-w-[80%] px-4 py-2 rounded-xl"
                            style={
                                msg.role === "user"
                                    ? {
                                        background:
                                            "var(--hero-gradient)",
                                        color: "#fff",
                                    }
                                    : {
                                        background:
                                            "var(--section-bg)",
                                        border:
                                            "1px solid var(--border-color)",
                                        color:
                                            "var(--text-color)",
                                    }
                            }
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div
                        className="text-sm"
                        style={{
                            color:
                                "var(--text-muted)",
                        }}
                    >
                        AI is typing...
                    </div>
                )}
            </div>

            {/* INPUT */}
            <div
                className="p-3"
                style={{
                    borderTop:
                        "1px solid var(--border-color)",
                }}
            >
                <div className="flex gap-2">
                    <input
                        value={input}
                        onChange={(e) =>
                            setInput(e.target.value)
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMessage();
                            }
                        }}
                        placeholder="Ask about projects, skills..."
                        className="flex-1 px-4 py-3 rounded-xl outline-none"
                        style={{
                            background:
                                "var(--section-bg)",
                            border:
                                "1px solid var(--border-color)",
                            color:
                                "var(--text-color)",
                        }}
                    />

                    <button
                        onClick={sendMessage}
                        disabled={loading}
                        className="px-5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                        style={{
                            background:
                                "var(--hero-gradient)",
                            color: "#fff",
                            boxShadow:
                                "var(--shadow-glow)",
                        }}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}