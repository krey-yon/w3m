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
      {/* Clean Background */}
      <div
        className={`
          fixed inset-0 -z-10 h-full w-full
          ${
            isDark
              ? "bg-gray-950"
              : "bg-gray-50"
          }
        `}
      >
        {/* Subtle gradient overlay */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "[background:radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%)]"
              : "[background:radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_50%)]"
          }`}
        />
      </div>

      {/* Main Content */}
      <div
        className={`relative min-h-screen p-6 md:p-8 max-w-4xl mx-auto pb-32 ${
          isDark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        {/* Clean Header */}
        <header className="mb-20 pt-16">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Image
                  src={personalData.ProfilePicture}
                  alt={personalData.Name}
                  width={72}
                  height={72}
                  className={`w-18 h-18 rounded-full transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? "border border-gray-800 shadow-lg" 
                      : "border border-gray-200 shadow-md"
                  }`}
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
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
                <p className={`text-base ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  @{personalData.Alias.toLowerCase()}
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* About Section */}
        <section className="mb-20">
          <h2 className={`text-sm font-medium uppercase tracking-wider mb-8 ${
            isDark ? "text-gray-500" : "text-gray-500"
          }`}>
            About
          </h2>
          
          <div className={`mb-8 font-mono text-sm px-4 py-2 rounded-lg inline-block ${
            isDark 
              ? "bg-gray-900/50 text-gray-400 border border-gray-800/50" 
              : "bg-white text-gray-600 border border-gray-200"
          }`}>
            [ break → understand → build ]
          </div>
          
          <div className="space-y-6">
            <div className={`text-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}>
              <p>{personalData.aboutMe}</p>
            </div>
            
            <div className={`text-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}>
              <p>
                I&apos;m a <span className={`font-medium ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {personalData.CurrentYear} {personalData.Degree}
                </span>{" "}
                student at <span className={`font-medium ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {personalData.College}
                </span>, working as a{" "}
                <span className={`font-medium ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {personalData.role.join(", ")}
                </span>.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className={`text-sm font-medium uppercase tracking-wider mb-8 ${
            isDark ? "text-gray-500" : "text-gray-500"
          }`}>
            Skills
          </h2>
          
          <div className="space-y-6 overflow-hidden">
            {/* First Row - Moving Right */}
            <div className="flex animate-marquee-right">
              <div className="flex gap-4 whitespace-nowrap">
                {skillsData.slice(0, Math.ceil(skillsData.length / 2)).map((skill, index) => (
                  <div
                    key={`right-${index}`}
                    className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 flex-shrink-0 ${
                      isDark
                        ? "bg-gray-900/50 text-gray-300 border-gray-800/50 hover:bg-gray-800/50 hover:border-gray-700/50 hover:text-white"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-4 whitespace-nowrap ml-4">
                {skillsData.slice(0, Math.ceil(skillsData.length / 2)).map((skill, index) => (
                  <div
                    key={`right-dup-${index}`}
                    className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 flex-shrink-0 ${
                      isDark
                        ? "bg-gray-900/50 text-gray-300 border-gray-800/50 hover:bg-gray-800/50 hover:border-gray-700/50 hover:text-white"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Left */}
            <div className="flex animate-marquee-left">
              <div className="flex gap-4 whitespace-nowrap">
                {skillsData.slice(Math.ceil(skillsData.length / 2)).map((skill, index) => (
                  <div
                    key={`left-${index}`}
                    className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 flex-shrink-0 ${
                      isDark
                        ? "bg-gray-900/50 text-gray-300 border-gray-800/50 hover:bg-gray-800/50 hover:border-gray-700/50 hover:text-white"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-4 whitespace-nowrap ml-4">
                {skillsData.slice(Math.ceil(skillsData.length / 2)).map((skill, index) => (
                  <div
                    key={`left-dup-${index}`}
                    className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 flex-shrink-0 ${
                      isDark
                        ? "bg-gray-900/50 text-gray-300 border-gray-800/50 hover:bg-gray-800/50 hover:border-gray-700/50 hover:text-white"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className={`text-sm font-medium uppercase tracking-wider mb-8 ${
            isDark ? "text-gray-500" : "text-gray-500"
          }`}>
            Projects
          </h2>
          
          <div className="space-y-0">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="opacity-0 animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  live={project.live}
                  sourceCode={project.sourceCode}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Enhanced Contact Dock */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
            isDark
              ? "bg-gray-900/90 backdrop-blur-xl border-gray-800 shadow-2xl"
              : "bg-white/90 backdrop-blur-xl border-gray-200 shadow-lg"
          }`}
        >
          <a
            href={`mailto:${contactData.email}`}
            className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark
                ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`}
            title="Email"
          >
            <Mail size={18} />
          </a>

          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark
                ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`}
            title="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href={contactData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark
                ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`}
            title="Twitter"
          >
            <Twitter size={18} />
          </a>

          <a
            href={contactData.discord}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark
                ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`}
            title="Discord"
          >
            <FaDiscord size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
