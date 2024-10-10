import React from "react";
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";
import {Card} from "@mantine/core";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'If-else alternatives like logical operators, ternary....',
    description: 'if-else sucks and its boring. Try these new(er)-fangled approaches like && and ? : ',
    keywords: ['&& operator','if else alternatives in React','? : if else in React and Next.js']
}

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

export default function IfElseAlternatives() {

    const code = `
const wabbitSeason=true;
<>
    //logical AND operator
    { wabbitSeason && <p>Say your pwayers wabbit....</p>}
    
    //ternary operator
    { wabbitSeason ? "Run wabbit!" : "It's ok, you're safe...." }
</>

`
    const language = "typescript";
    const highlightedCode = highlight(code, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                If-Else Alternatives
            </h2>
            <p className="mt-3">Why use that old-school, verbose code when these shortcuts work just as well? All the cool kids are using code like this....</p>
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
                <strong>Summary</strong>:
                The logical AND operator <strong>&&</strong> is a nice shortcut
                for &quot;if this is true then do that&quot;. <br/><br/>
                The ternary operator gives you the full &quot;if this is true do that, else do this thing&quot;
            </div>

        </div>
    )
}
