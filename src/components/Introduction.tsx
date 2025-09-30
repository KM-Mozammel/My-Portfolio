'use client';
import AnimatedKnot from "./AnimatedKnot";
import ServicesAnimation from "./ServicesAnimation";

export default function Introduction() {
    return (
        <div
            className="flex flex-row justify-space-between py-2 px-4 mx-auto max-w-7xl"
            style={{
                backgroundColor: "var(--background-color)",
                color: "var(--text-color)",
                transition: "background-color 0.3s, color 0.3s",
                paddingTop: '20px'
            }}
        >
            <div className="py-15 lg:w-1/2">
                <span className="text-5xl font-bold">
                    Hi, I{"'"}m <span className="text-blue-500/100">Mozammel</span> a <span className="text-blue-500/100">passionate</span> software developer.
                </span>
                <div className="flex flex-row items-center justify-content-center mt-2">
                    <div className="w-1 h-7 bg-green-400 mr-1 mt-1" />
                    <ServicesAnimation />
                </div>
                <span className="text-lg text-gray-600">
                    Welcome to my portfolio! Explore my work and skills below.
                </span>
            </div>
            <div className="sm:hidden md:block space-x-4 flex-1">
                <AnimatedKnot />
            </div>
        </div>
    );
}