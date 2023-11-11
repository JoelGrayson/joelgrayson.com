import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(globalReq: NextApiRequest, globalRes: NextApiResponse<any>) {
    const apiKey=process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const slaphappyId='UCAwfG8BfhLuhMddFZh7z09A';
    const joelgrayson2Id='UChs2-tks6XqrAdZ6K2I0QCA';
    const channelId=slaphappyId+','+joelgrayson2Id;

    const fetchRequests=[
        fetch('https://api.joelgrayson.com/live-stats')
            .then(res=>res.json())
            .then((res)=>{
                return {
                    homeworkCheckerInstalls: res.hCInstalls,
                    focusInstalls: res.focusInstalls
                };
            }),
        fetch('https://joelgrayson.com/api/blog/total-views')
            .then(res=>res.json())
            .then(res=>({
                blogViews: res.views
            })),
        fetch('https://shanghaidictionary.com/api/analytics/searches')
            .then(res=>res.json())
            .then(res=>({
                shanghaiDictionarySearches: res.searches
            })),
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`)
            .then(res=>res.json())
            .then(res=>{
                if (!res.items) return {}; //error handling
                
                const slaphappy=res.items.find((channel: any)=>channel.id===slaphappyId);
                const joelgrayson2=res.items.find((channel: any)=>channel.id===joelgrayson2Id);
                return {
                    slaphappy: {
                        subscribers: parseInt(slaphappy.statistics.subscriberCount),
                        views: parseInt(slaphappy.statistics.viewCount)
                    },
                    joelgrayson2: {
                        subscribers: parseInt(joelgrayson2.statistics.subscriberCount),
                        views: parseInt(joelgrayson2.statistics.viewCount)
                    }
                };
            })
    ];

    const stats=(await Promise.all(fetchRequests))
        .reduce((acc, cur)=>({...acc, ...cur}), {});

    globalRes.json(stats);
}
