export default function prereqs() {
    return (
        <div className="flex min-h-screen flex-col items-start m-4">
                <div className="w-full text-center text-xl">
                    Site Requirements
                </div>
            <div className="mt-2">
                Unless noted you&apos;ll need to have a Next.js project that is running TypeScript (.tsx), not just
                JavaScript (.jsx). Additionally I'm running TailwindCSS.
                <br/><br/>
                Open up a command line and run the following command: <br/><br/>
                <strong>npx create-next-app@latest</strong><br/><br/>
                https://nextjs.org/docs/app/api-reference/cli/create-next-app
            </div>
        </div>
    );
}

