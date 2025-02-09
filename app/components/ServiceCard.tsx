import React from "react";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <div className="bg-[#f8f6f3] flex flex-col items-start p-20 rounded-2xl mt-10 hover:bg-orange-300">
      <Image src={"/message.png"} alt="hero" width={100} height={100} />
      <h1 className="text-4xl mb-5">Grow a Youtube Channel</h1>
      <h3>
        Learn how to start youtube channel based on my years of experience{" "}
      </h3>
      <div className="flex items-center justify-center space-x-4 mt-10">
        <button>Get started</button>
        <Image src={"/arrow.png"} alt="arrow" width={30} height={30} />
      </div>
    </div>
  );
};

export default ServiceCard;
