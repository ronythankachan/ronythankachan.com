"use client";

import React from 'react';
import Link from 'next/link';
import ResourceList from './shared/ResourceList';
import { mainNavLinks, resourceTopics, resourceTypes } from '../constants/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onResourcesClick: () => void;
  isResourcesOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  onResourcesClick,
  isResourcesOpen 
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed inset-0 bg-[#f8f6f3] z-50">
        {/* Fixed Header with Close Button */}
        <div className="absolute top-0 left-0 right-0 h-24 px-8 flex justify-end items-center">
          <button 
            onClick={onClose}
            className="p-2"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="absolute w-8 h-[3px] bg-black rounded-full transform rotate-45"></span>
              <span className="absolute w-8 h-[3px] bg-black rounded-full transform -rotate-45"></span>
            </div>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto pt-24 px-8 pb-8">
          <div className="flex flex-col gap-8 items-center w-full">
            {mainNavLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-2xl hover:underline text-center"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative flex flex-col items-center w-full">
              <button 
                onClick={onResourcesClick}
                className="text-2xl text-center flex items-center justify-center gap-2"
              >
                Free Resources
                <svg 
                  className="w-4 h-4" 
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
              
              {/* Inline Resources Dropdown for Mobile */}
              {isResourcesOpen && (
                <div className="mt-4 bg-white rounded-3xl p-8 mx-2 w-[calc(100%-1rem)]">
                  <div className="flex flex-col gap-8 items-center w-full">
                    <ResourceList 
                      title="Browse by type:"
                      items={resourceTypes}
                      textSize="text-lg"
                    />
                    <ResourceList 
                      title="Browse by topic:"
                      items={resourceTopics}
                      textSize="text-lg"
                    />
                    <Link 
                      href="/all-categories" 
                      className="text-lg underline underline-offset-4 text-center"
                    >
                      all categories →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="https://www.linkedin.com/in/ronythankachan"
              className="bg-[#fd976d] text-black px-8 py-3 rounded-full hover:bg-[#fcd56b] transition-colors text-xl text-center mt-4"
              onClick={onClose}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 