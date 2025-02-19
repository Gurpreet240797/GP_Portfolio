import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
  category: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Weather Dashboard",
    description: "Real-time weather tracking application using OpenWeather API",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["React", "API Integration", "TypeScript"],
    category: "Frontend",
  },
  {
    id: "3",
    title: "Task Management API",
    description: "RESTful API for task management with authentication",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
  },
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const ProjectsGrid = ({ projects = defaultProjects }: ProjectsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory,
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A collection of my recent work and personal projects
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              tags={project.tags}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
