"use client";
import React from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  image: string;
  tag: string;
  tagColor: string;
  borderColor: string;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Rush Bite - Food Delivery App",
    image: "/assets/projects/rush-bite.png",
    tag: "React & Redux",
    tagColor: "bg-blue-400 dark:bg-blue-600",
    borderColor: "border-blue-500 dark:border-blue-700",
    liveLink: "https://rushbite.vercel.app/",
    githubLink: "https://github.com/Waahguptaji/Rush-Bite",
  },
  {
    title: "Hooked - Online Music App",
    image: "/assets/projects/hooked.png",
    tag: "React & Spotify API",
    tagColor: "bg-green-400 dark:bg-green-600",
    borderColor: "border-green-500 dark:border-green-700",
    liveLink: "https://hooked.vercel.app/",
    githubLink: "https://github.com/Waahguptaji/hooked-app",
  },
  {
    title: "Pixel Technology Website",
    image: "/assets/projects/pixel-tech.png",
    tag: "Next.js ",
    tagColor: "bg-pink-400 dark:bg-pink-600",
    borderColor: "border-pink-500 dark:border-pink-700",
    liveLink: "https://pixeltechnology.in/",
    githubLink: "https://github.com/Waahguptaji/pixel-tech-website-revamp",
  },
  {
    title: "Weather App",
    image: "/assets/projects/weather-app.png",
    tag: "React & Weather API",
    tagColor: "bg-yellow-400 dark:bg-yellow-600",
    borderColor: "border-yellow-500 dark:border-yellow-700",
    liveLink: "https://weather-app-iota-gilt-56.vercel.app/",
    githubLink: "https://github.com/Waahguptaji/weather-app",
  },
];

const MyWork = () => {
  return (
    <AnimatedSectionWrapper id="Projects">
      <section
        id="Projects"
        className="min-h-screen flex flex-col md:flex-row justify-between"
      >
        <div className="flex flex-col gap-2 ">
          <div className="text-2xl logo-font inline-block mb-4 text-black dark:text-white">
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              show={true}
              color="var(--highlight-color)"
            >
              Featured Projects
            </RoughNotation>
          </div>
          <div>
            <Image
              src="/assets/arrowe.png"
              alt="arrow"
              width={57}
              height={45}
              className="transform rotate-[230deg] mb-8 relative left-20 dark:hidden"
            />
            <Image
              src="/assets/dark/darkArrow.png"
              alt="arrow"
              width={57}
              height={45}
              className="transform rotate-[230deg] mb-8 relative left-20 hidden dark:block"
            />
          </div>
          <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-xs">
            Here are a few highlights from over 20 projects I've worked on.
          </p>
        </div>

        <div className="p-6 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-[4px] shadow-md border border-gray-300 dark:border-gray-600 overflow-hidden transition-all duration-300 relative group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="flex justify-center items-center p-2">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-[4px]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-2 hover:text-blue-400 transition-colors duration-300"
                      >
                        <ExternalLink size={24} />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-2 hover:text-blue-400 transition-colors duration-300"
                      >
                        <Github size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex p-4 gap-2 justify-between items-center">
                  <div className="text-lg font-bold logo-font mb-2 text-black dark:text-white">
                    {project.title}
                  </div>
                  <div
                    className={`px-2 text-center py-0 rounded-3xl rounded-tl-none text-sm border-2 ${project.borderColor} ${project.tagColor} text-white`}
                  >
                    {project.tag}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default MyWork;
