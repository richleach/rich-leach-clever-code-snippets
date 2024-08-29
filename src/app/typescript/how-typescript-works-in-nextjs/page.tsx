import React from "react";
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

export default function RandomJS() {

    const code = `
    //3 parts to understanding TS in Next.js....
    
    //Part 1: The parent component
    
    //Part 2: The child component
    
    //Part 2a: The "type" definition
    
    //Part 3: Consuming the prop in your child component
    
    type CardProps = {
    title: string;
    code: string;
    usage: string;
    }
    
    export default function MyComponent({title, code, usage}:CardProps) {
        ...
     }   
    `

    const language = "typescript";
    const highlightedCode = highlight(code, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                VERY BASIC: How TypeScript Works In Next.js
            </h2>
            <p className="mt-3">Just getting started with Next.js and TypeScript? Wondering how/why to use TypeScript instead of just JSX in your files? Check it out!</p>

            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}></code>
            </pre>

        </div>
    )
}
