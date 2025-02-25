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

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link href={`/blogs/${post.slug}`} key={post.slug}>
      <CardContainer className=" flex flex-col justify-between">
        <div
          className={`w-full h-[300px] mb-6 rounded-2xl overflow-hidden font-serif min-h-[250px] ${
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
            <div className="h-full w-full flex flex-col justify-center items-center text-center p-8 gap-10">
              <h2
                className="text-2xl md:text-3xl leading-tight"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <div className="flex items-center">
                <span className="logo text-2xl md:text-3xl">{post.author}</span>
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
