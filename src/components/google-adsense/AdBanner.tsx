import { useEffect } from "react";

export default function AdBanner({ slot }: { slot: string }) {
    useEffect(()=>{
        // From https://github.com/janhbnr/Next.js-14-Google-Adsense/blob/main/components/AdBanner.tsx
        try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (error: any) {
            console.log(error.message);
        }
    });

    return <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3254188827517112"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
    />;
}
