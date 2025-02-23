import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceItem } from "../types";
import Container from "./shared/Container";

const services: ServiceItem[] = [
  {
    title: "Grow a YouTube Channel",
    description:
      "Learn how to start a YouTube channel based on my years of experience. Learn how to start a YouTube channel based on my years of experience.",
    icon: "/youtube-large.png",
    hoverColor: "hover:bg-sky-300",
    href: "/services/youtube",
  },
  {
    title: "Be More Productive",
    description:
      "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "/certificate.png",
    hoverColor: "hover:bg-purple-300",
    href: "/services/productivity",
  },
  {
    title: "Build an Online Business",
    description:
      "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "/meeting.png",
    hoverColor: "hover:bg-emerald-200",
    href: "/services/business",
  },
  {
    title: "Make money from Software",
    description:
      "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "/money-bag.png",
    hoverColor: "hover:bg-blue-200",
    href: "/services/another",
  },
  {
    title: "This is just a card",
    description:
      "How to execute efficiently, make time for what matters and have fun along the way.",
    icon: "/gear.png",
    hoverColor: "hover:bg-yellow-200",
    href: "/services/card",
  },
];

const Services = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 mt-12 md:mt-20">
        <div>
          <h1 className="text-6xl md:text-8xl leading-tight font-serif md:mb-16">
            Start exploring
            <br />
            from here
          </h1>
          {services.slice(0, Math.floor(services.length / 2)).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div>
          {services.slice(Math.floor(services.length / 2)).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
