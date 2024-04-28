import Link from "next/link";

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

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
