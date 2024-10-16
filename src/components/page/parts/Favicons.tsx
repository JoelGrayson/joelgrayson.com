import Head from 'next/head';

export default function Favicons() {
    return <Head>
        {/* Genreated from https://realfavicongenerator.net */}

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/image/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/image/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/image/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/image/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#f8faf9" />
        <meta name="msapplication-config" content="/image/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
    </Head>;
}
