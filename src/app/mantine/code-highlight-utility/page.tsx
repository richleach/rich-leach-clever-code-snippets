import type {Metadata} from "next";
import ClientSidePage from './clientSidePage'

export const metadata: Metadata = {
    title: 'Mantine Code Highlighter Utility',
    description: 'Mantine Code Highlighter Utility is an easy way to display on-screen code without it rendering. It even provides you with the "copy / copied" button functionality.',
    keywords: ['Display code on screen', 'Mantine Code Highlighter Utility', 'How to print code to screen without it rendering', 'Mantine', 'React', 'Next.js'],
}

export default function MantineCodeHighlighter() {
    return (
        <ClientSidePage />
    )
}