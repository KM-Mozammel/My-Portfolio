"use client";
import { useEffect, useState, useRef } from "react";
import "../../app/globals.css";
import { useResumeStore } from "@/store/useResumeStore";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [scrolling, setScrolling] = useState(false);
    const showResume = useResumeStore((state) => state.show);
    const setShowResume = useResumeStore((state) => state.setShow);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    }, [dark]);

    useEffect(() => {
        const node = navRef.current;
        if (!node) return;

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFadeIn(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0 ? true : false);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="
                sticky top-0 z-49 w-full
                border-b border-[rgba(170,160,160,0.41)]
                p-4 sm:px-20
                transition-all duration-300
                bg-transparent
                data-[scrolled=true]:bg-white/10
                data-[scrolled=true]:backdrop-blur-sm
            "
            data-scrolled={scrolling}
        >
            <div
                ref={navRef}
                className={`flex justify-between items-center items-center gap-4 relative transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0"} flex `}
            >
                {/* Center: Navigation Links or Hamburger */}
                <div className="flex justify-center">
                    <div className="hidden md:flex space-x-4 [&>a]:relative [&>a]:inline-block [&>a]:after:content-[''] [&>a]:after:absolute [&>a]:after:left-0 [&>a]:after:top-7 [&>a]:after:h-[2px] [&>a]:after:w-0 [&>a]:after:bg-white [&>a]:after:transition-all [&>a]:after:duration-200 [&>a:hover]:after:w-full">
                        <a href="#about">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Blog</a>
                        <a href="#contact">Contact</a>
                    </div>

                    {/* Mobile: show hamburger */}
                    <div className="md:hidden">
                        <button
                            aria-label="Open menu"
                            className="w-8 h-8 flex items-center justify-center border rounded"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            {/* Hamburger icon */}
                            <div className="space-y-1">
                                <span className="block w-5 h-0.5 bg-current"></span>
                                <span className="block w-5 h-0.5 bg-current"></span>
                                <span className="block w-5 h-0.5 bg-current"></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right: Icon Buttons */}
                <div onClick={() => setShowResume(!showResume)}>
                    <button className="border-1 px-4 py-1 rounded cursor-pointer">Resume</button>
                </div>
            </div>

            {menuOpen && (
                <MobileNavbar
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    dark={dark}
                    setDark={setDark}
                />
            )}
        </div>
    );
}