"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mb-12 tracking-tight flex justify-between hover:text-neutral-200">
      <Link href="/" className="">
        splatte.dev
      </Link>
      <Link
        className="hover:text-neutral-200 underline"
        target="_blank"
        href={"/Resume.pdf"}
      >
        resume
      </Link>
    </div>
  );
}
