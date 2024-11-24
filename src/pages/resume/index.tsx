import SEBLogo from "@/components/by-page/home/SEBLogo";
import { css } from "@emotion/css";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/page/parts/SEO";

export default function Resume() {
    return <>
        <SEO seo={{
            title: "Joel's Resume",
            description: "Joel Grayson's resume"
        }} />
        <div className={css`
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
            #root li {
                position: relative;
                list-style-type: none;
                margin-left: 0;
                margin-bottom: 3px;
            }
            #root .date {
                position: absolute;
                right: 0;
                top: 0;
                font-weight: 600;
            }
            #root .title {
                display: inline-block;
            }
            #root .title::before, .description.is-title::before {
                content: '';
                float: right;
                width: 4rem;
                height: 1rem;
            }
            #root li>img {
                vertical-align: top;
                padding-top: 7px;
            }
            #root .description {
                display: inline-block;
                color: #666;
                font-size: 0.9rem;
                // no bullet point
                list-style-type: none;
            }
            #activities-section .description {
                color: black;
            }
            @media (prefers-color-scheme: dark) {
                #root .description {
                    color: #aaa;
                }
                #activities-section .description {
                    color: white;
                }
            }
            #root .indent {
                padding-left: 3rem;
            }
            #root .inline-description {
                position: absolute;
                right: 4.5rem;
            }

            #root .section {
                //pb-6 pt-1 rounded-lg
                padding-bottom: 24px;
                padding-top: 4px;
                border-radius: 8px;
            }

            #software-section li {
                margin-block: .4rem;
            }
            #education-section li {
                margin-block: .4rem;
            }
        `}>
            <div id="root" className="j_container relative flex flex-col">
                <h1 className='text-center text-[46px] pt-4'>Joel Grayson</h1>

                {/* Go to Site Button */}
                <div className="absolute top-10 left-8">
                    <Link href="/" className="button">
                        Go to Site
                    </Link>
                </div>

                {/* Export/Download Button */}
                <Link
                    href="https://docs.google.com/document/d/1BZ4zuOEKgKcglOQbSWBilAfFkNWgqBFW0BElgroysyI/export?format=pdf"
                    target="_blank"
                    className="absolute top-10 right-8 unstyled"
                >
                    <button style={{
                        height: 40
                    }}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="fill-light-text dark:fill-dark-text"><path d="M11.2,16.6c0.4,0.5,1.2,0.5,1.6,0l6-6.3C19.3,9.8,18.8,9,18,9h-4c0,0,0.2-4.6,0-7c-0.1-1.1-0.9-2-2-2c-1.1,0-1.9,0.9-2,2    c-0.2,2.3,0,7,0,7H6c-0.8,0-1.3,0.8-0.8,1.4L11.2,16.6z"/><path d="M19,19H5c-1.1,0-2,0.9-2,2v0c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v0C21,19.9,20.1,19,19,19z"/></svg>
                        PDF
                    </button>
                </Link>


                <div className="section hover:bg-blue-100" id='software-section'>
                    <h3>Projects</h3>
                    <ul>
                        <li>
                            <span className="title with-icon">
                                <Image src='/image/home/buseroo-logo.png' alt='buseroo-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                                <Link href="https://buseroo.com">Buseroo.com</Link>
                            </span>
                            <span className="date">2021&ndash;23</span>
                            <div className="description inline-description">kiosk and website for students to find closest bus to any address.</div>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Image src='/image/home/homework-checker-logo.png' alt='homework-checker-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                                <Link href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'>Homework Checker</Link>
                            </span>
                            <span className="date">2021&ndash;22</span>
                            <div className="description inline-description">Chrome extension helping 2,000 students manage homework.</div>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Image src='/image/home/focus-logo.png' alt='focus-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                                <Link href="https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf">Focus</Link>
                            </span>
                            <span className="date">2022</span>
                            <div className="description inline-description">Chrome extension helping 800 people write distraction-free.</div>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Image src='/image/home/edit-time-logo.png' alt='focus-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                                <Link href="https://apps.apple.com/us/app/edit-time/id6464405876?mt=12">Edit Time</Link>
                            </span>
                            <span className="date">2024</span>
                            <div className="description inline-description">App with 2,811 installs that changes file date created and modified properties</div>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Image src='/image/lirong-art/lirong-art.png' alt='lirongart-logo' width={16.8125} height={30} className='ml-[4.6px] mr-[8.5px] inline bottom-[3px] right-[3px] relative' />
                                <Link href='https://lirongart.com'>LirongArt.com</Link>
                            </span>
                            <span className="date">2020</span>
                            <div className="description inline-description">online gallery showcasing my mom’s paintings.</div>
                        </li>
                        <li>
                            <span className="title"><Link href='https://www.youtube.com/watch?v=bHHk2FL5Ujs'>Venderoo</Link></span>
                            <span className="date">2023</span>
                            <div className="description inline-description">built a vending machine that sold snacks in school hallway.</div>
                        </li>
                        <li>
                            <span className='description is-title'><Link href='https://youtube.com/@JoelGrayson'>YouTube channel</Link></span>
                            {/* Wrote, acted, filmed, and edited 34 comedy videos with my father since age 11, created nine9 stop motion animations, and included other projects */}
                            <span className='date'>2018&ndash;now</span>
                            <div className="description inline-description">father-and-son comedy, project records, and claymation.</div>
                        </li>
                    </ul>
                </div>


                <div className="section hover:bg-green-100" id='climate-change-section'>
                    <h3>Climate Change</h3>
                    <ul>
                        <li>
                            <span className="title with-icon">
                                <Image src='/image/ccc/solar-for-riverdale/solar-panel.png' alt='solar panel' width={26} height={20}
                                    className='inline bottom-0.5 relative'
                                    style={{ right: 4 }}
                                />
                                Brought 493 kW solar installation to Riverdale, enough to power 50 households.
                            </span>    
                            <span className="date">2021&ndash;2024</span>
                            <div className="description indent">Collected rooftop measurements, created solar models in HelioScope, gathered quotes from several installers, researched legal and financial aspects, and presented to administration and Board of Trustees.</div>
                        </li>
                        <li className='mb-2'>
                            <span className="title with-icon">
                                <SEBLogo size={25} inline style={{ marginLeft: 4, marginRight: -4, top: 7, right: 4, paddingTop: 4 }} />
                                Founded <Link href='https://studentsforelectricbuses.org'>Students for Electric Buses</Link> to electrify school bus fleets.
                            </span>
                            <span className="date !top-[5px]">2021&ndash;2024</span>
                        </li>
                        <li className='mb-2'>
                            <span className="title with-icon">
                                Gave a <Link href="https://www.youtube.com/watch?v=rV_8xB7rGyQ">TEDx talk on combating climate change</Link>.
                            </span>
                            <span className="date !top-[5px]">2024</span>
                        </li>
                        <li className='mb-2'>
                            <span className="title with-icon">
                                Worked on connecting NYC street vendors to the electrical grid.
                            </span>
                            <span className="date !top-[5px]">2023–24</span>
                        </li>
                        
                        <li>
                            <span className="title">En-ROADS Ambassador (climate educator).</span>
                            <span className="date">2022&ndash;now</span>
                        </li>
                    </ul>
                </div>
                

                <div className="section hover:bg-red-100" id='activities-section'>
                    <h3>Activities</h3>
                    <ul>
                        <li>
                            <span className='description is-title'>Manhattan Community Board 1 member: Environmental and Youth & Ed Committees.</span>
                            <span className='date'>2023&ndash;24</span>
                        </li>
                        <li>
                            <span className='description is-title'><Link href="/research/organic-optoelectronics">Researched novel compound</Link> for organic solar cells at NYU&apos;s Molecular Design Institute.</span>
                            <span className='date relative'>2023</span>
                        </li>
                        <li>
                            <span className='description is-title'>Grade representative for five years in student government.</span>
                            <span className='date'>2019&ndash;now</span>
                        </li>
                        <li>
                            <span className='description is-title'>Violin: recitals (e.g., Praeludium & Allegro, Spring) and <Link href='/music'>compositions</Link>.</span>
                            <span className='date'>2011&ndash;now</span>
                        </li>
                        <li>
                            <span className='description is-title'>Interned for the Stone House Group (energy efficiency consultants).</span>
                            <span className='date'>2021</span>
                        </li>
                    </ul>
                </div>


                <div className="section hover:bg-gray-200" id="education-section">
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <span>Stanford University</span>
                            <span className='date'>2024&ndash;28</span>
                        </li>
                        <li>
                            <span>Riverdale Country School</span>
                            <span className='date'>2017&ndash;24</span>
                            <div className="description indent">
                                <div>Honors: Geometry, Algebra II, Precalculus, Spanish I&ndash;VII, Biology II, Chemistry II, Physics II</div>
                                <div>GPA: 3.94 (out of 4.0), SAT: 1560</div>
                            </div>
                        </li>
                    </ul>
                </div>


                <div className="section hover:bg-yellow-100" id='honors-section'>
                    <h3>Honors</h3>
                    <ul>
                        <li className='relative'>
                            <span className="description is-title">Rise for the World finalist (global search for talented youth).</span>
                            <span className='date'>2021&ndash;22</span>
                        </li>
                    </ul>
                </div>            
            </div>

            <br /><br /><br />
        </div>
    </>;
}

