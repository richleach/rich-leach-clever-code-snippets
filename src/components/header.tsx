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


                {/*<div className="w-1/2 text-center text-3xl drop-shadow-[0_1.2px_1.2px_rgba(164,63,249,0.8)] text-black [text-stroke:2px_white]">*/}
                <div
                    className="w-1/2 flex items-center justify-center">
                   {/* <Image src="/images/copyAndPasteAllDayLong.png" alt="Copy and paste all day long." height={68} width={607} />*/}

                </div>


                <div
                    className="w-1/4 text-xl text-right mr-4 text-violet-800">
                    <p><Link href="/contact">Contact Rich</Link></p>
                </div>

            </header>
        </div>
    );
}
