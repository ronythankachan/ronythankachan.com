import Image from "next/image";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-between p-20 items-center bg-white rounded-2xl">
      <div className="w-1/2 px-8">
        <div className="flex items-center">
          <h1 className="text-4xl ">
            Subscribe to <br />{" "}
            <span className="font-semibold">Tech Snippets</span>
          </h1>
          <Image
            src={"/message.png"}
            alt="newsletter"
            width={100}
            height={100}
            className="ml-4"
          />
        </div>
        <h3 className="mt-2">Join a growing tech community of 1k+ members</h3>
      </div>
      <div className="w-1/2">
        <h3>
          I share life observations, technical knowledge including system design
          and in depth AI related content.
        </h3>
        <div className="flex items-center justify-between rounded-full py-2 pl-8 pr-2 bg-[#f8f6f3] mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none"
          />
          <button className="bg-[#5dccf1] py-3 px-8 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
