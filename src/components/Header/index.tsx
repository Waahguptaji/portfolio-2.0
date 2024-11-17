"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "../ThemeToggler";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const sections = ["Home"]; // Sections on the current page
const pages = ["About", "Experience", "Blogs", "Contact"]; // Other pages

const Header = () => {
  const [active, setActive] = useState(" ");
  const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle
  const router = useRouter();

  const handleSetActive = (section: string) => {
    setActive(section);
    if (sections.includes(section)) {
      router.push(`/#${section}`, { scroll: false });
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${section.toLowerCase()}`);
    }
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="flex items-center justify-between w-full py-4 md:p-4 md:flex-grow md:px-10 md:py-6 ">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={25}
          height={29}
          className="block dark:hidden"
        />
        <Image
          src="/assets/dark/darkLogo.png"
          alt="logo"
          width={25}
          height={29}
          className="hidden dark:block"
        />
        <span className="text-black dark:text-white logo-font text-2xl">
          sahil
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:w-full md:justify-center md:ml-40">
        <nav className="flex gap-8 ">
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
      </div>

      <div className="flex items-center gap-6">
        <ThemeToggle />

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button
            className="btn bg-transparent border-solid border-black dark:border-white text-base text-black dark:text-white"
            onClick={() =>
              window.open("/assets/resume.pdf", "_blank", "noopener noreferrer")
            }
          >
            Resume
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://cal.com/waahguptaji")
            }
            className="btn bg-transparent border-solid border-black dark:border-white text-base text-black dark:text-white"
          >
            Schedule a Meeting
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none md:hidden"
        >
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 p-4 flex flex-col items-center gap-4 md:hidden shadow-lg z-20">
          {[...sections, ...pages].map((section) => (
            <Link
              key={section}
              href={
                sections.includes(section)
                  ? `/#${section}`
                  : `/${section.toLowerCase()}`
              }
              className="font-semibold text-lg cursor-pointer text-black dark:text-white"
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
          <div className="flex flex-col gap-2 mt-4">
            <button
              className="btn bg-transparent border-solid border-black dark:border-white text-base text-black dark:text-white"
              onClick={() =>
                window.open(
                  "/assets/resume.pdf",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              Resume
            </button>
            <button
              onClick={() =>
                (window.location.href = "https://cal.com/waahguptaji")
              }
              className="btn bg-transparent border-solid border-black dark:border-white text-base text-black dark:text-white"
            >
              Schedule a Meeting
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
