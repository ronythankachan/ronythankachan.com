import React from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  author: string;
  bgColor: string;
}

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link 
      href={`/blogs/${post.slug}`} 
      key={post.slug}
      className="group p-6 rounded-[20px] transition-all duration-300 transform hover:-translate-y-1 bg-grayBackground"
    >
      <div className={`relative w-full aspect-[1.91/1] mb-6 rounded-2xl overflow-hidden ${post.bgColor}`}>
        <div className="relative h-full w-full flex flex-col justify-center items-center text-center p-8">
          <h2 className="text-[32px] font-serif leading-tight mb-4">{post.title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              {post.author}
            </span>
          </div>
        </div>
      </div>
      
      <h2 className="text-[28px] font-serif mb-3 leading-tight">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p className="text-gray-800 mb-6">{post.excerpt}</p>
      
      <div className="flex items-center">
        <span className="inline-flex items-center space-x-2 font-medium border-b border-black">
          <span>Continue Reading</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
        </span>
      </div>
    </Link>
  );
};

export default BlogPostCard; 