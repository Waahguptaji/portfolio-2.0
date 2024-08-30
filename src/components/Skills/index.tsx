"use client";
import React from "react";
import Card from "../Card";
import Image from "next/image";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";

const Skills = () => {
  return (
    <AnimatedSectionWrapper id="Skills">
      <section id="skills" className="flex flex-col space-y-4">
        <div className="">
          <div className="text-2xl logo-font inline-block mb-4 text-black dark:text-white">
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              show={true}
              color="var(--highlight-color)"
            >
              Skills :)
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
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card
            title="Frontend Development"
            backgroundColor="bg-yellow-300 dark:bg-yellow-500"
            icon="/assets/pencil.png"
            label="React/Next.js"
            labelColor="bg-blue-200 dark:bg-blue-400"
            rotation="-rotate-6"
            borderColor="border-yellow-400 dark:border-yellow-600"
            borderWidth="border-4"
            skills={[
              "React.js",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
            ]}
          />
          <Card
            title="UI/UX Design"
            backgroundColor="bg-blue-300 dark:bg-blue-500"
            icon="/assets/eye.png"
            label="Figma/Tailwind CSS"
            labelColor="bg-pink-200 dark:bg-pink-400"
            rotation="rotate-6"
            borderColor="border-blue-400 dark:border-blue-600"
            borderWidth="border-4"
            skills={[
              "Figma",
              "Wireframing",
              "Prototyping",
              "Responsive Design",
            ]}
          />
          <Card
            title="Tools & Technologies"
            backgroundColor="bg-pink-300 dark:bg-pink-500"
            icon="/assets/star.png"
            label="Webflow"
            labelColor="bg-yellow-200 dark:bg-yellow-400"
            rotation="-rotate-6"
            borderColor="border-pink-400 dark:border-pink-600"
            borderWidth="border-4"
            skills={[
              "Git/GitHub",
              "Azure DevOps",
              "Postman",
              "Jira",
              "SCSS/SASS",
            ]}
          />
        </motion.div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default Skills;
