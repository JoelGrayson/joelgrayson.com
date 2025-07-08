import Page from "@/components/page/DefaultPage";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

// TODO: create a minimal header for settings and hide footer

export default function TechMap() {
    return <Page noPadding>
        {/* So it shows an option to download the app on iOS devices */}
        <Head>
            <meta name="apple-itunes-app" content="app-id=6748248815, app-argument=https://joelgrayson.com/techmap" />
        </Head>
        
        <h1 className="text-4xl">TechMap</h1>

        <p>Web version coming soon.</p>
        <p>App available at <Link href='https://apps.apple.com/us/app/techmap/id6748248815'>apps.apple.com/us/app/techmap/id6748248815</Link></p>

        {/* <p>App link coming soon...</p> */}

        {/* <APIProvider apiKey={process.env.NEXT_PUBLIC_TECHMAP_API_KEY as string}>
            <Map
                style={{width: '100vw', height: '100vh'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            />
        </APIProvider> */}
    </Page>;
}
