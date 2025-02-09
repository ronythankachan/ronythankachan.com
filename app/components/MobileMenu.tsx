"use client";

import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onResourcesClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onResourcesClick }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed inset-0 bg-[#f8f6f3] z-50 p-8">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <span className="absolute w-8 h-[3px] bg-black rounded-full transform rotate-45"></span>
            <span className="absolute w-8 h-[3px] bg-black rounded-full transform -rotate-45"></span>
          </div>
        </button>

        {/* Navigation Links */}
        <div className="mt-24 flex flex-col gap-8">
          <Link 
            href="/book" 
            className="text-3xl hover:underline"
            onClick={onClose}
          >
            My Book
          </Link>
          <button 
            onClick={onResourcesClick}
            className="text-3xl text-left hover:underline"
          >
            Free Resources
          </button>
          <Link 
            href="/academy" 
            className="text-3xl hover:underline"
            onClick={onClose}
          >
            YouTube Academy
          </Link>
          <Link 
            href="/lab" 
            className="text-3xl hover:underline"
            onClick={onClose}
          >
            Productivity Lab
          </Link>
          <Link
            href="/subscribe"
            className="bg-[#fd976d] text-black px-8 py-3 rounded-full hover:bg-[#fcd56b] transition-colors text-2xl text-center mt-4"
            onClick={onClose}
          >
            Join 260k+ Subscribers
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 