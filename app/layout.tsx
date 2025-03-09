import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rony Thankachan",
  description: "Senior Software Engineer, Tech Blogger and liftime Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-4 sm:mx-10`}
      >
        <GoogleAnalytics gaId="G-LKKN7XDTTQ" />
        <div className="max-w-screen-xl mx-auto font-sans">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
