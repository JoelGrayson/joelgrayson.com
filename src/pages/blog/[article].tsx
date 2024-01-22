// Blog page custom 404 page that shows other articles to read

import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { BlogArticles } from '.';
import BlogPage from '@/components/blog/BlogPage';

export default function ArticleNotFound() {
    const article=useRouter().query.article;

    const shrugRef=useRef() as React.MutableRefObject<HTMLImageElement>;

    useEffect(()=>{
        gsap.fromTo(shrugRef.current, {
            // opacity: 0,
            zoom: 0
        }, {
            // opacity: 1,
            zoom: 1,
            duration: 1,
            ease: 'back' //'elastic'
        });
    }, []);

    return <BlogPage seo={{ noIndex: true }}>
        <div className='flex justify-center items-center pb-20'>
            <div className='left w-[500px] h-[350px] grid place-items-center'>
                <Image ref={shrugRef} width='455' height='326' src='/image/joel/shrugging-2023.webp' alt='Shrug' className='relative top-3' />
            </div>
            <div className='right flex flex-col items-center gap-8'>
                <h1 className='text-5xl font-bold'>Article Not Found</h1>
                <p>The article &quot;{article}&quot; does not exist. Below are the list of articles.</p>
            </div>
        </div>

        <BlogArticles />
    </BlogPage>;
}
