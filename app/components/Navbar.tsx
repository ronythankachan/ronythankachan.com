"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import ResourcesDropdown from './ResourcesDropdown';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ignoreNextClickRef = useRef(false);
  
  const resourceTypes = [
    { icon: "📝", label: "Articles" },
    { icon: "📗", label: "Book Notes" },
    { icon: "▶️", label: "Videos" },
    { icon: "💬", label: "Podcast" },
    { icon: "✉️", label: "Newsletter" },
  ];

  const resourceTopics = [
    { icon: "⚙️", label: "Productivity" },
    { icon: "🎥", label: "YouTube" },
    { icon: "📚", label: "Studying" },
    { icon: "💰", label: "Online Business" },
    { icon: "📱", label: "Tools & Tech" },
  ];

  useEffect(() => {
    // Set the navbar height CSS variable
    const navbar = document.querySelector('nav');
    if (navbar) {
      const height = navbar.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ignoreNextClickRef.current) {
        ignoreNextClickRef.current = false;
        return;
      }

      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setIsResourcesOpen(false);
      }
    };

    // Use capture phase to ensure this runs before the button click
    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, []);

  const handleResourcesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    ignoreNextClickRef.current = true;
    setIsResourcesOpen(!isResourcesOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center py-4 px-4 mt-8 rounded-t-3xl md:px-8 bg-[#f8f6f3]">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="text-[#5dccf1] text-3xl font-serif">RT</div>
          <span className="text-lg">Rony Thankachan</span>
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
            <span className="ml-2">▼</span>
          </button>
          <Link href="/academy" className="text-lg hover:underline hover:underline-offset-4">
            Blogs
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
      <nav className="lg:hidden flex justify-between items-center py-4 px-4 mt-8 rounded-t-3xl md:px-8 bg-[#f8f6f3]">
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
      {!isMobileMenuOpen && (
        <ResourcesDropdown 
          isOpen={isResourcesOpen}
          onClose={() => setIsResourcesOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
