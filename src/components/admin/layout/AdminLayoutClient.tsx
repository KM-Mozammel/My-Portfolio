"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import MobileMenuButton from "./MobileMenuButton";

interface Props {
    children: React.ReactNode;
}

export default function AdminLayoutClient({
    children,
}: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div
            className="flex min-h-screen"
            style={{
                background: "var(--background-color)",
                color: "var(--text-color)",
            }}
        >
            <MobileMenuButton
                sidebarOpen={sidebarOpen}
                toggleSidebar={() =>
                    setSidebarOpen((prev) => !prev)
                }
            />

            {sidebarOpen && (
                <div
                    className="md:hidden fixed inset-0 z-30 bg-black/50"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <AdminSidebar
                sidebarOpen={sidebarOpen}
                closeSidebar={() => setSidebarOpen(false)}
            />

            <main
                className="flex-1 h-screen overflow-y-auto md:ml-64"
                style={{
                    background: "var(--background-color)",
                }}
            >
                <div className="p-6 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}