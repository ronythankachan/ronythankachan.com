import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ResourcesDropdown: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Invisible backdrop for click detection */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-3xl p-8 z-50 w-[90%] max-w-4xl mt-2">
        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-12">
            {/* Browse by type column */}
            <div>
              <h2 className="text-3xl font-serif mb-6">Browse by type:</h2>
              <div className="space-y-4">
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
              </div>
            </div>

            {/* Browse by topic column */}
            <div>
              <h2 className="text-3xl font-serif mb-6">Browse by topic:</h2>
              <div className="space-y-4">
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
              </div>
              <Link href="/all-categories" className="inline-block mt-6 text-xl underline underline-offset-4">
                all categories →
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Single Column */}
        <div className="lg:hidden space-y-6">
          <div>
            <h2 className="text-2xl font-serif mb-4">Browse by type:</h2>
            <div className="space-y-3">
              <Link href="/articles" className="flex items-center gap-3 text-lg hover:underline">
                <span>📝</span>
                <span>Articles</span>
              </Link>
              <Link href="/book-notes" className="flex items-center gap-3 text-lg hover:underline">
                <span>📗</span>
                <span>Book Notes</span>
              </Link>
              <Link href="/videos" className="flex items-center gap-3 text-lg hover:underline">
                <span>▶️</span>
                <span>Videos</span>
              </Link>
              <Link href="/podcast" className="flex items-center gap-3 text-lg hover:underline">
                <span>💬</span>
                <span>Podcast</span>
              </Link>
              <Link href="/newsletter" className="flex items-center gap-3 text-lg hover:underline">
                <span>✉️</span>
                <span>Newsletter</span>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-4">Browse by topic:</h2>
            <div className="space-y-3">
              <Link href="/productivity" className="flex items-center gap-3 text-lg hover:underline">
                <span>⚙️</span>
                <span>Productivity</span>
              </Link>
              <Link href="/youtube" className="flex items-center gap-3 text-lg hover:underline">
                <span>🎥</span>
                <span>YouTube</span>
              </Link>
              <Link href="/studying" className="flex items-center gap-3 text-lg hover:underline">
                <span>📚</span>
                <span>Studying</span>
              </Link>
              <Link href="/business" className="flex items-center gap-3 text-lg hover:underline">
                <span>💰</span>
                <span>Online Business</span>
              </Link>
              <Link href="/tools" className="flex items-center gap-3 text-lg hover:underline">
                <span>📱</span>
                <span>Tools & Tech</span>
              </Link>
            </div>
            <Link href="/all-categories" className="inline-block mt-4 text-lg underline underline-offset-4">
              all categories →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesDropdown; 