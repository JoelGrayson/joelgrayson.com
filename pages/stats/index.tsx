import { useState, useEffect } from 'react';
import Page from '@/components/global/Page';
import Loader from '@/components/global/Loader';

export default function Stats() {
    // Homework Checker and focus from /homepage-stats
    const [hCInstalls, setHCInstalls]=useState<number | null>(null);
    const [focusInstalls, setFocusInstalls]=useState<number | null>(null);
    useEffect(()=>{
        if (hCInstalls!==null || focusInstalls!==null) return; //value already set
        
        if (process.env.NODE_ENV==='development') { //skip calling api.joelgrayson.com/homepage-stats in development because of CORS error
            console.log('skipping getting homepage-stats in development');
            setHCInstalls(-4);
            setFocusInstalls(-4);
        } else {
            fetch('https://api.joelgrayson.com/homepage-stats')
                .then(res=>res.json())
                .then((res)=>{
                    if (res.hCInstalls===-1 || !res.hCInstalls) return console.log('hCInstalls is -1');
                    if (res.focusInstalls===-1 || !res.focusInstalls) return console.log('focusInstalls is -1');

                    console.log('/api/home/stats returned', res);
                    setHCInstalls(res.hCInstalls);
                    setFocusInstalls(res.focusInstalls);
                });
        }
    // eslint-disable-next-line
    }, []);

    const [perspectiveInstalls, setPerspectiveInstalls]=useState<number | null>(null);
    const [buserooInstalls, setBuserooInstalls]=useState<number | null>(null);
    const [shanghaiDictionarySearches, setShanghaiDictionarySearches]=useState<number | null>(null);
    const [ytSubscribers, setYtSubscribers]=useState<number | null>(null);
    useEffect(()=>{
        
    }, []);

    return <Page>
        <h1>Stats</h1>
        <div id='table' className='grid grid-cols-2'>
            <p>Focus installations</p>
            <Value>{focusInstalls}</Value>
            <p>Homework checker installations</p>
            <Value>{hCInstalls}</Value>
            <p>Perspective views</p>
            <Value>{perspectiveInstalls}</Value>
            <p>Buseroo.com users</p>
            <Value>{buserooInstalls}</Value>
            <p>ShanghaiDictionary.com searches</p>
            <Value>{shanghaiDictionarySearches}</Value>
            <p>YouTube subscribers</p>
            <Value>{ytSubscribers}</Value>
        </div>
    </Page>;
}

export function Value({ children }: { children: number | null }) {
    return children===null ? <Loader size={15} /> : <p>{children}</p>;
}

