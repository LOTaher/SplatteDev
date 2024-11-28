import Image from "next/image";
import Link from "next/link";
import { allBlogs } from ".contentlayer/generated";
import { PostRow } from "../app/blog/page";
import Footer from "src/components/Footer";
import Project, { projects } from "src/components/Project";

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
          <div className="items-center w-fit mb-8 flex flex-col sm:flex-row content-center space-y-3 sm:space-y-0 sm:space-x-5">
            <div className="grid grid-cols-2 gap-2">
              <div className="grid grid-rows-2 gap-2">
                <div className="">
                  <Image
                    src="/HS0-F23.png"
                    alt="Laith Portrait"
                    width={600}
                    height={100}
                    className="rounded-lg object-cover h-full"
                  />
                </div>
                <div className="">
                  <Image
                    src="/ExpressWorkshop.png"
                    alt="Laith Portrait"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>

              <div className="">
                <Image
                  src="/DemoDay.jpg"
                  alt="Laith Portrait"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
            </div>
            <p className="text-neutral-300 text-md">
              I&apos;m a third year Computer Science major @{" "}
              <a
                className="underline hover:text-neutral-200 text-white"
                href="https://www.northeastern.edu/"
                target="_blank"
              >
                Northeastern University
              </a>
              . Incoming Software Engineer @{" "}
              <a
                href="https://www.claim.co/"
                target="_blank"
                className="underline hover:text-neutral-200 text-white"
              >
                Claim
              </a>
              . Director of{" "}
              <a
                href="https://oasisneu.com/"
                target="_blank"
                className="underline hover:text-neutral-200 text-white"
              >
                Oasis
              </a>
              . Previously @{" "}
              <a
                href="https://www.jnj.com/"
                target="_blank"
                className="underline hover:text-neutral-200 text-white"
              >
                Johnson & Johnson
              </a>{" "}
              as a Technology Co-op. I spend my free time building, maintaining
              and writing about tech!{" "}
            </p>
          </div>

          <h1 className="mt-8 text-xl font-medium mb-4">projects</h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {projects.map((project) => {
              return (
                <Project
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              );
            })}
          </div>
          <h1 className="mt-4 text-xl font-medium mb-4">blog</h1>
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
