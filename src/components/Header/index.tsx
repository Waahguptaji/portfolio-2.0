"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "../ThemeToggler";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../ui/Button";

// 1. Centralize navigation data
const navItems = [
  { label: "Home", href: "/#Home", type: "section" },
  { label: "About", href: "/about", type: "page" },
  { label: "Experience", href: "/experience", type: "page" },
  { label: "Blogs", href: "/blogs", type: "page" },
  { label: "Contact", href: "/contact", type: "page" },
];

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSetActive = (item: {
    label: string;
    href: string;
    type: string;
  }) => {
    setActive(item.label);
    router.push(item.href);
    setMenuOpen(false); // Close menu on any navigation
  };

  // 2. Create a reusable component for Navigation Links
  const NavLinks = ({ isMobile = false }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`font-semibold cursor-pointer text-black dark:text-white ${
            isMobile ? "text-lg" : "text-base"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleSetActive(item);
          }}
          aria-current={active === item.label ? "page" : undefined}
        >
          <RoughNotation
            type="underline"
            show={active === item.label}
            color="var(--highlight-color)"
            strokeWidth={3}
          >
            {item.label}
          </RoughNotation>
        </Link>
      ))}
    </>
  );

  // 3. Create a reusable component for Action Buttons
  const ActionButtons = () => (
    <>
      <Button
        variant="outline"
        onClick={() =>
          window.open("/assets/Resume.pdf", "_blank", "noopener noreferrer")
        }
      >
        Resume
      </Button>
      <Button
        variant="outline"
        onClick={() => (window.location.href = "https://cal.com/waahguptaji")}
      >
        Schedule a Meeting
      </Button>
    </>
  );

  return (
    <header className="flex items-center justify-between w-full py-4 md:p-4 md:flex-grow md:px-10 md:py-6 ">
      {/* Logo */}
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
        <nav className="flex gap-8">
          <NavLinks />
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <ThemeToggle />

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <ActionButtons />
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none md:hidden text-black dark:text-white"
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
        <nav className="absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 p-4 flex flex-col items-center gap-4 md:hidden shadow-lg z-20">
          <NavLinks isMobile={true} />
          <div className="flex flex-col items-center gap-2 mt-4">
            <ActionButtons />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
