'use client';

import React from "react";
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";
import {Card} from "@mantine/core";
import Link from "next/link";

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

const highlight2 = (code2:string, language:string='markup') => {
    const res = Prism.highlight(code2, Prism.languages[language], language);
    return res;
}

export default function DynamicRoutes() {

    const code = `
<>
    <h1>You entered {params.slugId} as the dynamic slug value in the URL. 
    Try entering a different number in the URL!</h1><br />
    
    <Link href="/nextjs/dynamic-routes/">&lt;= Back to dynamic pages</Link>
</>

`
    const code2 = `
// Your project's folder structure
/app
    /nextjs
        /dynamic-routes
            /[slugId]
            page.tsx
layout.tsx
page.tsx

`

    const language = "typescript";
    const highlightedCode = highlight(code, language);
    const highlightedCode2 = highlight(code2, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Using the Almighty [SLUG] In Next.js
            </h2>
            <p className="mt-3">Here&apos;s how dynamic pages work in Next.js:</p>
            <br/>
            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode2)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <p className="pt-4 pb-4 font-semibold">Your URL: https://rich-leach-clever-code-snippets.vercel.app/nextjs/dynamic-routes/2024</p>

            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <br/>
            <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Card.Section style={{marginLeft: "2px", marginRight: "2px", marginTop: "1px", marginBottom: "4px"}}>
                    <strong>Summary</strong>: Make a dynamic page that will output the results for a particular id in
                    the URL.<br/><br/>

                    <strong>In Case You&apos;re New to Web Development </strong>: Big sites like Amazon and Google
                    don&apos;t make an individual web page for every single product on their sites, they likely use a
                    URL configuration like this:<br/>
                    <br/> https://rich-leach-clever-code-snippets.vercel.app/nextjs/dynamic-routes/2024<br/><br/>
                    Where:<br/>
                    <strong>https://rich-leach-clever-code-snippets.vercel.app/</strong> is the site/domain
                    name...<br/>
                    <strong>/nextjs/dynamic-routes/</strong> are likely directory
                    names and...<br/><strong>2024</strong> is the ID of the product they want to display.
                    There&apos;s a good chance the web site will take that <strong>2024</strong> value and run a
                    database query against it / check some kind of a product list / etc. - they&apos;ll do something
                    with that value to return the page you requested.
                    <br/><br/>


                    <strong>Give it a try:</strong> <br/>
                    Enter this URL in a different tab in your browser:<br/><br/>
                    <strong><Link href="/nextjs/dynamic-routes/2024">https://rich-leach-clever-code-snippets.vercel.app/nextjs/dynamic-routes/2024</Link></strong><br/><br/>

                    <strong>How Next.js Does It:</strong> <br/>
                    The folder and file structure needs to be configured like the first code block above. You simply create a folder using the convention &quot;[folder-name]&quot; and inside that directory you create a page.tsx file (the second code block above) that reads the trailing values from the URL. Next.js refers to these values as &quot;params&quot; and you can directly reference those values by however you named the folder (in our case we named ours &quot;dynamic-routes/[slugId]&quot;). <br/> Another often-used convention is to name your dynamic folder  &quot;slug&quot;; you can name it anything you like, it&apos;s just the convention.

                </Card.Section>
            </Card>

        </div>
    )
}
