import Image from "next/image";
import Footer from "@/components/Footer";
import Project from "@/components/Project";

export default async function Home() {
    return (
        <main className="flex justify-center h-screen">
            <div className="h-full w-full md:max-w-2xl">
                <div className="content-start flex-col">
                    <div className="mb-8">
                        <h1>hey, my name is laith</h1>
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
                    <Footer />
                </div>
            </div>
        </main>
    );
}
