'use client';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Stats() { // ?embedded=1&ignoreCache=1?hideTitle=1
    const embedded=useRouter().query.embedded!==undefined;
    const ignoreCache=useRouter().query.ignoreCache!==undefined;
    const hideTitle=useRouter().query.hideTitle!==undefined;
    // eslint-disable-next-line no-unused-vars
    const [usedCache, setUsedCache]=useState(false);
    // eslint-disable-next-line no-unused-vars
    const [cachedDate, setCachedDate]=useState<string | null>(null);

    const [data, setData]=useState<
        null | any[]
        // |
        // {
        //     focusUsers: number;
        //     homeworkCheckerUsers: number;
        //     buserooSearches: number;
        //     shirtocracyOrders: number;
        //     journalUsers: number;
        //     projectsUsers: number;
        //     habitUsers: number;
        //     numbersUsers: number;
        //     blogViews: number;
        //     buserooUsers: number;
        //     shanghaiDictionarySearches: number;
    
        //     diff: {
        //         focusUsers: number;
        //         homeworkCheckerUsers: number;
        //         buserooSearches: number;
        //         shirtocracyOrders: number;
        //         journalUsers: number;
        //         projectsUsers: number;
        //         habitUsers: number;
        //         numbersUsers: number;
        //         blogViews: number;
        //         buserooUsers: number;
        //         shanghaiDictionarySearches: number;
        //     };
        // }
    >(null);
    
    useEffect(()=>{
        if (typeof window==='undefined')
            return;
        if (data)
            return;

        let reloadData=true;
        let useCache=false;
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
            setData(JSON.parse(localStorage.getItem('stats')!));
            setUsedCache(true);
            setCachedDate(new Date().toLocaleString());
        } else if (reloadData) {
            fetch('/api/stats/timeline?'+(ignoreCache ? 'ignoreCache=1' : ''))
                .then(res=>res.json())
                .then(d=>{
                    setData(d);
                    localStorage.setItem('stats', JSON.stringify(d));
                    localStorage.setItem('last-set', Date.now().toString());
                });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return <div>
        {
            data==null
            ? <div>Loading...</div>
            : <LineChart
                series={
                    [
                        { curve: "linear", data: data.map(d=>d.editTimeUsers), label: 'Edit Time Users', connectNulls: true },
                        { curve: "linear", data: data.map(d=>d.focusUsers), label: 'Focus Users', connectNulls: true },
                        { curve: "linear", data: data.map(d=>d.homeworkCheckerUsers), label: 'Homework Checker Users', connectNulls: true },
                        { curve: "linear", data: data.map(d=>d.buserooSearches), label: 'Buseroo Searches', connectNulls: true },
                    ]
                    // MakeOptional<LineSeriesType, "type">[]
                    // { curve: "linear", data: [0, 5, 2, 6, 3, 9.3], label: 'Users' },
                    // { curve: "linear", data: [6, 3, 7, 9.5, 4, 2], label: 'Searches' },
                }
                xAxis={[{
                    scaleType: 'utc',
                    data: data.map(d=>new Date(d.date))
                }]}
                // yAxis={[{
                //     scaleType: 'log',
                //     label: 'Users',
                //     min: 1,
                //     max: 100000,
                // }]}
                width={800}
                height={400}
            />
        }
    </div>;
}

const Person=()=><Image src='/image/stats/person.png' width={23} height={23} alt='users' title='Users' className='inline ml-3' />;
const Search=()=><Image src='/image/stats/search.png' width={23} height={23} alt='searches' title='Searches' className='inline ml-2' />;
const TShirt=()=><Image src='/image/stats/t-shirt.png' width={23} height={23} alt='shirts' title='Shirts' className='inline ml-3' />;

function Diff({ diff }: { diff: number }) {
    if (diff==0)
        return <div />;

    return <div className={'text-right '+(diff>0 ? 'text-green-800' : 'text-red-800')}>{diff>0 ? `+${diff}` : diff}</div>;
}

