import React from "react";
import Card from "./Card";
import Image from "next/image";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="flex flex-col space-y-4 my-36 ml-4 ">
      <div className=" ml-16">
        <div className="text-black inline-block bg-custom-pink px-[2px] text-2xl logo-font mb-7">
          What i do?
        </div>
        <Image
          src="/assets/arrowe.png"
          alt="arrow"
          width={57}
          height={45}
          className="transform -rotate-90 mb-4 "
        />
      </div>
      <div className="flex flex-grow justify-between">
        <Card
          title="User Research Design"
          backgroundColor="bg-yellow-200"
          icon="/assets/pencil.png"
          label="Pen/Paper"
          labelColor="bg-blue-200"
          rotation="-rotate-6"
          borderColor="border-yellow-300"
          borderWidth="border-4"
        />
        <Card
          title="UI & Product Design"
          backgroundColor="bg-blue-200"
          icon="/assets/eye.png"
          label="Figma"
          labelColor="bg-pink-200"
          rotation="rotate-6"
          borderColor="border-blue-300"
          borderWidth="border-4"
        />
        <Card
          title="No-code Development"
          backgroundColor="bg-pink-200"
          icon="/assets/star.png"
          label="Webflow"
          labelColor="bg-yellow-200"
          rotation="-rotate-6"
          borderColor="border-pink-300"
          borderWidth="border-4"
        />
      </div>
    </div>
  );
};

export default Services;
