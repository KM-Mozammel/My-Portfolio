import Header from "@/components/layout/Header";
import Introduction from "@/components/introduction/Introduction";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/project/Projects";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import FloatingMessageButton from "@/components/chat/FloatingMessageButton";
import BlogAndInsights from "@/components/blogs/BlogAndInsights";
import GetInTouch from "@/components/contact/GetInTouch";

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