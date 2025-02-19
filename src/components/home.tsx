import React from "react";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

interface HomeProps {
  theme?: "light" | "dark";
  onThemeToggle?: () => void;
}

const Home = ({
  theme = "light",
  onThemeToggle = () => console.log("Theme toggled"),
}: HomeProps) => {
  const projectsRef = React.useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 right-4 z-50"
      >
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </motion.div>

      <main className="relative">
        <HeroSection onExploreClick={scrollToProjects} />

        <div ref={projectsRef}>
          <ProjectsGrid />
        </div>

        <SkillsSection />

        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
