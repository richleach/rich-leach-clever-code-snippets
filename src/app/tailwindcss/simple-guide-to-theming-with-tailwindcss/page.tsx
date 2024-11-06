import React from "react";
import type {Metadata} from "next";
import ClientSidePage from './clientSidePage'

export const metadata: Metadata = {
    title: 'A Simple Guide to Theming With TailwindCSS',
    description: 'With a few simple updates to tailwind.config.ts and adding a few styles to globals.css you can easily build out custom themes in Next.js ',
    keywords: ['Custom theming in Next.js', 'Themes in Next.js','how to make custom themes in Next.js']
}


export default function SimpleGuideToThemingWithTailwindcss() {
    return (
        <ClientSidePage />
    )
}
