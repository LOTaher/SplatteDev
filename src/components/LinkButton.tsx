import Link from "next/link";
import { FC } from "react";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface LinkButtonProps {
  src: string;
}

const LinkButton: FC<LinkButtonProps> = ({ src }) => {
  return (
    <Link
      href={src}
      className="flex items-center text-md font-medium text-white border p-2"
      target="_blank"
    >
      <div className="pr-2">
        <ArrowIcon />
      </div>
      <span>Visit</span>
    </Link>
  );
};

export default LinkButton;
