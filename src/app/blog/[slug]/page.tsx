import { FC } from "react";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import Link from "next/link";
import Footer from "@/components/Footer";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getBlogFromParams(slug: string) {
  const blog = allBlogs.find((doc) => doc.slug === slug);

  if (!blog) notFound();

  return blog;
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const blog = await getBlogFromParams(params.slug);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
          {blog.title}
        </h1>
        <Link
          href="/blog"
          className="text-[#8e8f93] text-sm underline hover:text-white"
        >
          Back to blog
        </Link>
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-[#8e8f93]">{blog.publishedAt}</p>
      </div>
      <div className="mb-8">
        <Mdx code={blog.body.code} />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
