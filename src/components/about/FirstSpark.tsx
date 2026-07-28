"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function FirstSpark() {
    return (
        <section className="min-h-screen flex items-center py-32">

            <div className="max-w-5xl mx-auto w-full px-6">

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[0.35em] text-sm text-[var(--accent-primary)]"
                >
                    Level 1
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="text-5xl md:text-6xl font-black mt-4"
                >
                    The First Spark
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                    viewport={{ once: true }}
                    className="mt-8 text-xl max-w-3xl text-[var(--text-muted)] leading-9"
                >
                    Every journey starts with curiosity.
                    Mine started with a simple question:
                    <span className="text-[var(--accent-primary)] font-semibold">
                        {" "}How do computers actually work?
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .5 }}
                    className="
                        mt-20
                        rounded-3xl
                        border
                        border-[var(--border-color)]
                        bg-black
                        text-green-400
                        p-8
                        font-mono
                        shadow-2xl
                    "
                >
                    <p className="text-gray-500">
                        Microsoft Windows [Version 10.0]
                    </p>

                    <p className="text-gray-500">
                        (c) Microsoft Corporation.
                    </p>

                    <br />

                    <TypeAnimation
                        sequence={[
                            "C:\\> gcc hello.c",
                            1000,
                            "\nCompiling...",
                            800,
                            "\nBuild Successful.",
                            2000,
                        ]}
                        speed={70}
                        repeat={Infinity}
                        style={{
                            whiteSpace: "pre-line",
                            display: "block",
                        }}
                    />
                </motion.div>

            </div>

        </section>
    );
}