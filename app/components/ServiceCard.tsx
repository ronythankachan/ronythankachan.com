import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  hoverColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  bgColor,
  hoverColor
}) => {
  return (
    <div className={`p-8 rounded-[20px] transition-all duration-300 transform hover:-translate-y-1 ${bgColor} ${hoverColor} group`}>
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-[32px] font-serif mb-4 leading-tight">{title}</h3>
      <p className="text-gray-600 text-lg mb-6">{description}</p>
      <div className="inline-flex items-center space-x-2 font-medium border-b border-black">
        <span>Get started</span>
        <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
      </div>
    </div>
  );
};

export default ServiceCard;
