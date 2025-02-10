import React from 'react';
import Image from 'next/image';

interface TimelineEvent {
  period: string;
  description: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    period: "1994 – 2012",
    description: `I was born in Pakistan in 1994, moving to Lesotho for a while, before going back to Pakistan. Then I ultimately moved to the United Kingdom with my mother and brother in 2003.

    At 12, I learned to code and started earning money as a freelance web designer (this funded my World of Warcraft addiction) – this was my first taste of earning money online. I went to school in Southend-on-Sea, where I also worked as a teaching assistant for a couple of years.`,
    icon: "/certificate.png"
  },
  {
    period: "2012 – 2018",
    description: `After finishing school, I joined the University of Cambridge to study for a Bachelor degree in preclinical medicine and psychology. I started 6med with a friend in 2013. I completed my Bachelors in 2015 and went on to study MBBS at Cambridge, starting this website in 2016, my YouTube channel in 2017 and graduating from Cambridge University in 2018.`,
    icon: "/thumsup.png"
  },
  {
    period: "2018 – 2020",
    description: `After graduating from Cambridge, I went to work as a Junior Doctor in the UK National Health Service. I had high hopes of specialising in plastic surgery at the time. 2018 was also when I had my first 'viral'`,
    icon: "/youtube-large.png"
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="mt-16 relative">
      <div className="absolute left-1/6 top-0 h-full border-l-2 border-gray-300"></div>
      {timelineEvents.map((event, index) => (
        <div key={index} className="flex mb-8 relative">
          <div className="w-1/6 text-right pr-4">
            <h3 className="text-lg font-bold mt-16 mr-6">{event.period}</h3>
          </div>
          <div className="w-5/6 bg-[#f8f6f3] p-16 rounded-3xl relative flex font-serif">
            <div className="w-1/2 flex items-center">
              <p className="text-gray-700">{event.description}</p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <Image src={event.icon} alt="Icon" width={120} height={120} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline; 