"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/shared/HeroSection";
import Container from "../components/shared/Container";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = React.useState<boolean | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await response.json();
      setMessage(
        "Thank you for your message. I will get back to you as soon as possible."
      );
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setMessage("");
        setIsSuccess(null);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <HeroSection>
      <Container>
        <div className="flex justify-center items-center min-h-screen">
          <form
            className="space-y-6 bg-white p-8 shadow-lg max-w-md w-full"
            onSubmit={handleSubmit}
          >
            <h1 className="text-[60px] leading-tight font-serif mb-12">
              Contact Me
            </h1>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 px-8 py-3 bg-grayBackground rounded-full outline-none w-full"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 px-8 py-3 bg-grayBackground rounded-full outline-none w-full"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="flex-1 px-8 py-3 bg-grayBackground rounded-3xl outline-none w-full"
                required
              />
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
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-sky-400 text-black rounded-full font-medium hover:bg-sky-200 transition-colors flex items-center justify-center"
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
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </HeroSection>
  );
};

export default Contact;
