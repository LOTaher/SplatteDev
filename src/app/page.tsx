import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <h1 className="mb-8">Hi, I&apos;m Laith</h1>
          <div className="flex content-center space-x-3">
            <Image
              src="https://media.licdn.com/dms/image/D4E03AQECes9egjScKw/profile-displayphoto-shrink_800_800/0/1668552656586?e=1694649600&v=beta&t=YChvWMfOS6TA28rEscX06DIeC6oJdhYDpa4reBs07P0"
              alt="Laith Portrait"
              width={120}
              height={120}
              className="rounded"
            />
            <div className="flex items-center">
              <p className="text-[#D3D4D4]">
                I&apos;m a full-stack developer and student. I am studying
                Computer Science at Northeastern University. I&apos;ve been
                spending my free time building and maintaining all the projects
                below!{" "}
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="flex justify-between mt-8 mb-8">
            <h1 className="">Projects</h1>
          </div>
          <div className="mb-8">
            <Project
              title="Freehand"
              description="open source illustrations designed to elevate your next project."
              wip
              link="https://github.com/LOTaher/Freehand"
            />

            <Project
              title="splatte.dev"
              description="my personal website built using next.js, tailwind css, prisma, and vercel."
              link="https://github.com/LOTaher/SplatteDev"
            />

            <Project
              title="splatte/ui"
              description="a collection of fully customizable ui components for next.js and react, just a copy and paste away."
              link="https://github.com/LOTaher/ui"
            />

            <Project
              title="License Generator"
              description="generate a license for your project on the terminal."
              link="https://github.com/LOTaher/License-Generator"
            />

            <Project
              title="ez-ignore"
              description="create a custom .gitignore file straight from the terminal"
              link="https://github.com/LOTaher/ez-ignore"
            />

            <Project
              title="BeGroovy"
              description="a music sharing social media website to upgrade your music collection."
              link="https://github.com/LOTaher/BeGroovy"
            />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
