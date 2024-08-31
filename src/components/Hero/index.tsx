"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import SocialIcons from "../SocialIcons";

const Hero = () => {
  const [isStruckThrough, setIsStruckThrough] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStruckThrough(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedSectionWrapper id="Home">
      <section
        id="hero"
        className=" flex flex-col gap-16 mb-16 mt-16 md:mt-0  "
      >
        <div className="flex items-center ml-0 md:my-5  md:ml-10 ">
          <Image
            src="/assets/profile.png"
            alt="Avatar"
            width={112}
            height={106}
            className="transform -rotate-6 w-36 h-36 md:w-28 md:h-[106px]"
          />
          <span>
            <Image
              src="/assets/arrowe.png"
              alt="arrow"
              width={57}
              height={45}
              className="dark:hidden"
            />
            <Image
              src="/assets/dark/darkArrow.png"
              alt="arrow"
              width={57}
              height={45}
              className="hidden dark:block"
            />
          </span>
          <span className="text-2xl transform -rotate-6 text-start ml-5 mb-7 logo-font text-black dark:text-white -z-10">
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              show={true}
              color="var(--highlight-color)"
            >
              sahil
            </RoughNotation>
          </span>
        </div>

        <div className="flex flex-col gap-4 md:flex md:flex-row md:justify-between">
          <div className="text-4xl md:text-6xl md:ml-4 font-semibold leading-tight text-black dark:text-white relative">
            I{" "}
            <RoughNotation
              animationDelay={1000}
              type="circle"
              strokeWidth={4}
              show={true}
              color="var(--highlight-color)"
            >
              <span className="px-2">create</span>
            </RoughNotation>{" "}
            innovative
            <br />
            web{" "}
            <span className="relative inline-block">
              <div
                className={`relative transition-all duration-500 ${
                  isStruckThrough ? "translate-y-[40px] opacity-0" : ""
                }`}
              >
                <RoughNotation
                  animationDelay={2000}
                  type="strike-through"
                  strokeWidth={4}
                  show={true}
                  color="var(--strikeoff)"
                  animate={true}
                >
                  <span className="text-black dark:text-white">sites</span>
                </RoughNotation>
              </div>
              <span
                className={`absolute mr-4 left-0 top-0 transition-opacity duration-500 text-black dark:text-white ${
                  isStruckThrough ? "opacity-100" : "opacity-0"
                }`}
              >
                experiences
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[18px] mb-4 font-light text-justify md:text-2xl max-w-lg text-black dark:text-white">
              With expertise in{" "}
              <RoughNotation
                type="box"
                animationDelay={3000}
                color="var(--highlight-color)"
                strokeWidth={3}
                padding={2}
                show={true}
              >
                React
              </RoughNotation>{" "}
              and{" "}
              <RoughNotation
                animationDelay={3500}
                type="box"
                color="var(--highlight-color)"
                strokeWidth={3}
                padding={2}
                show={true}
              >
                Next.js
              </RoughNotation>
              , I craft engaging,{" "}
              <RoughNotation
                animationDelay={3900}
                type="underline"
                color="var(--highlight-color)"
                strokeWidth={2}
                padding={3}
                show={true}
              >
                pixel-perfect
              </RoughNotation>{" "}
              websites and web applications.
            </p>
            <button className="mb-5 bg-black dark:bg-white dark:text-black btn btn-neutral w-40 rounded-none text-white">
              Hire me
            </button>
            <SocialIcons />
          </div>
        </div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default Hero;
