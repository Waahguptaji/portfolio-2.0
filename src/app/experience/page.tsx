"use client";
import React from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import Footer from "@/components/Footer";

// Define the Experience type
type Experience = {
  id: number;
  role: string;
  company: string;
  sdate: string;
  edate: string;
  bgColor: string;
  borderColor: string;
  description: string;
};

const WorkEx = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Software Engineer",
      company: "American Chase",
      sdate: "Jan 2024",
      edate: "July 2024",
      bgColor: "bg-yellow-200 dark:bg-yellow-400",
      borderColor: "border-yellow-300 dark:border-yellow-500",
      description:
        "Developed and maintained a web application using React, TypeScript, Redux Toolkit, and Tailwind CSS.",
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Pixel Technology",
      sdate: "Sep 2023",
      edate: "Dec 2023",
      bgColor: "bg-blue-200 dark:bg-blue-400",
      borderColor: "border-blue-300 dark:border-blue-500",
      description:
        "Worked on a project using React, JavaScript, DaisyUI, and SCSS. Developed and optimized user interfaces for responsiveness and performance.",
    },
    {
      id: 3,
      role: "Software Engineer",
      company: "SASS Startup",
      sdate: "20, April 2022",
      edate: "20, April 2023",
      bgColor: "bg-pink-200 dark:bg-pink-400",
      borderColor: "border-pink-300 dark:border-pink-500",
      description: "Worked on a design system at Material 3 designs.",
    },
  ];

  return (
    <>
      <AnimatedSectionWrapper id="Experience">
        <section className="flex justify-between ml-10 mb-10 ">
          <div className="space-y-4 my-36  dark:text-white">
            <div className="text-2xl logo-font inline-block mb-4">
              <RoughNotation
                type="highlight"
                strokeWidth={3}
                show={true}
                color="var(--highlight-color)"
              >
                Work Experience
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
              Have been coding for 4 years.
            </p>
          </div>

          <div className="relative max-w-3xl p-6 ">
            <div className="absolute top-10 left-0 w-full h-[2px] bg-black dark:bg-white"></div>
            <div className="absolute top-0 left-10 w-[2px] h-full bg-black dark:bg-white"></div>

            <div className="mx-[90px] my-10 py-[50px]">
              {experiences.map(
                ({
                  id,
                  role,
                  company,
                  sdate,
                  edate,
                  bgColor,
                  description,
                  borderColor,
                }) => (
                  <div key={id} className="flex items-center mb-6">
                    <div
                      className={`flex-shrink-0 w-20 h-20 ${bgColor} rounded-lg flex items-center justify-center text-5xl text-center logo-font border-2 ${borderColor}`}
                    >
                      {id}
                    </div>
                    <div className="ml-6">
                      <h3 className="font-normal text-xl text-black dark:text-white">
                        {role} at <span className="font-bold">{company}</span>
                      </h3>
                      <p className="font-light text-base text-gray-800 dark:text-gray-200">
                        {description}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                        {sdate} - {edate}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="absolute top-0 right-10 w-[2px] h-full bg-black dark:bg-white"></div>
            <div className="absolute bottom-10 left-0 w-full h-[2px] bg-black dark:bg-white"></div>
          </div>
        </section>
        <Footer />
      </AnimatedSectionWrapper>
    </>
  );
};

export default WorkEx;
