import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mt-20">Not Found!</h1>
                <p className="mt-10 text-lg text-gray-600 text-left">Something&apos;s amiss,
                    awry,
                    bad,
                    busted,
                    erroneous,
                    false,
                    fowled up,
                    inaccurate,
                    misguided,
                    mistaken,
                    unsound,
                    untrue,
                    erring,
                    fluffed,
                    goofed,
                    messed up,
                    miscalculated,
                    misconstrued,
                    mishandled,
                    out-of-whack,
                    askew,
                    astray,
                    at fault,
                    counterfactual,
                    defective,
                    erratic,
                    fallacious,
                    faulty,
                    in error,
                    inexact,
                    misfigured,
                    misplaced,
                    not precise,
                    not right,
                    not working,
                    off-target,
                    on the wrong track,
                    out of commission,
                    out of line,
                    out of order,
                    rotten,
                    specious,
                    spurious,
                    ungrounded,
                    unsatisfactory,
                    unsubstantial,
                    wrong. <br/><br/>
                    Needless to say, as your duly appointed web server I&apos;m unable to locate the page you
                    requested.</p>
                <br/><br/>

                <Link href="/" className="text-gray-600 text-3xl"> Go Fish.</Link>

            </div>


        </div>
    );
}

