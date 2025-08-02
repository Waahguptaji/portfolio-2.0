"use client";
import React from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import { projects } from "@/constants/projects"; // Import project data from your constants file
import ProjectCard from "../ui/Card"; // Import the new reusable component from the UI folder

const MyWork = () => {
  return (
    <AnimatedSectionWrapper id="Projects">
      <section
        id="Projects"
        className="min-h-screen flex flex-col md:flex-row justify-between"
      >
        {/* Left-side title and description */}
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
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Here are a few highlights from over 20 projects I've worked on.
          </p>
        </div>

        {/* Right-side grid of project cards */}
        <div className="p-6 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-auto">
            {/* Map over the projects data and render a ProjectCard for each one */}
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default MyWork;
