import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";
import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Generic CRUD() Starter Template',
    description: '...very generic, but a starting point for a CRUD() application (Create Read Update Delete) in Next.js',
    keywords: ['CRUD','CRUD starter template Next.js','CRUD template Next.js']
}



export default function GenericCRUDStarter() {


    const code = `// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:app.db"
}

model Product {
  id    Int       @id @default(autoincrement())
  title String
  price Int
  description String?
}`

    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    )

    const code2 = `import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const seedProducts = async () => {
    const count = await prisma.product.count();
    if (count === 0) {
        await prisma.product.createMany({
            data: [
                { title: "Product 1", price: 500, description: "Description 1" },
                { title: "Product 2", price: 700, description: "Description 2" },
                { title: "Product 3", price: 1000, description: "Description 3" },
            ],
        });
    }
};

// Run seed if needed
seedProducts();

export async function getProducts(query?: string) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (query) {
        return prisma.product.findMany({
            where: {
                OR: [
                    { title: { contains: query } },
                    { description: { contains: query } },
                ],
            },
        });
    }
    return prisma.product.findMany();
}

export async function getProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.findUnique({
        where: { id },
    });
}

export async function addProduct(
    title: string,
    price: number,
    description: string
) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.create({
        data: { title, price, description },
    });
}

export async function updateProduct(
    id: number,
    title: string,
    price: number,
    description: string
) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.update({
        where: { id },
        data: { title, price, description },
    });
}

export async function deleteProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.delete({
        where: { id },
    });
}`

    const CodeBlock2 = ({ code2 }: { code2: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code2}
        </SyntaxHighlighter>
    )
    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Generic CRUD() Starter Template - Next.js
            </h2>
            <p className="mt-3">... a VERY generic starting template for Create, Read, Update and Delete operations in a Next.js template.</p>
            <br />
            <p><strong>How This Works:</strong> The entire application is a minimalist approach to a starting CRUD() application. </p>
            <br/>
            <ol>
                <li className="mt-5"><Link href="https://github.com/richleach/basic-crud">1. Download the application
                    from
                    Github.</Link>
                </li>
                <li className="mt-5">
                    2. Unzip/unpackage the download then run<br/>
                    &nbsp; &nbsp; &nbsp; <strong>npm install</strong>
                </li>
                <li className="mt-5">3. Install Prisma into your project. Prisma is an Object Relational Mapping utility
                    (ORM) that helps type and develop your database interactions.<br/>
                    &nbsp; &nbsp; &nbsp; <strong>npm install Prisma -D</strong></li>
                <li className="mt-5">
                    4. Initialize Prisma with Sqlite<br/>
                    &nbsp; &nbsp; &nbsp; <strong>npx prisma init —datasource-provider sqlite</strong><br/>
                    This will create a prisma directory in the root of your application and attach a sqlite database to
                    your project.
                </li>
                <li className="mt-5">
                    5. Inside of the prisma directory that was just created there is a schema.prisma file. In
                    schema.prisma, in the datasource db section change the url to “file:app.db”.
                </li>
                <li className="mt-5">
                    6. Also in schema.prisma add the Product model beneath the datasource information. In the end your
                    schema.prisma file should look like this:<br/><br/>
                    <div className="shadow-md bg-white" style={{
                        marginLeft: "2px",
                        marginRight: "2px",
                        marginTop: "1px",
                        marginBottom: "4px",
                        border: "thin solid silver",
                        padding: "10px",
                        borderRadius: "10px"
                    }}>
                        {CodeBlock({code})}
                    </div>
                </li>
                <li className="mt-4">
                    7. You have to run a &quot;migration&quot; to create the database table(s) from the schema<br/>
                    &nbsp; &nbsp; &nbsp; <strong>npx prisma migrate dev —name init</strong><br/>
                    The above command creates a migration file, executes a migration against your db and generates the
                    prisma client which interacts with your database.
                </li>
                <li className="mt-4">
                    8. You have to generate a file, (call it prisma-db.ts) in /app directory.<br/>
                    Paste the following code into the prisma-db.ts file and it will generate all of the CRUD() methods
                    that will act on your database. There’s even
                    a seedProducts() function that will automatically pre-populate the database in case there aren’t any
                    records.<br/><br/>
                    <div className="shadow-md bg-white" style={{
                        marginLeft: "2px",
                        marginRight: "2px",
                        marginTop: "1px",
                        marginBottom: "4px",
                        border: "thin solid silver",
                        padding: "10px",
                        borderRadius: "10px"
                    }}>
                        {CodeBlock2({code2})}
                    </div>
                </li>
                <li className="mt-4">
                    9. Finally, you might want to add your database to your .gitignore file. <br/><br/>
                    <strong>
                        #database<br/>
                        /prisma/app.db
                    </strong>
                </li>

            </ol>
        </div>
    )
}
