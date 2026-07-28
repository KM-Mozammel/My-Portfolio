"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobs = [
    {
        size: 320,
        left: "12%",
        top: "18%",
        color: "#6366F1",
        duration: 22,
    },
    {
        size: 380,
        left: "70%",
        top: "65%",
        color: "#06B6D4",
        duration: 28,
    },
];

export default function AnimatedBackground() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

            {/* Background */}

            <div className="absolute inset-0 bg-[var(--background-color)]" />

            {/* Gradient blobs */}

            {blobs.map((blob, index) => (
                <motion.div
                    key={index}
                    animate={
                        reduceMotion
                            ? undefined
                            : {
                                  x: [-20, 20, -20],
                                  y: [-10, 20, -10],
                              }
                    }
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        width: blob.size,
                        height: blob.size,
                        left: blob.left,
                        top: blob.top,
                        background: blob.color,
                    }}
                    className="
                        absolute
                        rounded-full
                        opacity-15
                        blur-3xl
                        will-change-transform
                    "
                />
            ))}

            {/* Center Glow */}

            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[700px]
                    h-[700px]
                    rounded-full
                    bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)]
                "
            />

            {/* Grid */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.025]
                    bg-[linear-gradient(var(--border-color)_1px,transparent_1px),linear-gradient(90deg,var(--border-color)_1px,transparent_1px)]
                    bg-[size:60px_60px]
                "
            />
        </div>
    );
}