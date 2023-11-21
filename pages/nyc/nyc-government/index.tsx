import Page from '@/components/global/Page';
import Image from 'next/image';
import Link from 'next/link';
import Flag from '@jcomponents/flag';

export default function NYCGoverment() {
    return <Page bottomPadding>
        <div className='flex justify-center'>
            <div className='relative w-[48ch]'>
                <h1 className='m:text-4xl my-3'>NYC Government</h1>
                <Flag
                    src='/image/patriotism/nyc-flag.jpg'
                    style={{
                        position: 'absolute',
                        top: '5ch',
                        left: '125ch',
                        zoom: .4
                    }}
                    className='m:hidden'
                />
            </div>
        </div>

        <h2>Curriculum</h2>
        {/* TODO: overarching course material */}

        <h3>Unit 0: Overall</h3>
        <Markdown title='Timeline' hyphenatedTitle='timeline' />
        

        <h3>Unit 1</h3>

        <h3>Unit 2</h3>
        <Link href='/nyc/nyc-government/Unit 2 Essay Division of Power within NYC.pdf' className='styled'>
            Division of Power Essay
        </Link>


        {/* <h2>About</h2> */}
        {/* <Image width={262.5} height={350} src="/nyc/nyc-government/municipal-building.jpg" alt="Municipal Building" className='inline' /> */}
        <h3>Attribution</h3>
        <p>Thank you, Mr. Kildahl.</p>
        <Image width={262.5} height={350} src="/nyc/nyc-government/joel-and-mr-kildahl.jpg" alt="Municipal Building" />

    </Page>;
}

export function Markdown({ title, hyphenatedTitle }: { title: string, hyphenatedTitle: string }) {
    return <Link href={`/nyc/nyc-government/${hyphenatedTitle}`} className='styled'>
        {title}
    </Link>;
}
