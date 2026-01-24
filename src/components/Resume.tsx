'use client'

import { useResumeStore } from "@/app/store/useResumeStore"

export default function Resume() {
  const setShow = useResumeStore((state) => state.setShow)

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      onClick={() => setShow(false)}
    >
      {/* Resume Container */}
      <div
        className="
          bg-white w-full max-w-5xl max-h-[90vh]
          rounded-xl shadow-lg
          overflow-y-auto
          p-6 md:p-10
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Mozammel Khandakar</h1>
          <p className="text-sm text-gray-600 mt-1">
            Nikunju-2, Khilkhet, Dhaka
          </p>
          <p className="text-sm text-gray-600">
            📞 01795593541 | ✉️ mozammel.khandakar@outlook.com
          </p>
          <p className="text-sm text-blue-600">
            <a href="https://linkedin.com/in/mozammel-khandakar" target="_blank">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href="https://github.com/KM-Mozammel" target="_blank">
              GitHub
            </a>
          </p>
        </div>

        {/* Career Objective */}
        <Section title="Career Objective">
          <p className="text-gray-700 leading-relaxed">
            Versatile Full-Stack Software Engineer with 1.5+ years of professional
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
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>GoTaste:</strong> Restaurant management system using ASP.NET
              Core Web API, React.js, SQL Server
            </li>
            <li>
              <strong>eKutum:</strong> Live e-commerce store with online payments
            </li>
            <li>
              <strong>Media Management App:</strong> PHP, MySQL, MVC, Singleton
              Pattern
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
              Java (basic), Python (LangChain, RAG), Blazor, Flutter
            </p>
            <p>
              <strong>Frontend:</strong> React, Redux, TypeScript, HTML5, CSS3
            </p>
            <p>
              <strong>Databases:</strong> SQL Server, MySQL (Optimization)
            </p>
            <p>
              <strong>Tools:</strong> Git, Docker (basic), Postman, Firebase
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

function Section({ title, children }: any) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b pb-1 mb-3">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Experience({ role, time, items }: any) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold">{role}</h3>
      <p className="text-sm text-gray-500 mb-2">{time}</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
