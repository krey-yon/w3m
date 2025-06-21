"use client";
import { ExternalLink, Github } from "lucide-react";
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
        group relative pb-4 transition-all duration-300 border-b cursor-pointer
        hover:scale-[1.01] hover:-translate-y-1
        ${
          isDark
            ? "border-gray-800 hover:border-gray-600"
            : "border-gray-300 hover:border-gray-400"
        }
      `}
    >
      {/* Project Name and Icons */}
      <div className="flex items-center justify-between mb-2">
        <h3
          className={`
            text-base font-medium transition-colors
            ${
              isDark
                ? "text-white group-hover:text-blue-300"
                : "text-gray-900 group-hover:text-blue-600"
            }
          `}
        >
          {name}
        </h3>
        <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-1 rounded transition-colors hover:scale-110
              ${
                isDark
                  ? "text-gray-500 hover:text-blue-400"
                  : "text-gray-500 hover:text-blue-600"
              }
            `}
            title="Live Demo"
          >
            <ExternalLink size={14} />
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-1 rounded transition-colors hover:scale-110
              ${
                isDark
                  ? "text-gray-500 hover:text-blue-400"
                  : "text-gray-500 hover:text-blue-600"
              }
            `}
            title="Source Code"
          >
            <Github size={14} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p
        className={`
          text-sm leading-relaxed line-clamp-2 transition-colors
          ${
            isDark
              ? "text-gray-400 group-hover:text-gray-300"
              : "text-gray-600 group-hover:text-gray-700"
          }
        `}
      >
        {description}
      </p>
    </div>
  );
}
