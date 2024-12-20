import React from "react";

import Link from "next/link";
import type {Metadata} from "next";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
    title: 'Making Metadata Work in Your Next.js Application  - Next.js',
    description: 'Next.js 14 does metadata differently, here is a rundown on how to do it easily',
    keywords: ['Metadata in Next.js', 'SEO in Next.js', 'Next.js code']
}

export default async function Page() {

    const code = `import type {Metadata} from "next";
    
export default async function Page() {
    
    export const metadata: Metadata = {
        title: 'Making Metadata Work in Your Next.js Application  - Next.js',
        description: 'Next.js 14 does metadata differently, here&apos;s a rundown on how to do it easily',
        keywords: ['Metadata in Next.js', 'SEO in Next.js', 'Next.js code']
    }
    return (
    <>
        Your page content goes here.
    </>
    )
}`
    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    );

    return (
        <>
            <h2 className="w-full text-center text-xl">
                Metadata in Your Next.js Application - Some SEO Goodness!
            </h2>

            <br/>
            <div className="min-h-screen m-4">
                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>
                {CodeBlock({code})}
                </div>

                <br/>
                <p>Next.js 14 does SEO and metadata a little differently than past versions did.<br/><br/>

                    There&apos;s some <Link
                        href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
                        target="_blank"><span style={{fontWeight: "600"}}>detailed docs on Vercel&apos;s site</span>
                    </Link> about using the Metadata object in Layout.tsx and even on how to use a single Metadata
                    object at your application&apos;s root level for all of your site&apos;s content. Here I demonstrate
                    how to apply custom metadata values for each page - at the page level - that will be properly
                    displayed in your application&apos;s &lt;Head&gt; tag.<br/><br/>
                    You have to import the Metadata object from Next at the top of your file and then express it within
                    your component by applying the specific details about the title, description and keywords
                    attributes (see above). Don&apos;t forget the keywords attribute requires you to add your list of words as a comma delimited list within an array, for example &quot;[&apos;keyword1&apos;,&apos;keyword2&apos;,&apos;keyword3&apos; etc]&quot;

                </p>


                <br/>

                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>
                    <strong>Summary</strong>: The above metadata object can be inserted onto each page where you want the corresponding meta tags to appear. Even though they aren&apos;t directly scripted into the head tag of your application they will be parsed at build time so that they render correctly in the browser. Vercel actually built out an effective metadata &quot;system&quot; whereby each layout in your application can apply a unique set of metadata values and all pages under that layout can optionally inherit (or override) values as needed. <Link
                    href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
                    target="_blank"><span style={{fontWeight: "600"}}>RTFM!</span></Link>
                </div>
            </div>
        </>
    )
}

