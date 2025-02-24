import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardContainer from "./shared/CardContainer";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: string;
  hoverColor: string;
  href: string;
  ctaText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  hoverColor,
  href,
  ctaText,
}) => {
  return (
    <Link href={href}>
      <CardContainer
        className={`bg-grayBackground ${hoverColor} mt-10 md:p-10 md:p-20 flex flex-col gap-y-6`}
      >
        {icon && (
          <div className="text-4xl mb-4">
            <Image src={icon} alt={`${title} icon`} width={100} height={100} />
          </div>
        )}
        <h3 className="text-4xl font-serif leading-tight">{title}</h3>
        {description && (
          <p className="text-gray-600 text-base mb-4">{description}</p>
        )}
        <div>
          <span className="inline-flex items-center space-x-2 font-medium hover:opacity-80 border-b border-black">
            <span>{ctaText}</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </span>
        </div>
      </CardContainer>
    </Link>
  );
};

export default ServiceCard;
