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
          <h1 className="text-[64px] leading-tight font-serif mb-6">
            Hey Friends!
            <div className="relative">
              <div className="absolute -bottom-2 left-0 w-[280px]">
                <div className="h-[6px] bg-[#5dccf1] mb-[3px] rounded-full opacity-60"></div>
                <div className="h-[6px] bg-[#5dccf1] rounded-full"></div>
              </div>
            </div>
          </h1>
          <p className="text-[40px] leading-tight font-serif">
            I'm Rony. I'm a Full Stack Developer, {" "}
            <span className="underline underline-offset-4">YouTuber</span>, and the
            author of the New York Times bestseller,{" "}
            <span className="underline underline-offset-4">Feel-Good Productivity</span>.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Hero;
