import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`group p-6 rounded-[20px] transition-all duration-300 transform hover:-translate-y-1 bg-grayBackground ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
