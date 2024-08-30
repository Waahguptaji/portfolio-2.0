import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col md:justify-between md:items-center md:px-12 md:py-4 md:flex-row ">
      <div className="flex items-center my-6 gap-2 d:mb-0">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={25}
          height={29}
          className="block dark:hidden"
        />
        <Image
          src="/assets/darkLogo.png"
          alt="logo"
          width={25}
          height={29}
          className="hidden dark:block"
        />
        <span className="logo-font text-xl dark:text-white">sahil</span>
      </div>
      {/* Center Section - Social Links */}
      <div className="flex flex-col md:items-center gap-4 md:ml-4 ">
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/waahguptaji"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 text-base logo-font hover:opacity-80 transition-opacity"
          >
            Twitter X
          </a>
          <a
            href="https://www.linkedin.com/in/waahguptaji"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 text-base logo-font hover:opacity-80 transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/waahguptaji"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 text-base logo-font hover:opacity-80 transition-opacity"
          >
            Instagram
          </a>
        </div>
        <div className="text-black text-base dark:text-white md:text-sm">
          Copyright © Portfolio {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
