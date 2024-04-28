import Image from "next/image";
import Link from "next/link";
import { allBlogs } from ".contentlayer/generated";
import { PostRow } from "../app/blog/page";
import Footer from "src/components/Footer";
import Project from "src/components/Project";

export default async function Home() {
  return (
    <main className="flex justify-center mb-4">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <div className="mb-8">
            <h1 className="text-2xl font-medium tracking-tighter">
              hey, my name is laith
            </h1>
            <p className="text-sm text-neutral-500">IPA /ˈleɪθ/</p>
          </div>
          <div className="flex flex-col sm:flex-row content-center space-y-3 sm:space-y-0 sm:space-x-3">
            <Image
              src="/picture.png"
              alt="Laith Portrait"
              width={200}
              height={200}
              className="rounded-lg self-center md:self-auto"
            />
            <div className="flex items-center">
              <p className="text-neutral-300 text-md">
                I&apos;m a second year Computer Science major at{" "}
                <strong>
                  <a
                    className="underline text-neutral-200"
                    href="https://www.northeastern.edu/"
                    target="_blank"
                  >
                    Northeastern University
                  </a>
                </strong>
                . I&apos;m currently on co-op working at{" "}
                <strong>
                  <a
                    href="https://www.jnj.com/"
                    target="_blank"
                    className="underline hover:text-neutral-200"
                  >
                    Johnson & Johnson
                  </a>{" "}
                </strong>
                as a Technology Co-op. I&apos;ve been spending my free time
                building and maintaining all the projects below!{" "}
              </p>
            </div>
          </div>

          <h1 className="mt-8 text-xl font-medium mb-4">projects</h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <Project
              title="grog"
              description="a lightweight node package manager written in go."
              link="https://github.com/LOTaher/grog"
            />

            <Project
              title="softbase"
              description="a key-value store backend for your next side project."
              link="https://github.com/LOTaher/softbase"
            />

            <Project
              title="Freehand"
              description="open source illustrations designed to elevate your next project."
              link="https://github.com/LOTaher/Freehand"
            />

            <Project
              title="splatte.dev"
              description="my personal website using next.js and tailwind css."
              link="https://github.com/LOTaher/SplatteDev"
            />

            <Project
              title="Mirage"
              description="a multipurpose bot for the oasis slack channel."
              link="https://github.com/Oasis-NEU/Mirage"
            />

            <Project
              title="License Generator"
              description="generate a license for your project on the terminal."
              link="https://github.com/LOTaher/License-Generator"
            />
          </div>
          <h1 className="mt-8 text-xl font-medium mb-4">blog</h1>
          <div className="flex flex-col gap-4 mb-8">
            <span>
              {allBlogs.length > 0 ? (
                allBlogs
                  .sort((a, b) => {
                    if (new Date(a.date) > new Date(b.date)) {
                      return -1;
                    }
                    return 1;
                  })
                  .map((post) => <PostRow post={post} key={post.date} />)
              ) : (
                <p>nothing to see yet...</p>
              )}
            </span>
            <Link href="/blog" className="underline hover:text-neutral-200">
              all posts →
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
