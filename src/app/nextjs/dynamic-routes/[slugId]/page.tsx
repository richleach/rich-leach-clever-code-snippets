import Link from "next/link";

export default function ProductDetailsSample( {params} : { slugId:string } ) {
    return (
        <>
            <h1>You entered &quot;{params.slugId}&quot; as the dynamic slug value in the URL. Try entering a different number in the URL!</h1><br />

            <Link href="/nextjs/dynamic-routes/">&lt;= Back to dynamic pages</Link>

        </>
    )
}