import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "../components/shared/Container";
import NewsLetter from "../components/NewsLetter";
import BlogCard from "../components/BlogCard";
import HeroSection from "../components/shared/HeroSection";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  bgColor: string;
  excerpt: string;
  category: string[];
  slug: string;
  imageUrl?: string;
}

const BlogPage = () => {
  const blogPosts: BlogPost[] = fs
    .readdirSync(path.join("public", "blogs"))
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("public", "blogs", filename),
        "utf-8"
      );
      const { data: frontMatter, content } = matter(markdownWithMeta);

      return {
        title: frontMatter.title,
        date: frontMatter.date,
        author: frontMatter.author,
        bgColor: frontMatter.bgColor,
        excerpt: frontMatter.excerpt || content.substring(0, 100) + "...",
        category: frontMatter.category || [],
        slug: filename.replace(".md", ""),
        imageUrl: frontMatter.imageUrl || "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Log the slugs outside of the JSX
  console.log(blogPosts.map((post) => post.slug));

  return (
    <>
      <HeroSection>
        <Container>
          <NewsLetter />
        </Container>
      </HeroSection>

      <Container className="pt-16">
        <h1 className="text-[60px] leading-tight font-serif mb-12">
          Recent Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default BlogPage;
