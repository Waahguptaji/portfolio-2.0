"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "../ThemeToggler";

const sections = ["Home"]; // Sections on the current page
const pages = ["About", "Experience", "Blogs", "Contact"]; // Other pages

const Header = () => {
  const [active, setActive] = useState(" ");
  const router = useRouter();

  const handleSetActive = (section: string) => {
    setActive(section);
    if (sections.includes(section)) {
      // Internal section scroll
      router.push(`/#${section}`, { scroll: false });
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // External page navigation
      router.push(`/${section.toLowerCase()}`);
    }
  };

  return (
    <header className=" md:flex-grow md:z-10 md:w-full md:flex gap-6 md:justify-between md:items-center md:mb-10 md:py-4">
      <div className="flex items-center gap-3">
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
        <span className="text-black dark:text-white logo-font text-2xl">
          sahil
        </span>
      </div>

      <div className="flex items-center justify-between w-8/12">
        <nav className="flex gap-8">
          {[...sections, ...pages].map((section) => (
            <Link
              key={section}
              href={
                sections.includes(section)
                  ? `/#${section}`
                  : `/${section.toLowerCase()}`
              }
              className="font-semibold text-base cursor-pointer text-black dark:text-white"
              onClick={(e) => {
                e.preventDefault();
                handleSetActive(section);
              }}
              aria-current={active === section ? "page" : undefined}
            >
              <RoughNotation
                type="underline"
                show={active === section}
                color="var(--highlight-color)"
                strokeWidth={3}
              >
                {section}
              </RoughNotation>
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 items-center justify-between">
          <ThemeToggle />
          <button
            className="btn bg-transparent border-solid border-black dark:border-white text-base text-black dark:text-white"
            onClick={() =>
              window.open("/assets/resume.pdf", "_blank", "noopener noreferrer")
            }
          >
            Resume
          </button>
          <button className="btn bg-transparent border-solid border-black dark:border-white text-base text-black dark:text-white">
            Schedule a Meeting
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
