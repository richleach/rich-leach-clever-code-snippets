import Link from 'next/link';

export default function LeftNav() {
    return (
        <menu>
            <ul>
                <p><Link href="/pre-reqs"> Pre-Reqs</Link></p>

                {/*<p style={{paddingTop: "4px"}}><Link href="/tailwindcss">Tailwind CSS</Link></p>*/}
                <p style={{paddingTop: "4px"}}>Tailwind CSS</p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/tailwindcss/conditional-css-classes">Conditional CSS Classes</Link></li>
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/tailwindcss/vertically-and-horizontally-centered">Vertically And Horizontally Centered
                    CSS</Link></li>
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/tailwindcss/simple-guide-to-theming-with-tailwindcss">A Simple Guide to Theming With
                    Tailwindcss</Link></li>

                {/*<p style={{paddingTop: "4px"}}><Link href="/jsx-snippets">Handy JSX Snippets</Link></p>*/}
                <p style={{paddingTop: "4px"}}>Handy JSX Snippets</p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/handy-js-snippets/random-js/">Random Number Generator</Link></li>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/handy-js-snippets/dynamic-year-generator/">Dynamic Year Generator</Link></li>

                {/*<p style={{paddingTop: "4px"}}><Link href="/nextjs">Next.js</Link></p>*/}
                <p style={{paddingTop: "4px"}}>Next.js</p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/nextjs/streaming-parts-of-a-page-suspense-part-1/">Streaming Parts of a Web Page (Suspense)
                    Part 1</Link></li>
                {/*<li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/nextjs/dynamic-routes/">Dynamic Pages in Next.js</Link></li>*/}
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/nextjs/fetching-data-on-the-server/">Fetching Data on the Server</Link></li>
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/nextjs/metadata-in-nextjs/">Metadata in Your Next.js Application</Link></li>
                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/nextjs/metadata-in-nextjs-with-client-components/">Metadata in Your Next.js Client
                    Components</Link></li>
                {/*<li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/nextjs/simple-contact-form/">Simple Next.js Contact Form</Link></li>*/}

                {/*<p style={{paddingTop: "4px"}}><Link href="/strictly-react">Strictly React</Link></p>*/}
                <p style={{paddingTop: "4px"}}>Strictly React</p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/strictly-react/if-else-alternatives/">If-Else Alternatives</Link></li>

                {/*<p style={{paddingTop: "4px"}}><Link href="/typescript">TypeScript</Link></p>*/}
                <p style={{paddingTop: "4px"}}>TypeScript</p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/typescript/how-typescript-works-in-nextjs">BASICS: How TypeScript Works in Next.js</Link>
                </li>

                <p style={{paddingTop: "4px"}}>Mantine Component Library</p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/mantine/getting-started-with-forms">BASICS: Getting Started With Forms</Link>
                </li>

                <p style={{paddingTop: "4px"}}>Search Engines / Site Ranking</p>

                <li className="hover:bg-slate-300 rounded-md text-sm text-slate-600">&nbsp; &middot; <Link
                    href="/seo/seo-checklist">SEO Checklist</Link>
                </li>
            </ul>
        </menu>
    );
}

