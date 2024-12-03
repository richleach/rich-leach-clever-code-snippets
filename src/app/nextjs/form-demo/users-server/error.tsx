'use client'

import React, {useEffect} from 'react'

export default function Error({error} : {error: Error}) {

    useEffect(() => {
        console.log(error);
        },[error]);

    return (
        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl text-red-700">
                Error! Something went wrong fetching users.
            </h2>
        </div>
    )
}

