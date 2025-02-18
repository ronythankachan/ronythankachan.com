import React from "react";
import ReactMarkdown from "react-markdown";
import Container from "./shared/Container";
import NewsLetter from "./NewsLetter";
import Image from "next/image";

interface BlogPostProps {
  content: string;
  title: string;
  author: string;
  bgColor: string;
  imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  content,
  title,
  author,
  bgColor,
  imageUrl,
}) => {
  return (
    <>
      <Container>
        <div className="flex justify-between flex-col md:flex-row gap-16 mt-[-100px]">
          <div
            className={`relative w-full h-80 aspect-[1.91/1] mb-6 rounded-3xl overflow-hidden font-serif ${
              !imageUrl ? bgColor : ""
            }`}
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="w-full h-full object-contain"
                style={{ objectFit: "contain" }}
              />
            ) : (
              <div className="relative h-full w-full flex flex-col justify-center items-center text-center p-8">
                <h2 className="text-[24px] md:text-[32px] leading-tight mb-6">
                  {title}
                </h2>
                <div className="flex items-center">
                  <span className="text-xs md:text-sm font-medium">
                    {author}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="md:w-2/5 mt-[-40px]">
            <NewsLetter direction="vertical" />
          </div>
        </div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Container>
    </>
  );
};

export default BlogPost;
