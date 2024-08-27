import Image from "next/image";

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col items-center m-4">
          <div className="text-center text-xl">
              Hi.
          </div>
          <div className="mt-3">
              Looking for some commonly used code? Yeah, me too.
          </div>

          <div className="mt-3">
              This is definitely a work-in-progress.<br/><br/>
              Instead of rewriting everything from scratch on my next project I finally put my often-used-code in an easy-to-find place. I tried organizing everything by categories on the left column and you may see the same snippet(s) appear under different categories.
          </div>
          <div className="mt-3">
              These days I&apos;m writing a lot of Next.js/TypeScript code, along with a ton of TailwindCSS so naturally that&apos;s the kind of code you&apos;ll likely find here. In time I&apos;ll get to growing this repository out and implementing more friendly and usable features like Search and My Account. For now feel free to peruse, then copy and paste to your heart&apos;s content.
          </div>
      </div>
  );
}
