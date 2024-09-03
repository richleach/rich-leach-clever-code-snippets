'use client';

import React from "react";
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";
import {Card} from "@mantine/core";

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
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

            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}} style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <br />
            <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Card.Section style={{marginLeft: "2px", marginRight: "2px", marginTop: "1px", marginBottom:"4px"}}>
                    <strong>Summary</strong>: Using the ES6 ternary operator, read the className attribute like this: <br />
                    "If number is greater than 0 then use "css-positive-number" classes, else use "css-negative-number" classes."
                </Card.Section>
            </Card>
        </div>
    )
}
