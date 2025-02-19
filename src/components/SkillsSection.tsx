import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import { Progress } from "./ui/progress";

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  {
    name: "React",
    icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=react",
    proficiency: 90,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=typescript",
    proficiency: 85,
    category: "Languages",
  },
  {
    name: "Node.js",
    icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=nodejs",
    proficiency: 80,
    category: "Backend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=tailwind",
    proficiency: 95,
    category: "Frontend",
  },
  {
    name: "Python",
    icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=python",
    proficiency: 75,
    category: "Languages",
  },
  {
    name: "AWS",
    icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=aws",
    proficiency: 70,
    category: "DevOps",
  },
];

const SkillsSection = ({ skills = defaultSkills }: SkillsSectionProps) => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <TooltipProvider key={skill.name}>
                      <Tooltip>
                        <TooltipTrigger>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Card className="bg-white dark:bg-gray-800">
                              <CardContent className="p-4">
                                <div className="flex items-center space-x-4">
                                  <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img
                                      src={skill.icon}
                                      alt={skill.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium mb-2">
                                      {skill.name}
                                    </h4>
                                    <Progress
                                      value={skill.proficiency}
                                      className="h-2"
                                    />
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.proficiency}% Proficiency</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
