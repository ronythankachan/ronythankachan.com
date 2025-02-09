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
          <div className="flex flex-col gap-8">
            {mainNavLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-3xl hover:underline"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative">
              <button 
                onClick={onResourcesClick}
                className="text-3xl text-left hover:underline"
              >
                Free Resources
              </button>
              
              {/* Inline Resources Dropdown for Mobile */}
              {isResourcesOpen && (
                <div className="mt-4 bg-white rounded-3xl p-8">
                  <div className="flex flex-col gap-8">
                    <ResourceList 
                      title="Browse by type:"
                      items={resourceTypes}
                      textSize="text-xl"
                    />
                    <ResourceList 
                      title="Browse by topic:"
                      items={resourceTopics}
                      textSize="text-xl"
                    />
                    <Link 
                      href="/all-categories" 
                      className="text-xl underline underline-offset-4"
                    >
                      all categories →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/subscribe"
              className="bg-[#fd976d] text-black px-8 py-3 rounded-full hover:bg-[#fcd56b] transition-colors text-2xl text-center mt-4"
              onClick={onClose}
            >
              Join 260k+ Subscribers
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 