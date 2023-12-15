import { Yt } from "@/components/by-page/machines/helpers";
import Page from "@/components/page/DefaultPage";
import Link from "next/link";

export default function Learn() {
    return <Page bottomPadding>
        <h1 className="my-3 text-center">Learn</h1>
        <ul>
            <li><Link href='/nyc/nyc-government'>NYC Government</Link></li>
            <li><Link href='/learn/pi'>Memorize the Digits of Pi</Link></li>
            <li><a href='https://memorizethepresidents.com'>Memorize the Presidents of the United States</a></li>
            <li><Link href='/learn/physics'>Physics</Link></li>
            {/* Notion page on MLA citations */}
            
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