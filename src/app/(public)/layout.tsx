import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import PageTracker from "@/components/PageTracker";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/project-component/Projects";
import MainLayout from "@/components/MainLayout";
import FloatingMessageButton from "@/components/chat/FloatingMessageButton";
import GetInTouch from "@/components/GetInTouch";
import BlogAndInsights from "@/components/BlogAndInsights";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      {/* 📊 Automatically tracks every visitor on public pages */}
      {/* <PageTracker />  */}
      <Header>
        <Navbar />
        <Introduction />
      </Header>
      <AboutMe />
      <Projects />
      <FloatingMessageButton />
      <FloatingCallButton />
      <BlogAndInsights />
      <GetInTouch />
      <Footer />
    </MainLayout>
  );
}