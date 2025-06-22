"use client";
import Image from "next/image";
import { personalData } from "@/Data/personalInfo";
import { contactData } from "@/Data/Contact";
import { projects } from "@/Data/project";
import { skillsData } from "@/Data/skills";
import ProjectCard from "@/Components/ProjectCard";
import { Mail, Github, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/Components/ThemeToggle";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <>
      {/* Fixed Background */}
      <div
        className={`
          fixed inset-0 -z-10 w-full mobile-viewport-fix
          ${
            isDark
              ? "[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#6633ee_100%)]"
              : "bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"
          }
        `}
      />

      {/* Scrollable Content */}
      <div
        className={`relative min-h-screen font-caprasimo p-4 md:p-8 max-w-4xl mx-auto pb-24 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {/* Header */}
        <header className="mb-12 font-caprasimo pt-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Image
                src={personalData.ProfilePicture}
                alt={personalData.Name}
                width={64}
                height={64}
                className={`w-16 h-16 rounded-full border-2 ${
                  isDark ? "border-gray-700" : "border-gray-300"
                }`}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">
                    {personalData.Name.toLowerCase()}
                  </h1>
                  <Image
                    src="/icons8-tick-50.png"
                    alt="Verified"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  @{personalData.Alias.toLowerCase()}
                </p>
              </div>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <h2
            className={`text-xl mb-4 font-dotz ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            About
          </h2>
          <div
            className={`mb-4 font-mono text-sm ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            [ break → understand → build ]
          </div>
          <div
            className={`space-y-4 leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <p>{personalData.aboutMe}</p>
            <p>
              I&apos;m a {personalData.CurrentYear} {personalData.Degree}{" "}
              student at {personalData.College}, and a{" "}
              {personalData.role.join(", ")}.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2
            className={`text-xl mb-4 font-dotz ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skillsData.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded text-sm border ${
                  isDark
                    ? "bg-gray-800 text-gray-300 border-gray-700"
                    : "bg-gray-100 text-gray-700 border-gray-300"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2
            className={`text-xl mb-6 font-dotz ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Projects
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
        <div
          className={`flex items-center gap-2 backdrop-blur-lg border rounded-2xl px-4 py-2 shadow-2xl ${
            isDark
              ? "bg-gray-900/25 border-gray-700/50"
              : "bg-white/25 border-gray-300/50"
          }`}
        >
          <a
            href={`mailto:${contactData.email}`}
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="Email"
          >
            <Mail
              size={18}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            />
          </a>

          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="GitHub"
          >
            <Github
              size={18}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            />
          </a>

          <a
            href={contactData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="Twitter"
          >
            <Twitter
              size={18}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            />
          </a>

          <a
            href={contactData.discord}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="Discord"
          >
            <FaDiscord
              size={18}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            />
          </a>
        </div>
      </div>
    </>
  );
}
