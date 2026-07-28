"use client";

import { motion } from "framer-motion";
import {
    FaCode,
    FaMusic,
    FaBriefcase,
    FaRobot,
} from "react-icons/fa";

const turningPoints = [
    {
        icon: FaCode,
        title: "Discovering Programming",
        year: "2013",
        description:
            "Programming introduced me to a completely new way of thinking. Writing my first C program sparked a lifelong passion for solving problems through software.",
    },
    {
        icon: FaMusic,
        title: "Creativity Through Music",
        year: "2016+",
        description:
            "Alongside engineering, music became another language for expressing ideas. Learning instruments and producing music strengthened my creativity, patience, and attention to detail.",
    },
    {
        icon: FaBriefcase,
        title: "Building Real Products",
        year: "2019+",
        description:
            "From internships to enterprise software, I began building applications used by real users—transforming theory into practical engineering experience.",
    },
    {
        icon: FaRobot,
        title: "The Next Chapter",
        year: "Today",
        description:
            "I'm combining my software engineering background with Applied AI, RAG systems, real-time communication, game development, and high-performance computing.",
    },
];

export default function TurningPoints() {
    return (
        <section className="py-32">

            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="uppercase tracking-[0.3em] text-sm text-[var(--accent-primary)]">
                        Turning Points
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        Every Journey Has Moments That Change Everything
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-[var(--text-muted)]">
                        Looking back, a few key moments shaped not only my career
                        but also the way I think, create, and solve problems.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 mt-20">

                    {turningPoints.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 60
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true,
                                    amount: .3
                                }}
                                transition={{
                                    delay: index * .15,
                                    duration: .6
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02
                                }}
                                className="
                                    border
                                    border-[var(--border-color)]
                                    rounded-3xl
                                    p-10
                                    bg-[var(--card-bg)]
                                    shadow-xl
                                    cursor-default
                                "
                            >

                                <div
                                    className="
                                        w-16
                                        h-16
                                        rounded-full
                                        bg-[var(--accent-primary)]
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        text-2xl
                                    "
                                >
                                    <Icon />
                                </div>

                                <p className="mt-8 text-sm text-[var(--accent-primary)] font-semibold">
                                    {item.year}
                                </p>

                                <h3 className="mt-2 text-3xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-5 leading-8 text-[var(--text-muted)]">
                                    {item.description}
                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}