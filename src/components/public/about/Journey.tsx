"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        year: "1998",
        title: "The Beginning",
        description:
            "Born in Tangail, Bangladesh. A curious child who always wanted to understand how things worked.",
    },
    {
        year: "2013",
        title: "My First Line of Code",
        description:
            "Discovered programming through the C language. It completely changed how I looked at problem solving.",
    },
    {
        year: "2015 - 2019",
        title: "Diploma in Computer Engineering",
        description:
            "Studied computer engineering while learning HTML, CSS, JavaScript, PHP, MySQL and software development beyond the classroom.",
    },
    {
        year: "2019",
        title: "Professional Development",
        description:
            "Started building real-world software, learning Laravel, ASP.NET Core and modern full-stack development.",
    },
    {
        year: "2024+",
        title: "Full Stack Software Engineer",
        description:
            "Focused on scalable backend systems, React, Angular, Blazor, SignalR and WebRTC while continuously exploring new technologies.",
    },
    {
        year: "Today",
        title: "Applied AI Journey",
        description:
            "Learning AI Engineering, RAG, MCP, LLM applications, Unity and high-performance software engineering.",
    },
];

export default function Journey() {
    return (
        <section className="py-32">

            <div className="max-w-5xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-center text-5xl font-bold mb-24"
                >
                    My Journey
                </motion.h2>

                <div className="relative">

                    {/* Vertical Line */}

                    <div
                        className="
                            absolute
                            left-6
                            top-0
                            bottom-0
                            w-[3px]
                            bg-[var(--border-color)]
                        "
                    />

                    {timeline.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: -60
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{
                                once: true,
                                amount: .4
                            }}
                            transition={{
                                duration: .7,
                                delay: index * .15
                            }}
                            className="relative flex gap-8 mb-20"
                        >

                            {/* Circle */}

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-[var(--accent-primary)]
                                    border-4
                                    border-[var(--background)]
                                    z-10
                                    shrink-0
                                "
                            />

                            {/* Card */}

                            <div
                                className="
                                    bg-[var(--card-bg)]
                                    border
                                    border-[var(--border-color)]
                                    rounded-2xl
                                    p-8
                                    flex-1
                                    shadow-xl
                                    hover:scale-[1.02]
                                    transition-all
                                    duration-300
                                "
                            >

                                <p className="text-sm text-[var(--accent-primary)] font-semibold">
                                    {item.year}
                                </p>

                                <h3 className="text-2xl font-bold mt-2">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-[var(--text-muted)] leading-8">
                                    {item.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}