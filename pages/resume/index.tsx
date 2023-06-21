import SEBLogo from "@/components/pages/home/parts/SEB Logo";
import { css } from "@emotion/css";
import Button from "@jcomponents/button";
import Image from "next/image";

export default function Resume() {
    return <div className={css`
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
            padding-left: 3rem;
        }
    `}>
        <div id="root" className="j_container relative  flex flex-col">
            <h1 className='text-center'>Resume</h1>

            {/* Export Button */}
            <a href="https://docs.google.com/document/d/1KQD6eFb9rgbHEaR4BImEVhEnJuohLjokrUrJYhuAgCk/export?format=pdf" target="_blank" className="absolute top-10 right-10">
                <Button>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={Button.Icon} width={20} height={20}><g id="info"/><g id="icons"><g id="save"><path d="M11.2,16.6c0.4,0.5,1.2,0.5,1.6,0l6-6.3C19.3,9.8,18.8,9,18,9h-4c0,0,0.2-4.6,0-7c-0.1-1.1-0.9-2-2-2c-1.1,0-1.9,0.9-2,2    c-0.2,2.3,0,7,0,7H6c-0.8,0-1.3,0.8-0.8,1.4L11.2,16.6z"/><path d="M19,19H5c-1.1,0-2,0.9-2,2v0c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v0C21,19.9,20.1,19,19,19z"/></g></g></svg>
                    PDF
                </Button>
            </a>


            <h3>Accomplishments</h3>

            <div className="hover:bg-green-100 pb-6 pt-1 rounded-lg">
                <h4>Climate Change</h4>
                <ul>
                    <li>
                        <Image src='/image/ccc/solar-for-riverdale/solar-panel.png' alt='solar panel' width={26} height={20} className='mr-1 inline bottom-1 relative' />
                        <span>Worked to bring a 410 kW solar installation to my school.</span>    
                        <span className="date">2021-present</span>
                        <div className="description">Researched solar&apos;s feasibility, collected rooftop measurements, created solar models with HelioScope, got quotes from several installers, and presented to the Head of School and Board of Trustees. It will create enough energy to power 40+ homes.</div>
                    </li>
                    <li>
                        <SEBLogo size={25} inline style={{ marginLeft: 4, marginRight: 4, top: 6 }} />
                        <span>Founded Students for Electric Buses.</span>
                        <span className="date">2021-present</span>
                        <div className="description">Organized a coalition of students and administrators to integrate electric school buses into my school&apos;s bus company&apos;s all-diesel fleet.</div>
                    </li>
                    <li>
                        <span>Presented on Climate Change.</span>
                        <span className="date">2021-present</span>
                        <div className="description">Delivered talks to the Middle School and Upper School on aspects of climate change and solutions students can take. Gave a speech at the Harvard Club to Riverdale alumni.</div>
                    </li>
                    <li>
                        <Image src='/image/ccc/electric-leaf-blowers/electric-leaf-blower.png' alt='leaf blower' width={20} height={13} className='relative bottom-[3px] mr-1 inline' />
                        <span>Electric Leaf Blowers</span>
                        <span className="date">2022</span>
                        <div className='description'>Convinced facilities to transition from gas to electric leaf blowers.</div>
                    </li>
                    <li>
                        <Image src='/image/ccc/stopping-bus-idling/stopping-bus-idling.png' alt='stopping-bus-idling' width={20} height={13} className='relative bottom-[3px] mr-1 inline' />
                        <span>Stopping Bus Idling</span>
                        <span className="date">2022</span>
                        <div className="description">Wrote to SuperSelby to enforce <a className='styled' href='https://portal.311.nyc.gov/article/?kanumber=KA-02222'>NYC&apos;s law banning bus idling</a>.</div>
                    </li>
                </ul>
            </div>
            
            <div>
                <h4>Software</h4>
                <ul>
                    <li>
                        <Image src='/image/home/buseroo-logo.png' alt='buseroo-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                        <span>Buseroo.com</span>
                        <span className="date">2021-23</span>
                        <div className="description">Kiosk and website finding the school bus going to a student&apos;s destination.</div>
                    </li>
                    <li>
                        <Image src='/image/home/homework-checker-logo.png' alt='homework-checker-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                        <span>Homework Checker</span>
                        <span className="date">2021-22</span>
                        <div className="description">Helps 500+ students manage their homework every day.</div>
                    </li>
                    <li>
                        <Image src='/image/home/focus-logo.png' alt='focus-logo' width={26} height={26} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                        <span>Focus</span>
                        <span className="date">2022</span>
                        <div className="description">Chrome extension helping 140+ people write distraction-free.</div>
                    </li>
                    <li>
                        <Image src='/image/lirong-art/lirong-art.png' alt='lirongart-logo' width={16.8125} height={30} className='mr-1 inline bottom-[3px] right-[3px] relative' />
                        <span>LirongArt.com</span>
                        <span className="date">2020</span>
                        <div className="description">Showcases and sells prints of my mother&apos;s paintings.</div>
                    </li>
                </ul>
            </div>

            <h3>Education</h3>
            <div>
                <div className='relative'>
                    <span>Riverdale Country School</span>
                    <span className='date'>2017-24</span>
                </div>
                <div>GPA: 3.94 (out of 4.0)</div>
                <div>Honors: Geometry, Algebra II, Precalculus, Spanish I-VII, Biology II, Chemistry II, Physics II</div>
            </div>


            <h3>Honors</h3>
            <div>
                <div className='relative'>
                    <span>Selected as a finalist in the Rise competition (global search for talented youth).</span>
                    <span className='date'>2021</span>
                </div>
            </div>            
        </div>

        <br /><br /><br />
    </div>;
}

