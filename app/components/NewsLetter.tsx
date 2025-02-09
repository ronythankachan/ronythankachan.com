import React from "react";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="bg-white rounded-[32px] p-8 md:p-16 mt-12">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-serif">
              Subscribe to<br />
              <span className="font-semibold">LifeNotes</span>
            </h2>
            <Image
              src="/message.png"
              alt="Newsletter"
              width={100}
              height={100}
              className="mt-4 md:mt-[-20px]"
            />
          </div>
          <p className="text-lg">
            Join a growing community of more than<br />
            <span className="font-medium">260,000 friendly readers.</span>
          </p>
          
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
              ))}
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <span className="text-sm text-gray-600">200+ reviews</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-8 text-center md:text-left">
            I share actionable productivity tips, practical life advice,
            and high-quality insights from across the web, directly
            to your inbox.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full md:flex-1 px-8 py-3 bg-[#f8f6f3] rounded-full outline-none"
            />
            <button className="w-full md:w-auto px-8 py-3 bg-[#5dccf1] text-black rounded-full font-medium hover:bg-[#4bb8dd] transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
            By submitting this form, you'll be signed up to my free newsletter. I may also send you other emails about my courses. You can opt-out at any time. For more information, see our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
