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
              Every time I started a new project I asked myself, "where is that code?"<br/>
              "Which file?"<br/>
              "Which IDE?"<br/>
              "Which computer???"
          </div>
          <div className="mt-3">
              So I&apos;m putting it all right here.
          </div>

          <div className="mt-3">
              These days I&apos;m writing a lot of Next.js/TypeScript code, along with a ton of TailwindCSS so naturally that&apos;s the kind of code you&apos;ll find here. In time I&apos;ll get to growing this repository out and implementing more friendly and usable features like Search and My Account. For now feel free to copy and paste to your heart&apos;s content.
          </div>

          <div className="mt-3">
              Make sure you read the <Link href="/pre-reqs"> Pre-reqs </Link>page first, so that we&apos;re on the same page before you tell me my code is broken.
          </div>
      </div>
  );
}
