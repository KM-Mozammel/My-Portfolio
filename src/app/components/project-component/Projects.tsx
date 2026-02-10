"use client";
import React, { useRef, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectList";

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
        <div style={{
            transition: "background-color 0.3s, color 0.3s",
            width: "100%",
            borderBottom: "1px solid rgba(170, 160, 160, 0.41)",
            color: 'white',
            background: 'linear-gradient(to bottom, #022341 0%, #031c33 55%, rgb(4, 20, 49) 100%)'
        }}
            className="p-4 md:py-8 sm:px-20"

        >
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