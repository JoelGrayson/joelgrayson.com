import Image from 'next/image';
import Link from 'next/link';
import { article as articleT } from 'src/data/blog/types';

export default function ArticleThumbnail({article}: {article: articleT}) { //rectangle with thumbnail and title
    return <Link href={`/blog/${article.hyphenatedTitle}`} style={{width: 'fit-content', margin: '0.5rem'}} className='unstyled' tabIndex={0}>
        {/* Thumbnail Heights
            CSS Size
                image height: 113px
                image width: 200px

            Actual Image Size (2x CSS Size)
                image height: 225px
                image width: 400px
        */}
        <div className='p-3 border-gray-400 border-[1px] rounded-xl shadow-md bg-gray-50 hover:shadow-slate-300 hover:shadow-lg cursor-pointer grid place-items-center' style={{
            height: '220px',
            width: '250px',
        }}>
            {/* <div>{JSON.stringify(article)}</div> */}
            <Image src={`/image/blog/${article.hyphenatedTitle}/thumbnail.jpg`} alt='Article thumbnail' width='200' height='113' />
            <div className='text-center' style={{
                fontFamily: 'AvenirMedium'
            }}>{article.title}</div>
        </div>
    </Link>;
}
