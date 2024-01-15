import { useEffect } from 'react';

export default function RedirectFromVercelAppToCom() {
    useEffect(()=>{ //redirect from .vercel.app -> .com
        if (typeof window!=='undefined')
            if (['joelgrayson.vercel.app', 'www.joelgrayson.vercel.app'].includes(window.location.hostname))
                window.location.hostname='joelgrayson.com';
    }, []);

    return <></>;
}
