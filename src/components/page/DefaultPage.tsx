import Header from './headers/DefaultHeader';
import Footer from './footers/DefaultFooter';
import pageStyle from '@/styles/page/page.module.css';
import SEO, { SEOProps } from './parts/SEO';
import Favicons from './parts/Favicons';

export function PagesPage({ seo, children, pathname='', noPadding, bottomPadding, noPageStyling=false, ...props }: {
    children: any;
    pathname?: string;
    noPadding?: boolean;
    bottomPadding?: boolean;
    seo?: SEOProps;
    noPageStyling?: boolean;
    [key: string]: any;
}) {
    return <>
        <AppPage {...{children, pathname, noPadding, bottomPadding, noPageStyling, ...props}} />
        <SEO seo={seo} />
        {/* Favicons */}
        { seo?.favicon
            ? <link rel="shortcut icon" href={seo.favicon} />
            : <Favicons />
        }
    </>;
}

export default PagesPage;

export function AppPage({ children, pathname='', noPadding, bottomPadding, noPageStyling=false, ...props }: {
    children: any;
    pathname?: string;
    noPadding?: boolean;
    bottomPadding?: boolean;
    noPageStyling?: boolean;
    [key: string]: any;
}) {
    return <>
        {/* <RedirectFromVercelAppToCom /> */}

        <Header pathname={pathname} /> {/* 52+12+12+1=77px */}

        <main {...props} style={{
            position: 'relative',
            padding: 0,
            margin: 0,
            width: '100%',
            // Fills the entire page (minus footer and header's heights)
            minHeight: `calc(
                100dvh
                - 77px ${/*header*/''}
                - 129px ${/*footer*/''}
            )`,
            paddingBottom: bottomPadding ? 60 : 0,
            ...props.style
        }}>
            { noPadding
                ? children
                : <div id='pageNamespace' className={`j_container ${noPageStyling ? '' : pageStyle.pageNamespace}`}>{children}</div> //if center, wrap in centering container
            }
        </main>

        <Footer />
    </>;
};
