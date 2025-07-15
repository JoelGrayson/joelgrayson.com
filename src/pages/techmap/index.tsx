import SafariDownloadAppPopup from "@/components/global/SafariDownloadAppPopup";
import Page from "@/components/page/DefaultPage";
import Link from "next/link";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useEffect } from "react";

// TODO: create a minimal header for settings and hide footer

export default function TechMap() {
    // return <Page noPadding>
    return <Page>
        <SafariDownloadAppPopup url="https://apps.apple.com/us/app/techmap/id6748248815" />
        
        <h1 className="text-4xl text-center pt-4">TechMap</h1>

        <p className="text-center pt-3">Web version coming soon. App available at <Link href='https://apps.apple.com/us/app/techmap/id6748248815'>apps.apple.com/us/app/techmap/id6748248815</Link></p>

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
