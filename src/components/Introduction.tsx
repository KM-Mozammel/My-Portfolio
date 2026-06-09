'use client';

import ServicesAnimation from "./ServicesAnimation";
import AnimatedKnot from "./AnimatedKnot";
import Avatar from "./Avatar";
import SketchfabModel from "./SketchfabModel";
import { useEffect, useState } from "react";
import { url } from "inspector";

export default function Introduction() {
    const [hero, setHero] =
        useState<any>(null);

    useEffect(() => {
        fetch("/api/public/hero")
            .then((res) => res.json())
            .then(setHero);
    }, []);

    const data = hero || {
        greeting: "Hi, I'm",
        name: "Mozammel Khandakar",
        tagline: "Crafting innovative web & AI solutions.",
        animatedServices: ["Full-Stack Engineer API.NET Core, React, SQL Server", "Building scalable web applications", "Modern software architecture, Exploring AI"],
        roleTags: ["Full Stack Developer", "AI Enthusiast"],
        primaryButton: { text: "Hire Me", url: "mailto:mozammel@example.com" },
        secondaryButton: { text: "View My Work", url: "/portfolio" },
    };

    return (
        <div
            className="
                p-4 py-6 sm:px-20 sm:py-12
                transition-colors duration-300
                border-b
                border-[var(--border-color)]
            "
            style={{
                color: "var(--text-color)" // ✅ FORCE WHITE/THEME TEXT
            }}
        >
            {/* HERO TEXT */}
            <span className="text-lg sm:text-xl font-bold">
                {data.greeting} <br />
                <span className="text-3xl sm:text-4xl font-bold">
                    {data.name}
                </span>
                <span style={{ color: "var(--accent-primary)" }}>.</span>
            </span>

            {/* ANIMATION LINE */}
            <div className="flex flex-row items-center mt-2">
                <div className="w-1 h-7 bg-[var(--accent-secondary)] mr-2 mt-1" />
                <ServicesAnimation
                    services={
                        data.animatedServices || []
                    }
                />
            </div>

            {/* TAGLINE */}
            <span
                style={{
                    color: "var(--text-muted)" // ✅ prevent black text fallback
                }}
                className="block mt-2"
            >
                {data.tagline || "Crafting innovative web & AI solutions."}
            </span>

            {/* ROLE TAGS */}
            <div className="flex gap-3 mt-5 flex-wrap">
                {data.roleTags?.map(
                    (
                        tag: string,
                        index: number
                    ) => (
                        <span key={index} id={`role-tag-${index}`} className="border border-[var(--border-color)] px-3 py-1 rounded-md text-sm">
                            {tag}
                        </span>
                    )
                )}
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4 flex-wrap">
                <button
                    className="
                        px-5 py-2 rounded-md font-bold
                        bg-[var(--accent-primary)]
                        text-white  
                        hover:opacity-90
                        transition
                    "
                >
                    {data.primaryButton?.text || "Hire Me"}
                </button>

                <button
                    className="
                        px-5 py-2 rounded-md font-bold
                        border border-[var(--border-color)]
                        hover:bg-[var(--hover-bg)]
                        transition
                    "
                    style={{ color: "var(--text-color)" }}
                >
                    {data.secondaryButton?.text || "View My Work"}
                </button>
            </div>
        </div>
    );
}