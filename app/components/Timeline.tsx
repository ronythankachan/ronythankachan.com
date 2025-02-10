import React from 'react';
import Image from 'next/image';

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
    Enhanced the calculation of hotel-to-location distances by implementing the Matrix API with OSRM, replacing Graphhopper. This change led to approximately 1200x improvement in latency during POI location updates.
    Created filter buckets to filter hotels based on driving duration from the user's location, helping customers choose a property that is close as part of a new nearby hotels page.
    Ideation and development of an efficient algorithm to apply filters selected by the user on hotels, improving the hotels listing page loading 2X faster.`,
    icon: "/certificate.png"
  },
  {
    period: "May 2019 - Sept 2022",
    description: `Cognicor, Kochi - Senior Software Engineer
    Ideation and end-to-end development of a Dialog Manager for a platform to train and deploy AI chatbots, thereby minimizing the resources spent on customer support and mundane tasks done by businesses.
    Optimized existing chatbot features by eliminating external framework overhead and implementing the Chain of Responsibility design pattern, reducing response wait times by 140%, and maintained p95 response latency under 500ms for financial advisors through appropriate data structures and code optimizations, ensuring SLA compliance.
    Led the research and end-to-end development of a chatbot profiling system that delivers personalized responses by analyzing user questions and proactively engaging when needed, which became a key feature in onboarding four major U.S. financial services organizations.`,
    icon: "/thumsup.png"
  },
  {
    period: "Jun 2018 - May 2019",
    description: `Infosys, Bengaluru - Systems Engineer Implemented inventory management for automotive parts in a web application, focusing on search, to assist service centres in managing their inventory.`,
    icon: "/youtube-large.png"
  },
  {
    period: "Nov 2021 - Feb 2022",
    description: `End-to-end development of a fully functional mobile-responsive site for medicine delivery, as well as an appointment management system that allowed the hospital to provide online and at-home consultations during COVID.
    The implementation of the online consultation and website assisted the hospital in increasing its revenue by 12X over the previous 3 fiscal years and expanding to 5 more branches this year.`,
    icon: "/thumsup.png"
  },
  {
    period: "Aug 2014 - May 2018",
    description: `Rajagiri school of engineering and technology, Kochi
    B.Tech in Computer Science & Engineering`,
    icon: "/youtube-large.png"
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="mt-16 relative">
      <div className="absolute left-1/6 top-0 h-full border-l-4 border-orange-500"></div>
      {timelineEvents.map((event, index) => (
        <div key={index} className="flex mb-8 relative">
          <div className="w-1/4 ">
            <h3 className="text-lg font-bold font-serif mt-16 ml-6">{event.period}</h3>
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