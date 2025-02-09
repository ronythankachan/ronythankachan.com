import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
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
    <nav className="flex justify-between items-center py-6 px-4 bg-[#f8f6f3]">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-[#5dccf1] text-2xl">✦</span>
        <span className="text-xl font-medium">Rony Thankachan</span>
      </Link>
      
      <div className="flex items-center space-x-8">
        <Link href="/book" className="hover:underline hover:underline-offset-4 transition-all">
          My Book
        </Link>
        <div className="relative group">
          <button className="flex items-center space-x-1 transition-all">
            <span>Free Resources</span>
            <span className="text-xs">▼</span>
          </button>

          <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-lg p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-medium mb-4">Browse by type:</h3>
                <div className="space-y-4">
                  {resourceTypes.map((item) => (
                    <Link 
                      href={`/${item.label.toLowerCase()}`} 
                      key={item.label}
                      className="flex items-center space-x-3 hover:underline hover:underline-offset-4 transition-all"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Browse by topic:</h3>
                <div className="space-y-4">
                  {resourceTopics.map((item) => (
                    <Link 
                      href={`/topic/${item.label.toLowerCase()}`} 
                      key={item.label}
                      className="flex items-center space-x-3 hover:underline hover:underline-offset-4 transition-all"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
                <Link 
                  href="/categories" 
                  className="inline-flex items-center space-x-2 mt-6 hover:underline hover:underline-offset-4 transition-all"
                >
                  <span>all categories</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link href="/academy" className="hover:underline hover:underline-offset-4 transition-all">
          YouTube Academy
        </Link>
        <Link href="/lab" className="hover:underline hover:underline-offset-4 transition-all">
          Productivity Lab
        </Link>
        <Link
          href="/subscribe"
          className="bg-[#fd976d] text-black px-6 py-2 rounded-full hover:bg-[#fcd56b] transition-colors"
        >
          Join 260k+ Subscribers
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
