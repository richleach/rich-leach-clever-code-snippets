import Link from 'next/link';

export default function prereqs() {
    return (
        <div className="flex min-h-screen flex-col items-start m-4">
                <div className="w-full text-center text-xl">
                    Pre-Reqs: Next.js Project
                </div>
            <div className="mt-2">
                Unless noted you&apos;ll need to have a Next.js project that is running TypeScript (.tsx) and
                TailwindCSS. Follow the instructions below to create a new Next.js project.
                <br/><br/>
                Open up a command line and run the following command: <br/><br/>
                <strong>npx create-next-app@latest</strong><br/><br/>
                A series of screen prompts will guide you through the setup process (accepting the defaults should be
                all that you need). <br/><br/>
                The complete setup instructions are available here: <br/><br/>
                <Link href="https://nextjs.org/docs/app/api-reference/cli/create-next-app" target="new">https://nextjs.org/docs/app/api-reference/cli/create-next-app</Link>
            </div>
        </div>
    );
}

