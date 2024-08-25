import React from "react";
import Image from "next/image";

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
      bgColor: "bg-yellow-200",
      borderColor: "border-yellow-300",
      description:
        "Developed and maintained a web application using React, TypeScript, Redux Toolkit, and Tailwind CSS.",
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Pixel Technology",
      sdate: "Sep 2023",
      edate: "Dec 2023",
      bgColor: "bg-blue-200",
      borderColor: "border-blue-300",
      description:
        "Worked on a project using React, JavaScript, DaisyUI, and SCSS. Developed and optimized user interfaces for responsiveness and performance.",
    },
    {
      id: 3,
      role: "Software Engineer",
      company: "SASS Startup",
      sdate: "20, April 2022",
      edate: "20, April 2023",
      bgColor: "bg-pink-200",
      borderColor: "border-pink-300",
      description: "Worked on a design system at Material 3 designs.",
    },
  ];

  return (
    <div className="flex justify-between ml-4 ">
      <div className="space-y-4 my-36">
        <div className="text-2xl logo-font bg-custom-pink inline-block mb-4">
          Work Experience
        </div>
        <Image
          src="/assets/arrowe.png"
          alt="arrow"
          width={57}
          height={45}
          className="transform rotate-[230deg] mb-4 relative left-28"
        />
        <p className="mb-6 text-gray-600">Have been coding for 4 years.</p>
      </div>
      <div className="relative max-w-3xl ">
        <div className="absolute top-10 left-0 w-full h-[2px] bg-black"></div>
        <div className="absolute top-0 left-10 w-[2px] h-full bg-black"></div>

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
                  <h3 className="font-normal text-xl">
                    {role} at <span className="font-bold">{company}</span>
                  </h3>
                  <p className="font-light text-base">{description}</p>
                  <p className="text-gray-500 font-medium text-sm">
                    {sdate} - {edate}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="absolute top-0 right-10 w-[2px] h-full bg-black"></div>
        <div className="absolute bottom-10 left-0 w-full h-[2px] bg-black"></div>
      </div>
    </div>
  );
};

export default WorkEx;
