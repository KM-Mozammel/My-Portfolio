import FooterSection from "../components/FooterSection";
import Resume from "../components/Resume";
import SEO from "../components/SEO";
import CallButton from "./FloatingCallButton";
import Footer from "./Footer";

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="relative cursor-default bg-gray-50">
            <SEO
                title="Mozammel | Portfolio"
                description="Full Stack Developer portfolio website"
                ogTitle="Mozammel Portfolio"
                ogDescription="Check out my projects and experience."
            />
            <Resume />
            <CallButton />
            {children}
            <FooterSection />
            <Footer />
        </div>
    )
}