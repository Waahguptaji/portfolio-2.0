"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  backgroundColor: string;
  icon: string;
  label: string;
  labelColor: string;
  rotation: string;
  skills: string[];
  borderColor?: string;
  borderWidth?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  backgroundColor,
  icon,
  label,
  labelColor,
  rotation,
  skills,
  borderColor = "border-black",
  borderWidth = "border-2",
}) => {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.05 }}
      initial={{ rotate: parseFloat(rotation.match(/-?\d+/)?.[0] ?? "0") }} // Keeps initial rotation
      className={`p-4 w-[250px] h-[400px] md:w-[300px] md:h-[400px] rounded-lg shadow-lg relative flex-grow -rotate-12 ${backgroundColor} ${borderColor} ${borderWidth} transform ${rotation} transition-transform`}
    >
      <span
        className={`absolute top-0 left-0 m-2 px-2 py-1 text-xs rounded ${labelColor}`}
      >
        {label}
      </span>
      <div className="mt-12 ml-2">
        <Image src={icon} alt="icon" width={40} height={40} />
        <h3 className="text-black dark:text-white text-2xl text-left mt-4 mb-4">
          {title}
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-sm text-left text-gray-800 dark:text-gray-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
