import React from "react";
import {Card} from "@mantine/core";
import Link from "next/link";
import type {Metadata} from "next";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
    title: 'Fetching data on the server - Next.js',
    description: 'Very simple fetch code calling an API endpoint on the server and displaying the results',
    keywords: ['Next.js code', 'Data fetching using API endpoint']
}


export default async function Page() {

    const code = `export default async function Posts() {
   let posts:any[] = [];

    try {
        const data = await fetch('https://api.vercel.app/blog');
        posts = await data.json();
        //console.dir(posts, { depth: null}); //Expand all nested properties
    } catch (error) {
        console.error('Error fetching data:', error);
    }
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
}`

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
    } catch (error) {
        console.error('Error fetching data:', error);
    }



    return (
        <>
            <h2 className="w-full text-center text-xl">
                Fetching Data on the Server - Next.js
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
                <p>This bulleted list is the result of the fetch call above. It really works!</p><br/>
                <ul>
                    {posts.map((post: any) => (
                        <li key={post.id}>&middot; {post.title}</li>
                    ))}
                </ul>

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
                    the response to json(). In the return output a simple .map() statement loops over the results and
                    outputs to screen. Don&apos;t forget to add a key attribute to each item being output in your map
                    loop; React needs that for element id for future operations.
                </div>
            </div>
        </>
    )
}

