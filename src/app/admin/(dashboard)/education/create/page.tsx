"use client";

import { useState } from "react";

export default function NewEducation() {
    const [form, setForm] = useState({
        institute: "",
        degree: "",
        field: "",
        startYear: "",
        endYear: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);

    const submit = async () => {
        try {
            setLoading(true);

            await fetch("/api/education", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            alert("Education Added!");
        } catch {
            alert("Failed to add education");
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
                    Add Education
                </h1>

                <p style={{ color: "var(--text-muted)" }}>
                    Add your academic qualification details.
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
                    placeholder="Institute"
                    value={form.institute}
                    onChange={(e: any) =>
                        setForm({
                            ...form,
                            institute: e.target.value,
                        })
                    }
                />

                <Input
                    placeholder="Degree (e.g. BSc, Diploma)"
                    value={form.degree}
                    onChange={(e: any) =>
                        setForm({
                            ...form,
                            degree: e.target.value,
                        })
                    }
                />

                <Input
                    placeholder="Field of Study"
                    value={form.field}
                    onChange={(e: any) =>
                        setForm({
                            ...form,
                            field: e.target.value,
                        })
                    }
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                        placeholder="Start Year"
                        value={form.startYear}
                        onChange={(e: any) =>
                            setForm({
                                ...form,
                                startYear: e.target.value,
                            })
                        }
                    />

                    <Input
                        placeholder="End Year (or Present)"
                        value={form.endYear}
                        onChange={(e: any) =>
                            setForm({
                                ...form,
                                endYear: e.target.value,
                            })
                        }
                    />
                </div>

                <Textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={(e: any) =>
                        setForm({
                            ...form,
                            description: e.target.value,
                        })
                    }
                />

                {/* SUBMIT */}
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
                        ? "Saving..."
                        : "Create Education"}
                </button>
            </div>
        </div>
    );
}

const inputStyle = {
    background: "var(--section-bg)",
    border: "1px solid var(--border-color)",
    color: "var(--text-color)",
};