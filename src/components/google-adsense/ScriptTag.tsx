import Head from "next/head";
// import Script from "next/script";

export default function GoogleAdsenseScriptTag() {
    return <Head>
        {/* <script data-ad-client="ca-pub-3254188827517112" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
        <div dangerouslySetInnerHTML={{
            __html: '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3254188827517112" crossorigin="anonymous"></script>'
        }}></div>
    </Head>;
}
