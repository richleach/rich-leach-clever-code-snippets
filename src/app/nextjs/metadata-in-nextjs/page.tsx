import React from "react";
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";
import {Card} from "@mantine/core";
import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Making Metadata Work in Your Next.js Application  - Next.js',
    description: 'Next.js 14 does metadata differently, here is a rundown on how to do it easily',
    keywords: ['Metadata in Next.js', 'SEO in Next.js', 'Next.js code']
}

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

export default async function Page() {

    const code = `
import type {Metadata} from "next";
    
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
}

`
    const language = "typescript";
    const highlightedCode = highlight(code, language);

    let data = await fetch('https://api.vercel.app/blog')
    let posts = await data.json()
    return (
        <>
            <h2 className="w-full text-center text-xl">
                Metadata in Your Next.js Application - Some SEO Goodness!
            </h2>

            <br/>
            <div className="min-h-screen m-4">

                <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

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

                <div className="shadow-md" style={{
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

