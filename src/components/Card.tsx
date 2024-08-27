import React from "react";
import Image from "next/image";

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
    <div
      className={`p-4 w-[300px] h-[400px] transform ${rotation} rounded-lg shadow-lg relative flex-grow ${backgroundColor} ${borderColor} ${borderWidth}`}
    >
      <span
        className={`absolute top-0 left-0 m-2 px-2 py-1 text-xs rounded ${labelColor}`}
      >
        {label}
      </span>
      <div className="mt-12 ml-2">
        <Image src={icon} alt="icon" width={40} height={40} />
        <h3 className="text-black text-2xl text-left mt-4 mb-4">{title}</h3>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index} className="text-sm text-left">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
