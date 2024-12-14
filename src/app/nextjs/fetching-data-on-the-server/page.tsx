import React, { Suspense } from 'react';
import type {Metadata} from "next";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
    title: 'Fetching data on the server - Next.js',
    description: 'Very simple fetch code calling an API endpoint on the server and displaying the results',
    keywords: ['Next.js code', 'Data fetching using API endpoint']
}


// A helper function to fetch the blog data
async function fetchBlogs() {
    const res = await fetch('https://api.vercel.app/blog', { cache: 'no-store' }); // Adjust caching as needed
    if (!res.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return res.json();
}

// Server Component to display blogs
async function BlogList() {
    const posts = await fetchBlogs();

    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>&middot; {post.title}</li>
            ))}
        </ul>
    );
}

export default function Page() {

    const code = `// A helper function to fetch the blog data
async function fetchBlogs() {
    const res = await fetch('https://api.vercel.app/blog', { cache: 'no-store' }); // Adjust caching as needed
    if (!res.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return res.json();
}

// Function to render blogs (calls fetchBlogs() above)
async function BlogList() {
    const posts = await fetchBlogs();

    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>&middot; {post.title}</li>
            ))}
        </ul>
    );
}

// Exported default function to display blogs. Wrapped in suspense tags in case it takes a while
export default function Page() {
    
    return(
        <Suspense fallback={<div>Loading blogs...</div>}>
            {/* BlogList is an async component */}
            <BlogList/>
        </Suspense>
    );
}

//...for good measure, here is my error.ts file to satisfy an errorBoundary
'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}`

    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    );

    return (
        <>
            <h2 className="w-full text-center text-xl">
                Fetching Data on the Server - Next.js
            </h2>

            <br/>
            <div className="min-h-screen m-4">
                With Next.js 15 and React server components you can now load all of your server/database/API/password details
                into your file without fear of blowing yourself up.
                Back in the &apos;bad-old-days&apos; (when everything ran on the client) you needed to break out your API calls
                and credentials into a .env file and then make your call from a useEffect() block. Well no mas! The code
                below is a convenient server component so the file is run and parsed on the server and the results get
                downloaded to the client.<br/><br/>

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
                <Suspense fallback={<div>Loading blogs...</div>}>
                    {/* BlogList is an async component */}
                    <BlogList/>
                </Suspense>

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
                    <strong>Summary</strong>: fetchBlogs() calls the api.vercel.app/blog endpoint, checks for errors then converts
                    the response to json() for return to BlogList(). In the return output a simple .map() statement loops over the results and
                    outputs to screen. The function Page() wraps the functionality in a suspense tag in case network ops are slowed.... Don&apos;t forget to add a key attribute to each item being output in your map
                    loop; React needs that for element id for future operations. Oh, and just in case something naughty happens I included an error.ts file that I simply added to the same directory with the other files.
                </div>

            </div>
        </>
    );
}