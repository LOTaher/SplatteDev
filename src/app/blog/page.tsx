import { allBlogs } from ".contentlayer/generated";
import Footer from "src/components/Footer";
import Link from "next/link";

interface PostProps {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export function PostCol({ post }: { post: PostProps }) {
  return (
    <article className="flex flex-col gap-3">
      <Link href={`/blog/${post.slug}`}>
        <span className="underline hover:text-neutral-200 text-lg font-medium">
          {post.title}
        </span>
      </Link>

      <span className="text-neutral-300">{post.description}</span>

      <span className="text-neutral-300">{post.date}</span>
    </article>
  );
}

export function PostRow({ post }: { post: PostProps }) {
  return (
    <article className="flex justify-between">
      <Link href={`/blog/${post.slug}`}>
        <span className="underline hover:text-neutral-200 text-mid font-medium">
          {post.title}
        </span>
      </Link>

      <span className="text-neutral-300">{post.date}</span>
    </article>
  );
}

export default function Blog() {
  return (
    <main className="flex justify-center mb-4">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <div className="flex justify-between mb-8">
            <h1 className="text-2xl font-medium">blog</h1>
            <Link
              href="/"
              className="text-neutral-300 text-md underline hover:text-neutral-200"
            >
              back ←
            </Link>
          </div>
          <div className="flex flex-col gap-12 mb-8">
            {allBlogs.length > 0 ? (
              allBlogs
                .sort((a, b) => {
                  if (new Date(a.date) > new Date(b.date)) {
                    return -1;
                  }
                  return 1;
                })
                .map((post) => <PostCol post={post} key={post.date} />)
            ) : (
              <p>nothing to see yet...</p>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
