import { useState } from 'react';
import PerspectiveBody from '@/components/perspective/PerspectiveBody';
import { articles } from '@/components/perspective/articles-list';
import Image from 'next/image';
import Link from 'next/link';

export default function JoelsPerspective() { //List of articles
    type sortingMethodT='newest to oldest' | 'oldest to newest' | 'by category' | 'A-Z' | 'Z-A';
    const [sortingMethod, setSortingMethod]=useState<sortingMethodT>('newest to oldest');
    const sortedArticles=(()=>{
        switch (sortingMethod) {
            case 'newest to oldest': return articles.sort((a, b)=>b.date.getTime()-a.date.getTime());
            case 'oldest to newest': return articles.sort((a, b)=>a.date.getTime()-b.date.getTime());
            case 'by category':      return articles;
            case 'A-Z':              return articles.sort((a, b)=>a.name<b.name ? -1 : 1);
            case 'Z-A':              return articles.sort((a, b)=>a.name<b.name ? 1 : -1);
        }
    })();
    
    return <PerspectiveBody>
        <div className='flex justify-end mb-3'>
            <span>Sort by: </span>
            <select name='sorting-method' id='sorting-method' value={sortingMethod} onChange={e=>setSortingMethod(e.target.value as sortingMethodT)}>
                <option value='newest to oldest'>Newest to Oldest</option>
                <option value='oldest to newest'>Oldest to Newest</option>
                <option value='by category'>By Category</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
        </div>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
        }}>
            { sortedArticles.map(article=>(
                <Link key={article.hyphenatedName} href={`/perspective/${article.hyphenatedName}`}>
                    {/* Thumbnail Heights
                        CSS Size
                            image height: 113px
                            image width: 200px

                        Actual Image Size (2x CSS Size)
                            image height: 225px
                            image width: 400px
                    */}
                    <div className='p-3 border-gray-400 border-[1px] m-2 rounded-xl shadow-md bg-gray-50 hover:shadow-slate-300 hover:shadow-lg cursor-pointer grid place-items-center' style={{
                        height: '220px',
                        width: '250px',
                    }}>
                        {/* <div>{JSON.stringify(article)}</div> */}
                        <Image src={`/image/perspective/${article.hyphenatedName}/thumbnail.jpg`} alt={'Article thumbnail'} width='200' height='113' />
                        <div>{article.name}</div>
                    </div>
                </Link>
            )) }
        </div>
    </PerspectiveBody>;
}
