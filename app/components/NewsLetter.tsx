"use client";

import React from "react";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="bg-white rounded-[32px] p-8 md:p-16 mt-10">
      <div className="flex flex-col md:flex-row md:gap-16 gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-serif">
              Subscribe to<br />
              <span className="font-semibold">AI Snippets</span>
            </h2>
            <Image
              src="/message.png"
              alt="Newsletter"
              width={100}
              height={100}
              className="mt-[-20px]"
              priority
            />
          </div>
          <p className="text-base md:text-lg">
            Join a growing community of more than<br className="hidden md:block" />
            <span className="font-medium">260,000 friendly readers.</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <p className="text-base md:text-lg mb-8">
            I share in-depth technical blogs on AI, high-traffic software systems, and personal insights from my weekly experiences—delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-8 py-3 bg-[#f8f6f3] rounded-full outline-none"
            />
            <button 
              className="px-8 py-3 bg-[#5dccf1] text-black rounded-full font-medium hover:bg-[#4bb8dd] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            By submitting this form, you'll be signed up to my free newsletter. 
            You can opt-out at any time. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
