import React from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex flex-col justify-between gap-12 ">
      <div className="ml-10 flex items-center mb-5">
        <Image
          src="/assets/profile.png"
          alt="Avatar"
          width={112}
          height={106}
          className="transform -rotate-6"
        />
        <span>
          <Image src="/assets/arrowe.png" alt="arrow" width={57} height={45} />
        </span>
        <span className="text-2xl transform -rotate-6 text-start ml-5 mb-7 logo-font text-black">
          <RoughNotation
            type="highlight"
            strokeWidth={3}
            show={true}
            color="pink"
          >
            sahil
          </RoughNotation>
        </span>
      </div>

      <div className="flex justify-between ">
        <div className="text-6xl ml-4 font-semibold leading-tight text-black">
          I{" "}
          <RoughNotation type="circle" strokeWidth={4} show={true} color="pink">
            <span className="px-2">design</span>
          </RoughNotation>{" "}
          top
          <br />
          notch websites
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-4 font-light text-justify text-2xl max-w-lg ">
            I’ll design your website and will develop to land it on internet
            using No-code.
          </p>
          <button className="bg-black btn btn-neutral w-40 rounded-none text-white">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
