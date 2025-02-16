import React from "react";
import Image from "next/image";
import Container from "../components/shared/Container";

interface TimelineEvent {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    period: "Sept 2022 - Present",
    title: "Senior Software Engineer II ",
    company: "MakeMyTrip",
    description: `Re-architected the hotel ingestion process to minimize onboarding delays by introducing multiple Kafka queues for various types of bulk updates, effectively reducing the p95 onboarding time from 23 hours to just 3 minutes.
    Enhanced the calculation of hotel-to-location distances by implementing the Matrix API with OSRM, replacing Graphhopper. This change led to approximately 1200x improvement in latency during POI location updates.`,
    icon: "/makemytrip.png",
  },
  {
    title: "Senior Consultant",
    company: "Cognicor",
    period: "May 2019 - Sept 2022",
    description: `Built and led the development of a Dialog Manager for a platform designed to train and deploy AI chatbots. I optimized existing chatbot by removing external framework(JADE) overhead by implementing Chain of Responsibility pattern. These enhancements reduced response wait times by 140% and maintained the p95 response latency under 500ms for financial advisors, ensuring compliance with service level agreements through strategic data structures and code optimizations.`,
    icon: "/cognicor.png",
  },
  {
    title: "Systems Engineer",
    company: "Infosys",
    period: "Jun 2018 - May 2019",
    description: `Proactively contributed to the development and implementation of an inventory management system for automotive parts within a web application. Focused on optimizing search functionalities to enable service centers to efficiently manage and track their inventory levels. Collaborated with cross-functional teams to ensure seamless integration with existing systems, resulting in improved inventory accuracy and reduced operational costs.`,
    icon: "/infosys.png",
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "Rajagiri School of Engineering and Technology",
    period: "Aug 2014 - May 2018",
    description: `Pursued my passion for Software Engineering and graduated with first-class honors in Computer Science & Engineering. Actively participated in IEEE and developed a state-of-the-art VR moon exploration experience as a college project.`,
    icon: "/rajagiri.png",
  },
];

const Timeline = () => {
  return (
    <Container>
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <h1 className="text-[60px] leading-tight font-serif mb-12">
          My Journey from
          <br />
          Student to SWE
          <div className="bottom-[-5px] left-0 right-0 md:right-auto w-[200px] md:w-[400px]">
            <div className="h-[2px] bg-green-300 mb-[2px] rounded-full opacity-60" />
            <div className="h-[2px] bg-green-500 rounded-full" />
          </div>
        </h1>
        <div className="relative">
          <div className="hidden md:block absolute left-1/6 top-0 h-full border-l-4 border-orange-500"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row relative">
              <div className="w-full md:w-1/4">
                <h3 className="text-lg font-bold font-serif mt-8 ml-6 mb-4 md:mb-0">
                  {event.company}
                </h3>
                <h4 className="text-md font-medium font-serif ml-6 mb-2 md:mb-0">
                  {event.title}
                </h4>
                <h5 className="text-sm font-light font-serif ml-6 mb-4 md:mb-0">
                  ({event.period})
                </h5>
              </div>
              <div className="w-full md:w-5/6 bg-[#f8f6f3] p-8 rounded-3xl md:mb-10 relative flex flex-col-reverse md:flex-row font-serif md:ml-8">
                <div className="w-full flex items-center">
                  <p className="text-gray-700">{event.description}</p>
                </div>
                <div className="w-full flex justify-center items-center mb-4 md:mb-0">
                  <Image
                    src={event.icon}
                    alt="Icon"
                    width={120}
                    height={120}
                    style={{ width: "auto", height: "auto" }}
                  />
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
