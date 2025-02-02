'use client';

import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Stats() { // ?embedded=1&ignoreCache=1?hideTitle=1
    const embedded=useRouter().query.embedded!==undefined;
    const ignoreCache=useRouter().query.ignoreCache!==undefined;
    const hideTitle=useRouter().query.hideTitle!==undefined;
    // eslint-disable-next-line no-unused-vars
    const [usedCache, setUsedCache]=useState(false);
    // eslint-disable-next-line no-unused-vars
    const [cachedDate, setCachedDate]=useState<string | null>(null);
    
    const [data, setData]=useState<
        null
        |
        {
            focusUsers: number;
            homeworkCheckerUsers: number;
            buserooSearches: number;
            shirtocracyOrders: number;
            journalUsers: number;
            projectsUsers: number;
            habitUsers: number;
            numbersUsers: number;
            blogViews: number;
            buserooUsers: number;
            shanghaiDictionarySearches: number;
            editTimeUsers: number;

            diff: {
                focusUsers: number;
                homeworkCheckerUsers: number;
                buserooSearches: number;
                shirtocracyOrders: number;
                journalUsers: number;
                projectsUsers: number;
                habitUsers: number;
                numbersUsers: number;
                blogViews: number;
                buserooUsers: number;
                shanghaiDictionarySearches: number;
                editTimeUsers: number;
            };
        }
    >(null);

    useEffect(()=>{
        if (typeof window==='undefined')
            return;
        if (data)
            return;

        let reloadData=true;
        let useCache=false;
        if (!ignoreCache) {
            const lastSet=localStorage.getItem('/stats:last-set');
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
            const newData=JSON.parse(localStorage.getItem('/stats:stats')!);
            setData(newData);
            setUsedCache(true);
            setCachedDate(new Date().toLocaleString());
            console.log('Data from cache', newData);
        } else if (reloadData) {
            fetch('/api/stats?'+(ignoreCache ? 'ignoreCache=1' : ''))
                .then(res=>res.json())
                .then(d=>{
                    setData(d);
                    // console.log('Fetched data', d);
                    localStorage.setItem('/stats:stats', JSON.stringify(d));
                    localStorage.setItem('/stats:last-set', Date.now().toString());
                });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <ShowPageUnlessEmbedded embedded={embedded}>
        { !hideTitle && <h1 className='text-center my-6'>Stats</h1> }
        
        {data==null ? 'Loading...' : <>
            <div className='grid text-2xl gap-6 max-w-[500px] mx-auto' style={{
                gridTemplateColumns: '1fr max-content max-content'
            }}>
                <div>Focus</div>
                <div className='text-right'>{data.focusUsers}<Person/></div>
                <Diff diff={data?.diff?.focusUsers} />
                
                <div>HW Checker</div>
                <div className='text-right'>{data.homeworkCheckerUsers}<Person/></div>
                <Diff diff={data?.diff?.homeworkCheckerUsers} />

                <div>Edit Time</div>
                <div className='text-right'>{data.editTimeUsers}<Person/></div>
                <Diff diff={data?.diff?.editTimeUsers} />

                <div>Buseroo</div>
                <div className='text-right'>{data.buserooSearches}<Search/></div>
                <Diff diff={data?.diff?.buserooSearches} />

                {/* <div>Shirtocracy</div>
                <div className='text-right'>{data.shirtocracyOrders}<TShirt/></div>
                <Diff diff={data?.diff?.shirtocracyOrders} /> */}

                { 
                    T(data.journalUsers) && <>
                        <div>Journal</div>
                        <div className='text-right'>{data.journalUsers}<Person/></div>
                        <Diff diff={data?.diff?.journalUsers} />
                    </>
                }

                { 
                    T(data.projectsUsers) && <>
                        <div>Projects</div>
                        <div className='text-right'>{data.projectsUsers}<Person/></div>
                        <Diff diff={data?.diff?.projectsUsers} />
                    </>
                }

                { 
                    T(data.habitUsers) && <>
                        <div>Habit</div>
                        <div className='text-right'>{data.habitUsers}<Person/></div>
                        <Diff diff={data?.diff?.habitUsers} />
                    </>
                }

                { 
                    T(data.numbersUsers) && <>
                        <div>Numbers</div>
                        <div className='text-right'>{data.numbersUsers}<Person/></div>
                        <Diff diff={data?.diff?.numbersUsers} />
                    </>
                }
            </div>
        </>}

        {/* <div className='text-right mt-4'>As of {
            usedCache && cachedDate
                ? formatDateTime(new Date(cachedDate))
                : formatDateTime(new Date())
        }</div> */}
    </ShowPageUnlessEmbedded>;
}

const Person=()=><Image src='/image/stats/person.png' width={23} height={23} alt='users' title='Users' className='inline ml-3' />;
const Search=()=><Image src='/image/stats/search.png' width={23} height={23} alt='searches' title='Searches' className='inline ml-2' />;
// const TShirt=()=><Image src='/image/stats/t-shirt.png' width={23} height={23} alt='shirts' title='Shirts' className='inline ml-3' />;

function Diff({ diff }: { diff: number }) {
    if (diff==0)
        return <div />;

    return <div className={'text-right '+(diff>0 ? 'text-green-800' : 'text-red-800')}>{diff>0 ? `+${diff}` : diff}</div>;
}

export function ShowPageUnlessEmbedded({ embedded, children }: { embedded: boolean, children: React.ReactNode }) {
    if (embedded)
        return <>{children}</>;

    return <Page bottomPadding>{children}</Page>;
}

function T(val: any) {
    if (val===-4)
        return false;
    if (!val)
        return false;
    return true;
}
