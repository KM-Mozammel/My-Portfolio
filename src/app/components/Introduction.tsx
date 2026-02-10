'use client';
import ServicesAnimation from "./ServicesAnimation";
import AnimatedKnot from "./AnimatedKnot";
import Avatar from "./Avatar";
import SketchfabModel from "./SketchfabModel";

export default function Introduction() {
    return (
        <div className="p-4 py-5 sm:px-20 sm:py-10 transition-colors duration-300 border-b border-[rgba(170,160,160,0.41)]">
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
                <button className="bg-blue-900 py-2 px-4 rounded font-bold hover:bg-blue-800 transition cursor-pointer">Hire Me</button>
                <button className="bg-gray-700 py-2 px-4 rounded font-bold hover:bg-gray-600 transition cursor-pointer">View My Work</button>
            </div>
        </div>
    );
}