import Image from "next/image";
import Container from "./shared/Container";
import NewsLetter from "./NewsLetter";

const Hero = () => {
  return (
    <div className="bg-[#f8f6f3] py-8 rounded-b-3xl">
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
            <h1 className="text-[40px] md:text-[52px] leading-tight font-serif mb-6 relative">
              Hey Humans (and AI)!
              <div className="absolute bottom-[-5px] left-0 right-0 md:right-auto md:w-[300px]">
                <div className="h-[2px] bg-[#5dccf1] mb-[2px] rounded-full opacity-60" />
                <div className="h-[2px] bg-[#5dccf1] rounded-full" />
              </div>
            </h1>
            <p className="text-[28px] md:text-[32px] leading-tight font-serif">
              I&apos;m Rony. A {" "}
              <span className="underline underline-offset-4">Senior Software Engineer</span>, and {" "}
              <span className="underline underline-offset-4">AI content writer</span>. If you are interested, have a look at what I&apos;m working on.
            </p>
          </div>
        </div>
        <NewsLetter />
      </Container>
    </div>
  );
};

export default Hero;