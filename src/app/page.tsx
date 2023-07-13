import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GithubButton from "@/components/GithubButton";
import LinkButton from "@/components/LinkButton";
import Footer from "@/components/Footer";

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
                I&apos;m a full-stack web developer and student. I am studying
                Computer Science at Northeastern Univeristy. I&apos;ve been
                spending my free time building my startup,{" "}
                <Link
                  href="https://github.com/LOTaher/Freehand"
                  className="bold underline hover:text-white"
                  target="_blank"
                >
                  Freehand
                </Link>
                !
              </p>
            </div>
          </div>
          <h1 className="mt-8 mb-8">Projects</h1>
          <div>
            <Card className="rounded mb-8">
              <CardHeader>
                <CardTitle className="text-white">Freehand (WIP)</CardTitle>
                <CardDescription className="text-[#8e8f93]">
                  Open Source Illustrations designed to elevate your next
                  project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row space-x-2">
                  <GithubButton src="https://github.com/LOTaher/Freehand" />
                  <LinkButton src="https://www.drawfreehand.co/" />
                </div>
              </CardContent>
            </Card>
            <Card className="rounded mb-8">
              <CardHeader>
                <CardTitle className="text-white">splatte.dev</CardTitle>
                <CardDescription className="text-[#8e8f93]">
                  My personal website built using Next.js, Tailwind CSS, Prisma,
                  and Vercel.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row space-x-2">
                  <GithubButton src="https://github.com/LOTaher/SplatteDev" />
                </div>
              </CardContent>
            </Card>
            <Card className="rounded mb-8">
              <CardHeader>
                <CardTitle className="text-white">BeGroovy</CardTitle>
                <CardDescription className="text-[#8e8f93]">
                  A music sharing social media website to upgrade your music
                  collection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row space-x-2">
                  <GithubButton src="https://github.com/LOTaher/BeGroovy" />
                </div>
              </CardContent>
            </Card>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
