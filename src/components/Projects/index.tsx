"use client";
import React from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";

interface Project {
  title: string;
  image: string;
  tag: string;
  tagColor: string;
  borderColor: string;
}

const projects: Project[] = [
  {
    title: "Rush Bite - Food Delivery App",
    image: "/assets/projects/rush-bite.png",
    tag: "React & Tailwind CSS",
    tagColor: "bg-blue-400",
    borderColor: "border-blue-500",
  },
  {
    title: "Hooked - Online Music App",
    image: "/assets/projects/hooked.png",
    tag: "React & Spotify API",
    tagColor: "bg-green-400",
    borderColor: "border-green-500",
  },
  {
    title: "Pixel Technology Website",
    image: "/assets/projects/pixel-tech.png",
    tag: "Next.js ",
    tagColor: "bg-pink-400",
    borderColor: "border-pink-500",
  },
  {
    title: "Color System for App",
    image: "/color-system.png",
    tag: "UI Design",
    tagColor: "bg-yellow-400",
    borderColor: "border-yellow-500",
  },
];

const Projects = (props: Project) => {
  return (
    <AnimatedSectionWrapper id="Projects">
      <section
        id="Projects"
        className="min-h-screen flex justify-between  ml-10"
      >
        <div className="flex flex-col gap-2 my-36">
          <div className="text-2xl logo-font inline-block mb-4">
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              show={true}
              color="pink"
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
              className="transform rotate-[230deg] mb-6 relative left-20"
            />
          </div>
          <p className="mb-6 text-gray-600 max-w-xs">
            Here are a few highlights from over 20 projects I've worked on.
          </p>
        </div>

        <div className="p-6 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-[4px] shadow-sm border-solid border-black border-2 overflow-hidden"
              >
                <div className="flex justify-center items-center p-2">
                  <div className="relative h-48 w-full ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex p-4 gap-2 justify-between items-center">
                  <div className="text-lg font-bold logo-font mb-2">
                    {project.title}
                  </div>
                  <div
                    className={`px-2 text-center py-0 rounded-3xl rounded-tl-none text-sm border-2 ${project.borderColor} ${project.tagColor} text-white`}
                  >
                    {project.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default Projects;
