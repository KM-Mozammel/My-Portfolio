"use client";
import React, { useRef, useEffect, useState } from "react";

type Project = {
    id: number;
    title: string;
    images: string[];
    description: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Gotaste",
        images: ["/img/gotaste.png", "/img/gotaste2.png"],
        description: "GoTaste is a restaurant web application built with ASP.NET Core Web API and React.js using Redux for state management. It allows users to browse restaurants, view their menus, and explore food items categorized by sections. The backend is developed with Onion Architecture, stored procedures, and dependency injection, while the frontend provides a clean, responsive interface for seamless restaurant and food item exploration.",
    },
    {
        id: 2,
        title: "Gotaste",
        images: ["/img/gotaste2.png", "/img/gotaste.png"],
        description: "GoTaste is a restaurant web application built with ASP.NET Core Web API and React.js using Redux for state management. It allows users to browse restaurants, view their menus, and explore food items categorized by sections. The backend is developed with Onion Architecture, stored procedures, and dependency injection, while the frontend provides a clean, responsive interface for seamless restaurant and food item exploration.",
    },
    {
        id: 3,
        title: "Gotaste",
        images: ["/img/gotaste.png", "/img/gotaste2.png"],
        description: "GoTaste is a restaurant web application built with ASP.NET Core Web API and React.js using Redux for state management. It allows users to browse restaurants, view their menus, and explore food items categorized by sections. The backend is developed with Onion Architecture, stored procedures, and dependency injection, while the frontend provides a clean, responsive interface for seamless restaurant and food item exploration.",
    },
    {
        id: 4,
        title: "Gotaste",
        images: ["/img/gotaste2.png", "/img/gotaste.png"],
        description: "GoTaste is a restaurant web application built with ASP.NET Core Web API and React.js using Redux for state management. It allows users to browse restaurants, view their menus, and explore food items categorized by sections. The backend is developed with Onion Architecture, stored procedures, and dependency injection, while the frontend provides a clean, responsive interface for seamless restaurant and food item exploration.",
    },
];

const ProjectCard: React.FC<{ project: Project; fadeIn: boolean }> = ({
    project,
    fadeIn,
}) => {
    const [currentImg, setCurrentImg] = useState(0);

    const nextImg = () =>
        setCurrentImg((i) => (i + 1) % project.images.length);
    const prevImg = () =>
        setCurrentImg((i) => (i - 1 + project.images.length) % project.images.length);

    return (
        <div
            className={`transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0"
                } bg-[var(--background-color)] text-[var(--text-color)] rounded-lg shadow-lg p-6 flex flex-col items-center mb-8`}
        >
            <div className="relative w-full flex items-center justify-center mb-4">
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
                    onClick={prevImg}
                >
                    &lt;
                </button>
                <img
                    src={project.images[currentImg]}
                    alt={project.title}
                    className="w-64 h-40 object-cover rounded-md"
                />
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
                    onClick={nextImg}
                >
                    &gt;
                </button>
            </div>
            <div className="w-full text-center">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-base">{project.description}</p>
                <a target="_blank" href="https://gotaste.uk/" className="mt-4 inline-block">
                    <button className="hover:cursor-pointer hover:text-red-500/100">Golive</button>
                </a>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [visible, setVisible] = useState<boolean[]>(
        Array(projects.length).fill(false)
    );

    useEffect(() => {
        const isDesktop = window.innerWidth >= 768;
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const idx = Number(entry.target.getAttribute("data-idx"));
                    if (entry.isIntersecting) {
                        setVisible((prev) => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                        if (isDesktop) observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        cardsRef.current.forEach((card, idx) => {
            if (card) {
                card.setAttribute("data-idx", String(idx));
                observer.observe(card);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8 max-w-7xl mx-auto">
            {projects.map((project, idx) => (
                <div
                    key={project.id}
                    ref={(el) => (cardsRef.current[idx] = el)}
                >
                    <ProjectCard
                        project={project}
                        fadeIn={visible[idx]}
                    />
                </div>
            ))}
        </div>
    );
};

export default Projects;