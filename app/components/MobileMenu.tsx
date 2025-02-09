"use client";

import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 bg-[#f8f6f3] z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full px-8 py-12">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="self-end p-4"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center justify-center flex-grow text-center space-y-12">
          <Link 
            href="/book" 
            className="text-2xl hover:underline hover:underline-offset-4"
            onClick={onClose}
          >
            My Book
          </Link>
          
          <div className="space-y-2">
            <button className="text-2xl flex items-center justify-center">
              Free Resources
              <span className="ml-2 text-xl">▼</span>
            </button>
          </div>

          <Link 
            href="/academy" 
            className="text-2xl hover:underline hover:underline-offset-4"
            onClick={onClose}
          >
            YouTube Academy
          </Link>
          
          <Link 
            href="/lab" 
            className="text-2xl hover:underline hover:underline-offset-4"
            onClick={onClose}
          >
            Productivity Lab
          </Link>

          <Link
            href="/subscribe"
            className="w-full max-w-md py-4 px-6 rounded-full bg-[#5dccf1] text-center text-xl transition-colors hover:bg-[#4bb8dd]"
            onClick={onClose}
          >
            Join 260k+ Subscribers
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu; 