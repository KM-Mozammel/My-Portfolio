"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

            {/* Background */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-[var(--background)]
                    via-[var(--background-secondary)]
                    to-[var(--background)]
                "
            />

            {/* Decorative Glow */}
            <div
                className="
                    absolute
                    w-[600px]
                    h-[600px]
                    rounded-full
                    blur-[140px]
                    opacity-30
                    bg-[var(--accent-primary)]
                "
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
                className="relative z-10 text-center max-w-4xl px-6"
            >
                <p className="uppercase tracking-[0.4em] text-sm text-[var(--accent-primary)]">
                    My Story
                </p>

                <h1 className="mt-6 text-6xl md:text-8xl font-black leading-none">
                    Every Line of Code
                    <br />
                    Has a Story.
                </h1>

                <p className="mt-10 text-xl leading-9 text-[var(--text-muted)]">
                    I'm <strong>Mozammel Khandakar</strong>,
                    a Software Engineer driven by curiosity,
                    creativity, and an endless desire to understand
                    how things work.
                </p>

                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.8,
                    }}
                    className="mt-24"
                >
                    <p className="text-sm uppercase tracking-[0.3em]">
                        Scroll to Begin
                    </p>

                    <div className="text-4xl mt-3">
                        ↓
                    </div>
                </motion.div>
            </motion.div>

        </section>
    );
}