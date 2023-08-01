import Footer from "@/components/Footer";
import GithubButton from "@/components/GithubButton";
import LinkButton from "@/components/LinkButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <div className="mb-2 flex justify-between">
            <h1>Projects</h1>
            <Link
              href="/"
              className="text-[#8e8f93] text-sm underline hover:text-white"
            >
              go back home
            </Link>
          </div>
          <div className="mt-8 mb-8">
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
                  <LinkButton src="https://splatte.dev/" />
                </div>
              </CardContent>
            </Card>
            <Card className="rounded mb-8">
              <CardHeader>
                <CardTitle className="text-white">License Generator</CardTitle>
                <CardDescription className="text-[#8e8f93]">
                  Generate a license for your project on the terminal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row space-x-2">
                  <GithubButton src="https://github.com/LOTaher/License-Generator" />
                  <LinkButton src="https://www.npmjs.com/package/@lotaher/license-generator" />
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
