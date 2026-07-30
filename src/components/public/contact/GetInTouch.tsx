"use client";

import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        senderName: "",
        senderEmail: "",
        subject: "",
        body: "",
    });

    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        try {
            setLoading(true);

            await fetch("/api/public/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            alert("Message sent successfully!");

            setForm({
                senderName: "",
                senderEmail: "",
                subject: "",
                body: "",
            });
        } catch {
            alert("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="w-full p-4 md:py-8 sm:px-20 rounded-2xl space-y-4"
            style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
            }}
        >
            <h2
                className="text-2xl font-bold"
                style={{
                    background: "var(--hero-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Contact Me
            </h2>

            <Input
                placeholder="Your Name"
                value={form.senderName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, senderName: e.target.value })
                }
            />

            <Input
                placeholder="Your Email"
                value={form.senderEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, senderEmail: e.target.value })
                }
            />

            <Input
                placeholder="Subject (optional)"
                value={form.subject}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, subject: e.target.value })
                }
            />

            <textarea
                placeholder="Your Message"
                value={form.body}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setForm({ ...form, body: e.target.value })
                }
                className="w-full p-3 rounded-xl outline-none min-h-[140px]"
                style={inputStyle}
            />

            <button
                onClick={sendMessage}
                disabled={loading}
                className="w-full px-6 py-3 rounded-xl font-semibold transition-all hover:scale-[1.02] disabled:opacity-50"
                style={{
                    background: "var(--hero-gradient)",
                    color: "#fff",
                    boxShadow: "var(--shadow-glow)",
                }}
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
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

const inputStyle = {
    background: "var(--section-bg)",
    border: "1px solid var(--border-color)",
    color: "var(--text-color)",
};