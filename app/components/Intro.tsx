import React from "react";
import Image from "next/image";
import HeroSection from "./shared/HeroSection";
import Container from "./shared/Container";

const facts = [
  "I hold a Bachelor's degree in Computer Science and Engineering, graduating in 2018.",
  "Currently, I am a Senior Software Engineer II at MakeMyTrip.",
  "I have a keen interest in Software Systems and Artificial Intelligence.",
  "I enjoy motorcycling, hiking and reading books.",
  "I am 29 years old, born in 1995 in India, and currently residing in Bengaluru, Karnataka.",
];

const AboutPageIntro = () => {
  return (
    <HeroSection>
      <Container>
        <div className="text-left max-w-3xl px-2 md:px-10 md:mx-auto font-serif">
          <h1 className="text-2xl leading-[1.5] md:leading-[1.5] md:text-4xl">
            Hey, I&rsquo;m Rony 👋. A{" "}
            <span className="underline underline-offset-4 bg-green-100">
              Senior Software Engineer
            </span>
            , Tech Blogger, YouTuber, and a lifelong{" "}
            <span className="underline underline-offset-4 bg-red-100">
              Student
            </span>
            .
          </h1>
          <h2 className="text-2xl md:text-3xl leading-tight my-4 relative inline-block">
            Quick Facts{" "}
            <span className="font-bold relative z-10 md:ml-4 p-2">
              About Me
            </span>
            <Image
              src="/circle.png"
              alt="Circle"
              width={140}
              height={140}
              className="absolute top-[-10px] left-32 md:left-40 transform z-20 md:w-[200px] md:h-[50px]"
            />
          </h2>
          <ul className="list-none space-y-3 md:space-y-4 text-base md:text-lg md:grid md:grid-cols-2 md:gap-x-8">
            {facts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <Image
                  src="/checked.png"
                  alt="Checked"
                  width={20}
                  height={20}
                  className="mr-4 mt-2"
                />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </HeroSection>
  );
};

export default AboutPageIntro;
