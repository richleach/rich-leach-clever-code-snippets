import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col items-start m-4">
          <div className="w-full text-center text-xl">
              Hi.
          </div>
          <div className="w-full text-center mt-3">
              Looking for some commonly used code? Yeah, me too.
          </div>

          <div className="mt-3">
              Instead of rewriting all of my code from scratch on my next project I finally put my often-used-code in an easy-to-find place. I tried organizing everything by category on the left column being as descriptive as possible. Oh, and you may see the same snippet(s) appear under different categories where applicable.
          </div>
          <div className="mt-3">
              These days I&apos;m writing a lot of Next.js/TypeScript code, along with a ton of TailwindCSS so naturally that&apos;s the kind of code you&apos;ll likely find here. In time I&apos;ll get to growing this repository out and implementing more friendly and usable features like Search and My Account. For now feel free to peruse, then copy and paste to your heart&apos;s content.
          </div>

          <div className="mt-3">
              Make sure you read the <Link href="/pre-reqs"> Pre-reqs </Link>page first, so that we&amp;re on the same page right from the get-go.
          </div>
      </div>
  );
}
