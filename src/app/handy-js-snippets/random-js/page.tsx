import React from "react";
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Random Number Generator',
    description: 'Need a random number between X and Y? Here ya go.',
    keywords: ['Random number generator using Javascript']
}


const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

export default function RandomJS() {

    const code = `
const randomNumber = Math.floor(Math.random() * 10) +1;
    `

    const language = "typescript";
    const highlightedCode = highlight(code, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Random JS - Whenever You Need Those Random Numbers
            </h2>
            <p className="mt-3">JavaScript that generates a random number between 1 and 10. Change &quot;10&quot; to whatever range
                you need.</p>
            <br/>
            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

        </div>
    )
}
