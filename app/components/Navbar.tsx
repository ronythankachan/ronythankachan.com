"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import ResourcesDropdown from "./ResourcesDropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Set the navbar height CSS variable
    const navbar = document.querySelector("nav");
    if (navbar) {
      const height = navbar.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`
      );
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        !(e.target as Element).closest(".resources-dropdown")
      ) {
        setIsResourcesOpen(false);
      }
    };

    if (isResourcesOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isResourcesOpen]);

  const handleResourcesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResourcesOpen(!isResourcesOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center mt-10 rounded-t-3xl p-12 bg-grayBackground">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-blue-500 text-4xl font-bold font-sacramento"
        >
          Rony Thankachan
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-12">
          <Link
            href="https://github.com/ronythankachan"
            className="text-lg hover:underline hover:underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <button
            ref={buttonRef}
            onClick={handleResourcesClick}
            className="flex items-center text-lg"
          >
            Free Resources
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <Link
            href="/blogs"
            className="text-lg hover:underline hover:underline-offset-4"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="text-lg hover:underline hover:underline-offset-4"
          >
            About me
          </Link>
          <Link
            href="https://www.linkedin.com/in/ronythankachan/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fd976d] text-black px-6 py-2 rounded-full hover:bg-[#fcd56b] transition-colors text-lg"
          >
            Follow me on LinkedIn
          </Link>
        </div>
      </nav>

      {/* Tablet/Mobile Navbar */}
      <nav className="lg:hidden flex justify-between items-center py-4 px-4 mt-8 rounded-t-3xl md:px-8 bg-grayBackground">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="text-[#5dccf1] text-3xl font-serif">RT</div>
          <span className="text-2xl">Rony Thankachan</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Join Subscribers Button - Tablet only */}
          <Link
            href="/subscribe"
            className="hidden md:block lg:hidden bg-[#fd976d] text-black px-8 py-3 rounded-full hover:bg-[#fcd56b] transition-colors text-xl"
          >
            Join 260k+ Subscribers
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-3 rounded-xl bg-[#fcd56b]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <div className="w-7 h-6 flex flex-col justify-between">
              <span className="w-full h-[3px] bg-black rounded-full"></span>
              <span className="w-full h-[3px] bg-black rounded-full"></span>
              <span className="w-full h-[3px] bg-black rounded-full"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        onResourcesClick={() => setIsResourcesOpen(!isResourcesOpen)}
        isResourcesOpen={isResourcesOpen}
      />

      {/* Resources Dropdown - Only show in desktop view */}
      {!isMobileMenuOpen && <ResourcesDropdown isOpen={isResourcesOpen} />}
    </div>
  );
};

export default Navbar;
