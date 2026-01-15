'use client';
import AnimatedKnot from "./AnimatedKnot";
import ServicesAnimation from "./ServicesAnimation";
import Avatar from "./Avatar";
import SketchfabModel from "./SketchfabModel";
import { useEffect, useState } from "react";

export default function Introduction() {
    const [innerWidth, setInnerWidth] = useState(0);

    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, []);
    return (
        <div
            style={{
                color: "var(--text-color)",
                transition: "background-color 0.3s, color 0.3s",
                padding: innerWidth > 500 ? "50px 80px" : "20px 20px",
                borderBottom: "1px solid #302b2bff"
            }}
        >
            <span className="text-1xl font-bold">
                Hi, I{"'"}m <br /> <span className="font-bold text-3xl">Mozammel Khandakar</span>
                <span className="text-blue-500/100">.</span>
            </span>
            <div className="flex flex-row items-center justify-content-center">
                <div className="w-1 h-7 bg-green-400 mr-2 mt-1" />
                <ServicesAnimation />
            </div>
            <span className="text-md text-gray-600 text-white/90">
                Crafting innovative web & AI solutions.
            </span>
            <br />
            <div className="flex justify-between items-center w-70 mt-4">
                <span className="border-1 px-2">Full Stack Developer</span>
                <span className="border-1 px-2">AI Enthusiast</span>
            </div>
            <div className="mt-4 space-x-4">
                <button className="button-green">Hire Me</button>
                <button className="button-gray">View My Work</button>
            </div>
        </div>
    );
}