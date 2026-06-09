"use client";

import { useEffect, useState, useRef } from "react";
import { useResumeStore } from "@/store/useResumeStore";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const navRef = useRef<HTMLDivElement>(null);

    const showResume = useResumeStore((state) => state.show);
    const setShowResume = useResumeStore((state) => state.setShow);

    /* ================= THEME SWITCH ================= */
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            dark ? "dark" : "light"
        );
    }, [dark]);

    /* ================= FADE IN ================= */
    useEffect(() => {
        const node = navRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
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

    /* ================= SCROLL EFFECT ================= */
    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={navRef}
            data-scrolled={scrolling}
            className="
                sticky top-0 z-50 w-full
                transition-all duration-300
                border-b
                bg-transparent
                border-[var(--border-color)]
                text-[var(--text-color)]
                data-[scrolled=true]:backdrop-blur-sm
            "
        >
            <div
                className={`
                    flex justify-between items-center gap-4
                    px-4 sm:px-20 py-4
                    transition-opacity duration-700
                    ${fadeIn ? "opacity-100" : "opacity-0"}
                `}
            >
                {/* ================= CENTER NAV LINKS ================= */}
                <div className="hidden md:flex space-x-6">
                    {[
                        { label: "Home", href: "#home" },
                        { label: "About", href: "#about" },
                        { label: "Projects", href: "#projects" },
                        { label: "Blogs", href: "#skills" },
                        { label: "Contact", href: "#contact" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="
                                relative text-[var(--text-color)]
                                hover:text-[var(--accent-primary)]
                                transition-colors duration-200
                                after:content-['']
                                after:absolute
                                after:left-0
                                after:-bottom-1
                                after:h-[2px]
                                after:w-0
                                after:bg-[var(--accent-primary)]
                                after:transition-all
                                after:duration-200
                                hover:after:w-full
                            "
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* ================= MOBILE MENU BUTTON ================= */}
                <div className="md:hidden">
                    <button
                        aria-label="Open menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="
                            w-9 h-9 flex items-center justify-center
                            border rounded-md
                            border-[var(--border-color)]
                            hover:bg-[var(--hover-bg)]
                            transition
                        "
                    >
                        <div className="space-y-1">
                            <span className="block w-5 h-0.5 bg-[var(--text-color)]"></span>
                            <span className="block w-5 h-0.5 bg-[var(--text-color)]"></span>
                            <span className="block w-5 h-0.5 bg-[var(--text-color)]"></span>
                        </div>
                    </button>
                </div>

                {/* ================= RESUME BUTTON ================= */}
                <div>
                    <button
                        onClick={() => setShowResume(!showResume)}
                        className="
                            px-4 py-1 rounded-md
                            border border-[var(--border-color)]
                            text-[var(--text-color)]
                            hover:bg-[var(--hover-bg)]
                            transition
                        "
                    >
                        Resume
                    </button>
                </div>
            </div>

            {/* ================= MOBILE NAV ================= */}
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