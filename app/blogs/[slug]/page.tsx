import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import BlogPost from "../../components/BlogPost";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("public", "blogs"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

const BlogPage = async ({ params }: { params: Promise<Params> }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const filePath = path.join("public", "blogs", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return <BlogPost title={data.title} date={data.date} content={content} />;
};

export default BlogPage;
