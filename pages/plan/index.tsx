import Head from "next/head";

export const docLink=(docId: string)=>`https://docs.google.com/document/d/${docId}/edit?rm=minimal`;
export const agendas={
    Buseroo: '15hOxtH4xDGnUgq9SdqmWNSG0KihnXwN1iKZNpW4-FXw',
    Connect2Grid: '1m6f8igALdkPsQkEG3wmODTCtMzHwqOytguZQ_VUzr08',
    CB1: '1CFfa8K-XeO4x9fvJ9qwHT2XYjqRlWax7zUnb1yoXRVc',
    Solar: '1WQnU_U1rG955NcYjRCCz7fBeK8wEZ2KxW7_JBN7mmS4',
    'Students for Electric Buses': '1pRmHK0qcHAmzz2aK2XTQugy-FfjTtm1Ugc-fqv99Kxg',
    'Vending Machine': '17fWXdeUmfWz0W7UqSDC0tmr5TaMrz6L7O2S9Uu6iS34',
    'Learning': '15TW1rDATUrihnRX3cuLSuL-Q6fZZR1JwRtd_uQHE9A4'
};

export default function Plan() {
    return <div>
        <Head>
            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />
            <title>Joel&apos;s Plan</title>
        </Head>
        <h1 className="text-center">Joel&apos;s Plan</h1>

        <div className="grid grid-cols-2">
            {
                // eslint-disable-next-line
                Object.entries(agendas).map(([name, docId], i)=>{
                    return <iframe key={docId} src={docLink(docId)} style={{
                        width: 750,
                        height: 500
                    }} />;
                })
            }
            <div style={{
                width: 750,
                height: 500,
            }}>
                <ul className="mt-8 text-lg">
                    <li>Shirtocracy.com</li>
                    <li>BulletBrainstorm.com</li>
                    <li>memorizethepresidents.com</li>
                </ul>
            </div>
        </div>
        
    </div>;
}