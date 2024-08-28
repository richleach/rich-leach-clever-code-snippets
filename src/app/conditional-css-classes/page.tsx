import React from "react";
import PrismLoader from "@/components/prism-loader";

export default function ConditionalCssClasses() {

    const code = `
    const number = -2;

    <span className={number > 0 ? "css-positive-number" : "css-negative-number"}>
        {number}
    </span>
       
    `
    return (
        <div className="flex min-h-screen flex-col items-start m-4">
            <h2 className="w-full text-center text-xl">
                Conditional CSS Classes Based on Condition</h2>
            <p className="mt-3">Code for when you are declaring CSS classNames based on a condition and have other class names defined in the element.</p>

            <pre className="language-ts line-numbers">
                <code className="language-ts line-numbers">
                    {code}
                </code>
            </pre>

        <PrismLoader />
        </div>
    )
}
/*

make
a
snippet
for this bg - color
shortcut:
    <main className="bg-[#5DC9A8]">
        //stuff
    </main>
*/

/*
<span className=\
    {\` formatClassOne ${'conditionTrue' ? 'cssClassNameForTrue' : 'cssClassNameForFalse'}\`\}>*/
