import MainLayout from "./layouts/MainLayout";
import Navbar from "@/app/layouts/Navbar";
import Introduction from "@/app/components/Introduction";
import AboutMe from "@/app/components/AboutMe";
import Projects from "@/app/components/project-component/Projects";
import BlogAndInsights from "@/app/components/BlogAndInsights";
import Footer from "@/app/layouts/Footer";
import Header from "./layouts/Header";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <MainLayout>
      <Header>
        <Navbar />
        <Introduction />
      </Header>
      <AboutMe />
      <Projects />
    </MainLayout>
  );
}