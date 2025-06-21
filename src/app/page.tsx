import Image from "next/image";
import { personalData } from "@/Data/personalInfo";
import { contactData } from "@/Data/Contact";
import { projects } from "@/Data/project";
import { skillsData } from "@/Data/skills";
import ProjectCard from "@/Components/ProjectCard";
import { Mail, Github, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="min-h-scree text-white p-4 md:p-8 max-w-4xl mx-auto pb-24">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={personalData.ProfilePicture}
              alt={personalData.Name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full border-2 border-gray-700"
            />
            <div>
              <h1 className="text-2xl font-bold">
                {personalData.Name.toLowerCase()}
              </h1>
              <p className="text-gray-400">
                @{personalData.Alias.toLowerCase()}
              </p>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-green-400 text-xl mb-4 font-dotz"> about</h2>
          <div className="text-gray-300 mb-4 font-mono text-sm">
            [ break → understand → build ]
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>{personalData.aboutMe}</p>
            <p>
              I&apos;m a {personalData.CurrentYear} {personalData.Degree}{" "}
              student at {personalData.College}, working as a{" "}
              {personalData.role.join(", ")}.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-green-400 text-xl mb-4 font-dotz"> skills</h2>
          <div className="flex flex-wrap gap-2">
            {skillsData.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm border border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-green-400 text-xl mb-6 font-dotz">
             projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                live={project.live}
                sourceCode={project.sourceCode}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Sticky Contact Dock - Always at bottom */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 rounded-2xl px-4 py-2 shadow-2xl">
          <a
            href={`mailto:${contactData.email}`}
            className="group relative p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            title="Email"
          >
            <Mail
              size={18}
              className="text-gray-400 group-hover:text-blue-400 transition-colors"
            />
          </a>

          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            title="GitHub"
          >
            <Github
              size={18}
              className="text-gray-400 group-hover:text-blue-400 transition-colors"
            />
          </a>

          <a
            href={contactData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            title="Twitter"
          >
            <Twitter
              size={18}
              className="text-gray-400 group-hover:text-blue-400 transition-colors"
            />
          </a>

          <a
            href={contactData.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            title="Discord"
          >
            <FaDiscord 
              size={18}
              className="text-gray-400 group-hover:text-blue-400 transition-colors"
            />
          </a>
        </div>
      </div>
    </>
  );
}
