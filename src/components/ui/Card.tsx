"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/constants/projects";

// Define the props for the ProjectCard component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-[4px] shadow-md border border-gray-300 dark:border-gray-600 overflow-hidden transition-all duration-300 relative group"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
    >
      <div className="flex justify-center items-center p-2">
        <div className="relative h-48 w-full">
          {/* Use Next.js Image component for optimized image loading */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-[4px]"
          />
          {/* Overlay with links that appears on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 hover:text-blue-400 transition-colors duration-300"
              aria-label={`View live project: ${project.title}`}
            >
              <ExternalLink size={24} />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 hover:text-blue-400 transition-colors duration-300"
              aria-label={`View GitHub repository for: ${project.title}`}
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
  );
};

export default ProjectCard;
