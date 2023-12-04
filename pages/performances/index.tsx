import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
import Link from 'next/link';
import Gallery from '@/components/gallery/Gallery';
import { useState } from 'react';
import { ytVideos } from './ytVideos';

export async function getServerSideProps() {
    const url=`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet&playlistId=PLPq06AMW3cIFOA3J8Z0cd1bMaKn6TV_9K&maxResults=50`;
    const buff=await fetch(url);
    const data=await buff.json();

    console.log('URL', url);
    console.log('Videos', data);
    
    return {
        props: {
            videos: data,
        }
    };
}

export default function Performances({ videos }: { videos: ytVideos }) {
    const [galleryOpen, setGalleryOpen]=useState<boolean>(false);
    const [index, setIndex]=useState<number>(0);
    
    return <Page bottomPadding seo={{
        title: 'Violin & Piano Performances',
        keywords: ['violin', 'piano', 'recitals'],
        description: 'Playing the violin over the years'
    }}>
        <h1 className='text-center'>Performances</h1>
        
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 10,
            marginBottom: 50
        }}>{
            videos?.items?.map((video, index)=>{
                const thumbnailUrl=video.snippet.thumbnails.high.url;

                return <div key={video.id} onClick={()=>{setIndex(index); setGalleryOpen(true);}} className='cursor-pointer my-1 mx-.5'>
                    <Image src={thumbnailUrl} alt={`Thumbnail for ${video.snippet.title}`} width='233' height='175' style={{
                        objectFit: 'cover',
                        width: 233,
                        height: 111,
                        border: '2px solid #00499c'
                    }} />
                    <div className='text-center'>{video.snippet.title}</div>
                </div>;
            })
        }</div>

        <Gallery
            images={videos?.items?.map(video=>({ videoId: video.snippet.resourceId.videoId, title: video.snippet.title }))} renderChildren={({videoId, title})=><div className='flex justify-center items-center h-full flex-col'>
                <iframe width='560' height='315' src={`https://www.youtube.com/embed/${videoId}`} title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
                <div className='text-xl font-bold mt-5 flex gap-3 items-center'>
                    <span>{title}</span>
                    <Link href={`https://www.youtube.com/watch?v=${videoId}`} target='_blank'>
                        <Image width='30' height='22' src='/image/performances/youtube-icon.png' alt='Open in YouTube' title='Open in YouTube' />
                    </Link>
                </div>
            </div>}
            {...{galleryOpen, setGalleryOpen, index, setIndex}}
        />
    </Page>;
}
