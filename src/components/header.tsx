import Image from 'next/image'
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <header
                className="w-full h-[120px] bg-[url('/images/codeBackground.png')] text-white flex items-center justify-center">
                <div className="w-1/4 ml-3">
                    <Link href="/">
                        <Image src="/images/logo.png" alt="code snippets" height={80} width={80}/>
                    </Link>
                </div>


                <div className="w-1/2 text-center text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    <strong>(mostly...) Clever Code Snippets</strong>
                </div>


                <div className="w-1/4 text-2xl text-right mr-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    <p><Link href="/contact">Contact</Link></p>
                </div>

            </header>
        </div>
    );
}
