'use client';

import ServicesAnimation from "../ServicesAnimation";
import { useEffect, useState } from "react";
import { url } from "inspector";
import { introductionData } from "./introductionData";

export default function Introduction() {
    const [hero, setHero] = useState<any>(introductionData);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const res = await fetch("/api/public/hero");
                if (!res.ok) throw new Error("API request failed");

                const data = await res.json();
                if (data && data.name) {
                    setHero(data);
                }
            } catch (error) {
                console.error("Falling back to local introductionData:", error);
                setHero(introductionData);
            }
        };

        fetchHero();
    }, []);

    return (
        <div
            className="relative w-full"
            style={{
                backgroundImage: 'url("/img/person2.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: "rgba(0, 0, 0, 0.55)",
                }}
            />

            {/* Content */}
            <div
                className="
                    relative z-10
                    p-4 py-6 sm:px-20 sm:py-12
                    transition-colors duration-300
                    border-b
                    border-[var(--border-color)]
                "
                style={{
                    color: "var(--text-color)"
                }}
            >
                {/* HERO TEXT */}
                <span className="text-lg sm:text-xl font-bold">
                    {hero.greeting} <br />
                    <span className="text-3xl sm:text-4xl font-bold">
                        {hero.name}
                    </span>
                    <span style={{ color: "var(--accent-primary)" }}>.</span>
                </span>

                {/* ANIMATION LINE */}
                <div className="flex flex-row items-center mt-2">
                    <div className="w-1 h-7 bg-[var(--accent-secondary)] mr-2 mt-1" />
                    <ServicesAnimation
                        services={
                            hero.animatedServices || []
                        }
                    />
                </div>

                {/* TAGLINE */}
                <span
                    style={{
                        color: "var(--text-muted)"
                    }}
                    className="block mt-2"
                >
                    {hero.tagline || "Crafting innovative web & AI solutions."}
                </span>

                {/* ROLE TAGS */}
                <div className="flex gap-3 mt-5 flex-wrap">
                    {hero.roleTags?.map(
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
                        {hero.primaryButton?.text || "Hire Me"}
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
                        {hero.secondaryButton?.text || "View My Work"}
                    </button>
                </div>
            </div>
        </div>
    );
}