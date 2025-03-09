"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What gear do you use for personal projects?",
      answer:
        "I use a MacBook Air M1 from 2020, still works like a beast except I can't run the fastest deepseek model. My Keychron K4 mechanical keyboard with brown switches makes me feel like a professional typist, and my MX Master 2S mouse so that I can scroll 5000 pages in one second. Oh, and I have a Rode NT USB Mini mic because my voice deserves to be heard in HD.",
    },
    {
      question: "What are your hobbies?",
      answer:
        "I love hiking, reading, and coding. Sometimes I go for a swim too.",
    },
    {
      question: "Who influenced you to be a Software Engineer?",
      answer:
        "My cousin, who was the cool guy with a laptop studying Computer Science, inspired me. I spent my teenage summers glued to his laptop, dreaming of the day I'd have my own. Spoiler: I got two laptops now.",
    },
    {
      question: "Why do you want to be a Software Engineer?",
      answer:
        "I've always wanted to be a Software Engineer, even before I knew about the perks. Watching people type furiously in movies fascinated me. Computers fascinated me, and I knew this was my calling, and I'm passionate about it—paycheck or not.",
    },
    {
      question: "Do you have a favorite programming language?",
      answer:
        "I don't. Being a Software Engineer is like being a chef—you use the best ingredients for the dish. Each language or tool has its purpose, you learn to use them when you need to.",
    },
    {
      question: "What is an underrated skill in Software Engineering?",
      answer:
        "Self-learning, hands down. In this field, if you're not learning, you're falling behind. It's like a never-ending game of catch-up, but that's what keeps it exciting!",
    },
  ];

  return (
    <div className="mt-12">
      <h1 className="text-[60px] leading-tight font-serif mb-12 text-center">
        Some FAQs
      </h1>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-grayBackground rounded-3xl shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-left p-8 focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDownIcon
                className={`h-5 w-5 transform transition-transform duration-300 ml-2 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-80" : "max-h-0"
              }`}
            >
              <div className="px-8 pb-8 font-medium">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
