import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-12 py-4 mt-12">
      {/* Left Section - Logo and Name */}
      <div className="flex items-center gap-2">
        <Image src="/assets/logo.png" alt="logo" width={25} height={29} />
        <span className="logo-font text-xl">sahil</span>
      </div>

      {/* Center Section - Social Links */}
      <div className="flex flex-col items-center gap-4 ml-4 ">
        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-4 py-1.5 text-base logo-font">
            Twitter X
          </button>
          <button className="bg-black text-white px-4 py-1.5 text-base logo-font">
            LinkedIn
          </button>
          <button className="bg-black text-white px-4 py-1.5 text-base logo-font">
            Instagram
          </button>
        </div>
        <div className="text-black text-sm">Copyright. Portfolio 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
