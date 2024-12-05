import React from "react";
import {Card} from "@mantine/core";
import Link from "next/link";
import type {Metadata} from "next";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
    title: 'Debugging Your API Calls - Next.js',
    description: 'A few simple code snippets to view/examine returned API call results',
    keywords: ['Next.js debug API code', 'Next.js output returned API call values']
}

export default async function Page() {

    const code = `    let posts:any[] = [];

    try {
        const data = await fetch('https://api.vercel.app/blog');
        posts = await data.json();

        // Dump the response and data to the console
        //console.log('Data:', posts); // Logs the parsed JSON data
        console.dir(posts, { depth: null}); //Expand all nested properties
    } catch (error2) {
        console.error('Error fetching data:', error2);
    }
    
    return (
        <>
            <h2 className="w-full text-center text-xl">
                Debugging Your API Calls - Next.js
            </h2>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>&middot; {post.title}</li>
                ))}
            </ul>
        </>
     )
`

    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    );

    let posts:any[] = [];

    try {
        const data = await fetch('https://api.vercel.app/blog');
        posts = await data.json();

        // Dump the response and data to the console
        //console.dir(data, {depth: null}); // Logs the entire response object
        //console.log('Data:', posts); // Logs the parsed JSON data
        //console.dir(posts, { depth: null}); //Expand all nested properties
    } catch (error2) {
        console.error('Error fetching data:', error2);
    }

    return (
        <>
            <h2 className="w-full text-center text-xl">
                Debugging Your API Calls - Next.js
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
                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>
                    <strong>Summary</strong>: The above fetch code calls the api.vercel.app/blog endpoint, then converts
                    the response to json(). But what if nothing works? What if you get errors? What if the world runs
                    out of mozzarella sticks tomorrow?! <br/><br/>
                    Well that&apos;s where <strong>console.log()</strong> and <strong>console.dir() </strong>
                     save the day. <br/><br/>
                    I use <strong>console.log()</strong> for general logging purposes.<br/>
                    I use <strong>console.dir()</strong> for deeper inspection of objects (most JS array structures) or
                    DOM elements.<br/><br/>
                    Since this is a server component the output will get displayed to your server console (NOT your
                    browser&apos;s console). You can place these commands along the way to trace out your expected
                    output and troubleshoot the error of your ways. <br/><br/>
                    A big help for your code, not so much for your mozzarella sticks.
                </div>

                <br/>... and just to show you that I&apos;m not full of cheese here is the output to the API call: <br/><br/>
                <ul>
                {posts.map((post: any) => (
                        <li key={post.id}>&middot; {post.title}</li>
                    ))}
                </ul>

            </div>
        </>
    )
}

