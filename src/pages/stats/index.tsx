'use client';

import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Stats() {
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
            };
        }
    >(null);
    
    useEffect(()=>{
        fetch('/api/live-stats')
            .then(res=>res.json())
            .then(setData);
    }, []);
    
    const embedded=useRouter().query.embedded!==undefined;
    
    return <ShowPageUnlessEmbedded embedded={embedded}>
        <h1 className='text-center my-6'>Stats</h1>
        
        {data==null ? 'Loading...' : <>
            <div className='grid text-2xl gap-6 max-w-[500px] mx-auto' style={{
                gridTemplateColumns: '1fr max-content max-content'
            }}>
                <div>Focus</div>
                <div className='text-right'>{data.focusUsers}<Person/></div>
                <Diff diff={data.diff.focusUsers} />
                
                <div>HW Checker</div>
                <div className='text-right'>{data.homeworkCheckerUsers}<Person/></div>
                <Diff diff={data.diff.homeworkCheckerUsers} />

                <div>Buseroo</div>
                <div className='text-right'>{data.buserooSearches}<Search/></div>
                <Diff diff={data.diff.buserooSearches} />

                <div>Shirtocracy</div>
                <div className='text-right'>{data.shirtocracyOrders}<TShirt/></div>
                <Diff diff={data.diff.shirtocracyOrders} />

                <div>Journal</div>
                <div className='text-right'>{data.journalUsers}<Person/></div>
                <Diff diff={data.diff.journalUsers} />

                <div>Projects</div>
                <div className='text-right'>{data.projectsUsers}<Person/></div>
                <Diff diff={data.diff.projectsUsers} />

                <div>Habit</div>
                <div className='text-right'>{data.habitUsers}<Person/></div>
                <Diff diff={data.diff.habitUsers} />

                <div>Numbers</div>
                <div className='text-right'>{data.numbersUsers}<Person/></div>
                <Diff diff={data.diff.numbersUsers} />
            </div>
        </>}
    </ShowPageUnlessEmbedded>;
}

const Person=()=><Image src='/image/stats/person.png' width={23} height={23} alt='users' title='Users' className='inline ml-3' />;
const Search=()=><Image src='/image/stats/search.png' width={23} height={23} alt='searches' title='Searches' className='inline ml-2' />;
const TShirt=()=><Image src='/image/stats/t-shirt.png' width={23} height={23} alt='shirts' title='Shirts' className='inline ml-3' />;

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
