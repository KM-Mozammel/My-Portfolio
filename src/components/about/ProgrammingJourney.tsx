"use client";

import { motion } from "framer-motion";
import {
    FaCode,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPhp,
    FaDatabase,
    FaLaravel,
} from "react-icons/fa";

const journey = [
    {
        icon: FaCode,
        title: "C Programming",
        year: "2013",
        text: "My programming journey began with C. It taught me algorithms, data structures, memory management, and the discipline of logical problem solving.",
        color: "text-blue-500",
    },
    {
        icon: FaHtml5,
        title: "HTML & CSS",
        year: "2014",
        text: "I discovered that programming could create experiences people could see and interact with, opening the door to web development.",
        color: "text-orange-500",
    },
    {
        icon: FaJs,
        title: "JavaScript",
        year: "2015",
        text: "I learned how to build interactive user interfaces using DOM manipulation, events, and client-side programming.",
        color: "text-yellow-400",
    },
    {
        icon: FaPhp,
        title: "PHP & MySQL",
        year: "2016",
        text: "My focus shifted to backend development, where I learned authentication, CRUD operations, session management, and relational databases.",
        color: "text-indigo-400",
    },
    {
        icon: FaLaravel,
        title: "Laravel Framework",
        year: "2017",
        text: "After building my own MVC framework concepts, Laravel felt like the natural next step. I used it to build production-ready applications while leveraging its ecosystem and best practices.",
        color: "text-red-500",
    },
    {
        icon: FaCode,
        title: "Custom MVC CMS Framework",
        year: "2019",
        text: "Built a complete CMS from scratch using OOP PHP and MySQL. Designed the application around the MVC architecture, used Object-Oriented Programming throughout the codebase, implemented a Singleton Database pattern for connection management, created a custom routing system, authentication module, CRUD operations, reusable layouts, and an admin dashboard. This project taught me how modern frameworks are designed internally.",
        color: "text-cyan-400",
    },
];

export default function ProgrammingJourney() {
    return (
        <section className="py-32">

            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-20">

                    <p className="uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                        Level 2
                    </p>

                    <h2 className="text-5xl font-black mt-4">
                        The Programmer Awakens
                    </h2>

                    <p className="mt-6 text-lg text-[var(--text-muted)]">
                        Every new technology became another tool for solving bigger problems.
                    </p>

                </div>

                <div className="space-y-8">

                    {journey.map((item, index) => {

                        const Icon = item.icon;

                        return (

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
                                    duration: .6,
                                    delay: index * .15
                                }}
                                whileHover={{
                                    scale: 1.02
                                }}
                                className="
                                    rounded-3xl
                                    border
                                    border-[var(--border-color)]
                                    p-8
                                    bg-[var(--card-bg)]
                                    flex
                                    gap-8
                                    items-start
                                "
                            >

                                <div
                                    className={`
                                    w-16
                                    h-16
                                    rounded-full
                                    bg-black
                                    flex
                                    items-center
                                    justify-center
                                    text-3xl
                                    ${item.color}
                                    `}
                                >
                                    <Icon />
                                </div>

                                <div className="flex-1">

                                    <div className="flex justify-between items-center">

                                        <h3 className="text-2xl font-bold">
                                            {item.title}
                                        </h3>

                                        <span className="text-[var(--accent-primary)]">
                                            {item.year}
                                        </span>

                                    </div>

                                    <p className="mt-4 text-[var(--text-muted)] leading-8">
                                        {item.text}
                                    </p>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}