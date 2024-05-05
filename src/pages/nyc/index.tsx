import Page from '@/components/page/DefaultPage';
import Flag from '@jcomponents/flag';
import { Yt } from 'src/components/by-page/machines/helpers';
import Link from 'next/link';

export default function NYC() {
    /*
    Community board initiatives. Resolutions:
        maker spaces
        Video of me speaking
        NYC Government course (you can study)\
        EcoVendor
    */

    // function playGraysonYes() {
    //     new Audio('/audio/patriotism/grayson-yes.mp3').play();
    // }
    
    return <Page bottomPadding pathname='/nyc' seo={{
        title: 'Involvement in New York City',
        og: {
            image: '/image/patriotism/nyc-flag.jpg'
        }
    }}>
        <div className='flex justify-center'>
            <div className='relative w-[10ch]'>
                <h1>NYC</h1>
                <Flag
                    src='/image/patriotism/nyc-flag.jpg'
                    style={{
                        position: 'absolute',
                        top: '5ch',
                        left: '30ch',
                        zoom: .4
                    }}
                />
            </div>
        </div>


        <h2>Connecting Street Vendors to the Grid</h2>
        <p>I am running an initiative to connect NYC&apos;s street vendors to the grid with the Street Vendor Project and Mayor&apos;s Office of Climate and Environmental Justice so they do not have to use gas generators. <Link href='/connecting-street-vendors-to-the-grid'>Learn more</Link></p>

        
        <h2>NYC Government Course</h2>
        <p>From September 2023 to January 2024, I took an independent study in NYC Government with Mr. Kildahl.</p>
        <Link href='/nyc/nyc-government' className='button'>
            Here is the Self-Paced Course
        </Link>
        {/* <iframe width="560" height="315" className='mx-auto my-10 m:w-fit m:h-fit' src="https://www.youtube.com/embed/N1AjSex6jx0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
        <Yt>N1AjSex6jx0</Yt>

        <h2 id='cb1'>Manhattan Community Board 1 Member</h2>
        <p>Being a community board member has been an exciting and rewarding experience. I have enjoyed learning how NYC Government works, talking with different department liaisons, making friends with other board members, and am grateful to be a part of a group of inspiring involved community members.</p>
        <h3>My Initiatives</h3>
        <ul>
            <li>Advocated for adding maker spaces to middle schools in my district.</li>
            <li>Wrote to the DOT about electric ferries and made a budget request for electric ferries to the EDC (Budget Request for Electric Ferries.jpg).</li>
            <li>Advocated for Miyawaki forests in the resolution about the rotary tunnel (mentioned in <Link target='_blank' href='https://www.ebroadsheet.com/throwing-in-the-sponge/'>this Broadsheet article</Link>).</li>
            <li>Advocated to five elected officials for private school e-bus funds.</li>
        </ul>
        <Yt>stwfwzbFqQE</Yt>
        <br />
        <div>
            <span>Good ol&apos; Joe Cocker nicely describes the frustration of community board members:</span>
            <audio src="/nyc/inner-city-blues.opus" controls></audio>
        </div>
    </Page>;
}
