"use client";

import React from 'react';
import Link from 'next/link';
import ResourceList from './shared/ResourceList';
import { resourceTypes, resourceTopics } from '../constants/navigation';

interface ResourcesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-white rounded-3xl p-8 z-50 w-[90%] max-w-4xl">
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