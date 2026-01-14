"use client";

import ExperienceSection from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LinksSection from "./components/Links";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#121212] mx-auto py-4 px-2 md:px-8 overflow-x-clip">
      <HeroSection />
      <LinksSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}
