"use client";
import React from "react";
import Image from "next/image";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";

const WhatIDo = () => {
  return (
    <AnimatedSectionWrapper id="WhatIDo">
      <section
        id="what-i-do"
        className="flex flex-col items-center px-4 py-8 md:py-16"
      >
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            End-to-End Product Development
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-2">
            From concept to deployment, I bring your ideas to life with
            full-stack expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 w-full max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/frontend.png"
              alt="Frontend"
              width={64}
              height={64}
              className="dark:hidden"
            />
            <Image
              src="/assets/dark/darkFrontend.png"
              alt="Frontend"
              width={64}
              height={64}
              className="hidden dark:block"
            />
            <h3 className="text-lg md:text-xl font-semibold mt-4 text-gray-800 dark:text-white">
              Frontend Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
              I create functional, beautiful, and responsive frontend
              applications for the web with modern technologies.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/backend.png"
              alt="Backend"
              width={64}
              height={64}
              className="dark:hidden"
            />
            <Image
              src="/assets/dark/darkBackend.png"
              alt="Backend"
              width={64}
              height={64}
              className="hidden dark:block"
            />
            <h3 className="text-lg md:text-xl font-semibold mt-4 text-gray-800 dark:text-white">
              Backend Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
              I build high-quality cloud-based backend services for your
              applications to scale and host all your users.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/conquer.png"
              alt="Full Stack Development"
              width={50}
              height={50}
              className="dark:hidden"
            />
            <Image
              src="/assets/dark/darkConquer.png"
              alt="Full Stack Development"
              width={64}
              height={64}
              className="hidden dark:block"
            />
            <h3 className="text-lg md:text-xl font-semibold mt-4 text-gray-800 dark:text-white">
              Full-Stack Mastery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
              I seamlessly integrate frontend and backend to build robust,
              scalable products.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/challenge.png"
              alt="Challenge Handling"
              width={64}
              height={64}
              className="dark:hidden"
            />
            <Image
              src="/assets/dark/darkChallenge.png"
              alt="Challenge Handling"
              width={64}
              height={64}
              className="hidden dark:block"
            />
            <h3 className="text-lg md:text-xl font-semibold mt-4 text-gray-800 dark:text-white">
              Challenge Conqueror
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
              No challenge is too big. I tackle complex problems and deliver
              solutions with precision.
            </p>
          </div>
        </div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default WhatIDo;
