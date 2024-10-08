import Image from "next/image";
import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'rich leach clever code snippets',
    description: 'Next.js/TailwindCSS/Typescript code snippets for your copy/paste pleasure',
    keywords: ['Next.js code', 'Copy - paste code', 'Copy/paste Next.js', 'Copy/paste TailwindCSS', 'Copy/paste Typescript']
}

export default function Home() {
  return (
      <div className="flex justify-center min-h-screen mt-80">
          <div className="text-center mx-auto text-xl">
              <Image src="/images/homePageLogo.png" alt="code snippets" height={144} width={430} className="mx-auto"/><br />
              I kept forgetting where I put that code, so I put it here.
          </div>
      </div>
  );
}
