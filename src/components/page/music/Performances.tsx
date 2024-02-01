import Image from 'next/image';
import Link from 'next/link';
import Gallery from 'src/components/gallery/Gallery';
import { ytVideos } from './ytVideos';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';

const gridStyle={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 10,
    marginBottom: 50
};

export default function Performances({ videos }: { videos: ytVideos }) {
    const [galleryOpen, setGalleryOpen]=useState<boolean>(false);
    const [index, setIndex]=useState<number>(0);
    
    return <>
        <h2>Performances</h2>
        <div style={gridStyle}>{
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
    </>;
}
