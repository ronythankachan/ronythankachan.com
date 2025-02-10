import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/shared/Container";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  author: string;
  bgColor: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "How To Never Be Bored at Work",
    date: "February 5, 2025",
    excerpt: "The secret to enjoyable work and sustained productivity is to find a way to make what we're doing a little bit more fun.Now, I fully stand by this approach (it's...",
    slug: "how-to-never-be-bored-at-work",
    imageUrl: "/blog-1.png",
    author: "Rony Thankachan",
    bgColor: "bg-sky-300"
  },
  {
    title: "How to build a time management routine",
    date: "January 29, 2025",
    excerpt: "Most of us don't have time to consistently do the things we truly enjoy. Between work, family, friends, staying healthy, and side projects, finding time to do everything we want...",
    slug: "time-management-routine",
    imageUrl: "/blog-2.png",
    author: "Rony Thankachan",
    bgColor: "bg-purple-300"
  },
  {
    title: "How Procrastination Affects Your Daily Life",
    date: "January 22, 2025",
    excerpt: "Procrastination is more than just putting things off - it's a complex behavior that can impact every aspect of your life. Understanding how it affects your daily routine...",
    slug: "procrastination-effects",
    imageUrl: "/blog-3.png",
    author: "Rony Thankachan",
    bgColor: "bg-yellow-200"
  },
  {
    title: "How Outsourcing Will Help You Grow On YouTube",
    date: "January 15, 2025",
    excerpt: "Growing a successful YouTube channel doesn't mean doing everything yourself. Learn how strategic outsourcing can help you scale your content creation and reach...",
    slug: "outsourcing-youtube-growth",
    imageUrl: "/blog-4.png",
    author: "Rony Thankachan",
    bgColor: "bg-orange-200"
  },
  {
    title: "Building a Personal Brand in 2025",
    date: "January 8, 2025",
    excerpt: "In today's digital age, your personal brand is more important than ever. Discover the key strategies and platforms that will help you build an authentic and engaging presence...",
    slug: "personal-brand-2025",
    imageUrl: "/blog-5.png",
    author: "Rony Thankachan",
    bgColor: "bg-emerald-200"
  },
  {
    title: "The Art of Effective Communication",
    date: "January 1, 2025",
    excerpt: "Communication is the cornerstone of success in both personal and professional life. Learn the essential techniques that will help you convey your ideas clearly and build stronger relationships...",
    slug: "effective-communication",
    imageUrl: "/blog-6.png",
    author: "Rony Thankachan",
    bgColor: "bg-blue-200"
  }
];

const BlogPage = () => {
  return (
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
              <div className="relative h-full w-full flex flex-col justify-center items-center text-center p-8">
                <h2 className="text-[32px] font-serif leading-tight mb-4">{post.title}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {post.author}
                  </span>
                </div>
              </div>
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
  );
};

export default BlogPage;
