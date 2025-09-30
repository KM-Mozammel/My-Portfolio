'use client';

import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import Projects from "@/components/Projects";

export default function RootLayout() {
    return (
        <div>
            <SEO
                title="Mozammel | Portfolio"
                description="Full Stack Developer portfolio website"
                ogTitle="Mozammel Portfolio"
                ogDescription="Check out my projects and experience."
            />
            <Navbar />
            <Introduction />
            <Projects />
            <AboutMe />
            <AudioPlayer src="/mp3/song.mp3" name="Lalon Song"/>
            <Footer />
        </div>
    );
}