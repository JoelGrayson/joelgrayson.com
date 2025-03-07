import Header from './headers/DefaultHeader';
import Footer from './footers/DefaultFooter';
import SEO, { SEOProps } from './parts/SEO';
import pageStyle from '@/styles/page/page.module.css';
import RedirectFromVercelAppToCom from './parts/RedirectFromVercelAppToCom';
import Favicons from './parts/Favicons';
import Link from 'next/link';

export default function LearnPage({ children, noPadding, bottomPadding, seo, noPageStyling=false, markdown, noContainer=false, ...props }: {
    children: any;
    noPadding?: boolean;
    bottomPadding?: boolean;
    seo?: SEOProps;
    noPageStyling?: boolean;
    markdown?: boolean;
    noContainer?: boolean;
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
            minHeight: 'calc(100dvh - 77px - 89px)', // fills the entire page (minus footer and header's heights)
            paddingBottom: bottomPadding ? 60 : 0,
            ...props.style
        }}>
            { noPadding
                ? children
                : <div id='pageNamespace' className={`${noContainer ? '': 'j_container'} ${noPageStyling ? '' : pageStyle.pageNamespace}`}>
                    <Link href='/learn' className='button' style={{
                        position: 'relative',
                        top: 20,
                        left: 10
                    }}>↳ See other learning resources</Link>

                    <div className={markdown ? "markdown-container" : ''}>
                        {children}
                    </div>
                </div> //if center, wrap in centering container
            }
        </main>

        <Footer />
    </>;
};
