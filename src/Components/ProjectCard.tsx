import { ExternalLink, Github } from "lucide-react";

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
  return (
    <div className="group relative border-b border-gray-800 pb-4 hover:border-gray-600 transition-all duration-300">
      {/* Project Name and Icons */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white text-base font-medium group-hover:text-green-400 transition-colors">
          {name}
        </h3>
        <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded text-gray-500 hover:text-blue-400 transition-colors"
            title="Live Demo"
          >
            <ExternalLink size={14} />
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded text-gray-500 hover:text-blue-400 transition-colors"
            title="Source Code"
          >
            <Github size={14} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
        {description}
      </p>
    </div>
  );
}
