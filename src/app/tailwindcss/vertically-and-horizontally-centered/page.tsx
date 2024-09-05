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

export default function VerticallyAndHorizontallyCentered() {

    const code = `
<div className="flex items-center justify-center min-h-screen">
  <div className="text-center">
    <h1 className="text-4xl font-bold">Centered Content</h1>
    <p className="mt-4 text-lg text-gray-600">This content is centered both vertically and horizontally!</p>
  </div>
</div>

`
    const language = "typescript";
    const highlightedCode = highlight(code, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Vertically AND Horizontally Centered Using TailwindCSS
            </h2>
            <p className="mt-3">...ok, allright, I know - I should just have this one memorized. But why memorize when
                you can look it up?</p>
            <br/>
            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <br/>
            <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Card.Section style={{marginLeft: "2px", marginRight: "2px", marginTop: "1px", marginBottom: "4px"}}>
                    <strong>Summary</strong>: TailwindCSS goodness that centers vertically and horizontally via flex and
                    text-center.
                </Card.Section>
            </Card>

        </div>
    )
}