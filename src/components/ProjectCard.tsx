import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags?: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features. This showcases the main functionality and purpose of the project.",
  imageUrl = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  demoUrl = "#",
  githubUrl = "#",
  tags = ["React", "TypeScript", "Tailwind"],
}: ProjectCardProps) => {
  return (
    <Card className="w-[380px] h-[420px] bg-white dark:bg-gray-800 overflow-hidden flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => window.open(demoUrl, "_blank")}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Live Demo
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => window.open(githubUrl, "_blank")}
        >
          <Github className="w-4 h-4 mr-2" />
          Code
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
