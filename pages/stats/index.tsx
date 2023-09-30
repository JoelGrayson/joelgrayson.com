import React, { useState, useEffect } from 'react';
import Page from '@/components/global/Page';
import Loader from '@/components/global/Loader';

type ytDataT={
    slaphappy: {
        subscribers: number;
        views: number;
    };
    joelgrayson2: {
        subscribers: number;
        views: number;
    };
};

const fmt=new Intl.NumberFormat().format;

export default function Stats() {
    // Homework Checker and focus from /live-stats
    const [hCInstalls, setHCInstalls]=useState<number | null>(null);
    const [focusInstalls, setFocusInstalls]=useState<number | null>(null);
    useEffect(()=>{
        if (hCInstalls!==null || focusInstalls!==null) return; //value already set
        
        if (process.env.NODE_ENV==='development') { //skip calling api.joelgrayson.com/live-stats in development because of CORS error
            console.log('skipping getting live-stats in development');
            setHCInstalls(-4);
            setFocusInstalls(-4);
        } else {
            fetch('https://api.joelgrayson.com/live-stats')
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

    const [perspectiveViews, setPerspectiveViews]=useState<number | null>(null);
    useEffect(()=>{
        fetch('/api/perspective/total-views')
            .then(res=>res.json())
            .then(res=>setPerspectiveViews(res.views));
    }, []);
    
    // const [buserooUsers, setBuserooUsers]=useState<number | null>(null);
    const [shanghaiDictionarySearches, setShanghaiDictionarySearches]=useState<number | null>(null);
    useEffect(()=>{
        fetch('https://shanghaidictionary.com/api/analytics/searches')
            .then(res=>res.json())
            .then(res=>setShanghaiDictionarySearches(res.searches));
    }, []);

    const [ytData, setYtData]=useState<ytDataT | null>(null);
    const [hoveringYtSubscribers, setHoveringYtSubscribers]=useState<boolean>(false);
    const [hoveringYtViews, setHoveringYtViews]=useState<boolean>(false);
    useEffect(()=>{
        const apiKey=process.env.NODE_ENV==='development' ? process.env.NEXT_PUBLIC_DEVELOPMENT_YOUTUBE_API_KEY : process.env.NEXT_PUBLIC_PRODUCTION_YOUTUBE_API_KEY;
        const slaphappyId='UCAwfG8BfhLuhMddFZh7z09A';
        const joelgrayson2Id='UChs2-tks6XqrAdZ6K2I0QCA';
        const channelId=slaphappyId+','+joelgrayson2Id;
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res.items);
                const slaphappy=res.items.find((channel: any)=>channel.id===slaphappyId);
                const joelgrayson2=res.items.find((channel: any)=>channel.id===joelgrayson2Id);
                setYtData({
                    slaphappy: {
                        subscribers: parseInt(slaphappy.statistics.subscriberCount),
                        views: parseInt(slaphappy.statistics.viewCount)
                    },
                    joelgrayson2: {
                        subscribers: parseInt(joelgrayson2.statistics.subscriberCount),
                        views: parseInt(joelgrayson2.statistics.viewCount)
                    }
                });
            });
    }, []);

    return <Page>
        <h1 className='text-center'>
            Stats
            <svg id="Icons" width="20px" height="20px" style={{display: 'inline', marginLeft: 13, }} version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n" }} /><path className="st0" d="M16,24c3.6,0,7.1,0.7,10.2,2.1c1.8-2.2,2.8-5,2.8-8.1c0-7.2-5.8-13-13-13S3,10.8,3,18c0,3.1,1.1,5.9,2.8,8.1  C8.9,24.7,12.4,24,16,24z" /><line className="st0" x1={16} x2={16} y1={8} y2={10} /><line className="st0" x1="8.9" x2="10.3" y1="10.9" y2="12.3" /><line className="st0" x1={6} x2={8} y1={18} y2={18} /><line className="st0" x1={26} x2={24} y1={18} y2={18} /><line className="st0" x1="23.1" x2="21.7" y1="10.9" y2="12.3" /><line className="st0" x1={16} x2={20} y1={24} y2={16} /></svg>
        </h1>
        <table onMouseEnter={()=>setHoveringYtSubscribers(true)} onMouseLeave={()=>setHoveringYtSubscribers(false)}>
            <tbody>
                <tr>
                    <td>Focus installations</td>
                    <td><Value>{focusInstalls}</Value></td>
                </tr>
                <tr>
                    <td>Homework checker installations</td>
                    <td><Value>{hCInstalls}</Value></td>
                </tr>
                <tr>
                    <td>Perspective views</td>
                    <td><Value>{perspectiveViews}</Value></td>
                </tr>
                {/* <tr>
                    <td>Buseroo.com users</td>
                    <td><Value>{buserooUsers}</Value></td>
                </tr> */}
                <tr>
                    <td>ShanghaiDictionary.com searches&emsp;</td>
                    <td><Value>{shanghaiDictionarySearches}</Value></td>
                </tr>
                <tr onMouseEnter={()=>setHoveringYtSubscribers(true)} onMouseLeave={()=>setHoveringYtSubscribers(false)}>
                    <td>Combined YouTube subscribers&emsp;</td>
                    <td className='relative'>{ ytData
                        ? <>
                            <p>{fmt(ytData.slaphappy.subscribers+ytData.joelgrayson2.subscribers)}</p>
                            { hoveringYtSubscribers && <div className='absolute bottom-3 left-[-90px] w-[240px]'>
                                <div className='px-2 py-1 bg-gradient-to-tl from-gray-200 to-gray-50' style={{
                                    border: '1px solid black',
                                    borderRadius: 5
                                }}>
                                    <p>Slaphappy: {fmt(ytData.slaphappy.subscribers)} subscribers</p>
                                    <p>JoelGrayson2: {fmt(ytData.joelgrayson2.subscribers)} subscribers</p>
                                </div>
                                <p className='text-center relative bottom-3'>v</p>
                            </div> }
                        </>
                        : <Loader size={15} />
                    }</td>
                </tr>
                <tr onMouseEnter={()=>setHoveringYtViews(true)} onMouseLeave={()=>setHoveringYtViews(false)}>
                    <td>Combined YouTube views</td>
                    <td className='relative'>{ ytData
                        ? <>
                            <p>{fmt(ytData.slaphappy.views+ytData.joelgrayson2.views)}</p>
                            { hoveringYtViews && <div className='absolute top-3 left-[-90px] w-[240px]'>
                                <p className='text-center relative top-3.5'>^</p>
                                <div className='px-2 py-1 bg-gradient-to-tl from-gray-200 to-gray-50' style={{
                                    border: '1px solid black',
                                    borderRadius: 5
                                }}>
                                    <p>Slaphappy: {fmt(ytData.slaphappy.views)} views</p>
                                    <p>JoelGrayson2: {fmt(ytData.joelgrayson2.views)} views</p>
                                </div>
                            </div> }
                        </>
                        : <Loader size={15} />
                    }</td>
                </tr>
            </tbody>
        </table>
    </Page>;
}

export function Value({ children }: { children: number | null }) {
    return children===null ? <Loader size={15} /> : <p>{fmt(children)}</p>;
}

