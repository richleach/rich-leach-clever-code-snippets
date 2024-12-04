import React from "react";
import type {Metadata} from "next";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
    title: 'Vertically and horizontally centered screen elements using TailwindCSS',
    description: 'Align text, divs, whatever on a page vertically and horizontally',
    keywords: ['Vertical and horizontal centering', 'center on screen vertically and horizontally using Tailwind']
}

export default function VerticallyAndHorizontallyCentered() {

const code = `<div className="flex items-center justify-center min-h-screen">
  <div className="text-center">
    <h1 className="text-4xl font-bold">Centered Content</h1>
    <p className="mt-4 text-lg text-gray-600">This content is centered both vertically and horizontally!</p>
  </div>
</div>`
    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    );

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Vertically AND Horizontally Centered Using TailwindCSS
            </h2>
            <p className="mt-3">...ok, allright, I know - I should just have this one memorized. But why memorize when
                you can look it up?</p>
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
                <strong>Summary</strong>: TailwindCSS goodness that centers vertically and horizontally via flex and
                text-center.
            </div>

        </div>
    )
}
