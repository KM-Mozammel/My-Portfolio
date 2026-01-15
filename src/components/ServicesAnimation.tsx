import React, { useEffect, useState } from "react";

const services = [
    "Full-Stack Engineer API.NET Core, React, SQL Server",
    "Building scalable web applications",
    "Modern software architecture, Exploring AI",
];

function getRandomIndex(exclude: number, length: number): number {
    let idx = Math.floor(Math.random() * length);
    while (idx === exclude) {
        idx = Math.floor(Math.random() * length);
    }
    return idx;
}

const ServicesAnimation: React.FC = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx((prev) => getRandomIndex(prev, services.length));
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px"
        }}>
            <span style={{
                fontSize: "1rem",
                fontWeight: 500,
                transition: "opacity 0.5s",
                opacity: 1,
            }}>
                {services[currentIdx]}
            </span>
        </div>
    );
};

export default ServicesAnimation;