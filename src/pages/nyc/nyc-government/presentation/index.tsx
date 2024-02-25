import Page from '@/components/page/DefaultPage';
import Flag from '@jcomponents/flag';
import Link from 'next/link';

export default function NYCGoverment() {
    return <Page bottomPadding seo={{
        title: 'NYC Government Presentation',
    }}>
        <div className='flex justify-center'>
            <div className='relative w-[60ch]'>
                <h1 className='text-4xl my-10'>NYC Government Presentation</h1>
                <Flag
                    src='/image/patriotism/nyc-flag.jpg'
                    style={{
                        position: 'absolute',
                        top: '5ch',
                        left: '138ch',
                        zoom: .4
                    }}
                    className='m:hidden'
                />
            </div>
        </div>
 
        <iframe width="560" height="315" className='mx-auto my-10 m:w-fit m:h-fit' src="https://www.youtube.com/embed/N1AjSex6jx0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        <p className='mb-[40px]'>Become well-versed in NYC&apos;s government in 30 minutes. Want to learn more? Check out <Link href="/nyc/nyc-government">the curriculum</Link>.</p>
        
        <h3 className='text-center'>Slides</h3>
        <div className='flex justify-end'>
            <Link href='/nyc/nyc-government/presentation/NYC Government.pptx' download className='button unstyled block w-fit'>
                <svg xmlns="http://www.w3.org/2000/svg" className='btn-icon' viewBox="0 0 48 48" width="35px" height="35px"><path fill="#dc4c2c" d="M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z"/><path fill="#f7a278" d="M26,6v18h18C44,14.059,35.941,6,26,6z"/><path fill="#c06346" d="M26,6C16.059,6,8,14.059,8,24h18V6z"/><path fill="#9b341f" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"/><path fill="#fff" d="M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z"/></svg>
                Download Slides
            </Link>
        </div>
        {[...Array(31)].map((_, i)=>
            /* eslint-disable-next-line */
            <img key={i} src={`/nyc/nyc-government/presentation/slides/${i+1}.jpg`} alt={`Slide #${i+1}`} style={{
                border: '1px solid black',
                margin: 3
            }} />
        )}
    </Page>;
}
