import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardContainer from "./shared/CardContainer";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  bgColor: string;
  excerpt: string;
  slug: string;
  imageUrl?: string;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link href={`/blogs/${post.slug}`} key={post.slug}>
      <CardContainer className="h-[500px] md:h-[600px] flex flex-col justify-between">
        <div
          className={`relative w-full h-[300px] mb-6 rounded-2xl overflow-hidden font-serif min-h-[250px] ${
            post.imageUrl ? "" : post.bgColor
          }`}
        >
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="relative h-full w-full flex flex-col justify-center items-center text-center p-8">
              <h2
                className="text-[24px] md:text-[32px] leading-tight mb-6"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <div className="flex items-center">
                <span className="text-xs md:text-sm font-medium">
                  {post.author}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="font-serif flex-grow">
          <h2
            className="text-[28px] mb-3 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <p className="text-gray-600 mb-4">{post.date}</p>
          <p className="text-gray-800 mb-6">{post.excerpt}</p>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center space-x-2 font-medium border-b border-black">
            <span>Continue Reading</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </span>
        </div>
      </CardContainer>
    </Link>
  );
};

export default BlogCard;
