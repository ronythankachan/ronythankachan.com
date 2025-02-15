import React from "react";
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Container from "../components/shared/Container";
import NewsLetter from "../components/NewsLetter";
import Image from 'next/image';

interface BlogPost {
  title: string;
  date: string;
  author: string;
  bgColor: string;
  excerpt: string;
  slug: string;
  imageUrl?: string;
}

const BlogPage = () => {
  const blogPosts: BlogPost[] = fs.readdirSync(path.join('public', 'blogs')).map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('public', 'blogs', filename), 'utf-8');
    const { data: frontMatter, content } = matter(markdownWithMeta);

    return {
      title: frontMatter.title,
      date: frontMatter.date,
      author: frontMatter.author,
      bgColor: frontMatter.bgColor,
      excerpt: frontMatter.excerpt || content.substring(0, 100) + '...',
      slug: filename.replace('.md', ''),
      imageUrl: frontMatter.imageUrl || '',
    };
  });

  // Log the slugs outside of the JSX
  console.log(blogPosts.map((post) => post.slug));

  return (
    <>
      <div className="bg-[#f8f6f3] py-8 rounded-b-3xl mb-2">
        <Container>
          <NewsLetter />
        </Container>
      </div>

      <Container className="py-16">
        <h1 className="text-[60px] leading-tight font-serif mb-12">
          All Recent Articles
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              href={`/blogs/${post.slug}`} 
              key={post.slug}
              className="group p-6 rounded-[20px] transition-all duration-300 transform hover:-translate-y-1 bg-[#f8f6f3]"
            >
              <div className={`relative w-full aspect-[1.91/1] mb-6 rounded-2xl overflow-hidden ${post.bgColor}`}>
                {post.imageUrl ? (
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    fill
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative h-full w-full flex flex-col justify-center items-center text-center p-8">
                    <h2 className="text-[24px] md:text-[32px] font-serif leading-tight mb-6">
                      {post.title}
                    </h2>
                    <div className="flex items-center">
                      <span className="text-xs md:text-sm font-medium font-serif">
                        {post.author}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              <h2 className="text-[28px] font-serif mb-3 leading-tight">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-800 mb-6">{post.excerpt}</p>
              
              <div className="flex items-center">
                <span className="inline-flex items-center space-x-2 font-medium border-b border-black">
                  <span>Continue Reading</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default BlogPage;
