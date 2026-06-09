"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  // Load projects from API
  const load = () => {
    fetch("/api/admin/projects", { cache: "no-store" })
      .then((res) => res.json())
      .then(setProjects);
  };

  useEffect(() => {
    load();
  }, []);

  const deleteProject = async (id: string) => {
    await fetch(`/api/admin/projects/${id}`, {
      method: "DELETE",
    });
    load();
  };

  const toggleFeatured = async (project: any) => {
    try {
      const res = await fetch(`/api/projects/${project.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          featured: !project.featured,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update project");
      }

      await load();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-500">
            Manage portfolio projects
          </p>
        </div>

        <Link
          href="/admin/projects/create"
          className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
        >
          + New Project
        </Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm">Total Projects</p>
          <h2 className="text-3xl font-bold">{projects.length}</h2>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm">Featured</p>
          <h2 className="text-3xl font-bold">
            {projects.filter((p) => p.featured).length}
          </h2>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm">Public Projects</p>
          <h2 className="text-3xl font-bold">
            {projects.filter((p) => p.live_url).length}
          </h2>
        </div>
      </div>

      {/* Projects */}
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            {/* Thumbnail */}
            <div className="h-48 bg-gray-100 overflow-x-auto flex">
              {project.images ? (
                (() => {
                  const images =
                    typeof project.images === "string"
                      ? JSON.parse(project.images)
                      : project.images;

                  return Array.isArray(images) ? (
                    images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title}-${i}`}
                        className="w-full h-full object-cover border-r-blue-700 flex-shrink-0"
                      />
                    ))
                  ) : (
                    <img
                      src={images}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  );
                })()
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400 w-full">
                  No Image
                </div>
              )}
            </div>

            <div className="p-5">
              {/* Top */}
              <div className="flex justify-between items-start gap-3">
                <h2 className="font-bold text-lg">
                  {project.title}
                </h2>

                {project.featured && (
                  <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-3 mt-4">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    className="text-sm text-blue-600"
                  >
                    GitHub
                  </a>
                )}

                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    className="text-sm text-green-600"
                  >
                    Live Demo
                  </a>
                )}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-5 pt-4 border-t">
                <span className="text-xs text-gray-500">
                  {new Date(project.created_at).toLocaleDateString()}
                </span>

                <div className="flex gap-3">
                  <button
                    onClick={() => toggleFeatured(project)}
                    className={`px-3 py-1 rounded-lg text-sm
                ${project.featured
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-200"
                      }`}
                  >
                    {project.featured
                      ? "★ Featured"
                      : "☆ Feature"}
                  </button>

                  <Link
                    href={`/admin/projects/${project.id}/edit`}
                    className="px-3 py-1 rounded-lg bg-blue-500 text-white"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteProject(project.id)}
                    className="px-3 py-1 rounded-lg bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
