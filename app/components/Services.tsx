import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    title: "Grow a YouTube Channel",
    description:
      "Learn how to start a YouTube channel based on my years of experience. Learn how to start a YouTube channel based on my years of experience.",
    icon: "/youtube-large.png",
    bgColor: "bg-[#f8f6f3]",
    hoverColor: "hover:bg-sky-300",
    href: "/services/youtube",
  },
  {
    title: "Be More Productive",
    description:
      "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "/certificate.png",
    bgColor: "bg-[#f8f6f3]",
    hoverColor: "hover:bg-purple-300",
    href: "/services/productivity",
  },
  {
    title: "Build an Online Business",
    description:
      "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "/meeting.png",
    bgColor: "bg-[#f8f6f3]",
    hoverColor: "hover:bg-emerald-200",
    href: "/services/business",
  },
  {
    title: "Make money from Software",
    description:
      "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "/money-bag.png",
    bgColor: "bg-[#f8f6f3]",
    hoverColor: "hover:bg-blue-200",
    href: "/services/another",
  },
  {
    title: "This is just a card",
    description:
      "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "/gear.png",
    bgColor: "bg-[#f8f6f3]",
    hoverColor: "hover:bg-yellow-200",
    href: "/services/card",
  },
];

const Services = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-16">
      <h1 className="text-[60px] leading-tight font-serif mb-12">
        How Can
        <br />I Help You?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
