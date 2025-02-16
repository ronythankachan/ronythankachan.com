import React from "react";
import ReactMarkdown from "react-markdown";
import Container from "./shared/Container";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
  return (
    <>
      <div className="bg-[#f8f6f3] py-16 rounded-b-3xl">
        <Container>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{date}</p>
        </Container>
      </div>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default BlogPost;
