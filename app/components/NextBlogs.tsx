import React from "react";
import BlogCard from "./BlogCard";

interface Blog {
  slug: string;
  title: string;
  bgColor: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
}

interface NextBlogsProps {
  blogs: Blog[];
}

const NextBlogs: React.FC<NextBlogsProps> = ({ blogs }) => {
  return (
    <>
      <h1 className="text-[60px] leading-tight font-serif mb-12">
        Interested in more?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default NextBlogs;
