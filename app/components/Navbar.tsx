import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-28 py-8 mt-5 rounded-t-3xl bg-[#f8f6f3]">
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={300} height={300} />
      </Link>
      <div className="flex items-center space-x-6">
        <Link
          href="http://www.github.com/ronythankachan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4"
        >
          Github
        </Link>
        <Link href={"/blogs"} className="hover:underline underline-offset-4">
          Blogs
        </Link>
        <Link href={"/projects"} className="hover:underline underline-offset-4">
          Projects
        </Link>
        <button className="bg-[#fd976d] text-black rounded-full px-6 py-2 hover:bg-[#fcd56b] transition duration-300">
          <Link
            href="http://www.linkedin.com/in/ronythankachan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow me on LinkedIn
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
