import React from "react";
import type {Metadata} from "next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow, vs } from "react-syntax-highlighter/dist/esm/styles/prism";



export const metadata: Metadata = {
    title: 'Javascript code that spits out the current year dynamically. Great for copyright footers....',
    description: 'Align text, divs, whatever on a page vertically and horizontally',
    keywords: ['Dynamic year generator code', 'Current year in Javascript', 'copyright footer with dynamic date']
}

export default function DynamicYearGenerator() {

const code = `<div>
    <div className="opacity-50">
        &copy; {new Date().getFullYear()} Rich Leach. All Rights Reserved.
    </div>
</div>`

    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    )

    return (
        <>
            <div className="min-h-screen m-4">
                <h2 className="w-full text-center text-xl">
                    Dynamically Display Current Year - Great for Copyright Notices
                </h2>
                <p className="mt-3">I almost always use this code snippet (or something like it) when I build a new
                    site.
                    This is great for displaying a dynamic copyright notice where you need to display the current
                    year&apos;s value (usually in the footer).</p>
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
                    <strong>Summary</strong>: This code creates a new date object and displays only the year of the
                    current date.
                </div>


            </div>
        </>
    )
}
