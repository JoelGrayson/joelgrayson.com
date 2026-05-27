import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Asteroids',
};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                'buy-button-id': string;
                'publishable-key': string;
            }, HTMLElement>;
        }
    }
}

export default function Asteroids() {
    return <>
        <Script async src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            gap: '2rem',
        }}>
            <h1>Asteroids</h1>
            <stripe-buy-button
                buy-button-id="buy_btn_1TbqNTD09TtPqDPtTELc93xX"
                publishable-key="pk_live_51QfmTyD09TtPqDPtDc0z0QyWhPkZ4y22H3x2wIjzLz6MsMgk3T0BrYTLb9ispD3pitIqrpErsnDkhbXVUKqnm7oL00hwncmymE"
            />
        </div>
    </>;
}
