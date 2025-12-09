import Yt from "@/components/global/Yt";
import Page from "@/components/page/DefaultPage";
import Link from "next/link";

export default function Learn() {
    return <Page bottomPadding pathname='/learn' seo={{
        title: 'Learning Resources',
        description: 'Here are some learning resources Joel made on various subjects.',
    }}>
        <h1 className="my-3 text-center">Learn</h1>

        <p>Here are some learning resources I made for various subjects.</p>
        
        <ul>
            <li><Link href='/nyc/nyc-government'>NYC Government</Link></li>
            <li><Link href='/learn/physics'>Physics</Link></li>
            <li><Link href='/learn/linear-algebra-derivatives/linear-algebra-derivatives.pdf'>Linear Algebra Derivatives</Link></li>
            <li><Link href='/learn/pi'>The Digits of Pi</Link></li>
            <li><Link href='https://joelkit.com'>Algorithms and Data Structures</Link></li>
            <li><Link href='https://memorizethepresidents.com'>The Presidents of the United States</Link></li>
            <li><Link href='/learn/citations'>Citations</Link></li>
            <li><Link href='/learn/pablo-neruda'>Pablo Neruda</Link></li>
            <li><Link href='/learn/docker'>Docker</Link></li>
            <li><Link href='/learn/daylight-saving-time'>Daylight Savings Time</Link></li>
            <li><Link href='/learn/understanding-taylor-and-maclaurin-series.pdf'>Understanding Taylor and Maclaurin Series</Link></li>
            <li><Link href='/learn/constants'>Constants</Link></li>
        </ul>

        <h3>Programming</h3>
        <ul>
            <li><Link href='/learn/running-bash-script-in-swift'>Running Bash Script in Swift</Link></li>
            <li><Link href='/learn/css-grid'>CSS Grid</Link></li>
            <li><Link href='/learn/using-tokens-to-push-to-github'>How To Use Tokens to Push to GitHub</Link></li>
            <li><Link href='/learn/plausible-analytics-with-nextjs'>Set up Plausible Analytics with Next.js</Link></li>
            <li><Link href='/learn/php-mysqli'>Using mysqli in PHP</Link></li>
            <li><Link href='/learn/http-requests-in-swift'>HTTP Requests in Swift</Link></li>
            <li><Link href='/learn/aws-s3-image-upload-in-nextjs'>AWS S3 Image Upload in Next.js</Link></li>
            <li><Link href='/learn/next-auth-with-nextjs'>NextAuth with Next.js (sign in with Google and other providers)</Link></li>
        </ul>

        <h3>STEM Videos from <Link href='https://youtube.com/@JoelGrayson' target="_blank">Slaphappy</Link></h3>
        <div className="mt-8 d:grid grid-cols-2 gap-2 place-content-center">
            <Yt width={300}>7BqbyixlSRU</Yt>
            <Yt width={300}>BYTgpx9bEgQ</Yt>
            <Yt width={300}>jty0QHS0F3I</Yt>
            <Yt width={300}>F0ameJ2K3_0</Yt>
        </div>

        <h3>Class Notes</h3>
        <ul>
            <li><Link href='https://notes.joelgrayson.com/probability'>Probability (CS 109)</Link></li>
            <li><Link href='https://notes.joelgrayson.com/circuits'>Circuits (ENGR 40M and EE 101A)</Link></li>
            <li><Link href='https://notes.joelgrayson.com/mathematical-foundations-of-computing'>Mathematical Foundations of Computing (CS 103)</Link></li>
            <li><Link href='https://notes.joelgrayson.com/multivariable-calculus'>Multivariable Calculus (Math 52)</Link></li>
            <li><Link href='https://notes.joelgrayson.com/e&m'>Electricity & Magnetism (Physics 43)</Link></li>
            <li><Link href='https://notes.joelgrayson.com/ode'>ODEs (CME 102)</Link></li>
        </ul>
    </Page>;
}

