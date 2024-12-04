import React from "react";
import type {Metadata} from "next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow, vs } from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
    title: 'Streaming parts of a Next.js page using suspense',
    description: 'Give perceived loading and performance a boost by streaming parts of a Next.js page using Suspense. ',
    keywords: ['Stream page', 'stream parts of a page','show content while rest of page loads Next.js']
}

const CodeBlock = ({ code }: { code: string }) => (
    <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
        {code}
    </SyntaxHighlighter>
)
export default function StreamingPageSuspensePart1() {

    const code = `import { Suspense } from 'react'
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
}`

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Streaming Parts of a Web Page (Suspense) Part 1
            </h2>
            <p className="mt-3">Next.js has quickly matured into a full stack solution and one of the tools in its
                arsenal is streaming content. Specifically you can plan to serve the slower-loading parts of a requested
                web page using a placeholder (fallback) that gets displayed while your slow (blocking) background
                process completes (think &quot;slow returning API request from a busy NHL server during hockey
                playoffs&quot; or &quot;giant database query that takes forever to return&quot;....)</p>
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
                <strong>Summary</strong>: The PostFeed and Weather components represent slow-to-return data feeds.
                Normally these async operations would prevent the rest of the page&apos;s content from displaying until
                the entire recordset is returned from the call(s) - PostFeed and Weather. The above code lets the page
                continue to load but instead of being blocked, the messages &quot;Loading
                feed....&quot; and &quot;Loading weather....&quot; are displayed in the short duration until the
                requested data is returned and displayed (like a placeholder).
            </div>

        </div>
    )
}