/*
Original
Joel Grayson
joel@joelgrayson.com
jgrayson24@riverdale.edu
176 Broadway, #6C
New York, NY 10038
646-659-0678

Accomplishments
Climate Change
Campaigned and worked to bring a 410 kW solar installation to my school.	2021-present
Researched solar&apos;s feasibility for my school, collected rooftop measurements, created solar models with HelioScope, got quotes from several installers, and presented to the Head of School and Board of Trustees. It will create enough energy to power 40+ homes.
Founded Students for Electric Buses.	2021-present
Organized a coalition of students and administrators to integrate electric school buses into my school&apos;s bus company&apos;s all-diesel fleet.
Presented on Climate Change.	2021-present
Delivered talks to my Middle School and Upper School on aspects of climate change and solutions students can take. Gave a speech at the Harvard Club to Riverdale alumni.
Convinced facilities to transition from gas to electric leaf blowers and stopped bus idling.	2022
Software
Homework Checker: helps 500+ students manage their homework every day.	2021-22
Buseroo.com: kiosk and website finding the school bus going to a student&apos;s destination.	2021-23
Focus: Chrome extension helping 140+ people write distraction-free.	2022
LirongArt.com: showcases and sells prints of my mother&apos;s paintings.	2020
Education
Riverdale Country School	2017-24
GPA: 3.9 (out of 4.0)
Honors: Geometry, Algebra II, Precalculus, Spanish I-VII, Biology II, Chemistry II, Physics II
Activities
Appointed as the youngest board member of Manhattan Community Board 1.	2023
Researched crystal engineering in NYU Tandon&apos;s 7-week ARISE program.	2023
Trained to become an En-ROADS Ambassador (climate educator).	2022-present
Interned for the Stone House Group (energy efficiency consultants).	2021
Slaphappy channel with clay stop motion, comedy, and project records.	2018-present
Grade representative for five consecutive years in student government.	2019-present
Completed MIT xPRO&apos;s Introduction to Quantum Computing four-week course.	2023
Honors
Selected as a finalist in the Rise competition (global search for talented youth).	2021

*/
