"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

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
        description: "GoTaste is a restaurant web application built with ASP.NET Core Web API and React.js."
    },
    {
        id: 2,
        title: "Gotaste",
        images: ["/img/gotaste2.png", "/img/gotaste.png"],
        description: "GoTaste is a restaurant web application built with ASP.NET Core Web API and React.js."
    },
    {
        id: 3,
        title: "Gotaste",
        images: ["/img/gotaste.png", "/img/gotaste2.png"],
        description: "GoTaste is a restaurant web application built with ASP.NET Core Web API and React.js."
    }
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
                } bg-[var(--background-color)] text-[var(--text-color)] rounded-lg shadow-lg lg:w-70 sm:w-full`}
            style={{ backgroundColor: 'rgba(17, 27, 59, 0.84)' }}
        >
            <div className="relative flex">
                {/* <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
                    onClick={prevImg}
                >
                    &lt;
                </button> */}
                <img
                    src={project.images[currentImg]}
                    alt={project.title}
                    className="w-100 h-40 object-cover rounded-sm"
                />
                {/* <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
                    onClick={nextImg}
                >
                    &gt;
                </button> */}
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-base" style={{ color: 'dark-gray' }}>{project.description}</p>
                <a target="_blank" href="https://gotaste.uk/" className="mt-4 inline-block">
                    <button className="hover:cursor-pointer hover:text-red-500/100 px-2" style={{ border: '1px solid white' }}>Golive</button>
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
    const [innerWidth, setInnerWidth] = useState(0);

    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, [])

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
        <div style={{
            transition: "background-color 0.3s, color 0.3s",
            width: "100%",
            padding: innerWidth > 500 ? "var(--padding-lg)" : "var(--padding-sm)",
            borderBottom: "1px solid rgba(170, 160, 160, 0.41)",
            color: 'white',
            backgroundColor: 'rgb(9, 25, 43)'
        }}>
            <span
                className="block text-2xl text-bold pb-2 mb-2 font-bold"
                style={{ borderBottom: "1px solid rgb(52, 109, 173)", maxWidth: 'fit-content' }}
            >Featured Projects</span>
            <p>Some of my best work.</p>

            <div
                className="flex flex-row space-between flex-wrap gap-4 py-4"
            >
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        ref={(el) => { cardsRef.current[idx] = el; }}
                    >
                        <ProjectCard
                            project={project}
                            fadeIn={visible[idx]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;