import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ThemeToggleProps {
  theme?: "light" | "dark";
  onToggle?: () => void;
}

const ThemeToggle = ({
  theme = "light",
  onToggle = () => console.log("Theme toggled"),
}: ThemeToggleProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-2 rounded-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="w-10 h-10 rounded-full"
            >
              {theme === "light" ? (
                <Sun className="h-5 w-5 text-yellow-500 transition-all" />
              ) : (
                <Moon className="h-5 w-5 text-blue-500 transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle {theme === "light" ? "dark" : "light"} mode</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ThemeToggle;
