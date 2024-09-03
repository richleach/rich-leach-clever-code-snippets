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

const highlight2 = (code2:string, language:string='markup') => {
    const res = Prism.highlight(code2, Prism.languages[language], language);
    return res;
}

export default function RandomJS() {

    const code = `
//The first component
export default function ComponentOne() {
    return (
        <Button actionType="add">Add Thingie</Button>
        <Button actionType="edit">Edit Thingie</Button>
    )
 }; 
  
`
    const code2 = `
//The second component
type FormProps = {
    actionType: "add" | "edit" ;
    children?: React.ReactNode;
    }
    
export default function ComponentTwo({actionType}:FormProps) {
    return (
        {actionType === "add" && "Specific stuff for ADD functionality"}
        {actionType === "edit" && "Specific stuff for EDIT functionality"}
    )
};        

`

    const language = "typescript";
    const highlightedCode = highlight(code, language);
    const highlightedCode2 = highlight(code2, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                VERY BASIC: How TypeScript Works In Next.js
            </h2>
            <p className="mt-3">Just getting started with Next.js and TypeScript? Wondering how/why to use TypeScript
                instead of just JSX in your files? Check it out!</p>

            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode2)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <br/>
            <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Card.Section style={{marginLeft: "2px", marginRight: "2px", marginTop: "1px", marginBottom: "4px"}}>
                    <strong>Summary</strong>: Using the ES6 ternary operator, read the className attribute like
                    this: <br/>
                    "If number is greater than 0 then use "css-positive-number" classes, else use "css-negative-number"
                    classes."
                </Card.Section>
            </Card>

        </div>
    )
}
