import Image from "next/image";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import { revalidatePath } from "next/cache";
import { prisma } from "@/db";
import { SignInButton, SignOutButton, currentUser } from "@clerk/nextjs";

function getEntries() {
  return prisma.guestbook.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function createGuestBookEntry(data: FormData) {
  "use server";
  const user = await currentUser();

  const entry = data.get("entry")?.valueOf();

  if (!entry || typeof entry !== "string" || entry.length === 0) {
    throw new Error("Invalid entry");
  }

  await prisma.guestbook.create({
    data: {
      content: entry,
      name:
        user?.username || user?.firstName + " " + user?.lastName || "Anonymous",
    },
  });

  revalidatePath("/guestbook");
}
export default async function Home() {
  const entries = await getEntries();
  const user = await currentUser();
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <div className="mb-8">
            <h1>hey, my name is Laith</h1>
            <p className="text-xs">l-ay-th</p>
          </div>
          <div className="flex content-center space-x-3">
            <Image
              src="/picture.png"
              alt="Laith Portrait"
              width={200}
              height={200}
              className="rounded"
            />
            <div className="flex items-center">
              <p className="text-[#D3D4D4] text-sm">
                I&apos;m a second year Computer Science major at{" "}
                <a
                  className="text-white underline"
                  href="https://www.northeastern.edu/"
                  target="_blank"
                >
                  Northeastern University
                </a>
                . I&apos;m currently on co-op working at{" "}
                <a
                  href="https://www.jnj.com/"
                  target="_blank"
                  className="text-white underline"
                >
                  Johnson & Johnson
                </a>{" "}
                as a Technology Co-op. I&apos;ve been spending my free time
                building and maintaining all the projects below!{" "}
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-8 mb-7">
            <h1 className="">projects</h1>
            <p className="text-xs">probably just what&apos;s pinned on github</p>
          </div>
          <div className="mb-8">
            <Project
              title="grog"
              description="a lightweight node package manager written in go."
              link="https://github.com/LOTaher/grog"
            />

            <Project
              title="Freehand"
              description="open source illustrations designed to elevate your next project."
              link="https://github.com/LOTaher/Freehand"
            />

            <Project
              title="splatte.dev"
              description="my personal website built using next.js, tailwind css, prisma, and vercel."
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

            <p className="mt-4 text-sm italic font-light">
              Course projects can be shown upon request.
            </p>
          </div>

          <div className="content-start flex-col">
            <h1>guestbook</h1>
            {/* Inspired by @leeerob */}
            <p className="mb-6 text-xs">inspired by <a target="_blank" href="https://github.com/leerob" className="underline">@leerob</a></p>
            {!user && (
              <a className="text-white border p-2 rounded mb-5">
                <SignInButton>Sign In</SignInButton>
              </a>
            )}
            {user && (
              <div>
                <form
                  action={createGuestBookEntry}
                  className="mb-5 flex flex-col gap-2 max-w-[500px] text-sm"
                >
                  <input
                    type="text"
                    name="entry"
                    placeholder="Your message..."
                    required
                    className="pl-4 pr-32 py-2 border rounded bg-transparent text-white"
                  />
                  <div className="flex gap-2 justify-start">
                    <button
                      type="submit"
                      className="text-white border p-2 rounded"
                    >
                      Sign Guestbook
                    </button>
                    <a className="text-white border p-2 rounded">
                      <SignOutButton>Sign Out</SignOutButton>
                    </a>
                  </div>
                </form>
              </div>
            )}
            <div className="mt-5 mb-4">
              {entries.map((entry) => (
                <div key={entry.id} className="flex flex-col space-y-1 mb-2">
                  <div className="w-full text-sm break-words mb-2">
                    <span className="text-[#8e8f93] mr-1">{entry.name}:</span>
                    <span className="text-white">{entry.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
