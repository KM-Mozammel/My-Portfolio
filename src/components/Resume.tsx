'use client'

import { useResumeStore } from "@/store/useResumeStore"
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Resume() {
  const setShow = useResumeStore((state) => state.setShow);
  const show = useResumeStore((state) => state.show);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      style={{ display: show ? '' : 'none' }}
      onClick={() => setShow(false)}
    >
      {/* Resume Container */}
      <div
        className="
          bg-white w-full max-w-5xl max-h-[90vh]
          rounded-xl shadow-lg
          overflow-y-auto
          p-6 md:p-10 relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sticky top-0 ml-auto w-fit cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={() => setShow(false)}
        >
          <IoCloseCircleSharp size={24} />
        </div>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black/65">Mozammel Khandakar</h1>
          <p className="text-sm text-gray-600 mt-1">
            Nikunju-2, Khilkhet, Dhaka
          </p>
          <p className="text-sm text-gray-600">
            📞 01795593541 | ✉️ mozammel.khandakar@outlook.com
          </p>
          <p className="text-sm text-blue-600">
            <a href="https://linkedin.com/in/mozammel-khandakar" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href="https://github.com/KM-Mozammel" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
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
    </div>
  )
}

/* ---------- Reusable Components ---------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b pb-1 mb-3 text-black">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Experience({ role, time, items }: { role: string; time: string; items: string[] }) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-black">{role}</h3>
      <p className="text-sm text-gray-500 mb-2">{time}</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}