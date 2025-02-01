"use client";

import { FC } from "react";
import skills from "../../constants/skills";
import Marquee from "react-fast-marquee";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => (
  <AnimatedSectionWrapper id="Skills">
    <section id="skills" className="flex flex-col space-y-4 ">
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
      <div className="relative overflow-hidden py-8">
        <Marquee
          pauseOnHover={true}
          gradient={true}
          gradientWidth={50}
          speed={80}
          loop={0}
          delay={2}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.id}-${index}`}
              className="flex flex-col items-center gap-2 min-w-[100px]"
            >
              <div className="relative h-[50px] w-[50px] bg-grayscale-950/10 dark:bg-grayscale-50/10 rounded-full p-2 hover:bg-grayscale-950/20 dark:hover:bg-grayscale-50/20 transition-all duration-300">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-black dark:text-grayscale-50">
                {skill.title}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  </AnimatedSectionWrapper>
);

export default Skills;
