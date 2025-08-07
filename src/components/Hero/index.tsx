"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import SocialButton from "../ui/SocialButton";

const Hero = () => {
  const [isStrikeComplete, setIsStrikeComplete] = useState(false);
  const [isWordSwapped, setIsWordSwapped] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const strikeTimer = setTimeout(() => {
      setIsStrikeComplete(true);
    }, 2000);

    const swapTimer = setTimeout(() => {
      setIsWordSwapped(true);
    }, 3500);
    //Cleanup function to clear timers
    return () => {
      clearTimeout(strikeTimer);
      clearTimeout(swapTimer);
    };
  }, []);

  const wordAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <AnimatedSectionWrapper id="Home">
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Top section with avatar */}
          <div className="flex items-center justify-center md:justify-start mb-10">
            <Image
              src="/assets/profile.png"
              alt="Avatar"
              width={112}
              height={106}
              className="transform -rotate-6 w-32 h-32 md:w-28 md:h-[106px]"
            />
            <span className="ml-2">
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
            <span className="text-2xl transform -rotate-6 text-start ml-5 mb-7 logo-font text-black dark:text-white">
              <RoughNotation
                type="highlight"
                strokeWidth={3}
                show={isMounted}
                color="var(--highlight-color)"
              >
                sahil
              </RoughNotation>
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center lg:gap-16">
            {/* Left side: Main heading */}
            <div className="flex-1 text-4xl text-center md:text-left md:text-6xl font-semibold leading-tight text-black dark:text-white">
              I{" "}
              <RoughNotation
                animationDelay={1000}
                type="circle"
                strokeWidth={4}
                show={isMounted}
                color="var(--highlight-color)"
              >
                <span className="px-2">build</span>
              </RoughNotation>{" "}
              innovative
              <br />
              <span className="mr-2">web</span>
              <span className="relative inline-grid  h-[4.5rem] md:h-[5.5rem]">
                <span className="invisible col-start-1 row-start-1">
                  experiences
                </span>
                <AnimatePresence mode="wait">
                  {!isWordSwapped ? (
                    <motion.span
                      key="applications"
                      variants={wordAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="col-start-1 row-start-1"
                    >
                      <RoughNotation
                        type="strike-through"
                        strokeWidth={4}
                        show={isStrikeComplete}
                        color="var(--highlight-color)"
                        animationDuration={1000}
                      >
                        applications
                      </RoughNotation>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="experiences"
                      variants={wordAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="col-start-1 row-start-1"
                    >
                      experiences
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </div>

            {/* Right side: Bio and CTAs */}
            <div className="flex-1 flex flex-col items-center md:items-start gap-6 max-w-xl">
              <p className="text-lg text-center md:text-left md:text-xl max-w-lg text-black dark:text-white font-light">
                As a{" "}
                <strong className="font-semibold">Full Stack Developer</strong>,
                I specialize in{" "}
                <RoughNotation
                  type="box"
                  animationDelay={5000}
                  color="var(--highlight-color)"
                  strokeWidth={3}
                  padding={2}
                  show={isMounted}
                >
                  React
                </RoughNotation>
                ,{" "}
                <RoughNotation
                  animationDelay={5300}
                  type="box"
                  color="var(--highlight-color)"
                  strokeWidth={3}
                  padding={2}
                  show={isMounted}
                >
                  Next.js
                </RoughNotation>{" "}
                frontend and{" "}
                <RoughNotation
                  animationDelay={5600}
                  type="box"
                  color="var(--highlight-color)"
                  strokeWidth={3}
                  padding={2}
                  show={isMounted}
                >
                  Java
                </RoughNotation>{" "}
                backend to create{" "}
                <RoughNotation
                  animationDelay={6000}
                  type="underline"
                  color="var(--highlight-color)"
                  strokeWidth={2}
                  padding={3}
                  show={isMounted}
                >
                  scalable solutions
                </RoughNotation>{" "}
                from concept to deployment.
              </p>

              <div className="flex  gap-4 items-center">
                <Button
                  variant="solid"
                  className="w-40"
                  onClick={() =>
                    (window.location.href =
                      "mailto:sahil.work742@gmail.com?subject=Project%20Inquiry")
                  }
                >
                  Hire Me
                </Button>

                <Button
                  variant="outline"
                  className="w-40"
                  onClick={() =>
                    window.open(
                      "/assets/Resume.pdf",
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                >
                  Resume
                </Button>
              </div>
              <SocialButton />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default Hero;
