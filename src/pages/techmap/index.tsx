import Page from "@/components/page/DefaultPage";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useEffect } from "react";

export default function TechMap() {
    return <Page noPadding>
        <h1 className="text-4xl">TechMap</h1>
        <p>App link coming soon...</p>
        <p>Web version coming soon...</p>
        
        <APIProvider apiKey={process.env.NEXT_PUBLIC_TECHMAP_API_KEY as string}>
            <Map
                style={{width: '100vw', height: '100vh'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            />
        </APIProvider>
    </Page>;
}

