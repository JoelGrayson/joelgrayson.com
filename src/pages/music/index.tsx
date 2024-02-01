import Page from '@/components/page/DefaultPage';
import Performances from '@/components/page/music/Performances';
import Compositions from '@/components/page/music/Compositions';
import { ytVideos } from '../../components/page/music/ytVideos';

export async function getServerSideProps() {
    const url=`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet&playlistId=PLPq06AMW3cIFOA3J8Z0cd1bMaKn6TV_9K&maxResults=50`;
    const buff=await fetch(url);
    const data=await buff.json();

    return {
        props: {
            videos: data,
        }
    };
}

export default function Music({ videos }: { videos: ytVideos }) {
    return <Page
        pathname='/performances'
        seo={{
            title: 'Violin & Piano Performances',
            keywords: ['violin', 'piano', 'recitals'],
            description: 'Playing the violin over the years'
        }}
        bottomPadding
    >
        <h1 className='text-center'>Music</h1>
        <Compositions />
        <Performances videos={videos} />
    </Page>;
}
