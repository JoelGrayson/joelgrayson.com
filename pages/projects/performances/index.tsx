import Page from '../../../components/Page';
import Link from 'next/link';

export async function getServerSideProps() {
    const url=`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.GCLOUD_API_KEY}&part=snippet&playlistId=PLPq06AMW3cIFOA3J8Z0cd1bMaKn6TV_9K`;
    const buff=await fetch(url);
    const data=await buff.json();

    return {
        props: {
            videos: data,
        }
    }
}

export default function Performances({videos}: any) {
    console.log('Videos', videos);

    return (<Page padding>
        <h1 className='text-center'>Performances</h1>
        {/* <p>Coming soon!</p> */}
        {/* https://www.youtube.com/playlist?list=PLPq06AMW3cIFOA3J8Z0cd1bMaKn6TV_9K */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 10
        }}>
            {videos.items.map((video: any)=>{
                const ytUrl=`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`;
                let thumbnailUrl=video.snippet.thumbnails.high.url;
                // if (video.snippet.thumbnails?.maxres?.url) //include higher resolution if possible
                //     thumbnailUrl=video.snippet.thumbnails?.maxres?.url;

                console.log(thumbnailUrl);
                return (
                    <div key={video.id}>
                        <a><Link href={ytUrl}>
                            <img src={thumbnailUrl} alt={`Thumbnail for ${video.title}`} />
                        </Link></a>
                    </div>
                )
                // return <li key={video.id}>{JSON.stringify(video)}</li>
            })}
        </div>
    </Page>);
}
