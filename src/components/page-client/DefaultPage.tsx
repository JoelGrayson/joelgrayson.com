import Header from './headers/DefaultHeader';
import Footer from './footers/DefaultFooter';
import SEO, { SEOProps } from './parts/SEO';
import pageStyle from '@/styles/page/page.module.css';
import RedirectFromVercelAppToCom from './parts/RedirectFromVercelAppToCom';
import Favicons from './parts/Favicons';

export default function Page({ children, noPadding, bottomPadding, seo, noPageStyling=false, ...props }: {
    children: any;
    noPadding?: boolean;
    bottomPadding?: boolean;
    seo?: SEOProps;
    noPageStyling?: boolean;
    [key: string]: any;
}) {
    return <>
        <SEO seo={seo} />
        {/* Favicons */}
        { seo?.favicon
            ? <link rel="shortcut icon" href={seo.favicon} />
            : <Favicons />
        }
        <RedirectFromVercelAppToCom />

        <Header /> {/* 77px */}

        <main {...props} style={{
            position: 'relative',
            padding: 0, margin: 0,
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
