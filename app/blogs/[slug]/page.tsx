import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import BlogPost from "../../components/BlogPost";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPage: React.FC<BlogPostProps> = async ({ params }) => {
  const { slug } = params;
  const filePath = path.join("public", "blogs", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return <BlogPost title={data.title} date={data.date} content={content} />;
};

export default BlogPage;
