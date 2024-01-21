import Head from 'next/head';

export type SEOProps={
    title?: string;
    description?: string;
    keywords?: string | string[];
    noIndex?: boolean;
    favicon?: string;
    og?: { //open graph
        title?: string;
        type?: 'website' | 'article' | string;
        image?: string;
        imageAlt?: string;
        description?: string;
    }
};

export default function SEO({ seo }: { seo?: SEOProps }) {
    return <Head>
        {/* Default SEO */}
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='language' content='EN' />
        <meta name='author' content='Joel Grayson' />
        <meta name='og:site_name' content='joelgrayson.com' />
        <meta name='og:type' content={seo?.og?.type || 'website'} />


        {/* Favicon (not really SEO) */}
        {/* TODO:  */}


        {/* Specified SEO */}
        <title>{seo?.title || 'Joel Grayson'}</title>
        { seo && <>
            { seo.description && <meta name='description' content={seo.description} /> }
            { seo.keywords && <meta name='keywords' content={Array.isArray(seo.keywords) ? seo.keywords.join(',') : seo.keywords} /> }
            { seo.og
                ? <>
                    { (seo.og.title || seo.title) && <meta property='og:title' content={seo.og.title || seo.title} /> }
                    { (seo.og.description || seo.description) && <meta property='og:description' content={seo.og.description || seo.description} /> }
                    { (seo.og.image || seo.favicon) && <meta property='og:image' content={getURL(seo.og.image || seo.favicon || '')} /> }
                    { seo.og.imageAlt && <meta property='og:image:alt' content={seo.og.imageAlt} /> }
                </>
                : !seo.noIndex && <>
                    { seo.title && <meta property='og:title' content={seo.title} /> }
                    { seo.description && <meta property='og:description' content={seo.description} /> }
                    { seo.favicon && <meta property='og:image' content={getURL(seo.favicon)} /> }
                </> }
        </> }


        {/* Tell Google to not index certain pages (like 404 error) */}
        { seo?.noIndex
            ? <meta name="robots" content="noindex" />
            : <meta name='robots' content='index,follow' />
        }
    </Head>;
}

function getURL(url: string) {
    if (url[0]==='/')
        return 'https://joelgrayson.com'+url;
    return url;
}

