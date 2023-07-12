import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <h1 className="mb-2">Checkout my Blog</h1>
          <div className="mt-8">
            {allBlogs
              .sort((a, b) => {
                if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                  return -1;
                }
                return 1;
              })
              .map((post) => (
                <Link
                  key={post.slug}
                  className="flex flex-col space-y-1 mb-4"
                  href={`/blog/${post.slug}`}
                >
                  <div className="w-full flex flex-col">
                    <p className="text-white tracking-tight hover:text-white hover:underline text-xl">
                      {post.title}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
