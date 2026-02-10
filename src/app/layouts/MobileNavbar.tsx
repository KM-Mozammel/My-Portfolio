// const ResumeIcon = () => (
//     <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-12l-6-6h-8zm7 1.414l4.586 4.586h-4.586v-4.586zm-7 16.586v-16h6v6h6v10h-12zm2-2h8v2h-8v-2zm0-4h8v2h-8v-2zm0-4h5v2h-5v-2z" /></svg>
// );

import { useRef, useEffect } from "react";
import { IoCloseCircleSharp, IoLogoLinkedin, IoLogoGithub, IoMail, IoSunny, IoMoon } from "react-icons/io5";

export type MobileNavbarProps = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    dark: boolean;
    setDark: (dark: boolean) => void;
}

export default function MobileNavbar({ menuOpen, setMenuOpen, dark, setDark }: MobileNavbarProps) {

    const touchStartX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX.current - touchEndX;

        // swipe right → left
        if (diffX > 50) {
            setMenuOpen(false);
        }

        touchStartX.current = null;
    };


    useEffect(() => {
        if (!menuOpen) return;

        window.history.pushState({ mobileMenu: true }, "");

        const handlePopState = () => {
            setMenuOpen(false);
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [menuOpen, setMenuOpen]);


    return (
        <div
            className="
                fixed inset-0
                bg-gray-800 text-white
                z-50
                flex flex-col
                justify-between
                px-4 py-4
                min-h-screen
            "
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Top section */}
            <div className="flex flex-col space-y-4">
                <IoCloseCircleSharp
                    className="self-end text-2xl cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                />

                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>Blog</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>

            {/* Bottom section */}
            <div className="flex justify-center space-x-4 pb-4">
                <button
                    onClick={() => setDark(!dark)}
                    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {dark ? <IoSunny className="w-5 h-5" /> : <IoMoon className="w-5 h-5" />}
                </button>

                <a href="https://www.linkedin.com/in/mozammel-khandakar" target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin className="w-5 h-5" />
                </a>

                <a href="https://github.com/KM-Mozammel" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className="w-5 h-5" />
                </a>

                <a href="mailto:mozammel.khandakar@outlook.com">
                    <IoMail className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
