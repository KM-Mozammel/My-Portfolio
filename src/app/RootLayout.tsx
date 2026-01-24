'use client';

import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import Projects from "@/components/Projects";
import { url } from "inspector";
import BlogAndInsights from "@/components/BlogAndInsights";
import { useResumeStore } from "./store/useResumeStore";
import Resume from "@/components/Resume";

export default function RootLayout() {
    const show = useResumeStore((state) => state.show);
    return (
        <div className="RootLayout relative">
            {show &&
                <Resume />
            }
            <SEO
                title="Mozammel | Portfolio"
                description="Full Stack Developer portfolio website"
                ogTitle="Mozammel Portfolio"
                ogDescription="Check out my projects and experience."
            />
            <div style={{ backgroundImage: 'url("img/person2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Navbar />
                <Introduction />
            </div>
            <AboutMe />
            <Projects />
            <BlogAndInsights />
            {/* <AudioPlayer src="/mp3/song.mp3" name="Lalon Song"/> */}
            {/* <Footer /> */}

            {/* Floating Call Button */}
            <a
                href="tel:+8801795593541"
                className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-40 transition-all duration-300 hover:scale-110"
                title="Call +8801795593541"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.453 4.045 1.238 1.238 2.78 2.035 4.045 2.453l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                {/* <span className="text-xl pl-2">Call</span> */}
            </a>
        </div>
    );
}