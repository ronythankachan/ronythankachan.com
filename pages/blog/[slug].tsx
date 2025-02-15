import { GetStaticProps, GetStaticPaths } from 'next';
import BlogPost from '../../components/BlogPost';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getStaticPaths: GetStaticPaths = async () => {
  // Logic to get all blog slugs
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'public/blogs', `${params?.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    props: {
      title: data.title,
      date: data.date,
      content,
    },
  };
};

const BlogPage = ({ title, date, content }) => {
  return <BlogPost title={title} date={date} content={content} />;
};

export default BlogPage; 