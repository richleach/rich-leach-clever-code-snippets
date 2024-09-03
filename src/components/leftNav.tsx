
import Link from 'next/link';

export default function LeftNav() {
    return (
        <menu>
            <ul>
                <p><Link href="pre-reqs"> Pre-reqs</Link></p>

                <p style={{paddingTop: "4px"}}><Link href="/tailwindcss">Tailwind CSS</Link></p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link href="/tailwindcss/conditional-css-classes">Conditional CSS Classes</Link></li>

                <p style={{paddingTop: "4px"}}><Link href="/jsx-snippets">Handy JSX Snippets</Link></p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link href="/handy-js-snippets/random-js/">Random Number Generator</Link></li>

                <p style={{paddingTop: "4px"}}><Link href="/nextjs">Next.js</Link></p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; Item 3</li>

                <p style={{paddingTop: "4px"}}><Link href="/strictly-react">Strictly React</Link></p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; Item 4</li>

                <p style={{paddingTop: "4px"}}><Link href="/typescript">TypeScript</Link></p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link href="/typescript/how-typescript-works-in-nextjs">BASICS: How TypeScript Works in Next.js</Link></li>
            </ul>
        </menu>
    );
}

