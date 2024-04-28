import Navbar from "src/components/Navbar";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "splatte.dev",
  description: "Laith Taher's personal website",
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={cx(
        "text-white bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
      lang="en"
    >
      <body className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 mt-4 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
