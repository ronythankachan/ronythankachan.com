import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceItem } from "../types";
import Container from "./shared/Container";

const services: ServiceItem[] = [
  {
    title: "Why AGI is not coming in 2025",
    description:
      "Read my article on why AGI is not coming in 2025. It's written from a technical perspective. Read it here.",
    icon: "/ai.png",
    hoverColor: "hover:bg-orange-300",
    href: "/blogs/agi-is-not-coming-in-2025",
    ctaText: "Read Article",
  },
  {
    title: "Browse through my blogs",
    description:
      "I write about Software Engineering, AI, and more. Check out my blogs here.",
    icon: "/blog.png",
    hoverColor: "hover:bg-purple-300",
    href: "/blogs",
    ctaText: "Check out Blogs",
  },
  {
    title: "Check out what I'm working on",
    description:
      "In my personal time, I'm always working on something exciting, something that I'm passionate about. Check out what I'm working on my GitHub.",
    icon: "/version-control.png",
    hoverColor: "hover:bg-emerald-300",
    href: "https://github.com/ronythankachan",
    ctaText: "Visit GitHub",
  },
  {
    title: "Watch some of my videos",
    description:
      "If you are not able to see any videos, that's because I'm experimenting with a couple of ideas and currently only some people can see them for feedback. I will be posting them publicly soon.",
    icon: "/youtube2.png",
    hoverColor: "hover:bg-blue-300",
    href: "https://www.youtube.com/@rony.thankachan",
    ctaText: "Get Started",
  },
  {
    title: "... and more",
    hoverColor: "hover:bg-yellow-300",
    href: "/",
    ctaText: "Explore More",
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
