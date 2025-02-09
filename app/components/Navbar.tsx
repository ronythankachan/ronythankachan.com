"use client";

import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import ResourcesDropdown from './ResourcesDropdown';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  
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

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
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
          <Link href="/book" className="text-lg hover:underline hover:underline-offset-4">
            My Book
          </Link>
          <button 
            onClick={toggleResources}
            className="flex items-center text-lg"
          >
            Free Resources
            <span className="ml-2">▼</span>
          </button>
          <Link href="/academy" className="text-lg hover:underline hover:underline-offset-4">
            YouTube Academy
          </Link>
          <Link href="/lab" className="text-lg hover:underline hover:underline-offset-4">
            Productivity Lab
          </Link>
          <Link
            href="/subscribe"
            className="bg-[#fd976d] text-black px-6 py-2 rounded-full hover:bg-[#fcd56b] transition-colors text-lg"
          >
            Join 260k+ Subscribers
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
          {/* Free Resources Button - Tablet only */}
          <button
            className="hidden md:block lg:hidden text-xl"
            onClick={toggleResources}
          >
            Free Resources
            <span className="ml-2">▼</span>
          </button>

          {/* Join Subscribers Button - Tablet only */}
          <Link
            href="/subscribe"
            className="hidden md:block lg:hidden bg-[#fd976d] text-black px-8 py-3 rounded-full hover:bg-[#fcd56b] transition-colors text-xl"
          >
            Join 230k+ Subscribers
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
        onClose={() => setIsMobileMenuOpen(false)}
        onResourcesClick={() => {
          setIsMobileMenuOpen(false);  // Close mobile menu first
          setIsResourcesOpen(true);    // Then open resources dropdown
        }}
      />

      {/* Resources Dropdown */}
      <ResourcesDropdown 
        isOpen={isResourcesOpen}
        onClose={() => setIsResourcesOpen(false)}
      />
    </div>
  );
};

export default Navbar;
