import Image from "next/image";
import React from "react";
import NewsLetter from "./NewsLetter";

const Hero = () => {
  return (
    <div className="px-4 md:px-28 py-10 bg-[#f8f6f3]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="max-w-[400px] mx-auto md:mx-0">
            <Image 
              src="/rony.png" 
              alt="hero" 
              width={400} 
              height={400}
              className="rounded-full bg-green-100"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left md:pl-10">
          <h1 className="text-[48px] md:text-[64px] leading-tight font-serif mb-6">
            Hey Friends!
            <div className="relative inline-block w-full">
              <div className="absolute -bottom-2 left-0 right-0 md:right-auto md:w-[280px]">
                <div className="h-[6px] bg-[#5dccf1] mb-[3px] rounded-full opacity-60"></div>
                <div className="h-[6px] bg-[#5dccf1] rounded-full"></div>
              </div>
            </div>
          </h1>
          <p className="text-[32px] md:text-[40px] leading-tight font-serif">
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