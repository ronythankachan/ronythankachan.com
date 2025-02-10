import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  hoverColor: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  bgColor,
  hoverColor,
  href
}) => {
  return (
    <Link href={href} className="block">
      <div className={`p-10 rounded-[20px] transition-all duration-300 transform hover:-translate-y-1 ${bgColor} ${hoverColor} group`}>
        <div className="text-3xl mb-4">
          <Image src={icon} alt={`${title} icon`} width={100} height={100} />
        </div>
        <h3 className="text-[28px] font-serif mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <span className="inline-flex items-center space-x-2 font-medium border-b border-black hover:opacity-80">
          <span>Get started</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
