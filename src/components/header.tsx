import Image from 'next/image'

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <header
                className="w-full h-[100px] bg-[url('/images/codeBackground.png')] text-white flex items-center justify-center">
                <div className="w-1/3 ml-3">
                    <Image src="/images/logo.png" alt="code snippets" height={80} width={80}/>
                </div>


                <div className="w-1/3 text-center text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    (mostly...) Clever Code Snippets
                </div>


                <div className="w-1/3 text-right mr-3">
                    <p>&nbsp;</p>
                </div>

            </header>
        </div>
    );
}
