"use client";

interface Props {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

export default function MobileMenuButton({
    sidebarOpen,
    toggleSidebar,
}: Props) {
    return (
        <button
            onClick={toggleSidebar}
            className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-xl shadow-lg"
            style={{
                background:
                    "var(--accent-primary)",
                color: "#fff",
            }}
        >
            {sidebarOpen ? "✕" : "☰"}
        </button>
    );
}