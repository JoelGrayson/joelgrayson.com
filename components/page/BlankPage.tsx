import Favicons from "./parts/Favicons";
import RedirectFromVercelAppToCom from "./parts/RedirectFromVercelAppToCom";
import SEO, { type SEOProps } from "./parts/SEO";
import pageStyle from '@/styles/page/page.module.css';

export default function BlankPage({ children, noPadding, bottomPadding, seo, noPageStyling, ...props }: {
    children: any;
    noPadding?: boolean;
    bottomPadding?: boolean;
    seo?: SEOProps;
    noPageStyling?: boolean;
    [key: string]: any;
}) {
    return <>
        <SEO seo={seo} />
        <Favicons />
        <RedirectFromVercelAppToCom />

        <main {...props} style={{
            position: 'relative',
            padding: 0, margin: 0,
            width: '100%',
            minHeight: 'calc(100vh - 77px - 89px)', // fills the entire page (minus footer and header's heights)
            paddingBottom: bottomPadding ? 60 : 0,
            ...props.style
        }}>
            { noPadding
                ? children
                : <div id='pageNamespace' className={`j_container j_max-w ${noPageStyling ? '' : pageStyle.pageNamespace}`}>{children}</div> //if center, wrap in centering container
            }
        </main>
    </>;
}

