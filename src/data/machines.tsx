import Link from 'next/link';
import Image from 'next/image';
import { Machine, DefaultTemplate, Yt } from '../components/by-page/machines/helpers';
import Button from '@jcomponents/button';

export const machines: Machine[]=[
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('July 15, 2021'), //sort by date of project
            title: 'Buseroo Kiosk' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '2021-2023',
            title: <>Buseroo Kiosk</>,
            desc: <>
                <div className='d:flex d:gap-9 justify-around'>
                    <Image src='/image/machines/kiosk-embed/kiosk.jpg' alt='Playing Chess' width='200' height='250' />
                    <iframe src="/image/machines/kiosk-embed/index.html" width='100%' height='100%' />
                </div>
            </>
        })
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('July 15, 2021'), //sort by date of project
            title: '3D-Printed Chess Board' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '10.11.2023',
            title: <>3D-Printed Chess Board</>,
            desc: <>
                <div className='d:flex d:gap-9'>
                    <div className='d:w-[50%]'>
                        I designed the pieces in Blender. <a href='/chess/Chess Pieces.zip'><Button>Download 3D Models</Button></a>
                        <Image src='/image/machines/playing-chess.jpg' alt='Playing Chess' width='240' height='148' />
                    </div>
                    <div className='flex m:mt-3'>
                        <video src="/image/machines/Chess Board.mp4" autoPlay loop width={300} />
                        {/* <iframe onLoad={e=>console.log(e)} width={560*.6} height={315*.6} src="https://www.youtube.com/embed/9vxgMEvz2uY?si=GgPF4nxeEC7yVSSc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> */}
                        {/* <iframe src="http://www.youtube.com/v/9vxgMEvz2uY?version=3&loop=1" /> */}
                    </div>
                </div>
            </>
        })
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('July 15, 2021'), //sort by date of project
            title: 'Energy T-Shirt' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '7.15.2021',
            title: <>Energy T-Shirt</>,
            desc: <>
                <div className='d:flex d:gap-9'>
                    <div className='d:w-[50%]'>
                        This t-shirt makes a noise proportional to the amount of light the solar panels receive, also powering a green fan. There is a back-up battery supply for the lights.
                    </div>
                    <div className='flex m:mt-3'>
                        <Image src='/image/machines/energy-t-shirt.jpg' height='230' width='160' alt='Energy T-Shirt Photo' />
                        <Image src='/image/machines/energy-t-shirt2.jpg' height='230' width='243' alt='Energy T-Shirt Photo Closeup' />
                    </div>
                </div>
            </>
        })
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('July 15, 2021'), //sort by date of project
            title: 'Guardbox' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '7.15.2021',
            title: <>Guardbox <small>(Arduino Safe)</small></>,
            desc: <>
                <span className='d:w-[60%]'>
                    The challenge was to create and present a safe in under 24 hours using Arduino. <br/> Code: <Link  href='https://github.com/JoelGrayson/Guardbox'>github.com/JoelGrayson/Guardbox</Link>
                </span>
                <div style={{
                    position: 'absolute',
                    left: 490,
                    top: 10
                }}>
                    <Image src='/image/machines/eater-inner-prototype.jpg' width='300' height='200' alt='Eater Inner Prototype' style={{ borderRadius: 10 }} />
                    <p className='text-center'>Inner circuitry that connects the Arduino, number pad, lock, screen, and lights.</p>
                </div>
                <Yt width={320} className='mt-3'>DbfRmZZx4VA</Yt>
            </>,
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
            desc: <>
            <div className='flex relative gap-6'>
                <div className='w-[80%]'>
                    <div>This project depicts the dystopian world many people imagine at the thought of nuclear energy.
                    As a nuclear proponent myself (I wrote an article on my thoughts here), I wanted to explore the fear.</div>
                    <div>Website: <Link  href='https://joelgrayson.github.io/Nuclear-Dystopia'>joelgrayson.github.io/Nuclear-Dystopia</Link></div>
                    <div>Code: <Link  href='https://github.com/JoelGrayson/Guardbox'>github.com/JoelGrayson/Guardbox</Link></div>
                </div>
                <Yt width={300}>f52mLKATghw</Yt>
            </div>
        </>
            // desc: <>
            //     Game made in C++ for the Arduino.
            //     <br/> Code: <Link href='https://github.com/JoelGrayson/Eater-Arduino-Game'>github.com/JoelGrayson/Eater-Arduino-Game</Link>
            // </>,
            // yt: 'f52mLKATghw'
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
            desc: <>
                <div className='flex relative gap-6'>
                    <div className='w-[80%]'>
                        <div>This project depicts the dystopian world many people imagine at the thought of nuclear energy.
                        As a nuclear proponent myself (I wrote an article on my thoughts here), I wanted to explore the fear.</div>
                        <div>Website: <Link  href='https://joelgrayson.github.io/Nuclear-Dystopia'>joelgrayson.github.io/Nuclear-Dystopia</Link></div>
                        <div>Code: <Link  href='https://github.com/JoelGrayson/Guardbox'>github.com/JoelGrayson/Guardbox</Link></div>
                    </div>
                    <Link  href='https://joelgrayson.github.io/Nuclear-Dystopia/' target='_blank'>
                        <Image width='170' height='154' className='hover:shadow-xl hover:outline-2 outline-double transition-none outline-0' src='/image/machines/nuclear-dystopia-thumbnail.jpg' alt='Thumbnail' />
                    </Link>
                </div>
            </>
        })
    },
    {
        sortBy: {
            rank: 2, //sort by best project
            date: new Date('May 6, 2021'), //sort by date of project
            title: 'Picnic Tables' //sort alphabetically
        },
        html: <div className='relative h-[393px]'>
            <Image className='absolute top-0 rounded-xl' src='/image/machines/picnic-table.jpg' width='300' height='242' alt='Picnic Table' />
            <Image className='absolute top-48 left-64 rounded-xl' src='/image/machines/constructing-picnic-table.gif' width='237' height='164' alt='Constructing Picnic Table' />
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
            date: new Date('May 30, 2020'), //sort by date of project
            title: 'Tesla Coil' //sort alphabetically
        },
        html: <div className='relative h-[270px]'>
            <Image src='/image/machines/tesla-coil.jpg' width='350' height='213' alt='Fundraising for American Red Cross' style={{
                position: 'absolute',
                left: 0,
                top: 10,
                borderRadius: 10
            }} />
            <Image src='/image/machines/building-tesla-coil.jpg' width='263' height='180' alt='Building the Tesla Coil' style={{
                position: 'absolute',
                left: 370,
                top: 65,
                borderRadius: 10
            }} />
            <div style={{
                position: 'absolute',
                left: 380
            }}>
                <span>5.2020</span>
                <h3 style={{ fontSize: '1.4rem', marginTop: -5 }}>Tesla Coil</h3>
            </div>
        </div>
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 1, 2020'), //sort by date of project
            title: 'Stilts' //sort alphabetically
        },
        html: <div className='relative h-[300px]'>
            <div>
                <span>5.2020</span>
                <h3 style={{fontSize: '1.4rem'}}>Stilts</h3>
                <p>Made in maker class.</p>
            </div>
            <div style={{
                position: 'absolute',
                right: 50,
                top: 0
            }}>
                <Yt>-McMpUTj_SQ</Yt>
            </div>
        </div>
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('Apr 25, 2020'), //sort by date of project
            title: 'Piernátil' //sort alphabetically
        },
        html: <div className='relative h-[300px]'>
            <Yt>iKWFrjWFiek</Yt>
            <div style={{
                position: 'absolute',
                left: 500,
                top: 0
            }}>
                <span>4.2020</span>
                <h3 style={{fontSize: '1.4rem'}}>Piernátil</h3>
                <p>Mi anuncio para una computadora inventada. Ese video fue parte de mi clase de español.</p>
            </div>
        </div>
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('Nov 3, 2019'), //sort by date of project
            title: 'Wooden Vending Machine' //sort alphabetically
        },
        html: <div className='relative h-[300px] flex'>
            <div className='max-w-[290px]'>
                <span>2019</span>
                <h3 style={{fontSize: '1.4rem'}}>Wooden Vending Machine</h3>
                <p>Accepts a quarter for resistors. Uses the same mechanism as my cardboard vending machine except made from a more durable material, wood.</p>
            </div>
            <div style={{
                position: 'absolute',
                left: 300
            }}>
                <Yt>rtzCYWZvnCQ</Yt>
            </div>
        </div>
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 31, 2017'), //sort by date of project
            title: 'Fundraising for the American Red Cross' //sort alphabetically
        },
        html: <div className='relative h-[380px]'>
            <Image src='/image/machines/lemonade-1.jpg' width='343' height='240' alt='Fundraising for American Red Cross' style={{
                position: 'absolute',
                left: 0,
                top: 0,
                borderRadius: 10
            }} />
            <Image src='/image/machines/lemonade-2.jpg' width='222' height='232' alt='Customer interacting with stand' style={{
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
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 31, 2016'), //sort by date of project
            title: 'Wooden Pinball Machine' //sort alphabetically
        },
        html: <div className='relative h-[300px]'>
            <Image src='/image/machines/wooden-pinball-machine.jpg' width='343' height='268' alt='Fundraising for American Red Cross' style={{
                position: 'absolute',
                left: 0,
                top: 0,
                borderRadius: 10
            }} />
            <div style={{
                position: 'absolute',
                left: 380
            }}>
                <span>2016</span>
                <h3 style={{fontSize: '1.4rem'}}>Wooden Pinball Machine</h3>
                <p>Made after school in my school&apos;s woodshop.</p>
                {/* <Link href='https://www.youtube.com/watch?v=uZWBtcp2BMU&list=PLPq06AMW3cIGYmcroupuIOC-vkwSVSW0I'>Demo video here</Link> */}
                <Yt width={300} className='mt-1'>uZWBtcp2BMU</Yt>
            </div>
        </div>
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 31, 2016'), //sort by date of project
            title: 'Cardboard Fortune Teller' //sort alphabetically
        },
        html: <div className='relative h-[300px] flex'>
            <Yt>KP3Bd6e4nGQ</Yt>
            <div style={{
                position: 'absolute',
                left: 500
            }}>
                <span>2016</span>
                <h3 style={{fontSize: '1.4rem'}}>Cardboard Fortune Teller</h3>
                <p>I used to love collecting cardboard from my building&apos; recycling bin and Staples to build machines like this.</p>
            </div>
        </div>
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 30, 2016'), //sort by date of project
            title: 'Cardboard Vending Machine' //sort alphabetically
        },
        html: <div className='relative h-[300px] flex'>
            <div>
                <span>2016</span>
                <h3 style={{fontSize: '1.4rem'}}>Cardboard Vending Machine</h3>
                <p>Accepts a quarter for a tic-tac.</p>
            </div>
            <div style={{
                position: 'absolute',
                left: 300
            }}>
                <Yt>g3gHsebEoJQ</Yt>
            </div>
        </div>
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('Sep 30, 2016'), //sort by date of project
            title: 'Pop Quiz-o-meter' //sort alphabetically
        },
        html: <div className='relative h-[230px] flex'>
            <Image src='/image/machines/pop-quiz-o-meter.gif' width='150' height='200' alt='Pop Quiz-o-meter' style={{
                position: 'absolute',
                left: 120,
                top: 50,
                borderRadius: 10
            }} />
            <div style={{
                position: 'absolute',
                left: 370
            }}>
                <span>circa 2015</span>
                <h3 style={{fontSize: '1.4rem'}}>Pop Quiz-o-meter</h3>
                <p>Used throughout middle school to predict the likelihood of a pop quiz in different classes. Every time there was a class, the meter went up. When there was a quiz in class, the class knob returned to 0 and a sharpie mark indicated where the meter was. This forecast told me when I should be prepared.</p>
            </div>
        </div>
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 30, 2016'), //sort by date of project
            title: 'The Gumball Machine' //sort alphabetically
        },
        html: <div className='relative h-[230px] flex mx-[100px]'>
            <div>
                <span>circa 2015</span>
                <h3 style={{fontSize: '1.4rem'}}>The Gumball Machine</h3>
                <p>My oldest creation. It stores marbles.</p>
            </div>
            <Image src='/image/machines/gumball-machine.jpg' width='150' height='200' alt='Gumball Machine' style={{
                position: 'absolute',
                right: 50,
                top: 0,
                borderRadius: 10
            }} />
        </div>
    },
];
