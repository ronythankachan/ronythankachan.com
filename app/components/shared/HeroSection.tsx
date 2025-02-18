import React from "react";

interface HeroSectionProps {
  children: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <div className="bg-[#f8f6f3] pt-2 pb-16 md:py-16 rounded-b-3xl">
      {children}
    </div>
  );
};

export default HeroSection;
