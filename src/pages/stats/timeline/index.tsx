'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Loader from '@/components/global/Loader';

export default function StatsTimelineView() {
    const hideTitle=useRouter().query.hideTitle!==undefined;

    return <div>
        {!hideTitle && <h1 className="text-center">Stats Timeline</h1>}
        <StatsTimeline width='100dvw' height='calc(95dvh - 200px)' />
    </div>;
}

const endingDate=new Date('12/24/2024');

const darkModeStyles={
    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
        strokeWidth: "0.4",
        fill: "#fff"
    },
    // change all labels fontFamily shown on both xAxis and yAxis
    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":{
        fontFamily: "Roboto",
    },
    // change bottom label styles
    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
        strokeWidth: "0.5",
        fill: "#fff"
    },
    // bottomAxis Line Styles
    "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
        stroke: "#fff",
        strokeWidth: 0.4
    },
    // leftAxis Line Styles
    "& .MuiChartsAxis-left .MuiChartsAxis-line":{
        stroke: "#fff",
        strokeWidth: 0.4
    },
    // Chart legend
    "& .MuiChartsLegend-root text tspan": {
        fill: "#fff",
    }
};

function StatsTimeline({ width=800, height=500 }: { width?: string | number, height?: string | number }) { // ?embedded=1&ignoreCache=1?hideTitle=1
    const ignoreCache=useRouter().query.ignoreCache!==undefined;
    // eslint-disable-next-line no-unused-vars
    const [usedCache, setUsedCache]=useState(false);
    // eslint-disable-next-line no-unused-vars
    const [cachedDate, setCachedDate]=useState<string | null>(null);

    const [data, setData]=useState<null | any[]>(null);
    const [loading, setLoading]=useState(false);

    const dataFiltered=data?.filter(d=>new Date(d.date)<endingDate);
    const [isDarkMode, setIsDarkMode]=useState(false);
    useEffect(()=>{
        if (typeof window==='undefined')
            return;
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, [typeof window!=='undefined' && window.matchMedia('(prefers-color-scheme: dark)')]);
    
    useEffect(()=>{
        if (typeof window==='undefined')
            return;
        if (data)
            return;

        let reloadData=true;
        let useCache=!ignoreCache;
        if (!ignoreCache) {
            const lastSet=localStorage.getItem('/stats/timeline:last-set');
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
            setData(JSON.parse(localStorage.getItem('/stats/timeline:stats')!));
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
                localStorage.setItem('/stats/timeline:stats', JSON.stringify(d));
                localStorage.setItem('/stats/timeline:last-set', Date.now().toString());
                setLoading(false);
            });
    }
    
    return <div style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        {/* https://mui.com/x/api/charts/line-chart */}
        <LineChart
            series={
                [
                    { curve: "linear", data: !dataFiltered ? [] : dataFiltered.map(d=>d.editTimeUsers), label: 'Edit Time Users', connectNulls: true,  },
                    { curve: "linear", data: !dataFiltered ? [] : dataFiltered.map(d=>d.focusUsers), label: 'Focus Weekly Users', connectNulls: true },
                    { curve: "linear", data: !dataFiltered ? [] : dataFiltered.map(d=>d.homeworkCheckerUsers), label: 'Homework Checker Weekly Users', connectNulls: true },
                    // { curve: "linear", data: !dataFiltered ? [] : dataFiltered.map(d=>d.buserooSearches), label: 'Buseroo Searches', connectNulls: true },
                ]
            }
            xAxis={[{
                scaleType: 'utc',
                data: dataFiltered ? dataFiltered.map(d=>new Date(d.date)) : []
            }]}
            loading={dataFiltered==null}
            // width={800}
            // height={400}
            sx={{
                width: '100%',
                height: '100%',
                ...(isDarkMode ? darkModeStyles : {})
            }}
            
        />

        <div className="w-full flex justify-end mr-12">
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

