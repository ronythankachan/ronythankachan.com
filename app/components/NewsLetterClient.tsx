"use client";

import React, { useState, useEffect } from "react";
import { isValidEmail } from "../utils/validationUtils";

interface NewsLetterClientProps {
  direction?: "vertical" | "horizontal";
}

const NewsLetterClient: React.FC<NewsLetterClientProps> = ({
  direction = "horizontal",
}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful!");
        setIsSuccess(true);
        setEmail(""); // Clear the input box
      } else {
        setMessage("Subscription failed. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubscribe();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setMessage("");
        setIsSuccess(null);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const isVertical = direction === "vertical";
  console.log("isVertical", isVertical);

  return (
    <div>
      <div
        className={`flex gap-4 flex-col ${isVertical ? "" : "md:flex-row"} `}
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-8 py-3 bg-grayBackground rounded-full outline-none"
        />
        <button
          onClick={handleSubscribe}
          className={`px-8 py-3 bg-sky-400 text-black rounded-full font-medium hover:bg-sky-200 transition-colors whitespace-nowrap flex items-center justify-center`}
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
              ></path>
            </svg>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
      {message && (
        <p
          className={`text-sm mt-4 p-3 rounded-lg ${
            isSuccess
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsLetterClient;
