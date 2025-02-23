import React from "react";
import Image from "next/image";
import Container from "./shared/Container";
import NewsLetter from "./NewsLetter";
import HeroSection from "./shared/HeroSection";
import Link from "next/link";

const Greeting: React.FC = React.memo(() => {
  return (
    <HeroSection>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 order-1 md:order-1">
            <div className="max-w-[400px] mx-auto md:mx-0">
              <Image
                src="/rony.png"
                alt="Profile picture"
                width={400}
                height={400}
                className="rounded-full bg-green-100"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 order-2 md:order-2 text-center md:text-left md:pl-10">
            <h1 className="text-[32px] md:text-[52px] leading-tight font-serif mb-6 relative">
              Hey Humans (and AI)!
              <div className="absolute bottom-[-5px] left-0 right-0 md:right-auto md:w-[300px]">
                <div className="h-[2px] bg-[#5dccf1] mb-[2px] rounded-full opacity-60" />
                <div className="h-[2px] bg-[#5dccf1] rounded-full" />
              </div>
            </h1>
            <p className="text-[24px] md:text-[32px] leading-tight font-serif">
              I&apos;m Rony, a{" "}
              <span className="underline underline-offset-4">
                Senior Software Engineer
              </span>{" "}
              and{" "}
              <span className="underline underline-offset-4">
                Content Writer
              </span>{" "}
              specializing in{" "}
              <span className="underline underline-offset-4">
                System Design
              </span>
              , <span className="underline underline-offset-4">AI</span>, and
              all other aspects of software development.{" "}
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 font-medium border-b border-blue-500 hover:border-none hover:opacity-80 group text-blue-500"
              >
                <span className="transform transition-transform duration-300 group-hover:scale-105">
                  Read more
                </span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </p>
          </div>
        </div>
        <NewsLetter />
      </Container>
    </HeroSection>
  );
});

Greeting.displayName = "Greeting";

export default Greeting;
