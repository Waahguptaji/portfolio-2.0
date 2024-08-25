import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  tag: string;
  tagColor: string;
}

const projects: Project[] = [
  {
    title: "4 style Portfolio design",
    image: "/portfolio-design.png",
    tag: "No-Code",
    tagColor: "bg-pink-400",
  },
  {
    title: "Color system for app",
    image: "/color-system.png",
    tag: "UI Design",
    tagColor: "bg-blue-400",
  },
  {
    title: "Onboarding screen process",
    image: "/onboarding-process.png",
    tag: "UX Design",
    tagColor: "bg-yellow-400",
  },
  {
    title: "Finance Landing page",
    image: "/finance-landing.png",
    tag: "UI Design",
    tagColor: "bg-green-400",
  },
];
const Projects = (props: Project) => {
  return (
    <div className="flex justify-between ml-4 max-w-max">
      <div className="space-y-4 my-36">
        <div className="text-2xl logo-font bg-custom-pink inline-block mb-4">
          Featured Projects
        </div>
        <Image
          src="/assets/arrowe.png"
          alt="arrow"
          width={57}
          height={45}
          className="transform rotate-[230deg] mb-4 relative left-28 "
        />
        <p className="mb-6 text-gray-600">
          Have designed more than 20 projects
        </p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border-solid border-black border-2 overflow-hidden"
            >
              <div className="relative h-48 w-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex p-4">
                <div className="text-lg logo-font mb-2">{project.title}</div>
                <div
                  className={` px-3 py-0 rounded-3xl rounded-tl-none text-sm ${project.tagColor} text-white`}
                >
                  {project.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
