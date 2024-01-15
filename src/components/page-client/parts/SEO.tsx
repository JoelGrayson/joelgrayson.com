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
    }
};

export default function SEO({ seo }: { seo?: SEOProps }) {
    return <Head>
        {/* SEO */}
        <title>{seo?.title || 'Joel Grayson'}</title>
        { seo && <>
            { seo.description && <meta name='description' content={seo.description} /> }
            { seo.keywords && <meta name='keywords' content={Array.isArray(seo.keywords) ? seo.keywords.join(',') : seo.keywords} /> }
            { seo.og && <>
                { seo.og.title && <meta name='og:title' content={seo.og.title} /> }
                { seo.og.image && <meta name='og:image' content={seo.og.image} /> }
            </> }
        </> }

        
        { seo?.noIndex //Tell Google to not index certain pages (like 404 error)
            ? <meta name="robots" content="noindex" />
            : <meta name='robots' content='index,follow' />
        }

        {/* Default SEO */}
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='language' content='EN' />
        <meta name='author' content='Joel Grayson' />
        <meta name='og:site_name' content='joelgrayson.com' />
        <meta name='og:type' content={seo?.og?.type || 'website'} />
    </Head>;
}
