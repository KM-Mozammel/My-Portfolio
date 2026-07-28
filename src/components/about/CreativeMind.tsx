"use client";

import { motion } from "framer-motion";
import {
    FaMusic,
    FaGuitar,
    FaHeadphones,
} from "react-icons/fa";

export default function CreativeMind() {
    return (
        <section
            className="
                relative
                py-32
                overflow-hidden
            "
        >

            {/* Background Glow */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-purple-900/10
                    via-pink-900/10
                    to-orange-900/10
                "
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >

                    <p className="uppercase tracking-[0.35em] text-[var(--accent-primary)]">
                        Level 3
                    </p>

                    <h2 className="text-5xl md:text-6xl font-black mt-4">
                        The Creative Mind
                    </h2>

                    <p className="mt-8 text-xl max-w-3xl mx-auto leading-9 text-[var(--text-muted)]">
                        Engineering taught me to think logically.
                        Music taught me to think creatively.
                        Together they shaped how I approach building software.
                    </p>

                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mt-24">

                    <Card
                        icon={<FaGuitar />}
                        title="Instruments"
                        text="I enjoy playing guitar, ukulele, and tanpura. Learning music strengthened patience, discipline, and the ability to recognize patterns."
                    />

                    <Card
                        icon={<FaMusic />}
                        title="Composition"
                        text="I compose music and experiment with melodies, harmonies, and arrangements. Creating music has become another form of problem solving."
                    />

                    <Card
                        icon={<FaHeadphones />}
                        title="Production"
                        text="Using FL Studio, I explore recording, mixing, and sound design. Attention to detail in music production influences how I design software."
                    />

                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                    viewport={{ once: true }}
                    className="
                        mt-20
                        rounded-3xl
                        border
                        border-[var(--border-color)]
                        p-10
                        bg-[var(--card-bg)]
                        text-center
                    "
                >
                    <p className="text-2xl leading-10 italic">
                        "Creativity isn't separate from engineering.
                        It's what allows engineering to become meaningful."
                    </p>
                </motion.div>

            </div>

        </section>
    );
}

function Card({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            className="
                rounded-3xl
                border
                border-[var(--border-color)]
                p-8
                bg-[var(--card-bg)]
                text-center
            "
        >
            <div className="text-5xl text-[var(--accent-primary)] flex justify-center">
                {icon}
            </div>

            <h3 className="text-2xl font-bold mt-6">
                {title}
            </h3>

            <p className="mt-4 leading-8 text-[var(--text-muted)]">
                {text}
            </p>
        </motion.div>
    );
}