"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  IoCloseCircleSharp,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMail,
  IoSunny,
  IoMoon,
} from "react-icons/io5";
import { navItems } from "./NavItems";
import SwipeWrapper from "../../ui/SwipeWrapper";

export type MobileNavbarProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
};

export default function MobileNavbar({
  menuOpen,
  setMenuOpen,
  dark,
  setDark,
}: MobileNavbarProps) {
  // Back button support
  useEffect(() => {
    if (!menuOpen) return;

    window.history.pushState({ mobileMenu: true }, "");

    const handlePopState = () => setMenuOpen(false);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [menuOpen, setMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (!menuOpen) return null;

  return (
    <SwipeWrapper
      onSwipeLeft={() => setMenuOpen(false)}
      onSwipeUp={() => setMenuOpen(false)}
      onSwipeDown={() => setMenuOpen(false)}
    >
      <div className="fixed inset-0 z-[60] flex flex-col justify-between bg-gray-900/90 backdrop-blur-md px-6 py-6 text-white min-h-screen">
        {/* Top section */}
        <div className="flex flex-col">
          <IoCloseCircleSharp
            className="self-end text-3xl cursor-pointer hover:text-red-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          />

          <div className="flex flex-col gap-8 justify-center items-center mt-16">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl sm:text-4xl font-semibold hover:text-[var(--accent-primary)] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}

            {/* CV Download Button */}
            <a
              href="/docs/Mozammel_Khandakar_CV.pdf"
              download
              className="mt-6 inline-block px-6 py-2.5 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow hover:bg-[var(--accent-secondary)] transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-center space-x-6 pb-6">
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="hover:text-yellow-400 transition-colors"
          >
            {dark ? (
              <IoSunny className="w-6 h-6" />
            ) : (
              <IoMoon className="w-6 h-6" />
            )}
          </button>

          <a
            href="https://www.linkedin.com/in/mozammel-khandakar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <IoLogoLinkedin className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/KM-Mozammel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <IoLogoGithub className="w-6 h-6" />
          </a>

          <a
            href="mailto:mozammel.khandakar@outlook.com"
            className="hover:text-green-400 transition-colors"
          >
            <IoMail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </SwipeWrapper>
  );
}