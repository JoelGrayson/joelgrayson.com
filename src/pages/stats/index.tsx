'use client';

import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
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
    
    return <Page>
        <h1 className='text-center'>Stats</h1>
        
        {data==null ? 'Loading...' : <>
            <div className='grid grid-cols-[3fr_1fr_1fr] text-2xl gap-6'>
                <div>Focus</div>
                <div className='text-right'>{data.focusUsers}<Person/></div>
                <div className='text-right'>{formatDiff(data.diff.focusUsers)}</div>
                
                <div>HW Checker</div>
                <div className='text-right'>{data.homeworkCheckerUsers}<Person/></div>
                <div className='text-right'>{formatDiff(data.diff.homeworkCheckerUsers)}</div>

                <div>Buseroo</div>
                <div className='text-right'>{data.buserooSearches}<Search/></div>
                <div className='text-right'>{formatDiff(data.diff.buserooSearches)}</div>

                <div>Shirtocracy</div>
                <div className='text-right'>{data.shirtocracyOrders}<TShirt/></div>
                <div className='text-right'>{formatDiff(data.diff.shirtocracyOrders)}</div>

                <div>Journal</div>
                <div className='text-right'>{data.journalUsers}<Person/></div>
                <div className='text-right'>{formatDiff(data.diff.journalUsers)}</div>

                <div>Projects</div>
                <div className='text-right'>{data.projectsUsers}<Person/></div>
                <div className='text-right'>{formatDiff(data.diff.projectsUsers)}</div>

                <div>Habit</div>
                <div className='text-right'>{data.habitUsers}<Person/></div>
                <div className='text-right'>{formatDiff(data.diff.habitUsers)}</div>

                <div>Numbers</div>
                <div className='text-right'>{data.numbersUsers}<Person/></div>
                <div className='text-right'>{formatDiff(data.diff.numbersUsers)}</div>
            </div>
        </>}
    </Page>;
}

const Person=()=><Image src='/image/stats/person.png' width={23} height={23} alt='users' title='Users' className='inline ml-3' />;
const Search=()=><Image src='/image/stats/search.png' width={23} height={23} alt='searches' title='Searches' className='inline ml-2' />;
const TShirt=()=><Image src='/image/stats/t-shirt.png' width={23} height={23} alt='shirts' title='Shirts' className='inline ml-3' />;

function formatDiff(num: number) {
    if (num==0) return '';
    if (num>0) return `+${num}`;
    return num;
}
