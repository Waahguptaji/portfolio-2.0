"use client";
import React from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";

const ContactMe = () => {
  const fields = [
    {
      id: "name",
      label: "Name",
      placeholder: "Crime Master",
      bgColor: "bg-pink-200",
    },
    {
      id: "email",
      label: "Your email",
      placeholder: "crimemastergogo123@gmail.com",
      bgColor: "bg-yellow-200",
    },
    {
      id: "about",
      label: "About Project",
      placeholder: "I want to discuss with you about...",
      bgColor: "bg-blue-200",
    },
  ];
  return (
    <AnimatedSectionWrapper id="Contact">
      <section className=" flex justify-between  ml-10 w-full">
        <div className="space-y-4 my-20">
          <div className="text-2xl logo-font inline-block mb-4">
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              show={true}
              color="pink"
            >
              Contact Here
            </RoughNotation>
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
          <p className="my-6 text-gray-600 max-w-xs">
            Have a project idea? <br />
            or just say <span className="font-bold text-black">Hi.</span>
          </p>
        </div>

        <div className="flex-1  max-w-2xl p-6">
          <form className="flex flex-col  gap-8 space-y-4">
            {fields.map(({ id, label, placeholder, bgColor }) => (
              <div key={id} className="flex logo-font ">
                <label
                  className={`text-xl font-bold border-l-2 border-l-black ${bgColor} `}
                >
                  {label}
                </label>
                <input
                  type="text"
                  id={id}
                  className="border-b-2 border-black w-3/4 px-2 text-lg outline-none"
                  placeholder={placeholder}
                />
              </div>
            ))}
            <button className="bg-black btn btn-neutral w-32 rounded-none text-white">
              Send
            </button>
          </form>
        </div>
      </section>
    </AnimatedSectionWrapper>
  );
};

export default ContactMe;
