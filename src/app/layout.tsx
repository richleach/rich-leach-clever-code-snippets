import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import LeftNav from "@/components/leftNav";
import Footer from "@/components/footer";
import '@mantine/code-highlight/styles.css';
import '@mantine/core/styles.css';


import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const inter = Inter({subsets: ["latin"]});
/*
export const metadata: Metadata = {
  title: "rich leach clever code snippets",
  description: "Generated by create next app",
};
*/

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      // <html lang="en">suppressHydrationWarning
        <html lang="en">
          <body className={`"flex flex-col min-h-screen" + ${inter.className}`}>
              <div>
                    <Header />
                  {/*Main Content*/}
                  <div className="flex flex-col md:flex-row flex-1">
                      {/*Left Column*/}
                      <aside className="w-full md:w-1/3  p-4 border-r-slate-300 border-r-2 bg-gradient-to-tl from-sky-50 to-blue-50" >
                        <LeftNav/>
                      </aside>

                      {/*Right Column*/}
                      <main className="w-full md:w-2/3 bg-gradient-to-tr from-gray-50 to-sky-50 p-4">
                          <MantineProvider>
                            {children}
                          </MantineProvider>
                      </main>
                  </div>

                  {/*Footer*/}
                  <footer className="left:0 w-full h-[70px] bg-gray-800 text-white flex items-center justify-center ">
                    <Footer />
                  </footer>
              </div>
          </body>
      </html>
  );
}



