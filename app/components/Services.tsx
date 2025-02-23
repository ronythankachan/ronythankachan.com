import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceItem } from "../types";
import Container from "./shared/Container";

const services: ServiceItem[] = [
  {
    title: "Why AGI is not coming in 2025",
    description:
      "Read my article on why AGI is not coming in 2025. It's a written from a technical perspective. Read it here",
    icon: "/ai.png",
    hoverColor: "hover:bg-orange-400",
    href: "/blogs/agi-is-not-coming-in-2025",
    ctaText: "Read Article",
  },
  {
    title: "Browse through my blogs",
    description:
      "I write about Software Engineering, AI, and more. Checkout my blogs here",
    icon: "/blog.png",
    hoverColor: "hover:bg-purple-400",
    href: "/blogs",
    ctaText: "Checkout blogs",
  },
  {
    title: "Checkout what I'm working on",
    description:
      "In my personal time, I'm always working on something exciting, Something that I'm passionate about. Checkout what I'm working on my github",
    icon: "/github2.png",
    hoverColor: "hover:bg-emerald-400",
    href: "https://github.com/ronythankachan",
    ctaText: "Visit Github",
  },
  {
    title: "Watch Some of my videos",
    description:
      "If you are not able to see any videos, that's because I'm experimenting with couple of ideas and currently only some people can see them for feedback. I will be posting them publicly soon.",
    icon: "/youtube2.png",
    hoverColor: "hover:bg-blue-400",
    href: "https://www.youtube.com/@rony.thankachan",
    ctaText: "Get started",
  },
  {
    title: "... and more",
    hoverColor: "hover:bg-yellow-400",
    href: "/services/card",
    ctaText: "Explore more",
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
