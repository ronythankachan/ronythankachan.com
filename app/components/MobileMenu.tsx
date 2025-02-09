"use client";

import React from 'react';
import Link from 'next/link';

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

  const handleResourcesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onResourcesClick();
  };

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
            <Link 
              href="/book" 
              className="text-3xl hover:underline"
              onClick={onClose}
            >
              My Book
            </Link>
            <div className="relative">
              <button 
                onClick={handleResourcesClick}
                className="text-3xl text-left hover:underline"
              >
                Free Resources
              </button>
              
              {/* Inline Resources Dropdown for Mobile */}
              {isResourcesOpen && (
                <div className="mt-4 bg-white rounded-3xl p-8">
                  <div className="ml-0 flex flex-col gap-4">
                    <h3 className="text-2xl font-serif">Browse by type:</h3>
                    <Link href="/articles" className="flex items-center gap-3 text-xl hover:underline">
                      <span>📝</span>
                      <span>Articles</span>
                    </Link>
                    <Link href="/book-notes" className="flex items-center gap-3 text-xl hover:underline">
                      <span>📗</span>
                      <span>Book Notes</span>
                    </Link>
                    <Link href="/videos" className="flex items-center gap-3 text-xl hover:underline">
                      <span>▶️</span>
                      <span>Videos</span>
                    </Link>
                    <Link href="/podcast" className="flex items-center gap-3 text-xl hover:underline">
                      <span>💬</span>
                      <span>Podcast</span>
                    </Link>
                    <Link href="/newsletter" className="flex items-center gap-3 text-xl hover:underline">
                      <span>✉️</span>
                      <span>Newsletter</span>
                    </Link>

                    <h3 className="text-2xl font-serif mt-4">Browse by topic:</h3>
                    <Link href="/productivity" className="flex items-center gap-3 text-xl hover:underline">
                      <span>⚙️</span>
                      <span>Productivity</span>
                    </Link>
                    <Link href="/youtube" className="flex items-center gap-3 text-xl hover:underline">
                      <span>🎥</span>
                      <span>YouTube</span>
                    </Link>
                    <Link href="/studying" className="flex items-center gap-3 text-xl hover:underline">
                      <span>📚</span>
                      <span>Studying</span>
                    </Link>
                    <Link href="/business" className="flex items-center gap-3 text-xl hover:underline">
                      <span>💰</span>
                      <span>Online Business</span>
                    </Link>
                    <Link href="/tools" className="flex items-center gap-3 text-xl hover:underline">
                      <span>📱</span>
                      <span>Tools & Tech</span>
                    </Link>
                    <Link href="/all-categories" className="text-xl underline underline-offset-4 mt-2">
                      all categories →
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
      </div>
    </>
  );
};

export default MobileMenu; 