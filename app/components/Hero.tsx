import Image from "next/image";
import React from "react";
import NewsLetter from "./NewsLetter";

const Hero = () => {
  return (
    <div className="px-28 py-10 bg-[#f8f6f3]">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <Image src="/rony.png" alt="hero" width={400} height={400} />
        </div>
        <div className="w-1/2 pl-10">
          <h1 className="font-medium text-4xl">
            <span className="underline underline-offset-4">
              Hey Humans! <span className="text-sm">( and AI) </span>
              <br />
            </span>
            I&apos;m Rony, a Full Stack Developer. Welcome to my world.
          </h1>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Hero;
