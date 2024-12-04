import React from "react";
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";
import {Card} from "@mantine/core";
import Link from "next/link";
import type {Metadata} from "next";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
    title: 'Metadata in Next.js - Client Components  - Next.js',
    description: 'Next.js 14 metadata in your client components, the easy way',
    keywords: ['Metadata in Next.js - Client Components', 'SEO in Next.js', 'Next.js code', 'SEO Client Components']
}

export default async function Page() {

    const code = `//PAGE.TSX
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
}`
    const code2 = `//CLIENTSIDEPAGE.TSX
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
}`

    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    );
    const CodeBlock2 = ({ code2 }: { code2: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code2}
        </SyntaxHighlighter>
    );
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
                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>{CodeBlock({code})}
                </div>
                <br/>

                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>{CodeBlock2({code2})}
                </div>

                <br/>

                {/*https://www.youtube.com/watch?v=vg4g68oJNGM*/}

                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>
                    <strong>Summary</strong>: There are actually a number of different strategies on how to handle SEO
                    in Next.js 15 but this will get you past the predicament of when you need to add metadata to your
                    client component. <Link
                    href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
                    target="_blank"><span style={{fontWeight: "600"}}>RTFM!</span></Link>
                </div>
            </div>
        </div>
    )
}

