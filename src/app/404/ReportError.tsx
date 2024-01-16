'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ReportError() {
    const pathname=usePathname();

    useEffect(()=>{ //report error
        if (!window || !pathname) return;
        if (window.location.hostname==='localhost')
            return console.log('not reporting because localhost');
        
        console.log('reporting error');
        fetch('/api/log-error/page-not-found');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeof window, pathname]);
    
    return <></>;
}
