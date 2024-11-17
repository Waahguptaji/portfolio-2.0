"use client";
import React from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import SocialIcons from "@/components/SocialIcons";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const AboutMe = () => {
  return (
    <AnimatedSectionWrapper id="About">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 justify-between md:ml-10 w-full">
        <div className="space-y-4 my-12 ">
          <div className="text-black dark:text-white text-2xl logo-font inline-block mb-4">
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              show={true}
              color="var(--highlight-color)"
            >
              About Me
            </RoughNotation>

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
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }} // Scale up and rotate slightly on hover
              whileTap={{ scale: 0.95 }} // Scale down slightly on tap
              initial={{ scale: 1, rotate: 0 }} // Initial state
              transition={{ type: "spring", stiffness: 200, damping: 10 }} // Smooth animation
              className="rounded-box overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600" // Add some shadow and border
            >
              <Image
                src="/assets/MyPhoto.jpg"
                alt="My Photo"
                width={350}
                height={400}
                className="rounded-box object-cover h-[470px] md:w-[350px] md:h-[400px]" // Ensure the image covers the box
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mt-6 md:mt-24 text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            <RoughNotationGroup show={true}>
              Hi, I’m{" "}
              <RoughNotation
                type="highlight"
                color="var(--highlight-color)"
                strokeWidth={2}
              >
                <span className="font-bold text-black dark:text-white">
                  Sahil Gupta
                </span>
              </RoughNotation>
              , a passionate{"  "} <br className=" block md:hidden" />
              <RoughNotation type="highlight" color="var(--highlight-color)">
                <span className="font-bold text-black dark:text-white">
                  Full Stack Developer
                </span>
              </RoughNotation>{" "}
              with a love for building dynamic and engaging web applications. I
              have honed my skills with modern technologies like{" "}
              <span className="font-bold text-black dark:text-white">
                React
              </span>
              ,{" "}
              <span className="font-bold text-black dark:text-white">Next</span>
              ,{" "}
              <span className="font-bold text-black dark:text-white">
                Node.js
              </span>
              , and{" "}
              <span className="font-bold text-black dark:text-white">
                MySql
              </span>
              . I am constantly driven by my desire to learn new things and
              tackle complex problems with creativity and innovation.
            </RoughNotationGroup>
          </p>

          <p className="my-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            <RoughNotationGroup show={true}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Throughout my career, I've gained hands-on experience in
              developing and maintaining scalable solutions. I excel at{" "}
              <RoughNotation
                type="underline"
                color="var(--highlight-color)"
                strokeWidth={2}
              >
                integrating frontend
              </RoughNotation>{" "}
              and{" "}
              <RoughNotation
                type="underline"
                color="var(--highlight-color)"
                strokeWidth={2}
              >
                backend technologies
              </RoughNotation>
              , and I take pride in delivering{" "}
              <RoughNotation
                type="underline"
                color="var(--highlight-color)"
                strokeWidth={2}
              >
                high-quality
              </RoughNotation>{" "}
              and user-friendly products. I thrive on learning new skills and
              enjoy collaborating with like-minded professionals to create
              impactful solutions.
            </RoughNotationGroup>
          </p>

          <SocialIcons />
        </div>
      </div>
      <Footer />
    </AnimatedSectionWrapper>
  );
};

export default AboutMe;
