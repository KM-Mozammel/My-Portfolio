'use client'

import Image from "next/image";
import { Experience } from "./experience";
import { Section } from "./sections";

import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPhone, MdEmail } from "react-icons/md";

import { useResumeStore } from "@/store/useResumeStore"
import { IoCloseCircleSharp } from "react-icons/io5";
import { useState } from "react";
import { resumeButtons } from "./resumeButtons";
import { summaries } from "./summaries";

export default function Resume() {
  const setShow = useResumeStore((state) => state.setShow);
  const show = useResumeStore((state) => state.show);
  const [resumeType, setResumeType] = useState<"fullstack" | "versatile" | "ai" | "creative">("fullstack");

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      style={{ display: show ? '' : 'none', zIndex: 500 }}
      onClick={() => setShow(false)}
    >
      {/* Resume Container */}
      <div
        className="bg-white w-full max-w-6xl max-h-[92vh] rounded-2xl shadow-2xl overflow-y-auto p-6 md:p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="absolute top-2 right-2 z-30">
          <IoCloseCircleSharp
            size={32}
            onClick={() => setShow(false)}
            className="cursor-pointer text-gray-400 hover:text-red-500 transition"
          />
          {/* <div className="flex flex-wrap gap-3">
            {resumeButtons.map((button) => (
              <button
                key={button.key}
                onClick={() => setResumeType(button.key as any)}
                className={`px-5 py-2 rounded-full border transition
                  ${resumeType === button.key
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-black hover:bg-gray-100"
                  }
              `}
              >
                {button.label}
              </button>
            ))}
          </div> */}
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start border-b pb-8 pt-6">
          <Image
            src="/docs/dev_mozammel.jpeg"
            alt="Mozammel Khandakar" width={170} height={170}
            className="rounded-2xl object-cover shadow-xl border-4 border-gray-100"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900">
              Mozammel Khandakar
            </h1>

            <p className="text-xl text-blue-600 mt-2 font-semibold">
              {
                {
                  fullstack:
                    "Senior Full Stack Software Engineer",

                  versatile:
                    "Versatile Software Engineer",

                  ai:
                    "Applied AI Engineer",

                  creative:
                    "Creative Technologist",

                }[resumeType]
              }
            </p>

            <p className="text-gray-700 leading-8">{summaries[resumeType]}</p>

            <div className="grid md:grid-cols-2 gap-3 mt-6">

              <div className="flex items-center gap-2">

                <HiOutlineLocationMarker />

                Dhaka, Bangladesh

              </div>

              <div className="flex items-center gap-2">

                <MdPhone />

                +880 1795-593541

              </div>

              <div className="flex items-center gap-2">

                <MdEmail />

                mozammel.khandakar@outlook.com

              </div>

              <div className="flex gap-5">

                <a
                  href="https://github.com/KM-Mozammel"
                  target="_blank"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaGithub />

                  GitHub

                </a>

                <a
                  href="https://linkedin.com/in/mozammel-khandakar"
                  target="_blank"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaLinkedin />

                  LinkedIn

                </a>

                <a
                  href="https://mozammel-portfolio.vercel.app"
                  target="_blank"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaGlobe />

                  Portfolio

                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Career Objective */}
        <Section title="Career Objective">
          <p className="text-gray-700 leading-relaxed">
            Versatile Full-Stack Software Engineer with 6+ years of professional
            experience building scalable, maintainable applications. Experienced
            across C, PHP, JavaScript, Python, C#, and modern frameworks. Deeply
            interested in software architecture, mathematics, neuroscience, and
            hardware-aware computing, aspiring to build Generative AI, LLMs, and
            Agentic AI in collaborative environments.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Professional Experience">
          <Experience
            role="Associate Software Engineer (Remote)"
            time="June 2024 – October 2025"
            items={[
              "Developed scalable APIs using ASP.NET Core, CQRS, Onion Architecture, Dapper, EF Core",
              "Built full-stack applications with React.js, Redux, TypeScript, and Blazor",
              "Integrated SignalR for real-time notifications and messaging",
              "Optimized SQL Server performance with procedures and tuning",
              "Performed code reviews and maintained Git workflows",
            ]}
          />

          <Experience
            role="Web Developer – eKutum.com"
            time="May 2023 – May 2024"
            items={[
              "Built end-to-end e-commerce platform using WordPress & WooCommerce",
              "Customized frontend with HTML, CSS, JavaScript",
              "Integrated payment gateways and managed hosting, DNS, SEO",
            ]}
          />

          <Experience
            role="Assistant IT Officer – Asia Composite Mills Ltd."
            time="May 2019 – February 2021"
            items={[
              "Maintained IT infrastructure and supported hardware/software",
              "Automated reports and optimized data workflows",
            ]}
          />
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <ul className="list-disc pl-5 text-gray-700 space-y-3">
            <li>
              <strong>Personal Portfolio & AI Platform:</strong> Modern full-stack platform built with Next.js, TypeScript, Tailwind CSS, Drizzle ORM, PostgreSQL, and Neon. Designed to showcase projects and features AI assistant capabilities using vector embeddings and Retrieval-Augmented Generation (RAG).
            </li>
            <li>
              <strong>GoTaste:</strong> Restaurant management web application built with ASP.NET Core Web API and React.js.
            </li>
            <li>
              <strong>Private Messenger:</strong> Real-time private messaging system built with React.js, ASP.NET Core Web API, Dapper, MySQL, and SignalR.
            </li>
            <li>
              <strong>eKutum:</strong> Production-ready e-commerce platform featuring responsive UI, WooCommerce integration, custom PHP modules, and customized payment workflows.
            </li>
            <li>
              <strong>Temple Run: Elimination:</strong> A 3D endless runner developed in Unity (C#) featuring procedural environment generation, dynamic obstacle spawning, high-velocity movement logic, and custom physics controller.
            </li>
            <li>
              <strong>SCS - Security Clearance System:</strong> System focused on dynamic form building and complex role management.
            </li>
            <li>
              <strong>Media Management App:</strong> Built using PHP, MySQL, MVC architecture, and Singleton pattern.
            </li>
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education">
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Diploma in Computer Engineering</strong> — BTEB
              <br /> CGPA: 3.12 / 4.00
            </li>
            <li>
              <strong>Certificate in Web Development</strong> — DIPTI (A+)
            </li>
            <li>
              <strong>Dakhil (Science)</strong> — GPA: 4.63 / 5.00
            </li>
          </ul>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong>Languages & Frameworks:</strong> C, C++, C#, ASP.NET Core,
              Java (basic), Python (LangChain, RAG), Blazor, Flutter, Unity (C#)
            </p>
            <p>
              <strong>Frontend:</strong> React, Next.js, Redux, TypeScript, HTML5, CSS3, Tailwind CSS
            </p>
            <p>
              <strong>Databases & ORM:</strong> SQL Server, MySQL, PostgreSQL, Neon, Drizzle ORM, EF Core, Dapper
            </p>
            <p>
              <strong>Tools & Tech:</strong> Git, Docker (basic), Postman, Firebase, SignalR, WebRTC
            </p>
          </div>
        </Section>

        {/* Languages */}
        <Section title="Languages">
          <p className="text-gray-700">
            Bengali (Native), English (Professional)
          </p>
        </Section>

        {/* Close Button */}
        <div className="text-right mt-6">
          <button
            onClick={() => setShow(false)}
            className="px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div >
  )
}