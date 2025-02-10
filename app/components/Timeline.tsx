import React from 'react';
import Image from 'next/image';
import Container from '../components/shared/Container';

interface TimelineEvent {
  period: string;
  description: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    period: "Sept 2022 - Present",
    description: `MakeMyTrip, Bengaluru - Senior Software Engineer
    Re-architected the hotel ingestion process to minimize onboarding delays by introducing multiple Kafka queues for various types of bulk updates, effectively reducing the p95 onboarding time from 23 hours to just 3 minutes.
    Enhanced the calculation of hotel-to-location distances by implementing the Matrix API with OSRM, replacing Graphhopper. This change led to approximately 1200x improvement in latency during POI location updates.`,
    icon: "/certificate.png"
  },
  {
    period: "May 2019 - Sept 2022",
    description: `Cognicor, Kochi - Senior Software Engineer
    Ideation and end-to-end development of a Dialog Manager for a platform to train and deploy AI chatbots, thereby minimizing the resources spent on customer support and mundane tasks done by businesses.
    Optimized existing chatbot features by eliminating external framework overhead and implementing the Chain of Responsibility design pattern, reducing response wait times by 140%, and maintained p95 response latency under 500ms for financial advisors through appropriate data structures and code optimizations, ensuring SLA compliance.`,
    icon: "/thumsup.png"
  },
  {
    period: "Aug 2014 - May 2018",
    description: `Rajagiri school of engineering and technology, Kochi
    B.Tech in Computer Science & Engineering`,
    icon: "/youtube-large.png"
  }
];

const Timeline = () => {
  return (
    <Container>
        <section className="max-w-[1200px] mx-auto px-4 py-16">
            <h1 className="text-[60px] leading-tight font-serif mb-12">
            My Journey from<br />
            <span className="font-bold underline underline-offset-4 decoration-blue-400">
            Student to SWE
            </span>
        </h1>
        <div className="relative">
            <div className="hidden md:block absolute left-1/6 top-0 h-full border-l-4 border-orange-500"></div>
            {timelineEvents.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-1/4">
                <h3 className="text-lg font-bold font-serif mt-8 ml-6 mb-4 md:mb-0">{event.period}</h3>
                </div>
                <div className="w-full md:w-5/6 bg-[#f8f6f3] p-8 rounded-3xl md:mb-10 relative flex flex-col-reverse md:flex-row font-serif md:ml-8">
                <div className="w-full flex items-center">
                    <p className="text-gray-700">{event.description}</p>
                </div>
                <div className="w-full flex justify-center items-center mb-4 md:mb-0">
                    <Image src={event.icon} alt="Icon" width={120} height={120} />
                </div>
                </div>
            </div>
            ))}
        </div>
    </section>
    </Container>
  );
};

export default Timeline; 