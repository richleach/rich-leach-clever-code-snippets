'use client'

import Link from 'next/link';
import React, {Suspense, use} from "react";
import { CodeHighlight } from '@mantine/code-highlight';

export default function UrlParamsQueryStrings()

{
    const mycode = '';

    const code = `
// to display this code on-screen....    
function Button() {
    return 
        <button>
            Click me
        </button>;
    }

// ...use the following code snippet:
<CodeHighlight
    code={'// Try it, click the Copy Code icon $ { mycode }'}
    language="tsx"
    copyLabel="Copy button code"
    copiedLabel="There ya go!"
/>     
  `
    return (
        <>
            <h2 className="w-full text-center text-xl">
                Mantine&apos;s Code Highlighter Utility
            </h2>

            <br/>
            <div className="min-h-screen m-4">
                One of the easiest ways to display code on-screen without it rendering. It even provides you with the &quot;copy / copied&quot; button functionality. <br /> Sure you could write this utility yourself or just use &lt;CodeHighlight /&gt; instead.<br/><br/>

                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>
                   <CodeHighlight
        code={`// Try it, click the Copy Code icon ${code}`}
        language="tsx"
        copyLabel="Copy Code"
        copiedLabel="There ya go!"
        styles={{
            root: { position: "relative" },
            copy: { position: "absolute", top: "8px", right: "8px" },
        }}
      /> 
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
                    <strong>Summary</strong>: Visit <Link href={'https://mantine.dev/x/code-highlight/'} target='_blank'>https://mantine.dev/x/code-highlight/</Link> for all of the specifics, but this is super-easy to use: <br />
                    1. NPM install it<br/> 
                    2. Import it into your component<br /> 
                    3. Set some formatted code to display....<br /> 
                    4. ...then spit it out to screen with the &lt;CodeHighlight... /&gt; component.
                </div>
            </div>
        </>
    )
}
