import Resume from "./Resume";
import SEO from "./SEO";
import CallButton from "./FloatingCallButton";
import Footer from "./Footer";

export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            className="relative cursor-default min-h-screen"
            style={{
                backgroundColor: "var(--background-color)",
                color: "var(--text-color)",
            }}
        >
            <SEO
                title="Mozammel | Portfolio"
                description="Full Stack Developer portfolio website"
                ogTitle="Mozammel Portfolio"
                ogDescription="Check out my projects and experience."
            />

            <Resume />
            {children}
        </div>
    );
}