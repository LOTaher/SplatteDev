import Link from "next/link";
import { Badge } from "./ui/badge";

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
  wip?: boolean;
}

export default function Project({
  title,
  description,
  link,
  wip,
}: ProjectProps) {
  return (
    <div className="mb-2">
      <Link href={link} className="text-white mb-1 underline text-lg" target="_blank">
        {title}{" "}
        {wip && (
          <Badge
            variant="default"
            className="ml-1 bg-[#27272a] hover:bg-[#27272a]"
          >
            <span className="text-xs font-[500]">In Progress</span>
          </Badge>
        )}
      </Link>
      <p className="text-[#8e8f93] text-sm font-[500]">{description}</p>
    </div>
  );
}
