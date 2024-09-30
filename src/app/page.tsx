import Image from "next/image";
import Link from 'next/link';

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
