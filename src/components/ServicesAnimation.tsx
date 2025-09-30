import React, { useEffect, useState } from "react";

const services = [
    "build React-native apps for Android/iOS",
    "convert design into modern UI",
    "build interactive UI using React",
    "develop websites using Next.js",
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
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px"
        }}>
            <span style={{
                fontSize: "1.5rem",
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