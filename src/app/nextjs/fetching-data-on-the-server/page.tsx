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
            <h2 className="w-full text-center text-xl">
                Fetching Data on the Server - Next.js
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
                <p>This bulleted list is the result of the fetch call above. It really works!</p><br/>
                <ul>
                    {posts.map((post: any) => (
                        <li key={post.id}>&middot; {post.title}</li>
                    ))}
                </ul>

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
                    <strong>Summary</strong>: The above fetch code calls the api.vercel.app/blog endpoint, then converts
                    the response to json(). In the return output a simple .map() statement loops over the results and
                    outputs to screen. Don&apos;t forget to add a key attribute to each item being output in your map
                    loop; React needs that for element id for future operations.
                </div>
            </div>
        </>
    )
}

