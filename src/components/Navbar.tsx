"use client";
import { useEffect, useState, useRef } from "react";

// Simple SVG icons (replace with your preferred icon library if desired)
const LinkedInIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" /></svg>
);
const GithubIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" /></svg>
);
const MailIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z" /></svg>
);
// const ResumeIcon = () => (
//     <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-12l-6-6h-8zm7 1.414l4.586 4.586h-4.586v-4.586zm-7 16.586v-16h6v6h6v10h-12zm2-2h8v2h-8v-2zm0-4h8v2h-8v-2zm0-4h5v2h-5v-2z" /></svg>
// );
const SunIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.995 12c0 2.761 2.246 5.005 5.005 5.005s5.005-2.244 5.005-5.005c0-2.761-2.246-5.005-5.005-5.005s-5.005 2.244-5.005 5.005zm13.705-1h-2.01c-.138-1.14-.52-2.197-1.09-3.11l1.43-1.43c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.43 1.43c-.913-.57-1.97-.952-3.11-1.09v-2.01c0-.552-.447-1-1-1s-1 .448-1 1v2.01c-1.14.138-2.197.52-3.11 1.09l-1.43-1.43c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.43 1.43c-.57.913-.952 1.97-1.09 3.11h-2.01c-.552 0-1 .448-1 1s.448 1 1 1h2.01c.138 1.14.52 2.197 1.09 3.11l-1.43 1.43c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.43-1.43c.913.57 1.97.952 3.11 1.09v2.01c0 .552.447 1 1 1s1-.448 1-1v-2.01c1.14-.138 2.197-.52 3.11-1.09l1.43 1.43c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.43-1.43c.57-.913.952-1.97 1.09-3.11h2.01c.552 0 1-.448 1-1s-.448-1-1-1z" /></svg>
);
const MoonIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.75 15.344c-1.045.354-2.16.556-3.326.556-5.247 0-9.5-4.253-9.5-9.5 0-1.166.202-2.281.556-3.326.13-.384-.011-.807-.342-1.038-.33-.23-.779-.19-1.07.093-2.07 2.01-3.368 4.82-3.368 7.771 0 5.523 4.477 10 10 10 2.951 0 5.761-1.298 7.771-3.368.283-.291.323-.74.093-1.07-.231-.331-.654-.472-1.038-.342z" /></svg>
);

export default function Navbar() {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [scrolling, setScrolling] = useState(false);

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
            style={{
                backgroundColor: scrolling ? "rgba(117, 102, 102, 0.86)" : "var(--background-color)",
                color: scrolling ? "rgba(255, 255, 255, 1)" : "var(--text-color)",
                transition: "background-color 0.3s, color 0.3s",
                position: scrolling ? "fixed" : "fixed",
                width: "100%"
            }}
        >
            <div
                ref={navRef}
                className={`max-w-7xl mx-auto grid grid-cols-3 items-center gap-4 py-2 px-4 relative transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0"}`}
            >
                {/* Left: Logo/Name */}
                <div className="justify-self-start font-bold text-lg">
                    @Mozammel
                </div>

                {/* Center: Navigation Links or Hamburger */}
                <div className="flex justify-center">
                    {/* Desktop/Tablet: show links */}
                    <div className="hidden md:flex space-x-4 [&>a]:relative [&>a]:inline-block [&>a]:after:content-[''] [&>a]:after:absolute [&>a]:after:left-0 [&>a]:after:bottom-0 [&>a]:after:h-[2px] [&>a]:after:w-0 [&>a]:after:bg-black [&>a]:after:transition-all [&>a]:after:duration-200 [&>a:hover]:after:w-full">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
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

                        {/* Dropdown menu */}
                        {menuOpen && (
                            <div className="absolute left-0 right-0 top-14 bg-[var(--background-color)] shadow-md rounded px-4 py-2 flex flex-col space-y-2 z-50">
                                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                                <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Icon Buttons */}
                <div className="flex justify-end space-x-2">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <GithubIcon />
                    </a>
                    <a
                        href="mailto:mozammel.khandakar@outlook.com"
                        aria-label="Mail"
                    >
                        <MailIcon />
                    </a>
                    <button
                        onClick={() => setDark((prev) => !prev)}
                        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {dark ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
            </div>
        </div>
    );
}