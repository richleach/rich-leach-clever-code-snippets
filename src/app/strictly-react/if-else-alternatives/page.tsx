import React from "react";

import type {Metadata} from "next";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
    title: 'If-else alternatives like logical operators, ternary....',
    description: 'if-else sucks and its boring. Try these new(er)-fangled approaches like && and ? : ',
    keywords: ['&& operator','if else alternatives in React','? : if else in React and Next.js']
}


export default function IfElseAlternatives() {

    const code = `const wabbitSeason=true;

return (
    <>
        //logical AND operator
        { wabbitSeason && <p>Say your pwayers wabbit....</p>}
        
        //ternary operator
        { wabbitSeason ? "Run wabbit!" : "It's ok, you're safe...." }
    </>
)`
    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    );

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                If-Else Alternatives
            </h2>
            <p className="mt-3">Why use that old-school, verbose code when these shortcuts work just as well? All the cool kids are using code like this....</p>
            <br/>
            <div className="shadow-md bg-white" style={{
                marginLeft: "2px",
                marginRight: "2px",
                marginTop: "1px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "10px",
                borderRadius: "10px"
            }}>{CodeBlock({code})}
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
                <strong>Summary</strong>:
                The logical AND operator <strong>&&</strong> is a nice shortcut
                for &quot;if this is true then do that&quot;. <br/><br/>
                The ternary operator gives you the full &quot;if this is true do that, else do this thing&quot;
            </div>

        </div>
    )
}
