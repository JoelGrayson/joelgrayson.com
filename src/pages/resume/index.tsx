import SEBLogo from "src/components/by-page/home/SEB Logo";
import { css } from "@emotion/css";
import Button from "@jcomponents/button";
import Image from "next/image";
import Link from "next/link";

export default function Resume() {
    return <div className={css`
        * {
            transition: all 0s ease, background-color .3s ease;
        }

        #root {
            max-width: 830px;
        }
        #root>* {
            padding-left: 25px;
            padding-right: 25px;
        }
        #root>h3 {
            margin-top: 1rem;
        }
        #root li {
            position: relative;
            list-style-type: none;
            margin-left: 0;
        }
        #root .date {
            position: absolute;
            right: 0;
            top: 0;
        }
        #root .description {
            color: #666;
            font-size: 0.9rem;
            // no bullet point
            list-style-type: none;
        }
        .indent {
            padding-left: 3rem;
        }

        .section {
            //pb-6 pt-1 rounded-lg
            padding-bottom: 24px;
            padding-top: 4px;
            border-radius: 8px;
        }

        .description {
            max-width: calc(100% - 4rem /* size of year */);
        }
    `}>
        <div id="root" className="j_container relative flex flex-col">
            <h1 className='text-center text-[46px] pt-4'>Joel Grayson</h1>

            {/* Go to Site Button */}
            <Link href="/" className="absolute top-12 left-8 unstyled">
                <Button>
                    Go to Site
                </Button>
            </Link>

            {/* Export/Download Button */}
            <a href="https://docs.google.com/document/d/1KQD6eFb9rgbHEaR4BImEVhEnJuohLjokrUrJYhuAgCk/export?format=pdf" target="_blank" className="absolute top-10 right-8 unstyled">
                <Button>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={Button.Icon} width={20} height={20}><g id="info"/><g id="icons"><g id="save"><path d="M11.2,16.6c0.4,0.5,1.2,0.5,1.6,0l6-6.3C19.3,9.8,18.8,9,18,9h-4c0,0,0.2-4.6,0-7c-0.1-1.1-0.9-2-2-2c-1.1,0-1.9,0.9-2,2    c-0.2,2.3,0,7,0,7H6c-0.8,0-1.3,0.8-0.8,1.4L11.2,16.6z"/><path d="M19,19H5c-1.1,0-2,0.9-2,2v0c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v0C21,19.9,20.1,19,19,19z"/></g></g></svg>
                    PDF
                </Button>
            </a>


            <h3>Accomplishments</h3>

            <div className="section hover:bg-green-100">
                <h4>Climate Change</h4>
                <ul>
                    <li>
                        <Image src='/image/ccc/solar-for-riverdale/solar-panel.png' alt='solar panel' width={26} height={20}
                            className='inline bottom-1 relative'
                            style={{ right: 4 }}
                        />
                        <span>Brought 410 kW solar installation to my school, enough to power 40 households.</span>    
                        <span className="date">2021&ndash;present</span>
                        <div className="description indent">Collected rooftop measurements, created solar models in HelioScope, gathered quotes from several installers, researched legal and financial aspects, and presented to administration and Board of Trustees.</div>
                    </li>
                    <li className='mb-2'>
                        <SEBLogo size={25} inline style={{ marginLeft: 4, marginRight: -4, top: 7, right: 4 }} />
                        <span>Founded <a href='https://studentsforelectricbuses.org'>Students for Electric Buses</a>, multi-school coalition, to electrify bus fleets.</span>
                        <span className="date !top-[5px]">2021&ndash;present</span>
                    </li>
                    <li>
                        <Image src='/image/ccc/electric-leaf-blowers/electric-leaf-blower.png' alt='leaf blower' width={20} height={13} className='relative bottom-[3px] mr-1 inline' />
                        <span>Electric Leaf Blowers</span>
                        <span className="date">2022</span>
                        <div className='description indent'>Convinced my school&apos;s facilities team to switch from gas to electric leaf blowers.</div>
                    </li>
                    <li>
                        <Image src='/image/ccc/stopping-bus-idling/stopping-bus-idling.png' alt='stopping-bus-idling' width={20} height={13} className='relative bottom-[3px] mr-1 inline' />
                        <span>Stopping Bus Idling</span>
                        <span className="date">2022</span>
                        <div className="description indent">Wrote to bus contractor to enforce <a href='https://portal.311.nyc.gov/article/?kanumber=KA-02222'>NYC&apos;s law banning bus idling</a>.</div>
                    </li>
                    <li className='mb-2 mt-2'>
                        <span>Presented to middle school, upper school, and Riverdale alumni on climate solutions.</span>
                        <span className="date">2021&ndash;23</span>
                    </li>
                    <li className='mb-2'>
                        <span>Head of Sustainability Club (member 2021&ndash;23).</span>
                        <span className="date">2022&ndash;24</span>
                    </li>
                    <li>
                        <span>Completed En-ROADS ambassador training program (climate educator).</span>
                        <span className="date">2022&ndash;present</span>
                    </li>
                </ul>
            </div>
            
            <div className="section hover:bg-blue-100">
                <h4>Software</h4>
                <ul>
                    <li>
                        <Image src='/image/home/buseroo-logo.png' alt='buseroo-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                        <span><a href="https://buseroo.com">Buseroo.com</a></span>
                        <span className="date">2021&ndash;23</span>
                        <div className="description indent">kiosk and website for students to find closest bus to any address.</div>
                    </li>
                    <li>
                        <Image src='/image/home/homework-checker-logo.png' alt='homework-checker-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                        <span><a href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'>Homework Checker</a></span>
                        <span className="date">2021&ndash;22</span>
                        <div className="description indent">Chrome extension helping 1000 students manage homework.</div>
                    </li>
                    <li>
                        <Image src='/image/home/focus-logo.png' alt='focus-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                        <span><a href="https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf">Focus</a></span>
                        <span className="date">2022</span>
                        <div className="description indent">Chrome extension helping 400+ people write distraction-free.</div>
                    </li>
                    <li>
                        <Image src='/image/lirong-art/lirong-art.png' alt='lirongart-logo' width={16.8125} height={30} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                        <span><a href='https://lirongart.com'>LirongArt.com</a></span>
                        <span className="date">2020</span>
                        <div className="description indent">online gallery showcasing my mom’s paintings.</div>
                    </li>
                    <li>
                        {/* TODO: icon */}
                        <span>&emsp;&nbsp;Download link generators</span>
                        <span className="date">2021</span>
                        <div className="description indent">Tools for cloud storage used 17,000 times.</div>
                    </li>
                </ul>
            </div>

            <div className="section hover:bg-gray-200">
                <h3>Education</h3>
                <div className='relative'>
                    <span>Riverdale Country School</span>
                    <span className='date'>2017&ndash;24</span>
                </div>
                <div>Honors: Geometry, Algebra II, Precalculus, Spanish I&ndash;VII, Biology II, Chemistry II, Physics II</div>
                <div>GPA: 3.94 (out of 4.0), SAT: 1560</div>
            </div>


            <div className="section hover:bg-red-100">
                <h3>Activities</h3>
                <div className='relative'>
                    <span className='description'>Manhattan Community Board 1 member: Environmental and Youth & Ed Committees.</span>
                    <span className='date'>2023&ndash;24</span>
                </div>
                <div className='relative'>
                    <span className='description'>Researched novel compound at Lee Lab in NYU Tandon&apos;s seven-week ARISE program.</span>
                    <span className='date relative'>2023</span>
                </div>
                <div className='relative'>
                    <span className='description'>Grade representative for five years in student government.</span>
                    <span className='date'>2019&ndash;present</span>
                </div>
                <div className='relative'>
                    <span className='description'>Completed MIT xPRO&apos;s Introduction to Quantum Computing four-week course.</span>
                    <span className='date'>2023</span>
                </div>
                <div className='relative'>
                    <span className='description'>Interned for the Stone House Group (energy efficiency consultants).</span>
                    <span className='date'>2021</span>
                </div>
                <div className='relative'>
                    <span className='description'>Summer courses: NY Math Circle, Center for Talented Youth, Brown, Tufts, BU.</span>
                    <span className='date'>2015&ndash;22</span>
                </div>
                <div className='relative'>
                    <span className='description'>Violin: Praeludium & Allegro, Spring, Bach&apos;s Concerto No. 1 recitals; Interlochen.</span>
                    <span className='date'>2011&ndash;present</span>
                </div>
                <div className='relative'>
                    <span className='description'><a href='https://youtube.com/SonAndFather'>YouTube channel</a> with father-son comedy, project records, and claymation.</span>
                    {/* Wrote, acted, filmed, and edited 34 comedy videos with my father since age 11, created nine9 stop motion animations, and included other projects */}
                    <span className='date'>2018&ndash;present</span>
                </div>
            </div>


            <div className="section hover:bg-yellow-100">
                <h3>Honors</h3>
                <div className='relative'>
                    <span>Finalist in the Rise competition (global search for talented youth).</span>
                    <span className='date'>2021&ndash;22</span>
                </div>
            </div>            
        </div>

        <br /><br /><br />
    </div>;
}

