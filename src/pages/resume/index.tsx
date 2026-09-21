import { css } from "@emotion/css";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/page/parts/SEO";

function Logo({ src, alt, width = 26, height = 26, className = '', shift = true }: { src: string; alt: string; width?: number; height?: number; className?: string; shift?: boolean }) {
    return <Image src={src} alt={alt} width={width} height={height} className={`inline relative bottom-[3px] ${shift ? 'mr-1 right-[3px]' : 'mx-1'} ${className}`} />;
}

export default function Resume() {
    return <>
        <SEO seo={{
            title: "Joel's Resume",
            description: "Joel Grayson's resume"
        }} />
        <div className={css`
            /*
            //#region CSS
            */

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
                padding-right: 6rem;
            }
            #root .date {
                position: absolute;
                right: 0;
                top: 0;
                font-weight: 600;
                white-space: nowrap;
            }
            #root li>img {
                vertical-align: top;
                padding-top: 7px;
            }
            #root .description {
                color: #666;
                font-size: 0.9rem;
                list-style-type: none;
            }
            #root .title, #root .is-title {
                font-size: 16px;
                color: black;
            }
            @media (prefers-color-scheme: dark) {
                #root .description {
                    color: #aaa;
                }
                #root .title, #root .is-title {
                    color: white;
                }
            }
            #root .indent {
                padding-left: 3rem;
            }

            #root .section {
                //pb-6 pt-1 rounded-lg
                padding-bottom: 24px;
                padding-top: 4px;
                border-radius: 8px;
            }

            #root .section li {
                margin-block: .4rem;
            }
            #root h3 { font-size: 1.6rem; }
            #root .skills p { margin-block: .3rem; }
            /*
            //#endregion
            */
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
                    href="https://docs.google.com/document/d/1BZ4zuOEKgKcglOQbSWBilAfFkNWgqBFW0BElgroysyI/export?format=pdf&tab=t.0"
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


                <div className="section hover:bg-gray-200 dark:hover:bg-gray-800" id="education-section">
                    <h3>Education/Honor</h3>
                    <ul>
                        <li>
                            <span className="title">Stanford University</span>: studying Electrical Engineering and Computer Science.
                            <span className='date'>2024&ndash;28</span>
                            <div className="description indent">
                                3.72 GPA. Classes: AI, computer systems/architecture, digital system design, circuits, signals &amp; systems, algorithms &amp; data structures, probability, computability theory, mechanics, E&amp;M, quantum physics, iOS app dev, computer graphics, linear algebra, calculus. Fall 2026: computer networks, VLSI/IC fabrication, OS.
                            </div>
                        </li>
                        <li>
                            <span className="title">Riverdale Country School</span>
                            <span className='date'>2017&ndash;24</span>
                            <div className="description indent">
                                3.94 GPA, 1560 SAT, 5-time Student Govt. representative, Sustainability Club co-head
                            </div>
                        </li>
                        <li>
                            <span className="title">Rise for the World</span>: finalist in global search for talented youth.
                            <span className='date'>2022</span>
                        </li>
                    </ul>
                </div>


                <div className="section hover:bg-green-100 dark:hover:bg-green-950" id='experience-section'>
                    <h3>Experience</h3>
                    <ul>
                        <li>
                            <span className="title">xAI Intern</span>: data center engineering intern on electrical engineering team.
                            <span className='date'>Jun&ndash;Sep 2026</span>
                            <div className="description indent">
                                Created ETAP models for two AI data centers for coordination studies, wrote two switching procedures (MOPs), and documented circuit breakers for 5,760 GPU racks.
                            </div>
                        </li>
                        <li>
                            <span className="title"><Link href="https://devpost.com/software/torq" target="_blank">TreeHacks 1st Place in NVIDIA Track</Link></span> (Edge AI): made 2018 Honda partially self-driving.
                            <span className='date'>2026</span>
                        </li>
                        <li>
                            <span className="title"><Link href="https://luxpremierllc.com/" target="_blank">Lux Premier LLC</Link></span> (founder): created software with 10,000+ users &amp; $5,000 in revenue.
                            <span className='date'>2019&ndash;26</span>
                        </li>
                        <li>
                            <span className="title">NYU Lee Research Lab</span>: <Link href="/research/organic-optoelectronics">researched novel compound</Link> for organic solar cells.
                            <span className='date'>Jul&ndash;Aug 2023</span>
                        </li>
                        <li>
                            <span className="title">Manhattan Community Board 1</span>: youngest-ever member; Environment &amp; Ed committees.
                            <span className='date'>2023&ndash;24</span>
                        </li>
                    </ul>
                </div>


                <div className="section hover:bg-blue-100 dark:hover:bg-[rgba(50,50,200,0.2)]" id='projects-section'>
                    <h3>Tech Projects</h3>
                    <ul>
                        <li>
                            <span className="title"><Link href="https://youtu.be/L5cV2TB7tLQ" target="_blank">Atari Asteroids</Link></span>: wrote bare-metal C and built arcade console with classmate.
                            <span className="date">2026</span>
                        </li>
                        <li>
                            <span className="title"><Link href="https://github.com/JoelGrayson/FPGA-Piano" target="_blank">FPGA Piano</Link></span>: wrote Verilog for FPGA to play sounds when PS/2 keyboard keys pressed.
                            <span className="date">2026</span>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Logo src='/image/home/edit-time-logo.png' alt='Edit Time logo' />
                                <Link href="https://apps.apple.com/us/app/edit-time/id6464405876?pt=126612879&ct=web" target="_blank">Edit Time</Link>
                            </span>: 11,000 installs, $5,000 revenue, desktop utility app (Swift, StoreKit).
                            <span className="date">2024&ndash;25</span>
                        </li>
                        <li>
                            <span className="title">Spark Gap Tesla Coil</span> (in progress): received $800 grant. Designed for 1.3 million volts.
                            <span className="date">2025&ndash;26</span>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Logo src='/image/home/venderoo-logo.png' alt='Venderoo logo' width={23} height={26} />
                                <Link href='https://www.youtube.com/watch?v=bHHk2FL5Ujs' target="_blank">Venderoo</Link>
                            </span>: designed Arduino-based vending machine that sold over 100 snacks at school.
                            <span className="date">2023</span>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Logo src='/image/home/shanghai-dictionary-logo.png' alt='Shanghai Dictionary logo' />
                                <Link href="https://shanghaidictionary.com" target="_blank">ShanghaiDictionary.com</Link>
                            </span>: 60,000 searches, best online Shanghainese dictionary.
                            <span className="date">2023&ndash;26</span>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Logo src='/image/home/buseroo-logo.png' alt='Buseroo logo' />
                                <Link href="https://buseroo.com" target="_blank">Buseroo.com</Link>
                            </span>: 2,000 searches, <Link href="https://buseroo.com" target="_blank">website</Link> &amp; <Link href='https://apps.apple.com/us/app/buseroo/id6736895918?pt=126612879&ct=web' target="_blank">app</Link> for student transportation (Next.js, Swift).
                            <span className="date">2021&ndash;23</span>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Logo src='/image/home/homework-checker-logo.png' alt='Homework Checker logo' />
                                <Link href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj?utm_source=jgcom&utm_campaign=web&utm_medium=site' target="_blank">Homework Checker</Link>
                            </span>: 8,000 weekly users, helps student organization (TypeScript, OOP).
                            <span className="date">2021&ndash;22</span>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Logo src='/image/home/focus-logo.png' alt='Focus logo' />
                                <Link href="https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf?utm_source=jgcom&utm_campaign=web&utm_medium=site" target="_blank">Focus</Link>
                            </span>: 1,000 weekly users, helps enter writing flow (TypeScript, Perl, Bash, HTML).
                            <span className="date">2022</span>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Logo src='/image/ccc/solar-for-riverdale/solar-panel.png' alt='Solar panel' width={26} height={20} />
                                Spearheaded <Link href="/combating-climate-change#solar-for-riverdale">109 kW solar installation</Link> at Riverdale, enough to power 13 households.
                            </span>
                            <span className="date">2021&ndash;24</span>
                            <div className="description indent">Measured rooftops, created solar models in HelioScope, gathered quotes from several installers, researched legal &amp; financial aspects, &amp; presented to admin and board.</div>
                        </li>
                        <li>
                            <span className="title with-icon">
                                <Logo src='/image/performances/youtube-icon.png' alt='YouTube logo' width={26} height={19} />
                                <Link href="https://youtube.com/@JoelGrayson" target="_blank">YouTube Channel</Link>
                            </span>: projects, explain STEM, animations, comedy, 1.3k subs, 200k views.
                            <span className="date">2017&ndash;26</span>
                        </li>
                        <li>
                            Other apps include
                            <Logo src='/image/simple-health/logo.png' alt='SimpleHealth logo' width={22} height={22} className='rounded' shift={false} />
                            <Link href="https://apps.apple.com/us/app/simplehealth-steps-sleep-gym/id6761314044?pt=126612879&ct=web" target="_blank">SimpleHealth</Link>,
                            <Logo src='/image/morse/face.png' alt='MorseBench logo' width={22} height={22} className='rounded' shift={false} />
                            <Link href="https://morsebench.com" target="_blank">MorseBench</Link>,
                            <Logo src='/image/software/techmap/logo.png' alt='TechMap logo' width={22} height={22} className='rounded' shift={false} />
                            <Link href="https://apps.apple.com/us/app/techmap/id6748248815?pt=126612879&ct=web" target="_blank">TechMap</Link>,
                            <Logo src='/image/software/worderoo/logo.png' alt='Worderoo logo' width={22} height={22} className='rounded' shift={false} />
                            <Link href="https://apps.apple.com/us/app/worderoo/id6745312298?pt=126612879&ct=web" target="_blank">Worderoo</Link>, and
                            <Logo src='/image/software/readometer/logo.png' alt='Readometer logo' width={22} height={22} className='rounded' shift={false} />
                            <Link href="https://apps.apple.com/us/app/readometer-track-your-speed/id6757317732?pt=126612879&ct=web" target="_blank">Readometer</Link>.
                        </li>
                    </ul>
                </div>


                <div className="section skills hover:bg-red-100 dark:hover:bg-[rgba(200,50,50,0.3)]" id='technical-skills-section'>
                    <h3>Technical Skills</h3>
                    <p><span className="title">Embedded Systems</span>: C/C++, ESP32/Arduino/Raspi, oscilloscope, RISC-V, MMIO, bare-metal</p>
                    <p><span className="title">Hardware/VLSI</span>: digital design, Verilog/RTL, FPGA, Vivado, Tcl, static timing analysis, CMOS</p>
                    <p><span className="title">Power Systems</span>: AI data centers, single-line diagrams, SEL acSELerator, power electronics</p>
                    <p><span className="title">Software (Full-Stack)</span>: TypeScript, React/Next.js, Swift/SwiftUI, SQL, HTML/JS/CSS, Java</p>
                    <p><span className="title">Backend &amp; Infra</span>: Python, AWS/GCP, Firebase, Supabase, Docker, Linux, Bash, Perl, MATLAB</p>
                </div>

                <p className="text-right description">View portfolio at <Link href="/portfolio">joelgrayson.com/portfolio</Link></p>
            </div>

            <br /><br /><br />
        </div>
    </>;
}
