"use client";

import { motion } from "framer-motion";
import {
    FaComments,
    FaUtensils,
    FaRobot,
    FaGamepad,
} from "react-icons/fa";

const projects = [
    {
        icon: FaComments,
        title: "Private Messenger",
        status: "In Progress",
        technologies: [
            "ASP.NET Core",
            "SignalR",
            "WebRTC",
            "React",
            "SQL Server"
        ],
        description:
            "Building a secure real-time communication platform supporting messaging, voice calls, video calls, authentication, and scalable backend architecture.",
    },
    {
        icon: FaUtensils,
        title: "GoTaste",
        status: "Completed",
        technologies: [
            ".NET",
            "Angular",
            "SQL Server"
        ],
        description:
            "Worked on a production restaurant platform used by businesses in the UK, contributing to feature development, bug fixing, and performance improvements.",
    },
    {
        icon: FaRobot,
        title: "Applied AI",
        status: "Research",
        technologies: [
            "Python",
            "NumPy",
            "RAG",
            "LLMs",
            "MCP"
        ],
        description:
            "Exploring retrieval-augmented generation, AI agents, embeddings, and practical AI systems through hands-on projects and experiments.",
    },
    {
        icon: FaGamepad,
        title: "Game Development",
        status: "Learning",
        technologies: [
            "Unity",
            "Godot",
            "C#"
        ],
        description:
            "Learning gameplay programming, architecture, UI systems, and cross-platform game development while building small playable projects.",
    },
];

export default function EngineeringLab() {
    return (
        <section className="py-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <p className="uppercase tracking-[0.35em] text-[var(--accent-primary)]">
                        Level 4
                    </p>

                    <h2 className="text-5xl font-black mt-4">
                        Building Real Software
                    </h2>

                    <p className="mt-6 text-xl max-w-3xl mx-auto text-[var(--text-muted)]">
                        Every project became an opportunity to learn,
                        improve, and solve real engineering problems.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-8 mt-20">

                    {projects.map((project, index) => {

                        const Icon = project.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{
                                    scale: 1.02,
                                    y: -6,
                                }}
                                className="
                                    rounded-3xl
                                    border
                                    border-[var(--border-color)]
                                    bg-[var(--card-bg)]
                                    p-8
                                "
                            >

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-4">

                                        <div
                                            className="
                                                w-14
                                                h-14
                                                rounded-full
                                                bg-[var(--accent-primary)]
                                                flex
                                                items-center
                                                justify-center
                                                text-white
                                                text-xl
                                            "
                                        >
                                            <Icon />
                                        </div>

                                        <h3 className="text-2xl font-bold">
                                            {project.title}
                                        </h3>

                                    </div>

                                    <span
                                        className="
                                            text-sm
                                            px-3
                                            py-1
                                            rounded-full
                                            bg-green-500/20
                                            text-green-400
                                        "
                                    >
                                        {project.status}
                                    </span>

                                </div>

                                <p className="mt-6 leading-8 text-[var(--text-muted)]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-8">

                                    {project.technologies.map((tech) => (

                                        <span
                                            key={tech}
                                            className="
                                                px-3
                                                py-2
                                                rounded-full
                                                border
                                                border-[var(--border-color)]
                                                text-sm
                                            "
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}