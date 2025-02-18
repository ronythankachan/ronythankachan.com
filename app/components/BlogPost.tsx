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
        <div>
          <h1>{title}</h1>
          <p>{author}</p>
        </div>
        <NewsLetter />
      </div>

      <Container>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Container>
    </>
  );
};

export default BlogPost;
