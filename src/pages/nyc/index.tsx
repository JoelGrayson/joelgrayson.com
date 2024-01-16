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
    
    return <Page bottomPadding pathname='/nyc'>
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
        <p>Running an initiative to connect NYC&apos;s street vendors to the grid so they do not have to use gas generators. <Link href='/connecting-street-vendors-to-the-grid'>Learn more</Link></p>

        
        <h2>NYC Government Course</h2>
        <p>From September 2023 to January 2024, I am taking an independent study in NYC Government with Mr. Kildahl.</p>
        <p>Since I have benefited so much from resources like Khan Academy and MIT OCW, I am publishing our curriculum here.</p>
        <Link href='/nyc/nyc-government' className='button'>
            Go to NYC Government Self-Paced Course
        </Link>
        <p>I also created a visualization of NYC&apos;s budget <Link href='/nyc/nyc-government/nyc-budget'>here</Link>.</p>

        <h2>Manhattan Community Board 1 Member</h2>
        <p>Being a community board member has been an exciting and rewarding experience. I have enjoyed learning how NYC Government works, talking with different department liaisons, making friends with other board members, and am grateful to be a part of a group of inspiring involved community members.</p>
        <h3>My initatives</h3>
        <ul>
            <li>Created a resolution to add maker spaces to middle schools in my district</li>
            <li>Wrote to the DOT about electric ferries and made a budget request for electric ferries to the EDC (Budget Request for Electric Ferries.jpg)</li>
            <li>Advocated for Miyawaki forests in the resolution about the rotary tunnel (mentioned in <a href='https://www.ebroadsheet.com/throwing-in-the-sponge/'>this Broadsheet article</a>)</li>
            <li>Advocated to five elected officials for private school e-bus funds.</li>
        </ul>
        <Yt>stwfwzbFqQE</Yt>
        <br />
        <div>
            <span>Good ol&apos; Joe Cocker nicely describes the frustration of community board members:</span>
            <audio src="/nyc/inner-city-blues.opus" controls></audio>
        </div>

        <br />

        {/* Play Inner City Blues https://www.youtube.com/watch?v=u77d7P486Sc */}
        {/* <div className='flex items-center gap-3 p-3'>
            <div style={{
                width: '200',
                height: '271',
                position: 'relative'
            }}>
                <Image src='/image/patriotism/City Hall Rotunda.jpg' width='200' height='271' alt='Portrait in City Hall Rotunda' />
                <Tooltip title='Voting in community board'>
                    <PlayAudioIcon
                        style={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8,
                        }}
                        onClick={playGraysonYes}
                    />
                </Tooltip>
            </div>
            <div>
                <p>I am a proud product of the Financial District of Lower Manhattan.</p>
            </div>
        </div> */}
    </Page>;
}
