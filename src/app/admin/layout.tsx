"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decoded = jwt.decode(token) as { role?: string };

        if (decoded?.role === "admin") {
          setIsAdmin(true);
        }
      } catch {
        setIsAdmin(false);
      }
    }

    setLoading(false);
  }, []);

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Projects", href: "/admin/projects" },
    { name: "Skills", href: "/admin/skills" },
    { name: "Experience", href: "/admin/experience" },
    { name: "Education", href: "/admin/education" },
    { name: "Blogs", href: "/admin/blogs" },
    { name: "Testimonials", href: "/admin/testimonials" },
    { name: "Messages", href: "/admin/messages" },
    { name: "Contacts", href: "/admin/contacts" },
    { name: "Settings", href: "/admin/settings" },
    { name: "Intructions", href: "/admin/hero" },
  ];

  if (loading) {
    return (
      <div
        className="flex min-h-screen items-center justify-center"
        style={{
          background: "var(--background-color)",
          color: "var(--text-color)",
        }}
      >
        <div
          className="px-8 py-5 rounded-2xl border"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--border-color)",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          <p className="text-lg font-semibold">
            Loading Admin Panel...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex min-h-screen"
      style={{
        background: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      {isAdmin && (
        <>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-xl shadow-lg transition-all duration-300"
            style={{
              background: "var(--accent-primary)",
              color: "#fff",
            }}
          >
            {sidebarOpen ? "✕" : "☰"}
          </button>

          {/* Overlay */}
          {sidebarOpen && (
            <div
              className="md:hidden fixed inset-0 z-30 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`fixed md:fixed inset-y-0 left-0 transform ${sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
              } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 h-screen p-5 z-40 border-r backdrop-blur-xl`}
            style={{
              background: "rgba(23, 32, 51, 0.95)",
              borderColor: "var(--border-color)",
              color: "var(--text-color)",
            }}
          >
            {/* Logo / Title */}
            <div className="mb-8">
              <Link href="/admin">
                <h1
                  className="text-2xl font-bold"
                  style={{
                    background: "var(--hero-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Admin Panel
                </h1>
              </Link>

              <p
                className="text-sm mt-1"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Portfolio Management
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className="px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-1"
                    style={{
                      background: active
                        ? "var(--hero-gradient)"
                        : "transparent",
                      color: "var(--text-color)",
                      border: active
                        ? "none"
                        : "1px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background =
                          "var(--hover-bg)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background =
                          "transparent";
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main
        className={`flex-1 h-screen overflow-y-auto ${isAdmin ? "md:ml-64" : ""
          }`}
        style={{
          background: "var(--background-color)",
        }}
      >
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  );
}