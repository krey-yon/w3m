"use client";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  live: string;
  sourceCode: string;
}

export default function ProjectCard({
  name,
  description,
  live,
  sourceCode,
}: ProjectCardProps) {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        group relative py-8 transition-all duration-500 hover:translate-x-2
        ${
          isDark
            ? "border-l-2 border-gray-800/50 hover:border-gray-600/70"
            : "border-l-2 border-gray-200/50 hover:border-gray-400/70"
        }
      `}
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-8 w-3 h-3 rounded-full -translate-x-1/2 transition-all duration-500 ${
        isDark 
          ? "bg-gray-700 group-hover:bg-gray-400 group-hover:shadow-lg group-hover:shadow-gray-400/50" 
          : "bg-gray-300 group-hover:bg-gray-600 group-hover:shadow-lg group-hover:shadow-gray-600/50"
      }`} />
      
      <div className="pl-8">
        {/* Project header */}
        <div className="flex items-center justify-between mb-4">
          <h3
            className={`
              text-xl font-medium transition-all duration-300 group-hover:translate-x-1
              ${
                isDark
                  ? "text-gray-100 group-hover:text-white"
                  : "text-gray-900 group-hover:text-black"
              }
            `}
          >
            {name}
          </h3>
          
          {/* Links - slide in from right */}
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-2 rounded-lg transition-all duration-200 hover:scale-110
                ${
                  isDark
                    ? "text-gray-500 hover:text-gray-300 hover:bg-gray-800/50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                }
              `}
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-2 rounded-lg transition-all duration-200 hover:scale-110
                ${
                  isDark
                    ? "text-gray-500 hover:text-gray-300 hover:bg-gray-800/50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                }
              `}
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p
          className={`
            text-base leading-relaxed transition-all duration-300 group-hover:translate-x-1
            ${isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"}
          `}
        >
          {description}
        </p>

        {/* Subtle indicator arrow */}
        <div className={`flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-60 transition-all duration-300 translate-x-2 group-hover:translate-x-1 ${
          isDark ? "text-gray-600" : "text-gray-400"
        }`}>
          <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          <span className="text-sm font-medium">Explore</span>
        </div>
      </div>
    </div>
  );
}
