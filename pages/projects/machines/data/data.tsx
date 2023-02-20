import Link from 'next/link';
import Image from "next/image";
import { Machine, DefaultTemplate, Yt } from './helpers';

export const machines: Machine[]=[
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('July 15, 2021'), //sort by date of project
            title: 'Guardbox' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '7.15.2021',
            title: <>Guardbox <small>(Arduino Safe)</small></>,
            desc: (<>
                The challenge was to create and present a safe in under 24 hours using Arduino. <br/> Code: <Link href='https://github.com/JoelGrayson/Guardbox'><a>github.com/JoelGrayson/Guardbox</a></Link>
            </>),
            yt: 'DbfRmZZx4VA'
        })
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('July 12, 2021'), //sort by date of project
            title: 'Eater' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '7.12.2021',
            title: <>Eater <small>(Arduino Game)</small></>,
            desc: (<>
                The challenge was to create and present a safe in under 24 hours using Arduino. <br/> Code: <Link href='https://github.com/JoelGrayson/Eater-Arduino-Game'><a>github.com/JoelGrayson/Eater-Arduino-Game</a></Link>
            </>),
            yt: 'f52mLKATghw'
        })
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 27, 2021'), //sort by date of project
            title: 'Nuclear Dystopia' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '5.27.2021',
            title: <>Nuclear Dystopia</>,
            desc: (<>
                <div className='flex relative gap-6'>
                    <div className='w-[80%]'>
                        <div>This project depicts the dystopian world many people imagine at the thought of nuclear energy.
                        As a nuclear proponent myself (I wrote an article on my thoughts here), I wanted to explore the fear.</div>
                        <div>Website: <Link href="https://joelgrayson.github.io/Nuclear-Dystopia"><a>joelgrayson.github.io/Nuclear-Dystopia</a></Link></div>
                        <div>Code: <Link href="https://github.com/JoelGrayson/Guardbox"><a>github.com/JoelGrayson/Guardbox</a></Link></div>
                    </div>
                    <Link href='https://joelgrayson.github.io/Nuclear-Dystopia/' target='_blank'>
                        <div className='w-[50%] cursor-pointer'>
                            <img className='hover:shadow-xl hover:outline-2 outline-double transition-none outline-0' src='/image/machines/nuclear-dystopia-thumbnail.jpg' alt='Thumbnail' />
                        </div>
                    </Link>
                </div>
            </>)
        })
    },
    {
        sortBy: {
            rank: 2, //sort by best project
            date: new Date('May 6, 2021'), //sort by date of project
            title: 'Picnic Tables' //sort alphabetically
        },
        html: <div className='relative h-[400px]'>
            <img className='absolute top-0 rounded-xl' src='/image/machines/picnic-table.jpg' width='348px' height='258px' />
            <img className='absolute top-52 left-72 rounded-xl' src='/image/machines/constructing-picnic-table.gif' width='237px' height='164px' />
            <div className='absolute left-[370px] top-0'>
                <p>5.6.21</p>
                <h3>Picnic Tables</h3>
                <p>Together with the SFC, we constructed and painted two picnic tables for the lawn.</p>
            </div>
        </div>
        // html: DefaultTemplate({
        //     date: '4.12.21',
        //     title: <>Deepfaking Dean <small>(April Fools)</small></>,
        //     desc: <div>At a grade meeting for April Fools, I surprised the students and faculty by pretending to be my dean through a deepfake. For the first few minutes, the students had no idea I was fake, but I kept saying stranger and stranger announcements such as the school was shut down because of a crocodile infestation (the school often shut down due to outbreaks) until the real Mr. Hager came in and all of a sudden there were two Mr. Hagers! We argued over who is the real Mr. Hager. Then, I spammed the meeting with three more Mr. Hager&apos;s, who all claimed to be the real Mr. Hager. It took a few months to prepare with OBS, python colab, and eGPUs but it was totally worth it.</div>,
        //     yt: 'OnEDlj8JdeA'
        // })
    },
    {
        sortBy: {
            rank: 2, //sort by best project
            date: new Date('April 12, 2021'), //sort by date of project
            title: 'Deepfaking Dean (April Fools)' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '4.12.21',
            title: <>Deepfaking Dean <small>(April Fools)</small></>,
            desc: <div>At a grade meeting for April Fools, I surprised the students and faculty by pretending to be my dean through a deepfake. For the first few minutes, the students had no idea I was fake, but I kept saying stranger and stranger announcements such as the school was shut down because of a crocodile infestation (the school often shut down due to outbreaks) until the real Mr. Hager came in and all of a sudden there were two Mr. Hagers! We argued over who is the real Mr. Hager. Then, I spammed the meeting with three more Mr. Hager&apos;s, who all claimed to be the real Mr. Hager. It took a few months to prepare with OBS, python colab, and eGPUs but it was totally worth it.</div>,
            yt: 'OnEDlj8JdeA'
        })
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 27, 2021'), //sort by date of project
            title: 'Fundraising for the American Red Cross' //sort alphabetically
        },
        html: <div className='relative h-[380px]'>
            <img src='/image/machines/lemonade-1.jpg' width='343' height='240' alt='Fundraising for American Red Cross' style={{
                position: 'absolute',
                left: 0,
                top: 0,
                borderRadius: 10
            }} />
            <img src='/image/machines/lemonade-2.jpg' width='222' height='232' alt='Customer interacting with stand' style={{
                position: 'absolute',
                left: 310,
                top: 120,
                borderRadius: 10
            }} />
            <div style={{
                position: 'absolute',
                left: 380
            }}>
                <span>5.27.2021</span>
                <h3 style={{fontSize: '1.4rem'}}>Fundraising for the American Red Cross</h3>
            </div>
        </div>
    }
];
