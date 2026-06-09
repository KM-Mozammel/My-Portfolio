export default function Header({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            className="relative w-full"
            style={{
                backgroundImage: 'url("/img/person2.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark overlay for readability */}
            <div
                className="absolute inset-0"
                style={{
                    background: "rgba(0, 0, 0, 0.55)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-[var(--text-color)]">
                {children}
            </div>
        </div>
    );
}