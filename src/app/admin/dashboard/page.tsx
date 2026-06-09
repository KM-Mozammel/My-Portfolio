"use client";

import { FaProjectDiagram, FaTools, FaBriefcase, FaEnvelope, FaBlog } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch("/api/admin/dashboard")
            .then((res) => res.json())
            .then(setData);
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    label="Projects"
                    value={data.totalProjects}
                    icon={<FaProjectDiagram />}
                    href="/admin/projects"
                />
                <StatCard
                    label="Skills"
                    value={data.totalSkills}
                    icon={<FaTools />}
                    href="/admin/skills"
                />
                <StatCard
                    label="Experience"
                    value={data.totalExperience}
                    icon={<FaBriefcase />}
                    href="/admin/experience"
                />
                <StatCard
                    label="Messages"
                    value={data.totalMessages}
                    icon={<FaEnvelope />}
                    href="/admin/messages"
                />
                <StatCard
                    label="Blog Posts"
                    value={data.totalBlogs}
                    icon={<FaBlog />}
                    href="/admin/blogs"
                />
            </div>

            <Section title="Recent Messages">
                <div className="space-y-3">
                    {data.recentMessages.map((message: any) => (
                        <div
                            key={message.id}
                            className={`group rounded-xl border p-4 transition-all hover:shadow-md hover:border-blue-400 cursor-pointer
        ${!message.is_read
                                    ? "bg-blue-50 border-blue-200"
                                    : "bg-white border-gray-200"
                                }`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                {/* Left */}
                                <div className="flex gap-3 flex-1">
                                    {/* Avatar */}
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                                        {message.sender_name?.charAt(0)}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-semibold text-gray-900">
                                                {message.sender_name}
                                            </h4>

                                            {!message.is_read && (
                                                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                                                    New
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm text-gray-500">
                                            {message.sender_email}
                                        </p>

                                        <p className="mt-2 font-medium text-gray-800">
                                            {message.subject}
                                        </p>

                                        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                            {message.body}
                                        </p>
                                    </div>
                                </div>

                                {/* Right */}
                                <div className="text-right shrink-0">
                                    <p className="text-xs text-gray-500">
                                        {new Date(message.created_at).toLocaleDateString()}
                                    </p>

                                    <span
                                        className={`mt-2 inline-flex rounded-full px-2 py-1 text-xs font-medium
              ${message.is_read
                                                ? "bg-green-100 text-green-700"
                                                : "bg-orange-100 text-orange-700"
                                            }`}
                                    >
                                        {message.is_read ? "Read" : "Unread"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>


            {/* Recent Blogs */}
            <Section title="Recent Blogs">
                {data.recentBlogs.map((b: any) => (
                    <div key={b.id} className="border-b py-2">
                        {b.title}
                    </div>
                ))}
            </Section>
        </div>
    );
}

function StatCard({ label, value, icon, href }: any) {
    return (
        <Link
            href={href}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
        >
            <div className="text-4xl text-blue-500 mb-2">{icon}</div>
            <span className="text-xl font-semibold">{label}</span>
            <span className="text-3xl font-bold text-blue-600">{value}</span>
        </Link>
    );
}

function Section({ title, children }: any) {
    return (
        <div className="mt-6">
            <h2 className="font-bold mb-2">{title}</h2>
            <div className="border p-3 rounded">{children}</div>
        </div>
    );
}
