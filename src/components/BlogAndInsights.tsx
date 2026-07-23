'use client';

import React, { useEffect, useState } from "react";

type Blog = {
    id: string;
    title: string;
    excerpt: string | null;
    coverImage: string | null;
    publishedAt: string | null;
    slug: string;
    canonicalUrl?: string | null;
};

const BlogAndInsights = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("/api/public/blogs");
                const data = await res.json();
                setBlogs(data);
            } catch (err) {
                console.error("Failed to load blogs", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="p-4 md:py-8 sm:px-20">
            <span className="text-2xl font-bold border-b-1 pb-2">
                Blog & Insights
            </span>
            <p className="pt-4 pb-4">Latest articles & Tutorials</p>

            {loading ? (
                <p>Loading blogs...</p>
            ) : (
                <div className="flex flex-col sm:flex-row gap-5 w-full flex-wrap">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="border rounded-xl overflow-hidden bg-white w-full sm:flex-1 min-w-[260px]"
                        >
                            {/* Image */}
                            <img
                                src={blog.coverImage || "/img/default.jpg"}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4 space-y-3">
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-gray-600">
                                    {blog.excerpt}
                                </p>

                                {/* Date */}
                                <span className="block text-xs text-gray-500">
                                    {blog.publishedAt
                                        ? new Date(blog.publishedAt).toDateString()
                                        : ""}
                                </span>

                                {/* Read More */}
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/mozammel-khandakar/"
                                    // href={blog.canonicalUrl || `/blog/${blog.slug}`}
                                >
                                    <button className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                                        Read more →
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogAndInsights;