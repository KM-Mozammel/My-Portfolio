import React from 'react';
import Image from 'next/image';

const AboutMe: React.FC = () => (
    <div className="mx-auto max-w-7xl px-4">
        <span className="block text-5xl text-center mb-6">About Me</span>
        <section className="text-lg bg-[var(--background-color)] text-[var(--text-color)] flex flex-col items-center justify-center rounded-md py-6 md:flex-row lg:flex-row">
            {/* Image always on top for mobile, left for desktop */}
            <div className="w-full flex justify-center mb-6 md:w-1/2 md:mb-0 md:justify-end">
                <Image
                    src="/img/mk.jpg"
                    alt="Mozammel Khandakar"
                    width={300}
                    height={340}
                    className="mx-auto rounded-md"
                    priority
                />
            </div>
            {/* Text always centered, full width on mobile, half on desktop */}
            <div className="w-full max-w-2xl text-center md:w-1/2 md:text-left md:pl-8">
                <p>
                    Hi, I’m Mozammel Khandakar — a passionate Software Developer with a strong foundation in Computer Engineering and over 12 years of programming experience, starting from C and web technologies to modern full-stack development.
                </p>
                <br />
                <p>
                    My core stack today includes <strong>ASP.NET Core Web API, React.js, Redux, and MySQL</strong>, and I focus on building scalable, efficient, and user-friendly web applications. I also explore <strong>Onion Architecture, CQRS, and clean code practices</strong>, making sure my solutions are maintainable and production-ready.
                </p>
                <br />
                <p>
                    I’ve worked across diverse fields — from Assistant IT Officer in the textile industry to music composition and studio management — but my true passion has always been <strong>software engineering</strong>. That curiosity, which began when I first powered up a dual-core Dell laptop in my school days, still drives me to keep learning and solving problems.
                </p>
                <br />
                <p>
                    Beyond backend and frontend development, I’m deeply interested in <strong>AI, algorithms, and system design</strong>, aiming to merge creativity and logic in everything I build. My journey has taught me how to adapt, grow, and contribute to projects that make a real impact.
                </p>
            </div>
        </section>
    </div>
);

export default AboutMe;