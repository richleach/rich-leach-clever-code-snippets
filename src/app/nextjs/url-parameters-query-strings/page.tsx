import type {Metadata} from "next";
import ClientSidePage from './clientSidePage'

export const metadata: Metadata = {
    title: 'URL Parameters and Query Strings - Next.js',
    description: 'Using and referencing HTML query parameters in Next.js. A simple demo....',
    keywords: ['HTML and URL query parameters', 'HTML URL query params', 'HTML URL query parms',  'Next.js and url query parameters', 'how to work with URL query parameters in Next.js ']
}

export default function UrlAndQueryParametersInNext() {
    return (
        <ClientSidePage />
    )
}