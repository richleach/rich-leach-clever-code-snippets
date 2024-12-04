import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Random Number Generator',
    description: 'Need a random number between X and Y? Here ya go.',
    keywords: ['Random number generator using Javascript']
}



export default function RandomJS() {

const code = `const randomNumber = Math.floor(Math.random() * 10) +1;`

    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    )

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Random JS - Whenever You Need Those Random Numbers
            </h2>
            <p className="mt-3">JavaScript that generates a random number between 1 and 10. Change &quot;10&quot; to whatever range
                you need.</p>
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
                {CodeBlock({code})}
            </div>
        </div>
    )
}
