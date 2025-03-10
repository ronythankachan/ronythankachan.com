import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import HeroSection from "@/app/components/shared/HeroSection";
import Container from "@/app/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "@/app/components/BlogPost";
import NextBlogs from "@/app/components/NextBlogs";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("public", "blogs"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

const categoryColors: { [key: string]: string } = {
  AI: "bg-purple-300",
  Technology: "bg-yellow-300",
  Health: "bg-teal-300",
  Lifestyle: "bg-pink-300",
};

const BlogPage = async ({ params }: { params: Promise<Params> }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const filePath = path.join("public", "blogs", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  // Get all blog files and filter out the current one
  const allFiles = fs.readdirSync(path.join("public", "blogs"));
  const otherFiles = allFiles.filter((filename) => filename !== `${slug}.md`);

  // Select the next two blog posts
  const nextBlogs = otherFiles.slice(0, 2).map((filename) => {
    const fileContent = fs.readFileSync(
      path.join("public", "blogs", filename),
      "utf8"
    );
    const { data, content: otherContent } = matter(fileContent);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      bgColor: data.bgColor,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt || otherContent.substring(0, 100) + "...",
      imageUrl: data.imageUrl,
    };
  });

  return (
    <>
      <HeroSection>
        <Container>
          <div className="flex items-center gap-2 mb-4">
            {data.category.map((category: string) => (
              <p
                className={`px-4 py-1 rounded-full ${
                  categoryColors[category] || "bg-yellow-300"
                }`}
                key={category}
              >
                {category}
              </p>
            ))}
          </div>
          <h1
            className="text-4xl pt-4 leading-tight font-bold font-serif mb-12 md:w-3/4"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 font-serif text-lg mb-20">
            <Image
              src={"/rony2.jpeg"}
              alt={data.title}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <p>{"Rony Thankachan"}</p>
            <p className="hidden md:block">/</p>
            <p>{data.date}</p>
            <p className="hidden md:block">/</p>
            <p>Share on:</p>
            <div className="flex items-center gap-2">
              <Link
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://ronythankachan.com/blogs/${slug}&text=${encodeURIComponent(
                  data.title
                )}`}
                className="p-3 flex items-center justify-center rounded-full bg-white hover:bg-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/linkedin.png"}
                  alt={"linkedin"}
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?url=https://ronythankachan.com/blogs/${slug}&text=${encodeURIComponent(
                  data.title
                )}`}
                className="p-3 flex items-center justify-center rounded-full bg-white hover:bg-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/twitter.png"}
                  alt={"twitter"}
                  width={18}
                  height={18}
                />
              </Link>
            </div>
          </div>
        </Container>
      </HeroSection>
      <BlogPost
        author={"Rony Thankachan"}
        bgColor={data.bgColor}
        title={data.title}
        imageUrl={data.imageUrl}
        content={content}
      />
      <hr className="my-8 border-gray-300" />
      <Container>
        <NextBlogs blogs={nextBlogs} />
      </Container>
    </>
  );
};

export default BlogPage;
