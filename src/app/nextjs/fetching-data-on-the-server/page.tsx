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
    title: 'Fetching data on the server - Next.js',
    description: 'Very simple fetch code calling an API endpoint on the server and displaying the results',
    keywords: ['Next.js code', 'Data fetching using API endpoint']
}

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

export default async function Page() {

    const code = `
import { Suspense } from 'react'
import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    let data = await fetch('https://api.vercel.app/blog')
    let posts = await data.json()
    return (
        <>
            <div className="min-h-screen m-4">
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>&middot; {post.title}</li>
                ))}
            </ul>
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
            <div className="min-h-screen m-4">
                <ul>
                    {posts.map((post: any) => (
                        <li key={post.id}>&middot; {post.title}</li>
                    ))}
                </ul>

                <br/>
                <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

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
                    <strong>Summary</strong>: The PostFeed and Weather components represent slow-to-return data feeds.
                    Normally these async operations would prevent the rest of the page&apos;s content from displaying
                    until
                    the entire recordset is returned from the call(s) - PostFeed and Weather. The above code lets the
                    page
                    continue to load but instead of being blocked, the messages &quot;Loading
                    feed....&quot; and &quot;Loading weather....&quot; are displayed in the short duration until the
                    requested data is returned and displayed (like a placeholder).
                </div>
            </div>
        </>
    )
}

