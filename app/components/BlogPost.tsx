import React from "react";
import ReactMarkdown from "react-markdown";
import Container from "./shared/Container";
import NewsLetter from "./NewsLetter";

interface BlogPostProps {
  content: string;
  title: string;
  author: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ content, title, author }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-3/5">
          <h1>{title}</h1>
          <p>{author}</p>
        </div>
        <div className="w-2/5">
          <NewsLetter direction="vertical" />
        </div>
      </div>

      <Container>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Container>
    </>
  );
};

export default BlogPost;
