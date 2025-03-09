"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setMessage("");
        setIsSuccess(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

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

  return (
    <form
      className="space-y-4 shadow-lg px-6 md:px-32 py-12 rounded-3xl mt-8 mx-auto max-w-3xl bg-white"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-6">
        <Image
          src="/rony2.jpeg"
          alt="Rony's Picture"
          width={80}
          height={80}
          className="rounded-full"
        />
        <h1 className="text-3xl md:text-4xl font-serif text-gray-800">
          Contact Me
        </h1>
      </div>

      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="flex-1 px-6 py-3 bg-gray-100 rounded-full outline-none w-full "
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
          className="flex-1 px-6 py-3 bg-gray-100 rounded-full outline-none w-full"
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
          className="flex-1 px-6 py-3 bg-gray-100 rounded-3xl outline-none w-full"
          required
        />
      </div>
      {message && (
        <p
          className={`text-sm mt-2 p-4 rounded-lg ${
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
          className="w-full px-6 py-3 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded-full font-medium hover:from-sky-500 hover:to-sky-700 transition-colors flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
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
  );
};

export default ContactForm;
