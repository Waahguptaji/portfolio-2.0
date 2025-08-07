"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "../ThemeToggler";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../ui/Button";

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
    setMenuOpen(false);
  };

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

  return (
    // In your Header component
    <div className="sticky top-0 bg-white/90 dark:bg-slate-900/95   backdrop-blur-xl z-50 border-b border-gray-200/30 dark:border-slate-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between w-full py-4 min-w-0">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
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
          <div className="hidden md:flex flex-1 justify-center min-w-0">
            <nav className="flex gap-8">
              <NavLinks />
            </nav>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <ThemeToggle />
            <Button
              variant="outline"
              className="text-sm px-3 py-2"
              onClick={() =>
                (window.location.href = "https://cal.com/waahguptaji")
              }
            >
              Book Call
            </Button>
          </div>

          {/* Mobile Right Section */}
          <div className="flex md:hidden items-center gap-4 flex-shrink-0">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none text-black dark:text-white"
            >
              {menuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center gap-4 py-4">
              <NavLinks isMobile={true} />
              <Button
                variant="outline"
                onClick={() => {
                  window.location.href = "https://cal.com/waahguptaji";
                  setMenuOpen(false);
                }}
              >
                Book Call
              </Button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
