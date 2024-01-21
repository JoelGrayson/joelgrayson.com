import { Yt } from "src/components/by-page/machines/helpers";
import Page from "@/components/page/DefaultPage";
import Link from "next/link";

export default function Learn() {
    return <Page bottomPadding>
        <h1 className="my-3 text-center">Learn</h1>

        <p>Here are some learning resources I made on various subjects.</p>
        
        <ul>
            <li><Link href='/nyc/nyc-government'>NYC Government</Link></li>
            <li><Link href='/learn/physics'>Physics</Link></li>
            <li><Link href='/learn/pi'>The Digits of Pi</Link></li>
            <li><a href='https://memorizethepresidents.com'>The Presidents of the United States</a></li>
            <li><Link href='/learn/citations'>Citations</Link></li>
            <li><Link href='/learn/docker'>Docker</Link></li>
            <li><Link href='/learn/daylight-saving-time'>Daylight Savings Time</Link></li>
            <li><Link href='/learn/css-grid'>CSS Grid</Link></li>
            <li><Link href='/learn/using-tokens-to-push-to-github'>How To Use Tokens to Push to GitHub</Link></li>
            <li><Link href='/learn/plausible-analytics-with-nextjs'>Set up Plausible Analytics with Next.js</Link></li>

            
            {/* STEM videos from Slaphappy */}
            <div className="d:grid grid-cols-2 gap-2 place-content-center">
                <Yt width={300}>7BqbyixlSRU</Yt>
                <Yt width={300}>BYTgpx9bEgQ</Yt>
                <Yt width={300}>jty0QHS0F3I</Yt>
                <Yt width={300}>F0ameJ2K3_0</Yt>
            </div>
        </ul>
    </Page>;
}

