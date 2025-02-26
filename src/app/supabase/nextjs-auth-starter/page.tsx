import React, { Suspense } from 'react';
import type {Metadata} from "next";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Authentication Starter with Next.js and Supabase',
    description: 'Authentication starter Next.js 15 application with Supabase',
    keywords: ['Next.js authentication', 'Supabase and Nextjs authentication', 'Supabase RLS - Row level security']
}

export default function Page() {
    return (
        <>
            <h2 className="w-full text-center text-xl">
                Next.js & Supabase Authentication Starter Template
            </h2>

            <br/>
            <div className="min-h-screen m-4">
                Next.js and Supabase authentication code starter template that I actually lifted from <Link href="https://vercel.com/templates/next.js/supabase" target="_blank">Vercel&apos;s site</Link>, but it was wrong so I fixed it. You&apos;ll need to setup a Supabase account and database before you can run this Next.js code, but it works with both client and server components and the authentication will allow you to tie into Supabase&apos;s Row Level Security, which will help you to really bullet-proof your application from black-hearted souls.<br/><br/>

                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "10px",
                    borderRadius: "10px"
                }}>
                    <Link href="https://database.new" target="_blank"><strong>Create a Supabase account</strong></Link><br/>
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
                    <Link href="https://github.com/richleach/next-supabase-auth" target="_blank"><strong>Grab my code from Github</strong></Link><br/>
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
                    <strong>Install it (<em>&nbsp; npm install</em> &nbsp; from the directory)</strong><br/>
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
                    <strong>Create a .env file in the root of your application and add your credentials (available in the Settings panel of your Supabase account):</strong><br/>
                    <ul>
                        <li>&middot; DB_PASSWORD=[your_password]</li>
                        <li>&middot; DATABASE_URL=[your_url]</li>
                        <li>&middot; NEXT_PUBLIC_SUPABASE_URL=[your_url]</li>
                        <li>&middot; SUPABASE_ANON_KEY=[your_key]</li>
                        <li>&middot; NEXT_PUBLIC_BASE_URL=[your_url]</li>
                        <li>&middot; NEXT_PUBLIC_SUPABASE_ANON_KEY=[your_key]</li><br/>
                        DON&apos;T FORGET TO ADD .env TO YOUR .gitignore FILE!
                    </ul>
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
                    <strong>Summary</strong>: <br/>
                    &middot; In order to complete the process of registering/authenticating a user in your Next.js application you need to enable SMTP in your Supabase account. I created my own SMTP server but you can use the default SMTP server that Supabase provides, unfortunately it only permits some ridiculously low number of emails to be sent for free (like 4 per hour?). Seeing as you&apos;ll need to test this functionality across multiple email accounts, with multiple browsers you&apos;ll burn through your limit immediately. If I find the docs on how to configure your own SMTP server I&apos;ll post them here, but be warned it is a super-duper-grade-AAA-ball-buster task. NOTE: The emails are sent from Supabase NOT from your Next.js application, so don&apos;t freak out that you&apos;ll have to configure your server, open ports, or any of that crapola.<br/> <br/>
                    &middot; I don&apos;t think I included the formatted forms so they appear exactly as they are - unformatted. Whaddya want for free?<br/><br/>
                    &middot; If you want to change the path of where to send an authenticated user after they&apos;ve been registered you&apos;ll actually change that in the SMTP template page in your Supabase account. (The callback just passes the url param located in the Supabase template).<br/><br/>
                    &middot; Finally, gut these pages like a fish, style them up, and make it your own. Just promise me you won&apos;t use shadcn - everyone is using that library and now everything looks the same (just like Bootstrap of 2010). <Link href="https://rich-leach-clever-code-snippets.vercel.app/mantine/getting-started-with-forms">Try Mantine instead.</Link>  Enjoy!
                </div>

            </div>
        </>
    );
}