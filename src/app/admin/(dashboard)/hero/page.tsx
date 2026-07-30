"use client";

import { useEffect, useState } from "react";

export default function HeroAdminPage() {
    const [hero, setHero] = useState<any>(null);

    useEffect(() => {
        fetch("/api/public/hero")
            .then((res) => res.json())
            .then(setHero);
    }, []);

    if (!hero) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div
                    className="card px-8 py-5"
                    style={{
                        background: "var(--card-bg)",
                        border: "1px solid var(--border-color)",
                    }}
                >
                    Loading Hero Section...
                </div>
            </div>
        );
    }

    const save = async () => {
        await fetch("/api/admin/hero", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(hero),
        });

        alert("Hero updated successfully");
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Header */}
            <div className="mb-8">
                <h1
                    className="text-4xl font-bold mb-2"
                    style={{
                        background: "var(--hero-gradient)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Hero Section
                </h1>

                <p
                    style={{
                        color: "var(--text-muted)",
                    }}
                >
                    Manage your portfolio hero section content.
                </p>
            </div>

            {/* Form Card */}
            <div
                className="rounded-2xl p-6 space-y-6"
                style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                }}
            >
                {/* Greeting */}
                <div>
                    <label className="block mb-2 font-medium">
                        Greeting
                    </label>

                    <input
                        className="w-full p-3 rounded-xl outline-none"
                        style={inputStyle}
                        value={hero.greeting}
                        onChange={(e) =>
                            setHero({
                                ...hero,
                                greeting: e.target.value,
                            })
                        }
                        placeholder="Hi, I'm"
                    />
                </div>

                {/* Name */}
                <div>
                    <label className="block mb-2 font-medium">
                        Name
                    </label>

                    <input
                        className="w-full p-3 rounded-xl outline-none"
                        style={inputStyle}
                        value={hero.name}
                        onChange={(e) =>
                            setHero({
                                ...hero,
                                name: e.target.value,
                            })
                        }
                        placeholder="Your Name"
                    />
                </div>

                {/* Tagline */}
                <div>
                    <label className="block mb-2 font-medium">
                        Tagline
                    </label>

                    <textarea
                        className="w-full p-3 rounded-xl outline-none min-h-[120px]"
                        style={inputStyle}
                        value={hero.tagline}
                        onChange={(e) =>
                            setHero({
                                ...hero,
                                tagline: e.target.value,
                            })
                        }
                        placeholder="Write your tagline..."
                    />
                </div>

                {/* Animated Services */}
                <div>
                    <label className="block mb-2 font-medium">
                        Animated Services
                    </label>

                    <textarea
                        rows={6}
                        className="w-full p-3 rounded-xl outline-none"
                        style={inputStyle}
                        value={
                            hero.animatedServices?.join("\n") || ""
                        }
                        onChange={(e) =>
                            setHero({
                                ...hero,
                                animatedServices: e.target.value
                                    .split("\n")
                                    .filter(Boolean),
                            })
                        }
                    />

                    <p
                        className="mt-2 text-sm"
                        style={{
                            color: "var(--text-muted)",
                        }}
                    >
                        One service per line.
                    </p>
                </div>

                {/* Tags */}
                <div>
                    <label className="block mb-2 font-medium">
                        Role Tags
                    </label>

                    <textarea
                        rows={4}
                        className="w-full p-3 rounded-xl outline-none"
                        style={inputStyle}
                        value={
                            hero.roleTags?.join("\n") || ""
                        }
                        onChange={(e) =>
                            setHero({
                                ...hero,
                                roleTags: e.target.value
                                    .split("\n")
                                    .filter(Boolean),
                            })
                        }
                    />

                    <p
                        className="mt-2 text-sm"
                        style={{
                            color: "var(--text-muted)",
                        }}
                    >
                        One tag per line.
                    </p>
                </div>

                {/* Primary Button */}
                <div
                    className="p-5 rounded-xl"
                    style={{
                        background: "var(--section-bg)",
                        border:
                            "1px solid var(--border-color)",
                    }}
                >
                    <h3 className="font-semibold mb-4">
                        Primary Button
                    </h3>

                    <div className="space-y-3">
                        <input
                            className="w-full p-3 rounded-xl"
                            style={inputStyle}
                            value={hero.primaryButton?.text}
                            onChange={(e) =>
                                setHero({
                                    ...hero,
                                    primaryButton: {
                                        ...hero.primaryButton,
                                        text: e.target.value,
                                    },
                                })
                            }
                            placeholder="Button Text"
                        />

                        <input
                            className="w-full p-3 rounded-xl"
                            style={inputStyle}
                            value={hero.primaryButton?.url}
                            onChange={(e) =>
                                setHero({
                                    ...hero,
                                    primaryButton: {
                                        ...hero.primaryButton,
                                        url: e.target.value,
                                    },
                                })
                            }
                            placeholder="Button URL"
                        />
                    </div>
                </div>

                {/* Secondary Button */}
                <div
                    className="p-5 rounded-xl"
                    style={{
                        background: "var(--section-bg)",
                        border:
                            "1px solid var(--border-color)",
                    }}
                >
                    <h3 className="font-semibold mb-4">
                        Secondary Button
                    </h3>

                    <div className="space-y-3">
                        <input
                            className="w-full p-3 rounded-xl"
                            style={inputStyle}
                            value={hero.secondaryButton?.text}
                            onChange={(e) =>
                                setHero({
                                    ...hero,
                                    secondaryButton: {
                                        ...hero.secondaryButton,
                                        text: e.target.value,
                                    },
                                })
                            }
                            placeholder="Button Text"
                        />

                        <input
                            className="w-full p-3 rounded-xl"
                            style={inputStyle}
                            value={hero.secondaryButton?.url}
                            onChange={(e) =>
                                setHero({
                                    ...hero,
                                    secondaryButton: {
                                        ...hero.secondaryButton,
                                        url: e.target.value,
                                    },
                                })
                            }
                            placeholder="Button URL"
                        />
                    </div>
                </div>

                {/* Save Button */}
                <div className="pt-4">
                    <button
                        onClick={save}
                        className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            background:
                                "var(--hero-gradient)",
                            color: "#fff",
                            boxShadow:
                                "var(--shadow-glow)",
                        }}
                    >
                        Save Hero Section
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