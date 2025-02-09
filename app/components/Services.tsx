import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    title: "Grow a YouTube Channel",
    description: "Learn how to start a YouTube channel based on my years of experience.",
    icon: "🎥",
    bgColor: "bg-gray-50",
    hoverColor: "hover:bg-sky-400"
  },
  {
    title: "Be More Productive",
    description: "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "⚙️",
    bgColor: "bg-gray-50",
    hoverColor: "hover:bg-purple-400"
  },
  {
    title: "Build an Online Business",
    description: "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "💰",
    bgColor: "bg-gray-50",
    hoverColor: "hover:bg-emerald-400"
  }
];

const Services = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-16">
      <h1 className="text-[60px] leading-tight font-serif mb-12">
        How Can<br />I Help You?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
