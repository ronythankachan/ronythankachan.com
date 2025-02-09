import React from "react";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="bg-white rounded-[32px] p-16">
      <div className="flex gap-16">
        {/* Left Section */}
        <div className="w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl font-serif">
              Subscribe to<br />
              <span className="font-semibold">LifeNotes</span>
            </h2>
            <Image
              src="/message.png"
              alt="Newsletter"
              width={100}
              height={100}
              className="mt-[-20px]"
            />
          </div>
          <p className="text-lg">
            Join a growing community of more than<br />
            <span className="font-medium">260,000 friendly readers.</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2">
          <p className="text-lg mb-8">
            I share actionable productivity tips, practical life advice,
            and high-quality insights from across the web, directly
            to your inbox.
          </p>
          
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-8 py-3 bg-[#f8f6f3] rounded-full outline-none"
            />
            <button className="px-8 py-3 bg-[#5dccf1] text-black rounded-full font-medium hover:bg-[#4bb8dd] transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            By submitting this form, you'll be signed up to my free newsletter. I may also send you other emails about my courses. You can opt-out at any time. For more information, see our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
