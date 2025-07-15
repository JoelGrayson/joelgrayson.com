import Head from "next/head";

/** So it shows an option to download the app on iOS devices */
export default function SafariDownloadAppPopup({
    url,
    deeplink='joelgrayson.com'
}: {
    /** the app id is extracted from this. Example: https://apps.apple.com/us/app/techmap/id6748248815 */
    url: string;
    /** passed into the app-argument parameter, which is used for deep linking in an app */
    deeplink?: string;
}) {
    const grp=url.match(/apps.apple.com\/.*\/id(\d+)/);
    if (!grp) {
        console.log('ERROR from SafariDownloadAppPopup: no appId in provided URL', url);
        return <div />;
    }
    const appId=grp[1];
    
    return <Head>
        <meta name="apple-itunes-app" content={`app-id=${appId}, app-argument=${deeplink}`} />
    </Head>;
}

