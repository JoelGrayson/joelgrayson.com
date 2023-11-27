import { useEffect } from 'react';

export default function RedirectFromVercelAppToCom() {
    useEffect(()=>{ //redirect from .vercel.app -> .com
        if (typeof window!=='undefined')
            if (window.location.hostname.includes('joelgrayson.vercel.app'))
                window.location.hostname='joelgrayson.com';
    }, []);

    return <></>;
}
