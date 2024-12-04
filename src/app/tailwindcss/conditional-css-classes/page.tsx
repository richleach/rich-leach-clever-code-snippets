import React from "react";
import type {Metadata} from "next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow, vs } from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
    title: 'Conditional CSS class declaration',
    description: 'If a condition is true, display this class, else display this class',
    keywords: ['Conditional CSS class declaration','display CSS based on condition']
}

export default function ConditionalCssClasses() {

const code = `//condition: is the number gt 0
const number = -2;

<span className={number > 0 ? "css-positive-number" : "css-negative-number"}>
    {number}
</span>`

const CodeBlock = ({ code }: { code: string }) => (
    <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
        {code}
    </SyntaxHighlighter>
);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Conditional CSS Classes Based on Condition
            </h2>
            <p className="mt-3">Code for when you are declaring CSS classNames based on a condition.</p>
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
                <strong>Summary</strong>: Using the ES6 ternary operator, read the className attribute like
                this: <br/>
                &quot;If number is greater than 0 then use &quot;css-positive-number&quot; class, else
                use &quot;css-negative-number&quot;
                class.&quot;
            </div>

        </div>
    )
}
