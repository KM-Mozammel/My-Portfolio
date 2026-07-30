"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_NAVIGATION } from "../constants/admin-navigation";

interface Props {
    sidebarOpen: boolean;
    closeSidebar: () => void;
}

export default function AdminSidebar({
    sidebarOpen,
    closeSidebar,
}: Props) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/admin/logout", {
                method: "POST",
            });

            if (res.ok) {
                router.push("/admin/login");
                router.refresh();
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <aside
            className={`fixed inset-y-0 left-0 transform ${sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
                } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 h-screen p-5 z-40 border-r backdrop-blur-xl`}
            style={{
                background: "rgba(23,32,51,.95)",
                borderColor: "var(--border-color)",
                color: "var(--text-color)",
            }}
        >
            <div className="mb-8">
                <Link href="/admin">
                    <h1
                        className="text-2xl font-bold"
                        style={{
                            background:
                                "var(--hero-gradient)",
                            WebkitBackgroundClip:
                                "text",
                            WebkitTextFillColor:
                                "transparent",
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

            <nav className="flex flex-col gap-2">
                {ADMIN_NAVIGATION.map((item) => {
                    const active =
                        pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeSidebar}
                            className="px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-1"
                            style={{
                                background: active
                                    ? "var(--hero-gradient)"
                                    : "transparent",
                                color:
                                    "var(--text-color)",
                            }}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section: Logout Button */}
            <div className="pt-4 mt-4 border-t border-gray-800">
                <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors flex items-center justify-between"
                >
                    <span>Log out</span>
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                </button>
            </div>
        </aside>
    );
}