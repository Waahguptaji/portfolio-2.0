"use client";
import React from "react";
import Card from "../Card";
import Image from "next/image";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";

type Props = {};

const Skills = (props: Props) => {
  return (
    <AnimatedSectionWrapper id="Skills">
      <section
        id="skills"
        className="min-h-screen flex flex-col space-y-4 ml-4"
      >
        <div className="ml-16">
          <div className="text-black inline-block bg-custom-pink px-[2px] text-2xl logo-font mb-7">
            What I Do?
          </div>
          <div>
            <Image
              src="/assets/arrowe.png"
              alt="arrow"
              width={57}
              height={45}
              className="transform rotate-[230deg] mb-8 relative left-20"
            />
          </div>
        </div>
        <div className="flex flex-grow gap-4 space-x-5">
          <Card
            title="Frontend Development"
            backgroundColor="bg-yellow-300"
            icon="/assets/pencil.png"
            label="React/Next.js"
            labelColor="bg-blue-200"
            rotation="-rotate-6"
            borderColor="border-yellow-400"
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
            backgroundColor="bg-blue-300"
            icon="/assets/eye.png"
            label="Figma/Tailwind CSS"
            labelColor="bg-pink-200"
            rotation="rotate-6"
            borderColor="border-blue-400"
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
            backgroundColor="bg-pink-300"
            icon="/assets/star.png"
            label="Webflow"
            labelColor="bg-yellow-200"
            rotation="-rotate-6"
            borderColor="border-pink-400"
            borderWidth="border-4"
            skills={[
              "Git/GitHub",
              "Azure DevOps",
              "Postman",
              "Jira",
              "SCSS/SASS",
            ]}
          />
        </div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default Skills;
