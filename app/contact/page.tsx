"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/shared/HeroSection";
import Container from "../components/shared/Container";
import ContactIntro from "../components/ContactIntro";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
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
    <>
      <HeroSection>
        <Container>
          <ContactIntro />
          <ContactForm />
        </Container>
      </HeroSection>
      <Container>
        <FAQ />
      </Container>
    </>
  );
};

export default Contact;
