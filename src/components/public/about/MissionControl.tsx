"use client";

import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaSpinner,
    FaLock,
} from "react-icons/fa";

const completed = [
    ".NET",
    "ASP.NET Core",
    "React",
    "Angular",
    "Blazor",
    "SignalR",
    "WebRTC",
    "SQL Server",
];

const learning = [
    "Python",
    "NumPy",
    "Pandas",
    "Applied AI",
    "RAG",
    "MCP",
    "Machine Learning",
    "Unity",
];

const future = [
    "Computer Vision",
    "Graphics Programming",
    "CUDA",
    "Distributed AI Systems",
];

export default function MissionControl() {

    return (

        <section className="py-32">

            <div className="max-w-7xl mx-auto">

                <div className="text-center">

                    <p className="uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                        Level 5
                    </p>

                    <h2 className="text-5xl font-black mt-4">
                        Mission Control
                    </h2>

                    <p className="mt-6 text-xl text-[var(--text-muted)]">
                        Learning never stops.
                        Every completed mission unlocks the next one.
                    </p>

                </div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="
                        mt-20
                        rounded-3xl
                        border
                        border-[var(--border-color)]
                        bg-[var(--card-bg)]
                        p-10
                    "
                >

                    <MissionGroup
                        title="Completed"
                        icon={<FaCheckCircle />}
                        color="text-green-400"
                        items={completed}
                    />

                    <MissionGroup
                        title="Currently Learning"
                        icon={<FaSpinner />}
                        color="text-yellow-400"
                        items={learning}
                    />

                    <MissionGroup
                        title="Future Missions"
                        icon={<FaLock />}
                        color="text-gray-500"
                        items={future}
                    />

                </motion.div>

            </div>

        </section>

    );

}

function MissionGroup({
    title,
    icon,
    color,
    items,
}: {
    title: string;
    icon: React.ReactNode;
    color: string;
    items: string[];
}) {
    return (
        <div className="mb-12">

            <div className={`flex items-center gap-3 text-2xl font-bold ${color}`}>
                {icon}
                {title}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">

                {items.map((item) => (

                    <motion.div
                        key={item}
                        whileHover={{
                            scale: 1.08,
                        }}
                        className="
                            px-5
                            py-3
                            rounded-full
                            border
                            border-[var(--border-color)]
                            bg-black/20
                        "
                    >
                        {item}
                    </motion.div>

                ))}

            </div>

        </div>
    );
}