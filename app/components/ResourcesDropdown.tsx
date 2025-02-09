"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import ResourceList from './shared/ResourceList';
import { resourceTypes, resourceTopics } from '../constants/navigation';

interface ResourcesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = ({ isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const updateDropdownPosition = () => {
      if (dropdownRef.current) {
        const navbar = document.querySelector('nav');
        if (navbar) {
          const navbarRect = navbar.getBoundingClientRect();
          dropdownRef.current.style.top = `${navbarRect.bottom + 16}px`;
        }
      }
    };

    if (isOpen) {
      updateDropdownPosition();
      window.addEventListener('scroll', updateDropdownPosition);
    }

    return () => {
      window.removeEventListener('scroll', updateDropdownPosition);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="fixed left-1/2 -translate-x-1/2 bg-white rounded-3xl p-8 z-50 w-[90%] max-w-4xl shadow-lg"
    >
      {/* Desktop Layout - Two Columns */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-12">
          <ResourceList 
            title="Browse by type:"
            items={resourceTypes}
            textSize="text-2xl"
          />
          <div>
            <ResourceList 
              title="Browse by topic:"
              items={resourceTopics}
              textSize="text-2xl"
            />
            <Link 
              href="/all-categories" 
              className="inline-block mt-6 text-xl underline underline-offset-4"
            >
              all categories →
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Single Column */}
      <div className="lg:hidden space-y-8">
        <ResourceList 
          title="Browse by type:"
          items={resourceTypes}
          textSize="text-xl"
        />
        <div>
          <ResourceList 
            title="Browse by topic:"
            items={resourceTopics}
            textSize="text-xl"
          />
          <Link 
            href="/all-categories" 
            className="inline-block mt-4 text-lg underline underline-offset-4"
          >
            all categories →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown; 