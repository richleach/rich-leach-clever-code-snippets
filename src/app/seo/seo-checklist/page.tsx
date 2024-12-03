import React from "react";
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";
import {Card} from "@mantine/core";
import type {Metadata} from "next";
import Link from 'next/link';

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

export const metadata: Metadata = {
    title: 'SEO Checklist: The Basics Every New Site Should Consider',
    description: 'Every new web site / application needs these things to be recognized by Google',
    keywords: ['SEO site basics','minimum site requirements for SEO success']
}

export default function ConditionalCssClasses() {

    const code = `
//condition: is the number gt 0
const number = -2;

<span className={number > 0 ? "css-positive-number" : "css-negative-number"}>
    {number}
</span>
    `

    const language = "typescript";
    const highlightedCode = highlight(code, language);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                SEO Checklist: The Basics Every New Site Should Consider
            </h2>
            {/*<p className="mt-3">Consider this guide as minimum site requirements for SEO success</p>*/}
            <br/>

           {/* <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre><br/>
*/}


            <div className="shadow-md" style={{
                marginLeft: "2px",
                marginRight: "2px",
                marginTop: "1px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "10px",
                borderRadius: "10px"
            }}>
                <strong>Summary</strong>: Here are some guidelines that I follow to improve a site&apos;s SEO
                performance. In my experience those folks who are committed to a brief daily check-in on their
                site&apos;s SEO progress usually succeed in this space; having said that it could take - not days - but likely weeks or
                even months - before you see the organic search results improvements that you&apos;re really looking
                for. BTW this is a growing, living list so check back often for updates.<br/><br/>

                <h3 className="w-full text-center text-xl border-t-2 pt-2">Do These Things First</h3>
                In a perfect world you&apos;ll do these things before you&apos;ve even started building your site.
                They&apos;re pretty important and you&apos;ll see why....
                <ul className="pt-2 pb-2">
                    <li><strong>Keyword Research:</strong> Pretty much everything your site is about will revolve around
                        keywords - the words and strings of words people will enter into their searches that
                        will ultimately list your site as one of the search results. Your goal is to get your site to
                        appear at the top of the Googles&apos; and the Bings&apos; <em>search results
                            pages</em> whenever someone searches for those keywords. It&apos;s no small task and will
                        take some time but it all starts with proper keyword selection. There are many online tools (do
                        a search!) but you&apos;ll likely start with Google....
                    </li>
                    <li><strong>Sign Up On The Google Search Console: </strong> <Link
                        href="https://search.google.com/search-console/about" target="_blank"> It&apos;s free and will
                        help you measure your site&apos;s search traffic and performance</Link> and if nothing else will help you
                        to generally get along with the Google Gods.
                    </li>
                    <li><strong>Buy Your &quot;Keyword-Perfected&quot; Domain Name:</strong> The example I always use
                        is, if you&apos;re going to be selling naked lady golf tees from your website then do your best
                        to get the domain www.nakedladygolftees.com. If that domain is already taken then find the next
                        closest domain. Get as close as you can and then when you buy the domain buy it for 10 years;
                        the search engines will actually do a DNS lookup and give you more points for a longer ownership
                        period than a shorter one.
                    </li>
                </ul>

                <h3 className="w-full text-center text-xl border-t-2 pt-2">Do These Things At Site Build/Launch</h3>
                <ul className="pt-2 pb-2">
                    <li><strong>Use Correct / Error Free HTML: </strong> Make sure you build your site using error-free HTML. Don&apos;t use invalid or outdated tags, make sure you haven&apos;t nested incorrect tags, etc. Also your site should render equally as error-free on mobile viewports.</li>
                    <li><strong>Proper Tag Usage: </strong> Try to build out your page titles (which should be your keyword-focused strings of words) in &lt;h1&gt; tags, indicating priority/importance. Other/lesser keywords appearing on your page(s) may need to be <strong>bolded</strong> and / or <em>emphasized.</em></li>
                    <li><strong>Landing Page Development:</strong> Build out your keyword-targeted pages to consider relevancy as well as your keywords. Stuffing a web page full of keywords that is garbled nonsense will hurt your SEO efforts, a lot. Search engines want to suggest relevant pages in their search results; if search engines refer people to non-relevant or un/under related sites that don&apos;t answer a user&apos;s questions then nobody would continue to use search engines.... Also a good idea: something known as "long-tail-urls", for example "healthstore.com/buy-vitamin-c-with-hesperdin-and-rose-hips-immune-boosting-strengths" instead of just using the url:  "healthstore.com/buy-good-vitamin-c". </li>
                    <li><strong>Meta Tags</strong> Title, Description and Keywords. Use &apos;em!</li>
                    <li><strong>Submit a XML Sitemap To Google at Launch/Page Additions:</strong> Learn how to, and then build a XML sitemap to put into your site&apos;s root. Then log into your account(s) in your desired search engine(s) and tell them about it. Same with a robots.txt file. </li>
                    <li><strong>No Tricks: </strong>Avoid using any HTML or coding &quot;tricks&quot; like keyword stuffing or colored text on the screen. If the search engines haven&apos;t already figured it out they will, then they&apos;ll likely crush you for it.</li>
                    <li><strong>Host / Deploy Close To Your Audience: </strong> These days cloud hosting affords us the ability to deploy our sites to any locale around the world, so make sure that when you choose your host that you select a region that&apos;s in or at least close to your potential-customer base.</li>
                </ul>


                    <h3 className="w-full text-center text-xl border-t-2 pt-2">Do These Things ASAP, But Later After Site Launch</h3>
                <ul className="pt-2">
                    <li><strong>Request Link Backs: </strong> Reach out to relevant sites (they don&apos;t have to be your direct competition) and tell them you&apos;ll link to them if they link back to you. Search engines like it when your site has external links pointing to your landing pages.</li>
                    <li><strong>Social Media: </strong> Establish a social media presence on sites like Facebook, LinkedIn, Youtube, Instagram, etc. Search engines consider your presence across the entire web.</li>
                    <li><strong>Monitor and Tweak Your Landing Pages: </strong> Using tools like Google Search Console and Google Analytics you&apos;ll need to track your site&apos;s progress and adjust accordingly.</li>
                </ul>
            </div>

        </div>
);
}
