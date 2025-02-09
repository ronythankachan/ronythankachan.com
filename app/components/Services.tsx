import React from "react";
import ServiceCard from "./ServiceCard";

const HowCanIHelp = () => {
  return (
    <div className="flex px-28 py-10 mt-20 space-x-20">
      <div className="w-1/2">
        <div className="font-bold text-6xl mb-10 text-center">
          <h1>
            How can I <br /> help you?
          </h1>
        </div>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      <div className="w-1/2">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default HowCanIHelp;
