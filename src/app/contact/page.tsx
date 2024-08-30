"use client";
import React from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const ContactMe = () => {
  const fields = [
    {
      id: "name",
      label: "Name",
      placeholder: "Crime Master",
      bgColor: "bg-pink-200 dark:bg-pink-500",
    },
    {
      id: "email",
      label: "Your email",
      placeholder: "crimemastergogo123@gmail.com",
      bgColor: "bg-yellow-200 dark:bg-yellow-500",
    },
    {
      id: "about",
      label: "About Project",
      placeholder: "I want to discuss with you about...",
      bgColor: "bg-blue-200 dark:bg-blue-500",
    },
  ];

  return (
    <AnimatedSectionWrapper id="Contact">
      <div className="md:min-h-screen flex flex-col gap-20 mb-12 md:grid md:grid-cols-2 justify-between md:ml-10 w-full">
        <div className="space-y-4 mt-12 md:my-20">
          <div className="text-2xl logo-font inline-block mb-4 text-black dark:text-white">
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              show={true}
              color="var(--highlight-color)"
            >
              Contact Here
            </RoughNotation>
          </div>
          <div className="block">
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
          <p className="my-6 text-gray-600 dark:text-gray-300 max-w-xs">
            Have a project idea? <br />
            or just say{" "}
            <span className="font-bold text-black dark:text-white">Hi.</span>
          </p>
        </div>

        <div className="flex-1 max-w-3xl">
          <form className="flex flex-col gap-8 space-y-4">
            {fields.map(({ id, label, placeholder, bgColor }) => (
              <motion.div
                key={id}
                className="flex items-center gap-2 md:gap-4 logo-font"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label
                  className={`text-lg md:text-xl font-bold border-l-2 border-l-black dark:border-l-white ${bgColor} text-black dark:text-white px-3 py-1 shadow-sm`}
                >
                  {label}
                </label>
                <input
                  type="text"
                  id={id}
                  className="border-b-2 border-black dark:border-gray-400 w-full md:w-3/4 px-2 text-base md:text-lg outline-none bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none"
                  placeholder={placeholder}
                />
              </motion.div>
            ))}
            <motion.button
              className="bg-black dark:bg-gray-800 text-white dark:text-white btn btn-neutral w-32 rounded-none hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
      <Footer />
    </AnimatedSectionWrapper>
  );
};

export default ContactMe;
