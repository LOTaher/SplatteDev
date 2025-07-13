import Link from "next/link";

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

// should be divisable by 3
export const projects: ProjectProps[] = [
  {
    title: "grog",
    description: "a lightweight node package manager written in go.",
    link: "https://github.com/LOTaher/grog",
  },
  // {
  //   title: "LaithScript",
  //   description: "the interpreter for the laithscript programming language.",
  //   link: "https://github.com/LOTaher/LaithScript",
  // },
  {
    title: "softbase",
    description: "a key-value store backend for your next side project.",
    link: "https://github.com/softbase-org",
  },
  {
    title: "Freehand",
    description:
      "open source illustrations designed to elevate your next project.",
    link: "https://github.com/LOTaher/Freehand",
  },
  // {
  //   title: "splatte.dev",
  //   description: "my personal website built with next.js and tailwind css.",
  //   link: "https://github.com/LOTaher/SplatteDev",
  // },
  // {
  //   title: "License Generator",
  //   description: "generate a license for your project on the terminal.",
  //   link: "https://github.com/LOTaher/License-Generator",
  // },
];

export default function Project({ title, description, link }: ProjectProps) {
  return (
    <div className="w-20.6666666666666666666666666666666666666666666666667ch flex flex-col">
      <Link
        href={link}
        className="underline hover:text-neutral-200 text-md"
        target="_blank"
      >
        {title}{" "}
      </Link>
      <span className="pt-3 pb-3 pr-3 text-neutral-300">{description}</span>
    </div>
  );
}
