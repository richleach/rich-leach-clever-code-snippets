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
    title: 'Metadata in Next.js - Client Components  - Next.js',
    description: 'Next.js 14 metadata in your client components, the easy way',
    keywords: ['Metadata in Next.js - Client Components', 'SEO in Next.js', 'Next.js code', 'SEO Client Components']
}

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

const highlight2 = (code2:string, language:string='markup') => {
    const res = Prism.highlight(code2, Prism.languages[language], language);
    return res;
}

export default async function Page() {

    const code = `
PAGE.TSX
// /homers-guide-to-donuts/page.tsx
//My newly created "shell" file. This is the server side component in my directory to be served. 

import type {Metadata} from "next";
import ClientSidePage from './clientSidePage'

export const metadata: Metadata = {
    title: 'Homers Guide to Donuts',
    description: 'I never met a donut I did not like. - Homer Simpson ',
    keywords: ['Glazed donuts', 'Jelly donuts','Powdered donuts']
}

export default function HomersGuideToDonuts() {
    return (
        <ClientSidePage />
    )
}

`
    const code2 = `
CLIENTSIDEPAGE.TSX
// this WAS named "page.tsx" before I realized I forgot to add metadata stuff and needed a server component - doh!

'use client'

import {useState} from 'react'

// API calls to donut databases, a lot of donut logic, chomp - chomp - burp....
const hmmmDonut = 'Glazed donut.'

export default function ClientSidePage() {

    //Set state stuff... only client components can use useState()
    const [donutOfTheDay, setDonutOfTheDay] = useState<string>(hmmmDonut);

    return (
        <div>
            Today my favorite donut is {donutOfTheDay}
        </div>
    );
}

`
    const language = "typescript";
    const highlightedCode = highlight(code, language);
    const highlightedCode2 = highlight(code2, language);

    let data = await fetch('https://api.vercel.app/blog')
    let posts = await data.json()
    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Metadata in Your Next.js Client Components
            </h2>
            <p className="mt-3">USE CASE: If I can only use the Next.js 15 <strong>metadata</strong> object in server components, how do I handle SEO for
                my client component pages?</p><br />

            <p>
                Proper Answer: You&apos;re supposed to refactor your client functionality into their own logical client components, then import them into your primary page component (that will of course, be a server component), which will naturally contain all of your page&apos;s metadata object stuff.

            </p>
            <br/>

            <p>
                Lazy Developer&apos;s Answer: Create a server side component containing only your metadata-object-stuff and import your client component. Then, go to lunch.
            </p>
            <br />

            <div>

                <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

                <br/>

                <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode2)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

                <br/>

                {/*https://www.youtube.com/watch?v=vg4g68oJNGM*/}

                <div className="shadow-md" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>
                    <strong>Summary</strong>: There are actually a number of different strategies on how to handle SEO in Next.js 15 but this will get you past the predicament of when you need to add metadata to your client component. <Link
                    href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
                    target="_blank"><span style={{fontWeight: "600"}}>RTFM!</span></Link>
                </div>
            </div>
        </div>
    )
}

