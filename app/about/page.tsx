import Container from "../components/shared/Container";
import Image from 'next/image';

const facts = [
  "I studied Computer Science and engineering for 4 years graduating in 2018.",
  "I am currently a Senior Software Engineer II at MakeMyTrip.",
  "I am a very curious person especially about Software Systems and AI.",
  "I love riding my bike and hitting the Gym.",
  "I'm 29 years old. Born in 1995 in India. I now live in Bengaluru, Karnataka."
];

const About = () => {
  return (
    <div className="bg-[#f8f6f3] py-16 rounded-b-3xl">
      <Container>
        <div className="text-left max-w-3xl mx-auto">
          <h1 className="text-[24px] md:text-[52px] leading-tight font-serif mb-4 md:mb-6">
            Hey, I&rsquo;m Rony 👋. I&rsquo;m a <span className="underline underline-offset-4">Senior Software Engineer</span>, Tech blogger, YouTuber, and a liftime, <span className="underline underline-offset-4">Student</span>.
          </h1>
          <h2 className="text-[20px] md:text-[32px] leading-tight font-serif mb-3 md:mb-4">
            Quick Facts <span className="font-bold">About Me</span>
          </h2>
          <ul className="list-none space-y-3 md:space-y-4 text-base md:text-lg md:grid md:grid-cols-2 md:gap-x-8">
            {facts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <Image src="/checked.png" alt="Checked" width={20} height={20} className="mr-4 mt-2" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;