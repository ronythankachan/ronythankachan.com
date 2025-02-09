"use client";

import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  return (
    <>
      <nav className="flex justify-between items-center py-6 px-4 mt-10 rounded-t-3xl md:px-8 bg-[#f8f6f3]">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-[#5dccf1] text-2xl">✦</span>
          <span className="text-2xl">Rony Thankachan</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/book" className="text-xl hover:underline hover:underline-offset-4">
            My Book
          </Link>
          <div className="relative group">
            <button className="flex items-center text-xl">
              Free Resources
              <span className="ml-2">▼</span>
            </button>
          </div>
          <Link href="/academy" className="text-xl hover:underline hover:underline-offset-4">
            YouTube Academy
          </Link>
          <Link href="/lab" className="text-xl hover:underline hover:underline-offset-4">
            Productivity Lab
          </Link>
          <Link
            href="/subscribe"
            className="bg-[#fd976d] text-black px-8 py-3 rounded-full hover:bg-[#fcd56b] transition-colors text-xl"
          >
            Join 260k+ Subscribers
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-3 rounded-xl bg-[#fcd56b]"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <div className="w-7 h-6 flex flex-col justify-between">
            <span className="w-full h-[3px] bg-black rounded-full"></span>
            <span className="w-full h-[3px] bg-black rounded-full"></span>
            <span className="w-full h-[3px] bg-black rounded-full"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;
