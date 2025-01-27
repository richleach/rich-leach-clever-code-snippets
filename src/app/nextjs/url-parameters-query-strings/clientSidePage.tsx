'use client'

import Link from 'next/link';
import React, {Suspense, use} from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UrlParamsQueryStrings()
//https://www.youtube.com/watch?v=qPsY4AKFlnM
{
    const code = `import Link from "next/link";
    
export default async function EuroArticle({
    params,
    searchParams
  }: {
    params: Promise<{articleId: string }>;
    searchParams: Promise<{lang?: "en" | "fr" | "de"}>
    })
  {
    const {articleId} = await params;
    const {lang = "en"} = await searchParams;
    
    return (
    <div>
        <h2>Euro Article {articleId}</h2>
        <p>Current Language: {lang}</p>
        
        <div>
            <Link href={&grave;/articles/&dollar{articleId}?lang=en&grave;}>English</Link> &nbsp;
            <Link href={&grave;/articles/&dollar{articleId}?lang=fr&grave;}>French</Link> &nbsp;
            <Link href={&grave;/articles/&dollar{articleId}?lang=de&grave;}>German</Link> &nbsp;
        </div>
    </div>
    );
}   
//Replace &grave; with a backtick character, &dollar with a dollar character.`
    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    );

    const code2 = `"use client"
import Link from "next/link";
import { use } from "react";
    
export default function EuroArticle({
    params,
    searchParams
  }: {
    params: Promise<{articleId: string }>;
    searchParams: Promise<{lang?: "en" | "fr" | "de"}>
    })
  {
    const {articleId} =  use(params);
    const {lang = "en"} =  use(searchParams);
    
    return (
    <div>
        <h2>Euro Article {articleId}</h2>
        <p>Current Language: {lang}</p>
        
        <div>
            <Link href={&grave;/articles/&dollar{articleId}?lang=en&grave;}>English</Link> &nbsp;
            <Link href={&grave;/articles/&dollar{articleId}?lang=fr&grave;}>French</Link> &nbsp;
            <Link href={&grave;/articles/&dollar{articleId}?lang=de&grave;}>German</Link> &nbsp;
        </div>
    </div>
    );
}   
//Replace &grave; with a backtick character, &dollar with a dollar character.`
    const CodeBlock2 = ({ code2 }: { code2: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code2}
        </SyntaxHighlighter>
    );
    return (
        <>
            <h2 className="w-full text-center text-xl">
                URL Parameters &amp; Query Strings - Next.js
            </h2>

            <br/>
            <div className="min-h-screen m-4">
                Next.js does URL parameters and query strings a little differently - and a little differently depending
                on whether you&apos;re using client or server components.<br/><br/>

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
                <p>The code above is the server side flavor of extracting the params and searchParams values into your
                    code.</p><br/>

                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>
                    {CodeBlock2({code2})}
                </div>

                <br/>
                <p>The code above is the client side flavor of extracting the params and searchParams values into your
                    code. There&apos;s no async/await since it&apos;s a client component, so instead you&apos;ll use the <em>use</em> hook. Use this URL to view the page results on your local machine: localhost:3000/articles/euroArticle?lang=en</p><br/>
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
                    <strong>Summary</strong>: Make a new Next.js directory, create a new page.tsx file into that directory and copy/paste each of the above files (swap them out or create a second directory to handle both of them). This pseudo code will display 3 links on your page (English French German) representing the language for each article. The articleId is what Next.js refers to as the params value - actually what you know as the page name in the url (left of the &quot;?&quot; character). The searchParams are name/value pairs to the right of the &quot;?&quot; character.
                </div>

            </div>
        </>
    )
}
