import { db } from "../../db/index";
import { projects } from "../../db/schema";

async function main() {
    try {
        await db.insert(projects).values([
            {
                title: "Personal Portfolio & AI Platform",
                description:
                    "Modern full-stack portfolio platform built with Next.js, TypeScript, Tailwind CSS, Drizzle ORM, PostgreSQL, and Neon. Designed to showcase projects, technical articles, career journey, and future AI-powered assistant capabilities through vector embeddings and Retrieval-Augmented Generation (RAG).",
                imageUrl: "https://mozammel-portfolio.vercel.app/og-image.png",
                githubUrl: "https://github.com/mozammelkhandakar/portfolio",
                liveUrl: "https://mozammel-portfolio.vercel.app",
                featured: true,
            },

            {
                title: "PixelPlanner - Visual Task Management System",
                description:
                    "A modern Angular-based Kanban productivity application featuring draggable pixel cards, task organization, responsive dashboard design, and backend synchronization. Built to demonstrate advanced Angular architecture, component communication, and state management techniques.",
                imageUrl:
                    "https://raw.githubusercontent.com/mozammelkhandakar/pixelplanner/main/demo.png",
                githubUrl:
                    "https://github.com/mozammelkhandakar/pixelplanner",
                liveUrl: "",
                featured: true,
            },

            {
                title: "Restaurant Ordering & Management Platform",
                description:
                    "Contributed as a Backend Developer to a large-scale restaurant management solution serving UK-based businesses. Developed scalable ASP.NET Core APIs, MySQL stored procedures, food item categorization systems, cart management modules, and menu filtering functionalities using Clean Architecture principles.",
                imageUrl: "",
                githubUrl: "",
                liveUrl: "",
                featured: true,
            },

            {
                title: "Real-Time Community Chat Application",
                description:
                    "Designed and implemented a real-time messaging platform using ASP.NET Core Web API, CQRS, Clean Architecture, SignalR, and MySQL. Features include private messaging, group conversations, message replies, pinned chats, and scalable event-driven communication.",
                imageUrl: "",
                githubUrl: "",
                liveUrl: "",
                featured: true,
            },

            {
                title: "eKutum E-Commerce Platform",
                description:
                    "Developed and maintained a production-ready e-commerce platform featuring responsive UI, WooCommerce integration, custom PHP modules, payment workflow customization, and content management solutions. Focused on improving user experience and business operations.",
                imageUrl: "",
                githubUrl: "",
                liveUrl: "https://ekutum.com",
                featured: false,
            },

            {
                title: "ATS (Applicant Tracking System)",
                description:
                    "Full-stack recruitment platform concept integrating ASP.NET Core Web API, React.js, AI-powered candidate evaluation, job management workflows, and automated recruitment processes. Designed to streamline hiring operations and candidate tracking.",
                imageUrl: "",
                githubUrl: "",
                liveUrl: "",
                featured: false,
            },

            {
                title: "Hospital Content & Digital Marketing Portfolio",
                description:
                    "Created healthcare-focused visual content, promotional posters, social media campaigns, bilingual content calendars, and marketing materials for medical institutions. Demonstrates creative design, branding, and digital communication skills.",
                imageUrl:
                    "https://mozammel-portfolio.vercel.app/hospital-content.png",
                githubUrl: "",
                liveUrl: "",
                featured: false,
            },

            {
                title: "Music Production & Audio Engineering Portfolio",
                description:
                    "Produced original music compositions, rap instrumentals, vocal recordings, audio mixing, mastering, and studio production projects through Muzu's Studio. Combines technical creativity with digital audio engineering expertise.",
                imageUrl: "",
                githubUrl: "",
                liveUrl: "",
                featured: false,
            },
        ]);

        console.log("✅ Database seeded successfully.");
    } catch (error) {
        console.error("❌ Error seeding database:", error);
    } finally {
        process.exit(0);
    }
}

main();