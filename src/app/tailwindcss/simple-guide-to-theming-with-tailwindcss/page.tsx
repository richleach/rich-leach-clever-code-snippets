'use client';

import React from "react";
import Link from 'next/link';
//import PrismLoader from "@/components/prism-loader";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-typescript";
import DOMPurify from "isomorphic-dompurify";
import {Card} from "@mantine/core";
import type {Metadata} from "next";

import Image from "next/image";
import Photo from "../../public/img.png";
import {useState} from 'react'

const themes = ["Black", "Red", "Purple", "Green", "Blue"];

const highlight = (code:string, language:string='markup') => {
    const res = Prism.highlight(code, Prism.languages[language], language);
    return res;
}

const highlight2 = (code2:string, language:string='markup') => {
    const res = Prism.highlight(code2, Prism.languages[language], language);
    return res;
}

const highlight3 = (code3:string, language:string='markup') => {
    const res = Prism.highlight(code3, Prism.languages[language], language);
    return res;
}
/*

export const metadata: Metadata = {
    title: 'Simple Guide to Theming With Tailwindcss',
    description: 'Using CSS variables Tailwindcss can easily handle theming.',
    keywords: ['Theming with tailwindcss','Tailwindcss theme','How to theme using Tailwindcss']
}
*/

export default function SimpleGuideToThemingWithTailwindcss() {

    const code = `
PAGE.TSX
'use client'

import Image from "next/image";
import React from 'react';
import Photo from "../../public/img.png";
import {useState} from 'react'

//DECLARE AN ARRAY OF COLOR NAMES, WHICH ARE ACTUALLY THE SECOND NAMES OF YOUR THEMES FROM GLOBALS.CSS (".theme-Black")
const themes = ["Black", "Red", "Purple", "Green", "Blue"];

export default function cssThemeStarter() {

    //DECLARE YOUR themes ARRAY INTO REACT STATE
    const [theme, setTheme] = useState<string>(themes[0]);

    return (
        //THIS IS IMPORTANT - USE A STRING LITERAL (BACK TICKS) TO DEFINE YOUR CLASSNAMES AND DYNAMICALLY ASSIGN THE 
        //THEME VALUE AT THE END OF THIS MAIN TAGS CLASSNAME ATTRIBUTE (CLEAN UP SPACE CHARS AROUND THEME-$...)
        <main className={'flex flex-col gap-16 min-h-screen p-24 bg-bgPrimary theme- $ {theme}' }>
            <div className="flex flex-col">
                <h3 className="font-semibold">Click to choose your theme:</h3>
                //MAP OVER THE THEMES ARRAY TO DISPLAY THE COLORS SO USER CAN CLICK (I'm using text here, add buttons as you like)
                <div className="flex gap-4">
                    {themes.map((t) => (
                        <div className="cursor-pointer" style={{color:t}} key={t} onClick={() => setTheme(t)}>
                            {t}
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-start-1 col-span-6 relative aspect-video rounded-lg">
                    <Image src={Photo} alt="Image" height={220} width={400} className="rounded-md"  />
                    
                    //YOU'LL NEED TO ADD THE HOVER PROPERTY TO TAKE ADVANTAGE OF YOUR SELECTED THEME
                    <div className="absolute inset-0 bg-transparent hover:bg-secondary opacity-50" />
                </div>
                <div className="col-start-7  col-span-7 flex flex-col items-start">
                    //ADD "SECONDARY" TO ENSURE TEXT CHANGES COLOR WITH THEME SELECTIONS
                    <h1 className="text-secondary font-bold text-4xl pb-3">
                        Bulldogs-R-Us
                    </h1>
                    <p className="flex-2 text-sm pb-3">
                        The Mighty Bulldog who has long been confused as an icon of fear, dominance and intimidation 
                        is actually one of the most docile and loving breeds available today.
                        Amicable and affectionate, the irony is not lost on this breed that was originally bred 
                        for bull baiting back in the 1600's. Today their reputation of loyalty and affection - especially 
                        towards children - makes them a fine and sought-after companion.
                    </p>
                    <div className="flex gap-4">
                    //THESE BUTTONS HAVE ALSO BEEN ENHANCED WITH THE SECONDARY STYLE DECLARATION OF THE SELECTED 
                    //THEME (BACKGROUND, BORDER AND TEXT COLOR)
                        <button className="bg-secondary border-secondary hover:bg-secondary text-tBase font-medium px-6 py-2 rounded-md">
                            Adopt Now
                        </button>
                        <button className="bg-bgPrimary border-secondary border-2 hover:border-primary font-medium px-6 py-2 rounded-md">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
    `

    const code2 = `
TAILWIND.CONFIG.TS
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        //START HERE
        primary: "var(--color-primary",
        secondary: "var(--color-secondary)",
        bgPrimary: "var(--color-bg-primary)",
        tBase: "var(--color-text-base)",
        //END HERE

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;


`

    const code3 = `
GLOBALS.CSS
    
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

//YOU NEED TO ADD THIS:
@layer base {
  :root {
  //START 
    --color-primary: hsl(0,0%, 0%);
    --color-secondary: hsl(0,0%, 50%);
    --color-text-base: hsl(0,0%, 100%);
    --color-bg-primary: hsl(0,0%, 100%);
  //END
  }
}
...
AND THIS:
//(still in your @layer base)
//START
.theme-Black {
  --color-primary: hsl(0,0%, 0%);
  --color-secondary: hsl(0,0%, 50%);
}

.theme-Red {
  --color-primary: hsl(25,100%, 50%);
  --color-secondary: hsl(0,100%, 65%);
}

.theme-Purple {
  --color-primary: hsl(270,100%, 50%);
  --color-secondary: hsl(270,100%, 75%);
}

.theme-Green {
  --color-primary: hsl(25,100%, 35%);
  --color-secondary: hsl(120,100%, 45%);
}

.theme-Blue {
  --color-primary: hsl(220,100%, 50%);
  --color-secondary: hsl(220,100%, 75%);
}
//END

`

    const language = "typescript";
    const highlightedCode = highlight(code, language);
    const highlightedCode2 = highlight(code2, language);
    const highlightedCode3 = highlight(code3, language);

    const [theme, setTheme] = useState<string>(themes[0]);
    return (

        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                A Simple Guide to Theming With Tailwind
            </h2>
            <p className="mt-3">Want to create some theming goodness using Tailwindcss? I bet you do.... Try
                the code samples below and you&apos;ll be a theming demon in no time.</p>
            <br/>

            <main className={`flex flex-col gap-16 p-10 bg-bgPrimary theme-${theme}`} style={{
                border: "thin solid silver",
                paddingBottom: "40px",
                marginBottom: "30px",
                borderRadius: "10px"
            }}>
                <div className="flex flex-col items-center">
                    <h3 className="font-semibold pb-2 text-center pb-6">Click to choose your theme:</h3>
                    <div className="flex gap-4" style={{marginBottom:"-13px"}}>
                        {themes.map((t) => (
                            <div className="cursor-pointer p-1 pr-2 pl-2"
                                 style={{color: t, borderColor: t, border: "thin solid", borderRadius: "5px"}} key={t}
                                 onClick={() => setTheme(t)}>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-start-1 col-span-6 relative aspect-video rounded-lg">
                        <Image src={Photo} alt="Image" className="rounded-md" fill objectFit="cover"/>
                        <div className="absolute inset-0 bg-transparent hover:bg-secondary opacity-50"/>
                    </div>
                    <div className="col-start-7  col-span-7 flex flex-col items-start">
                        <h1 className="text-secondary font-bold text-4xl pb-3">
                            Bulldogs-R-Us
                        </h1>
                        <p className="flex-2 text-sm pb-3 leading-7">
                            The Mighty Bulldog who has long been confused as an icon of fear, dominance and intimidation is
                            actually one of the most docile and loving breeds available today.
                            Amicable and affectionate, the irony is not lost on this breed that was originally bred for
                            bull baiting back in the 1600&apos;s. Today their reputation of loyalty and affection -
                            especially towards children - makes them a fine and sought-after companion.
                        </p>
                        <div className="flex gap-4">
                            <button
                                className="bg-secondary border-secondary hover:bg-secondary text-tBase font-medium px-6 py-2 rounded-md">
                                Adopt Now
                            </button>
                            <button
                                className="bg-bgPrimary border-secondary text-secondary border-2 hover:border-primary font-medium px-6 py-2 rounded-md">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <h2 className="text-lg w-full text-center">What&apos;s going on with the bulldog theme?</h2><br/>
            Click the various color buttons and you&apos;ll notice the headline, buttons and image (mouseover) change to your selected color. I restricted this theme to just this dialog box; you could easily include an entire page or even your completed site. This theme demo is leveraging Next.js (React), and TailwindCSS - let&apos;s walk through the code. <br /><br />
            <span style={{fontWeight:"bold"}}>STEP 1:</span><br/>
            First things first: Edit your tailwind.config.ts file under theme &gt;&gt; extend &gt;&gt; colors to
            include &quot;primary&quot;,
            &quot;secondary&quot;, &quot;bgPrimary&quot; and &quot;tBase&quot; (I commented the code below with START
            HERE and END HERE where I did it
            in my file). Big Caution! If you already have a theme in place that
            uses &quot;primary&quot;, &quot;secondary&quot;, etc
            you&apos;ll overwrite that theme with this new one we&apos;re working on here. Backup your files!<br/>
            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode2)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <br/>
            <span style={{fontWeight:"bold"}}>STEP 2:</span><br/>
            Edit your globals.css file to add in the following code below (...again, I added &quot;START&quot; AND &quot;END&quot;) Here you&apos;re basically defining the colors, and then adding those to your custom themes that you&apos;re also defining.<br />

            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode3)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <br/>

            <span style={{fontWeight:"bold"}}>STEP 3:</span><br /> For ease of following along I&apos;ve gone ahead and just commented the code below (all CAPS)
            <pre className="language-typescript" style={{wordWrap: "normal"}}>
                <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(highlightedCode)}}
                    style={{borderLeft: "10px solid #3d4800"}}></code>
            </pre>

            <br/>

            <div className="shadow-md" style={{
                marginLeft: "2px",
                marginRight: "2px",
                marginTop: "1px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "10px",
                borderRadius: "10px"
            }}>
                <strong>Summary</strong>: TailwindCSS will empower you to build out themes - or even just partial themes - that you can apply to your Next.js application.
            </div>
            {/*<br />
            Special thanks to <span
            style={{color: "blue"}}><Link href="https://www.youtube.com/watch?v=vg4g68oJNGM" target="_blank">Built With Code</Link></span> for the initial design and code walkthrough. Visit his channel and like/subscribe so he&apos;ll keep making good stuff!*/}
        </div>
    )
}
