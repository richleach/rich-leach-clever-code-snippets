
import Link from 'next/link';

export default function LeftNav() {
    return (
        <menu>
            <ul>
                <p><Link href="pre-reqs"> Pre-reqs</Link></p>
                <p style={{paddingTop: "4px"}}><Link href="/tailwindcss">Tailwind CSS</Link></p>
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link href="conditional-css-classes">Conditional CSS Classes</Link></li>
                <p style={{paddingTop: "4px"}}><Link href="/jsx-snippets">Handy JSX Snippets</Link></p>
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; Item 2</li>
                <p style={{paddingTop: "4px"}}><Link href="/nextjs">Next.js</Link></p>
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; Item 3</li>
                <p style={{paddingTop: "4px"}}><Link href="/strictly-react">Strictly React</Link></p>
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; Item 4</li>

                <p style={{paddingTop: "4px"}}><Link href="/tsx-snippets">Handy TSX Snippets</Link></p>
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; Item 5</li>
            </ul>
        </menu>
    );
}

