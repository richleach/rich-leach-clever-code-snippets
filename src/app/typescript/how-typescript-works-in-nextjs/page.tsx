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
//Dashboard component:
//... import all external files here, we're just focused on the ProductButton
import ProductButton from "@/components/product-button";

//code will not wrap if too long, scroll sideways to view all code
export default async function Dashboard() {
    return (
        <main>
            <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-3 md:h-[600px]">
                <div className="relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
                    <ProductList />
                    <div className="absolute bottom-6 right-6">
                        <ProductButton actions="add"/>
                    </div>
                </div>
                <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
                    <ProductDetails />
                </div>
            </div>
        </main>
    );
}
`
    const code2 = `
//the ProductButton component
//code will not wrap if too long, scroll sideways to view all code
type ProductButtonProps = {
    actions: "add" | "edit" | "checkout";
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function ProductButton({actions, children, onClick}:ProductButtonProps) {
    if (actions === "add") {
        return (
            <Button variant="default" color="rgba(0, 0, 0, 1)" className="flex rounded-full border h-15 w-15">
                <ModalAddProduct action={actions} />
            </Button>
        )
    }

    if (actions === "edit") {
        return <Button variant="default" radius="lg" color="rgba(0, 0, 0, 1)"><ModalAddProduct action={actions} /> </Button>
    }

    if (actions === "checkout") {
        return <Button variant="default" radius="lg" color="rgba(0, 0, 0, 1)" onClick={onClick}>{children}</Button>
    }
}
`

    const language = "typescript";
    const highlightedCode = highlight(code, language);
    const highlightedCode2 = highlight(code2, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                VERY BASIC: How TypeScript Works In Next.js
            </h2>
            <p className="mt-3">If you&apos;re writing and building React/Next.js applications you&apos;ll need to use
                TypeScript. Period. Don&apos;t fight learning TypeScript, just steer into it.<br/> Long story short: The
                props you pass to a child component need to be defined (or &quot;typed&quot;) so that it knows what to
                expect when it runs. Check out the example below:</p>
            <br/>
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
                    <strong>Summary</strong>: Don&apos;t get overwhelmed with all of that code.... FOCUS
                    GRASSHOPPER!<br/><br/>
                    <strong>Dashboard component:</strong><br/>
                    Do you see where we invoke the <strong>ProductButton</strong> component (&lt;ProductButton
                    actions=&quot;add&quot;/&gt;)?
                    That&apos;s all you should be paying attention to at the moment. See the &quot;actions&quot; prop
                    on the ProductButton? That&apos;s our target - in this case it&apos;s set
                    to &quot;add&quot;....<br/><br/>
                    <strong>ProductButton component:</strong><br/>The &quot;<strong>type
                    ProductButtonProps = &#123;....</strong>&quot; structure at the top of the file defines what our
                    passed in
                    props should &quot;look like&quot;, or specifically, what type of data those individual attributes
                    should
                    represent (are they numbers? strings? dates? french fries.... just kidding - but not really - in a
                    future post I&apos;ll describe how you can customize these prop thingies even more).
                    <br/><br/>
                    <strong>Making TypeScript make sense:</strong><br/>
                    If you&apos;ve been struggling with how to use TypeScript in your Next.js project, right here is
                    where you&apos;ll finally understand how to make it work for you. Copy and paste the two components
                    from this page into your local Next.js project (make sure to name them Dashboard.tsx and
                    ProductButton.tsx and locate them inside of your project). Do what you have to just to get the
                    components to run and display without any errors.<br/><br/> Suppose you were extending the
                    functionality
                    of
                    what your ProductButton component does (in this case adding refunds). Now, in the Dashboard
                    component where we invoke
                    the ProductButton component, change <br/><br/><strong>&lt;ProductButton
                    actions=&quot;add&quot;/&gt;</strong><br/> to <br/><strong>&lt;ProductButton
                    actions=&quot;refund&quot;/&gt;</strong><br/><br/>You should immediately notice your IDE (VSCode,
                    Webstorm, etc) complains with an error. Why? Because in the ProductButton component: <br/><br/>
                    <strong>type ProductButtonProps = &#123;<br/>
                        actions: &quot;add&quot; | &quot;edit&quot; | &quot;checkout&quot;;<br/>
                        children?: React.ReactNode;<br/>
                        onClick?: () =&gt; void;<br/>
                        &#125;</strong><br/><br/>
                    ...you told your ProductButton component that it
                    should only expect the values &quot;add&quot; OR &quot;edit&quot; OR &quot;checkout&quot;, and
                    that&quot;s TypeScript in action! It checks your &quot;types&quot; for you and tells you when
                    there&apos;s an issue. <br/><br/>To complete our task of adding &quot;refund&quot; functionality
                    simply
                    add &quot;refund&quot; to the ProductButton component prop type definition
                    at the top of
                    ProductButton. <br/><br/> Change <br/><strong>action: &quot;add&quot; | &quot;edit&quot; | &quot;checkout&quot;</strong><br/>to<br/>
                    <strong>actionType: &quot;add&quot; | &quot;edit&quot; | &quot;checkout&quot; | &quot;refund&quot;</strong><br/><br/>
                    TypeScript will look at both files, reading back and forth and analyze what your component is
                    actually passing and receiving for props.<br/><br/> TypeScript will keep your code honest during
                    development as well as at build time (ignoring a TypeScript error that you made during coding will
                    throw that same error during the build process so you better fix it!)
                </Card.Section>
            </Card>

        </div>
    )
}
