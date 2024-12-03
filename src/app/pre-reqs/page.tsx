'use client';

import Link from 'next/link';
import { Card } from '@mantine/core';
export default function prereqs() {

    const displayCode =`
{
  "name": "xxxxxxxxxxx",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@mantine/carousel": "^7.14.1",
    "@mantine/charts": "^7.14.1",
    "@mantine/code-highlight": "^7.14.1",
    "@mantine/core": "^7.14.2",
    "@mantine/dates": "^7.14.1",
    "@mantine/dropzone": "^7.14.1",
    "@mantine/form": "^7.14.1",
    "@mantine/hooks": "^7.14.2",
    "@mantine/modals": "^7.14.1",
    "@mantine/notifications": "^7.14.1",
    "@mantine/nprogress": "^7.14.1",
    "@mantine/spotlight": "^7.14.1",
    "@mantine/ssr": "^6.0.22",
    "@mantine/tiptap": "^7.14.1",
    "@supabase/ssr": "^0.5.1",
    "@supabase/supabase-js": "^2.45.4",
    "@tiptap/extension-link": "^2.9.1",
    "@tiptap/pm": "^2.9.1",
    "@tiptap/react": "^2.9.1",
    "@tiptap/starter-kit": "^2.9.1",
    "dayjs": "^1.11.13",
    "emailjs-com": "^3.2.0",
    "embla-carousel-react": "^7.1.0",
    "isomorphic-dompurify": "^2.15.0",
    "next": "15.0.3",
    "react": "^18",
    "react-dom": "^18",
    "react-syntax-highlighter": "^15.6.1",
    "recharts": "^2.13.3"
  },
  "devDependencies": {
    "@types/node": "^22.9.1",
    "@types/prismjs": "^1.26.4",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18",
    "@types/react-syntax-highlighter": "^15.5.13",
    "eslint": "^8",
    "eslint-config-next": "14.2.6",
    "i": "^0.3.7",
    "npm": "^10.8.3",
    "postcss": "^8.4.49",
    "postcss-preset-mantine": "^1.17.0",
    "postcss-simple-vars": "^7.0.1",
    "prismjs": "^1.29.0",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.6.3"
  }
}
    `
    return (
        <div className="flex min-h-screen flex-col items-start m-4">
            <div className="w-full text-center text-xl">
                Pre-Reqs: Next.js Project
            </div>
            <div className="mt-2">
                You&apos;ll need to have a Next.js project that is running TypeScript (.tsx) and
                TailwindCSS. Follow the instructions below to create a new Next.js project.
                <br/><br/>
                Open up a command line and run the following command: <br/><br/>
                <strong>npx create-next-app@latest</strong><br/><br/>
                A series of screen prompts will guide you through the setup process (accepting the defaults should be
                all that you need). <br/><br/>
                The complete setup instructions are available here: <br/><br/>
                <Link href="https://nextjs.org/docs/app/api-reference/cli/create-next-app"
                      target="new">https://nextjs.org/docs/app/api-reference/cli/create-next-app</Link>
            </div>
            <br/>
            Just in case you run into an issue with the code on this site not working as expected you can double-check
            your NPM package versions in your package.json against mine:<br/><br/>

            <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Card.Section style={{marginLeft: "4px", marginRight: "4px", marginTop: "4px"}}>
                    package.json
                    <code>
                        <pre>
                            {displayCode}
                        </pre>
                    </code>
                </Card.Section>
            </Card>

        </div>
    );
}

