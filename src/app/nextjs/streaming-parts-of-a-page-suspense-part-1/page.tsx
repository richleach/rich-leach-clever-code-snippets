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

export default function StreamingPageSuspensePart1() {

    const code = `
import { Suspense } from 'react'
import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  )
}

`
    const language = "typescript";
    const highlightedCode = highlight(code, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Streaming Parts of a Web Page (Suspense) Part 1
            </h2>
            <p className="mt-3">Next.js has quickly matured into a full stack solution and one of the tools in its arsenal is streaming content. Specifically you can plan to serve the slower-loading parts of a requested web page using a placeholder (fallback) that gets displayed while your slow (blocking) background process completes (think &quot;slow returning API request from a busy NHL server during hockey playoffs&quot; or &quot;giant database query that takes forever to return&quot;....)</p>
            <br />
            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <br/>
            <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Card.Section style={{marginLeft: "2px", marginRight: "2px", marginTop: "1px", marginBottom: "4px"}}>
                    <strong>Summary</strong>: The PostFeed and Weather components represent slow-to-return data feeds. Normally these async operations would prevent the rest of the page&apos;s content from displaying until the entire recordset is returned from the call(s) - PostFeed and Weather. The above code lets the page continue to load but instead of being blocked, the messages &quot;Loading feed....&quot; and &quot;Loading weather....&quot; are displayed in the short duration until the requested data is returned and displayed (like a placeholder).
                </Card.Section>
            </Card>

        </div>
    )
}
