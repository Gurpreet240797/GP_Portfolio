import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  onExploreClick?: () => void;
}

const HeroSection = ({
  name = "John Doe",
  title = "Full Stack Developer",
  description = "I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and performant applications that solve real-world problems.",
  imageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  onExploreClick = () => {},
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-900 flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
            >
              Hi, I&apos;m {name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400"
            >
              {title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-4"
          >
            <Button size="lg" onClick={onExploreClick} className="group">
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(socialLinks.github, "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(socialLinks.linkedin, "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(socialLinks.twitter, "_blank")}
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative aspect-square max-w-md mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl" />
          <img
            src={imageUrl}
            alt={name}
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
