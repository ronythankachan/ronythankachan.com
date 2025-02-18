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

  return (
    <>
      <HeroSection>
        <Container>
          <div className="flex items-center gap-2 mb-8">
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
          <h1 className="text-[60px] leading-tight font-serif mb-12 font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-6 font-serif text-lg">
            <Image
              src={"/rony2.jpeg"}
              alt={data.title}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <p>{"Rony Thankachan"}</p>
            <p>/</p>
            <p>{data.date}</p>
            <p>/</p>
            <p>Share on:</p>
            <div className="flex items-center gap-2">
              <Link
                href={""}
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
                href={""}
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
              </Link>{" "}
            </div>
          </div>
        </Container>
      </HeroSection>
      <BlogPost
        author={"Rony Thankachan"}
        title={data.title}
        content={content}
      />
    </>
  );
};

export default BlogPage;
