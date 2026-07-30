import Header from "@/components/public/layout/Header";
import Introduction from "@/components/public/introduction/Introduction";
import AboutMe from "@/components/public/AboutMe";
import Projects from "@/components/public/project/Projects";
import FloatingCallButton from "@/components/public/ui/FloatingCallButton";
import FloatingMessageButton from "@/components/public/chat/FloatingMessageButton";
import BlogAndInsights from "@/components/public/blogs/BlogAndInsights";
import GetInTouch from "@/components/public/contact/GetInTouch";

export default function PortfolioHomePage() {
    return (
        <>
            <Introduction />
            <AboutMe />
            <Projects />
            <FloatingMessageButton />
            <FloatingCallButton />
            <BlogAndInsights />
            <GetInTouch />
        </>
    );
}