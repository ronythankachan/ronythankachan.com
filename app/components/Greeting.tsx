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
          <div className="w-full md:w-1/2">
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

          <div className="w-full md:w-1/2 text-center md:text-left md:pl-10">
            <h1 className="text-4xl md:text-6xl leading-[1.5] font-serif mb-10 relative">
              Hey Humans
              <span className="text-2xl"> (and AI)!</span>
              <Image
                src="/marker.png"
                alt="Double line marker"
                width={200}
                height={2}
                className="ml-32"
              />
            </h1>
            <p className="text-2xl leading-[1.5] md:leading-[1.5] md:text-4xl mt-[-20px]">
              I&apos;m Rony, a{" "}
              <span className="border-b-2 border-blue-500 bg-green-100">
                Senior Software Engineer at MakeMyTrip,
              </span>{" "}
              technical blogger and make videos about{" "}
              <span className="border-b-2 border-blue-500 bg-orange-100">
                System Design, AI
              </span>{" "}
              and other topics that interest me.{" "}
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 border-b border-blue-500 hover:border-none hover:opacity-80 group text-blue-500 text-2xl"
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
