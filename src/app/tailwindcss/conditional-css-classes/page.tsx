import React from "react";
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";
import {Card} from "@mantine/core";
import type {Metadata} from "next";

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

export const metadata: Metadata = {
    title: 'Conditional CSS class declaration',
    description: 'If a condition is true, display this class, else display this class',
    keywords: ['Conditional CSS class declaration','display CSS based on condition']
}

export default function ConditionalCssClasses() {

    const code = `
//condition: is the number gt 0
const number = -2;

<span className={number > 0 ? "css-positive-number" : "css-negative-number"}>
    {number}
</span>
    `

    const language = "typescript";
    const highlightedCode = highlight(code, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Conditional CSS Classes Based on Condition
            </h2>
            <p className="mt-3">Code for when you are declaring CSS classNames based on a condition.</p>
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
                <strong>Summary</strong>: Using the ES6 ternary operator, read the className attribute like
                this: <br/>
                &quot;If number is greater than 0 then use &quot;css-positive-number&quot; class, else
                use &quot;css-negative-number&quot;
                class.&quot;
            </div>

        </div>
    )
}
