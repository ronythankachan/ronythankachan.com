import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardContainer from "./shared/CardContainer";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  hoverColor: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  hoverColor,
  href,
}) => {
  return (
    <Link href={href}>
      <CardContainer className={`bg-grayBackground ${hoverColor}`}>
        <div className="text-3xl mb-4">
          <Image src={icon} alt={`${title} icon`} width={100} height={100} />
        </div>
        <h3 className="text-[28px] font-serif mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <span className="inline-flex items-center space-x-2 font-medium border-b border-black hover:opacity-80">
          <span>Get started</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </span>
      </CardContainer>
    </Link>
  );
};

export default ServiceCard;
