import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GithubButton from "@/components/GithubButton";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <h1 className="mb-8 mt-8">Hey, I&apos;m Laith</h1>
          <div className="flex content-center space-x-3">
            <Image
              src="https://media.licdn.com/dms/image/D4E03AQECes9egjScKw/profile-displayphoto-shrink_800_800/0/1668552656586?e=1694649600&v=beta&t=YChvWMfOS6TA28rEscX06DIeC6oJdhYDpa4reBs07P0"
              alt="Laith Portrait"
              width={120}
              height={120}
              className="rounded-md"
            />
            <div className="flex items-center">
              <p>
                I am a Full-Stack Web Developer, mentor, and student. I attend
                Northeastern University located in Boston, Massachusetts where I
                am studying Computer Science. I am currently working with Oasis
                and Northeastern Electric Racing on campus.
              </p>
            </div>
          </div>
          <h1 className="mt-8 mb-8">Projects</h1>
          <div>
            <Card className="rounded">
              <CardHeader>
                <CardTitle className="text-white">BeGroovy</CardTitle>
                <CardDescription className="text-[#8e8f93">
                  A music sharing social media website to upgrade your music
                  collection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row space-x-2">
                  <GithubButton src="https://github.com/LOTaher/BeGroovy" />
                  <LinkButton src="" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
