import SEO, { SEOProps } from './parts/SEO';
import ConnectingStreetVendorstotheGridHeader from "./headers/ConnectingStreetVendorstotheGridHeader";
import ConnectingStreetVendorstotheGridFooter from "./footers/ConnectingStreetVendorstotheGridFooter";
import pageStyle from '@/styles/page/page.module.css';
import RedirectFromVercelAppToCom from './parts/RedirectFromVercelAppToCom';

export default function ConnectingStreetVendorstotheGridPage({ children, noPadding, bottomPadding, seo, noPageStyling=false, ...props }: {
    children: any;
    noPadding?: boolean;
    bottomPadding?: boolean;
    seo?: SEOProps;
    noPageStyling?: boolean;
    [key: string]: any;
}) {
    return <>
        <SEO seo={seo} />
        <RedirectFromVercelAppToCom />

        <ConnectingStreetVendorstotheGridHeader />
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
        <ConnectingStreetVendorstotheGridFooter />
    </>;
}
