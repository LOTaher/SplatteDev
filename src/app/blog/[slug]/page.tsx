import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "src/components/Footer";
import { Mdx } from "src/components/Mdx";
import { allBlogs } from ".contentlayer/generated";

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
        <h1 className="font-medium text-2xl tracking-tighter max-w-[650px]">
          {blog.title}
        </h1>
        <Link
          href="/blog"
          className="text-neutral-300 text-md underline hover:text-neutral-200"
        >
          back ←
        </Link>
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-300">{blog.date}</p>
      </div>
      <article className="mb-8 prose prose-invert">
        <Mdx code={blog.body.code} />
      </article>
      <Footer />
    </>
  );
};

export default BlogPage;
