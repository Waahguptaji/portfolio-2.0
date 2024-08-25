"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

type Props = {};

const Header = (props: Props) => {
  const [active, setActive] = useState("About");

  const handleSetActive = (section: string) => {
    setActive(section);
  };

  return (
    <div className="flex justify-end gap-40 items-center mb-10 py-7">
      <div className="flex gap-3">
        <Image src="/assets/logo.png" alt="logo" width={25} height={29} />
        <div className="logo-font text-[26px]">sahil</div>
      </div>
      <div className="flex gap-8 ">
        <div
          className="font-normal text-lg cursor-pointer"
          onClick={() => handleSetActive("About")}
        >
          <RoughNotation
            type="highlight"
            show={active === "About"}
            color="yellow"
          >
            About
          </RoughNotation>
        </div>
        <div
          className="font-normal text-lg cursor-pointer"
          onClick={() => handleSetActive("Projects")}
        >
          <RoughNotation
            type="underline"
            show={active === "Projects"}
            color="black"
          >
            Projects
          </RoughNotation>
        </div>
        <div
          className="font-normal text-lg cursor-pointer"
          onClick={() => handleSetActive("Blogs")}
        >
          <RoughNotation
            type="underline"
            show={active === "Blogs"}
            color="black"
          >
            Blogs
          </RoughNotation>
        </div>
      </div>
    </div>
  );
};

export default Header;
