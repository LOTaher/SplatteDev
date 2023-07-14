import Footer from "@/components/Footer";
import { prisma } from "@/db";
import { SignInButton, SignOutButton, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

function getEntries() {
  return prisma.guestbook.findMany({
    take: 100,
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function createGuestBookEntry(data: FormData) {
  "use server";
  const user = await currentUser();

  const entry = data.get("entry")?.valueOf();

  if (!entry || typeof entry !== "string" || entry.length === 0) {
    throw new Error("Invalid entry");
  }

  await prisma.guestbook.create({
    data: {
      content: entry,
      name: user?.username || "Anonymous",
    },
  });

  revalidatePath("/guestbook");
}

export default async function Guestbook() {
  const entries = await getEntries();
  const user = await currentUser();
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <h1 className="mb-2">Sign my Guestbook</h1>
          <p className="mb-6">
            Inspired by{" "}
            <a href="https://twitter.com/leeerob" target="_blank">
              @leeerob
            </a>
          </p>
          {!user && (
            <a className="text-white border p-2 rounded mb-5">
              <SignInButton>Sign In</SignInButton>
            </a>
          )}
          {user && (
            <div>
              <form
                action={createGuestBookEntry}
                className="mb-5 flex flex-col gap-2 max-w-[500px] text-sm"
              >
                <input
                  type="text"
                  name="entry"
                  placeholder="Your message..."
                  required
                  className="pl-4 pr-32 py-2 border rounded bg-transparent text-white"
                />
                <div className="flex gap-2 justify-start">
                  <button
                    type="submit"
                    className="text-white border p-2 rounded"
                  >
                    Sign Guestbook
                  </button>
                  <a className="text-white border p-2 rounded">
                    <SignOutButton>Sign Out</SignOutButton>
                  </a>
                </div>
              </form>
            </div>
          )}
          <div className="mt-5 mb-4">
            {entries.map((entry) => (
              <div key={entry.id} className="flex flex-col space-y-1 mb-2">
                <div className="w-full text-sm break-words mb-2">
                  <span className="text-[#8e8f93] mr-1">{entry.name}:</span>
                  <span className="text-white">{entry.content}</span>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
