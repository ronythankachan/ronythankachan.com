import React from "react";
import ReactMarkdown from "react-markdown";
import Container from "./shared/Container";
import NewsLetter from "./NewsLetter";
import Image from "next/image";
import styles from "./BlogPost.module.css";

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
        <div className="flex flex-col md:flex-row gap-16 mt-[-100px]">
          <div>
            <div
              className={`w-full h-52 md:h-80 mb-6 md:mb-16 rounded-3xl overflow-hidden font-serif ${
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
                <div className="relative h-full w-full flex flex-col gap-10 justify-center items-center text-center p-8">
                  <h2
                    className="text-2xl md:text-3xl leading-tight"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <div className="flex items-center">
                    <span className="logo text-3xl">{author}</span>
                  </div>
                </div>
              )}
            </div>
            <div className={styles["blog-post-content"]}>
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>

          <div className="hidden md:block md:w-2/5 mt-[-40px]">
            <div className="sticky top-0" style={{ height: "100vh" }}>
              <NewsLetter direction="vertical" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogPost;
