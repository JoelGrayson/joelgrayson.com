'use client';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Loader from '@/components/global/Loader';

export default function StatsTimelineView() {
    return <div>
        <h1 className="text-center">Stats Timeline</h1>
        <StatsTimeline width='calc(95dvw - 200px)' height='calc(95dvh - 200px)' />
    </div>;
}

function StatsTimeline({ width=800, height=500 }: { width?: string | number, height?: string | number }) { // ?embedded=1&ignoreCache=1?hideTitle=1
    const embedded=useRouter().query.embedded!==undefined;
    const ignoreCache=useRouter().query.ignoreCache!==undefined;
    const hideTitle=useRouter().query.hideTitle!==undefined;
    // eslint-disable-next-line no-unused-vars
    const [usedCache, setUsedCache]=useState(false);
    // eslint-disable-next-line no-unused-vars
    const [cachedDate, setCachedDate]=useState<string | null>(null);

    const [data, setData]=useState<null | any[]>(null);
    const [loading, setLoading]=useState(false);
    
    useEffect(()=>{
        if (typeof window==='undefined')
            return;
        if (data)
            return;

        let reloadData=true;
        let useCache=!ignoreCache;
        if (!ignoreCache) {
            const lastSet=localStorage.getItem('last-set');
            if (lastSet) {
                let lastSetDate=new Date(parseInt(lastSet));
                const oneDay=1000*60*60*24;
                let expiresDate=new Date(lastSetDate.getTime()+oneDay);
                if (new Date()<expiresDate) {
                    useCache=true;
                    reloadData=false;
                }
            }
        }
        if (useCache) {
            console.log('Used cache');
            setData(JSON.parse(localStorage.getItem('stats')!));
            setUsedCache(true);
            setCachedDate(new Date().toLocaleString());
        } else if (reloadData) {
            console.log('Reloaded data');
            reloadDataFn();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function reloadDataFn() {
        setLoading(true);
        fetch('/api/stats/timeline?'+(ignoreCache ? 'ignoreCache=1' : ''))
            .then(res=>res.json())
            .then(d=>{
                setData(d);
                console.log(d);
                localStorage.setItem('stats', JSON.stringify(d));
                localStorage.setItem('last-set', Date.now().toString());
                setLoading(false);
            });
    }
    
    return <div style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        {/* https://mui.com/x/api/charts/line-chart */}
        <LineChart
            series={
                [
                    { curve: "linear", data: !data ? [] : data.map(d=>d.editTimeUsers), label: 'Edit Time Users', connectNulls: true,  },
                    { curve: "linear", data: !data ? [] : data.map(d=>d.focusUsers), label: 'Focus Users', connectNulls: true },
                    { curve: "linear", data: !data ? [] : data.map(d=>d.homeworkCheckerUsers), label: 'Homework Checker Users', connectNulls: true },
                    // { curve: "linear", data: !data ? [] : data.map(d=>d.buserooSearches), label: 'Buseroo Searches', connectNulls: true },
                ]
            }
            xAxis={[{
                scaleType: 'utc',
                data: data ? data.map(d=>new Date(d.date)) : []
            }]}
            loading={data==null}
            // width={800}
            // height={400}
            sx={{
                width: '100%',
                height: '100%'
            }}
        />

        <div className="w-full flex justify-end">
            <button onClick={reloadDataFn}>
                {
                    loading
                    ? <Loader />
                    : 'Reload Data'
                }
            </button>
        </div>
    </div>;
}

