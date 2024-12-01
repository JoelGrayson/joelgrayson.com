import Page from '@/components/page/DefaultPage';
import Link from 'next/link';
import Prisma from '@prisma/client';
import prisma from '@/data/prisma/client';
import superjson from 'superjson';
import { jdate } from 'joeldate';

export async function getServerSideProps() {
    const items=await prisma.library.findMany({
        orderBy: {
            date: 'desc'
        }
    });

    return {
        props: {
            items: superjson.stringify(items)
        }
    };
}

export default function NYC({ items }: { items: string }) {
    const deserializedItems=superjson.parse(items) as Prisma.Library[];
    // console.log('Items', deserializedItems);

    return <Page bottomPadding pathname='/library' seo={{
        title: 'Library',
    }}>
        <h1 className='text-center mb-6 mt-6'>Library</h1>
        
        {deserializedItems.map(item=>{
            return <div key={item.id} className='flex mb-2 mx-auto' style={{ maxWidth: 600 }}>
                <div style={{ width: 100 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.imageUrl || ''} alt={item.title+' cover'} style={{ height: 100 }} className='rounded' />
                </div>
                <div className='relative w-full'>
                    <div>
                        <div className='text-2xl font-bold pt-1 pb-2'>{item.title}</div>
                        <div>Finished {jdate(item.date)}</div>
                    </div>
                    { item.url &&
                    <Link className='absolute top-2 right-2' href={item.url} target='_blank'>
                        <svg className='fill-black dark:fill-white' height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15,10 L15,14 C15,15.1045695 14.1045695,16 13,16 L2,16 C0.8954305,16 0,15.1045695 0,14 L0,3 C0,1.8954305 0.8954305,1 2,1 L6,1 L6,3 L2,3 L2,14 L13,14 L13,10 L15,10 Z M13.9971001,3.41421356 L7.70420685,9.70710678 L6.28999329,8.29289322 L12.5828865,2 L8.99710007,2 L8.99710007,0 L15.9971001,0 L15.9971001,7 L13.9971001,7 L13.9971001,3.41421356 Z" fillRule="evenodd"/></svg>
                    </Link> }
                </div>

                {/* { item.imageUrl && <img src={item.imageUrl} alt={item.title} /> } */}
            </div>;
        })}

        {/* <div className="flex justify-start">
            {deserializedItems.map(item=>{
                return <div key={item.id}>
                    {/* <h3>{item.title}</h3> */}
                    {/* <div>{item.title}</div> */}
                    {/* { item.imageUrl && <img src={item.imageUrl} alt={item.title} /> } /}
                </div>;
            })}
        </div> */}
    </Page>;
}
