import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  backgroundColor: string;
  icon: string;
  label: string;
  labelColor: string;
  rotation: string;
  borderColor?: string; // Optional border color
  borderWidth?: string; // Optional border width
}

const Card: React.FC<CardProps> = ({
  title,
  backgroundColor,
  icon,
  label,
  labelColor,
  rotation,
  borderColor = "border-black", // Default border color
  borderWidth = "border-2", // Default border width
}) => {
  return (
    <div
      className={`p-4 w-[268px] h-[300px] transform ${rotation} rounded-lg shadow-lg relative ${backgroundColor} ${borderColor} ${borderWidth}`}
    >
      <span
        className={`absolute top-0 left-0 m-2 px-2 py-1 text-xs rounded ${labelColor}`}
      >
        {label}
      </span>
      <div className="mt-20 ml-2">
        <Image src={icon} alt="arrow" width={40} height={55} />
        <h3 className="text-black text-2xl text-left mt-4">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
