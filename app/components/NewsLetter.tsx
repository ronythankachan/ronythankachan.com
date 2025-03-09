"use client";

import React from "react";
import Image from "next/image";
import NewsLetterClient from "./NewsLetterClient";

interface NewsLetterProps {
  direction?: "vertical" | "horizontal";
}

const NewsLetter: React.FC<NewsLetterProps> = ({
  direction = "horizontal",
}) => {
  const isVertical = direction === "vertical";

  return (
    <div
      className={`bg-white rounded-[32px] ${
        isVertical ? "md:p-10" : "p-8 md:p-16"
      } mt-10 shadow-xl`}
    >
      <div
        className={`flex flex-col ${
          isVertical ? "md:gap-4" : "md:flex-row"
        } md:gap-16 gap-8`}
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl md:text-4xl font-serif">
              Subscribe to
              <br />
              <span className="font-semibold">SWE Snippets</span>
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
          <p className="text-base md:text-lg font-thin">
            Join a growing community of curious Engineers
          </p>
        </div>

        {/* Right Section */}
        <div className={`w-full ${isVertical ? "" : "md:w-1/2"}`}>
          <p className="text-base md:text-lg mb-8">
            Dive into insightful technical blogs on AI, scalable software
            systems, and daily observations—delivered weekly to your inbox.
          </p>

          <NewsLetterClient direction={direction} />

          <p className="text-sm text-gray-500 mt-4">
            By submitting this form, you&apos;ll be signed up to my free
            newsletter. You can opt-out at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
