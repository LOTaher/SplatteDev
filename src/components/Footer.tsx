import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr></hr>
      <footer className="flex content-center space-x-4 mt-4 mb-8">
        <Link
          href="https://github.com/LOTaher"
          target="_blank"
          className="hover:text-neutral-200 text-white underline"
        >
          checkout my work on github
        </Link>
        <Link
          href="https://www.linkedin.com/in/laith-taher-88b816252/"
          target="_blank"
          className="hover:text-neutral-200 text-white underline"
        >
          connect with me on linkedin
        </Link>
        <Link
          href="https://twitter.com/splattedev"
          target="_blank"
          className="hover:text-neutral-200 text-white underline"
        >
          follow me on x
        </Link>
      </footer>
    </>
  );
}
