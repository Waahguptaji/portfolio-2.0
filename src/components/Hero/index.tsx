"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";

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
      <section id="hero" className="min-h-screen flex flex-col gap-20">
        <div className="ml-10 flex items-center mb-5">
          <Image
            src="/assets/profile.png"
            alt="Avatar"
            width={112}
            height={106}
            className="transform -rotate-6"
          />
          <span>
            <Image
              src="/assets/arrowe.png"
              alt="arrow"
              width={57}
              height={45}
            />
          </span>
          <span className="text-2xl transform -rotate-6 text-start ml-5 mb-7 logo-font text-black">
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              show={true}
              color="pink"
            >
              sahil
            </RoughNotation>
          </span>
        </div>

        <div className="flex justify-between">
          <div className="text-6xl ml-4 font-semibold leading-tight text-black relative">
            I{" "}
            <RoughNotation
              animationDelay={1000}
              type="circle"
              strokeWidth={4}
              show={true}
              color="pink"
            >
              <span className="px-2">create</span>
            </RoughNotation>{" "}
            innovative
            <br />
            web{" "}
            <span className="relative inline-block">
              <div
                className={`relative  transition-all duration-500 ${
                  isStruckThrough ? "translate-y-[40px] opacity-0" : ""
                }`}
              >
                <RoughNotation
                  animationDelay={2000}
                  type="strike-through"
                  strokeWidth={4}
                  show={true}
                  color="black"
                  animate={true}
                >
                  <span>sites</span>
                </RoughNotation>
              </div>
              <span
                className={`absolute left-0 top-0 transition-opacity duration-500 ${
                  isStruckThrough ? "opacity-100" : "opacity-0"
                }`}
              >
                experiences
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-4 font-light text-justify text-2xl max-w-lg">
              With expertise in{" "}
              <RoughNotation
                type="box"
                animationDelay={3000}
                color="pink"
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
                color="pink"
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
                color="pink"
                strokeWidth={2}
                padding={3}
                show={true}
              >
                pixel-perfect
              </RoughNotation>{" "}
              websites and web applications.
            </p>
            <button className="bg-black btn btn-neutral w-40 rounded-none text-white">
              Hire me
            </button>
          </div>
        </div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default Hero;
