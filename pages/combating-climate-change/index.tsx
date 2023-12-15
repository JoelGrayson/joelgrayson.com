import { useState } from 'react';
import Page from '@/components/page/DefaultPage';
import SEBLogo from '@/components/by-page/home/SEB Logo';
import Image from 'next/image';
import styles from '@/styles/ccc/sections.module.css';
import Link from 'next/link';
import { Section, Action } from '@/components/by-page/combating-climate-change/helpers';
import Button from '@jcomponents/button';
import IdlingEngine from '@/components/by-page/combating-climate-change/IdlingEngine';
import PDF from '@/components/global/PDF';
import { Switch } from 'antd';
import Info from '@/components/global/Info';
import Markdown from 'markdown-to-jsx';
import Prototype from '@/components/by-page/connecting-street-vendors-to-the-grid/Prototype';

export default function CCC() {
    const [showDescription, setShowDescription]=useState<boolean>(true);
    let emissionsSaved=243+.675+6.7+1.7;

    return <Page noPadding seo={{
        title: 'Climate Change | Joel\'s Initiatives'
    }}>
        {/* <Viewer status={viewer} setStatus={setViewer} /> */}
        <section className={styles.section}>
            <div className='j_container'>
                <h1 className='text-center'>Combating Climate Change</h1>
                <div className='d:flex d:justify-between'>
                    <p className='pr-2'>My climate initiatives reduce emissions by an estimated <Green>{Math.round(emissionsSaved)} metric tons of CO₂ equivalent</Green> (MTCO₂e) per year.</p>
                    <div style={{
                        width: 335,
                        marginLeft: 10
                    }}>
                        <Switch defaultChecked onChange={setShowDescription} checked={showDescription} id='showDescriptions' />
                        <label htmlFor='showDescriptions' className='ml-2 cursor-pointer' onClick={()=>setShowDescription(!showDescription)}>Show descriptions</label>
                    </div>
                </div>
            </div>
        </section>
        
        <Section title='Producing Clean Electricity'>
            <Action title='Solar for Riverdale' icon={
                <Image src='/image/ccc/solar-for-riverdale/solar-panel.png' alt='solar panel' width={26} height={20} className='ml-3 inline' />
            } {...{showDescription}}>
                <div className='relative'>
                    <p>While learning about different energy sources, I realized that my school&apos;s empty rooftops had great potential for solar energy. I measured the rooftops, created solar models in HelioScope (image below), calculated savings, and gathered quotes from two companies. I presented to the administration and board of trustees, who agreed to a 410 kW solar PPA arrangement (enough to power 40+ households) that will cover six buildings, promote renewable energy, and save the school tens of thousands of dollars every year.</p>
                    <p>85% of New York City&apos;s electricity comes from fossil fuels. This installation will generate 610 megawatt-hours of clean electricity per year.</p>
                        {/* My solar installation makes NYC&apos;s electricity <Green>0.0075%</Green> more renewable.</p> */}
                    <b>Cobenefits:</b>
                    <ul>
                        <li>Currently, when the power goes out in the River Campus, there is no WiFi, heat, or lighting. This happens around 3 times a year. Our installation will add a battery to the lower school to make sure the campus has 4–6 hours of backup power during the outages.</li>
                        <li>EV charging in the carports</li>
                        <li>Live energy generation data will be used in the science curriculum.</li>
                    </ul>
                </div>
                <Image src='/image/ccc/solar-for-riverdale/models.png' width={720} height={146} alt='Solar Models' />
                <Image src='/image/ccc/solar-for-riverdale/Presenting.png' width={500} height={265} alt='Solar Models' priority />
                {/* <div className='flex flex-col items-center'>
                    <iframe src={
                        'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7fANCIqaPCEP65K7KyVODt3FVzny1dvch_YCa1wnq0v4smzoEs40Crg6qHKHjTOtRdD_kkUL2ia1n/pubhtml'
                        +'?gid=0' //spreadsheet to be displayed
                        +'&single=true' //only display one spreadsheet
                        +'&widget=false' //hide bottom bar
                        +'&chrome=false' //hide title bar
                        +'&range=a1:h13' //cells
                    } width={1018} height={462} />
                </div> */}

                <p className='d:absolute d:top-0 d:right-0'>
                    Will save ~<Green>243 MTCO₂e</Green> each year
                    <Info>
                        <Markdown>{`
### Grid Emissions
Emissions from [EPA egrid](https://www.epa.gov/egrid/summary-data) accessed 11.8.23
Permanent link: https://perma.cc/N7QN-QDK6
817.9 lb CO2e/MWh × 1 kg / 2.2 lb × 1 MWh / 1000 kWh = 0.371 kg CO2e/kWh
817.9 lb CO2e/MWh × 1 metric ton / 2204.62 lb = 0.371 metric tons CO2e/MWh

### Solar Savings
410 kw installation × 4.08 hours/day (average sunlight in NYC from [this source](https://perma.cc/GP5Z-YUD3)) × 365 days per year × 1 MWh/1000 kWh = 610 MWh/year
610 MWh/year from solar × .371 metric tons CO₂ / MWh = 226 metric tons CO₂ / year

Including the 30 kW solar installation I got fixed, it saves 243 MTCO2e per year
                        `.trim()}</Markdown>
                    </Info>
                </p>
            </Action>
            <Action title='Renewable Energy Research' {...{showDescription}}>
                <Image src="/research/organic-optoelectronics/Joel in the Lab.jpg" alt="Joel in the Lab" width={210} height={157.5} className='float-right' />
                <p>
                    I researched a novel compound for organic solar cells&apos; absorbance layer at the Lee Lab in NYU&apos;s Molecular Design Institute and wrote a 14-page lab report. I will be a coauthor on a future peer-reviewed journal publication. See more <Link href='/research/organic-optoelectronics'>here</Link>.
                </p>
            </Action>
        </Section>
        <Section title='Electrification'>
            <Action title='Students for Electric Buses' icon={
                <Link href='https://studentsforelectricbuses.org' target='_blank'>
                    <SEBLogo size={30} inline style={{ position: 'relative', top: 9 }} />
                </Link>
            } {...{showDescription}}>
                <p>I formed a coalition of students, faculty, and administrators at Riverdale and Fieldston to integrate electric school buses into SuperSelby&apos;s all-diesel fleet, improving passenger health and city air quality and combating climate change. Each bus will save <Green>17 MTCO₂e</Green> per year. Transitioning whole fleet will save <Green>1,428 MTCO₂e</Green> per year.</p>
                {/* <Savings>
                    Will save <Green>17 MTCO₂e</Green> per year per bus
                </Savings> */}
            </Action>
            <Action title='Electric Leaf Blowers' icon={
                <Image src='/image/ccc/electric-leaf-blowers/electric-leaf-blower.png' alt='leaf blower' width={20} height={14} className='ml-3 inline' />
            } {...{showDescription}}>
                I convinced Riverdale&apos;s facilities to transition from gas to electric leaf blowers. Not only is it better for the environment, but it also reduces noise pollution and improves workers&apos; health.
                <br />
                <Savings>
                    <span>Saves ~<Green>0.675 MTCO₂e</Green> per year</span>
                    <Info>
                        <p>5 kg of CO2 per hour of use (<a href='https://www.quietcleanpdx.org/wp-content/uploads/2019/11/Gas-Powered-Leaf-Blower-Emissions-Factsheet-11.12.pdf'>source</a>).</p>
                        <p>5 kg*45 days per year*3 people per hour*1 hour per day=675 kg of emissions per year</p>
                    </Info>
                </Savings>
            </Action>
            <Action title='Connecting Street Vendors to the Grid'
            {...{showDescription}}>
                <Prototype className='m:hidden' style={{ zoom: .7, marginLeft: -50, float: 'right', position: 'relative', right: -100 }} />
                There are thousands of street vendors in NYC using gas generators for their electricity. Each vendor burns 2000 gallons of gas per year on average, releasing 18 MTCO₂e. I am attempting to connect street vendors to the grid with the support of the Street Vendor Project. Each vendor connected to the grid will save 18 MTCO₂e per year. If all vendors connected to grid, we would save <Green>18,000 MTCO₂e</Green> per year.<Info>Assuming half of vendors use generators and there are 20,000 street vendors</Info>
                <br />
                <Link href='/connecting-street-vendors-to-the-grid'>Learn more</Link>.
                <Savings>
                    Will save <Green>18 MTCO₂e</Green> per year
                </Savings>
            </Action>
            <Action title='Electric Ferries'
            icon={
                <svg width="25" height="25" className='inline ml-2 relative bottom-.5' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_2)"> <path d="M40 42C37.22 42 34.44 41.06 32 39.35C27.12 42.77 20.88 42.77 16 39.35C13.56 41.06 10.78 42 8 42H4V46H8C10.75 46 13.48 45.31 16 44.01C21.04 46.6 26.96 46.6 32 44.01C34.52 45.3 37.25 46 40 46H44V42H40ZM7.89 38H8C11.2 38 14.05 36.24 16 34C17.95 36.24 20.8 38 24 38C27.2 38 30.05 36.24 32 34C33.96 36.24 36.79 38 40 38H40.11L43.9 24.63C44.07 24.12 44.02 23.56 43.78 23.08C43.53 22.6 43.1 22.24 42.58 22.09L40 21.24V12C40 9.79 38.21 8 36 8H30V2H18V8H12C9.79 8 8 9.79 8 12V21.24L5.43 22.08C4.91 22.24 4.48 22.59 4.23 23.07C3.98 23.55 3.94 24.11 4.11 24.62L7.89 38ZM12 12H36V19.93L24 16L12 19.93V12Z" fill="#194893"/> <path d="M22.2196 22L21 28.9H23.4365L22.2196 34L28 26.8H25.2619L27.6958 22H22.2196Z" fill="#EFCC00"/> </g> <defs> <clipPath id="clip0_1_2"> <rect width="48" height="48" fill="white"/> </clipPath> </defs> </svg>
            }
             {...{showDescription}}>
                I advocated for electric ferries on Manhattan Community Board 1 by putting in a budget request to the DOT for electric ferries and speaking in favor of electric ferries to NYC Ferries.
            </Action>
        </Section>
        <Section title='Energy Efficiency'>
            <Action title='Bus Idling Ban' {...{showDescription}}>
                <IdlingEngine />
                <p>Wrote to my school&apos;s bus contractor to enforce <a href="https://portal.311.nyc.gov/article/?kanumber=KA-02222">NYC&apos;s law banning bus idling</a>. The day afterward, buses went from idling for hours to minutes.</p>
                <br />
                <Savings>
                    <span>Saves ~<Green>6.7 MTCO₂e</Green> per year</span>
                    <Info>
                        .0690 kg per minute*90 minutes idling per day*180 days per year*6 buses doing this per day=6706 kg of CO₂ emissions per year
                        (<a href="https://natural-resources.canada.ca/energy/efficiency/communities-infrastructure/transportation/idling/4463">source</a>)
                    </Info>
                </Savings>
            </Action>
            <Action title='Buseroo' {...{showDescription}}>
                Encourages public transportation
                Easier for students to go places
                Students save money on car services and more equitable transportation.
                <Savings>
                    <span>Saves ~<Green>1.7 MTCO₂e</Green> per year</span>
                    <Info>
                        <p>Average MPG is 25.7 (https://www.energy.gov/eere/vehicles/articles/fotw-1177-march-15-2021-preliminary-data-show-average-fuel-economy-new-light)</p>
                        <p>10 searches per day (from analytics) × 5 days per week × 36 weeks per school year × 1 ride per 3 searches = 600 rides saved per year</p>
                        <p>600 rides × 10 mile ride × 1 gallon gas/25.7 miles × 8.887 kg CO₂/gal gas × 1 metric ton/1000 kg=2.1 metric tons CO₂ per year</p>
                    </Info>
                </Savings>
            </Action>
            <Action title='Stone House Group Internship' {...{showDescription}}>
                Researched building retrocomissioning for energy efficiency and NYC energy efficiency Local Laws.
            </Action>
        </Section>
        <Section title='Raising Public Awareness'>
            <Action title='Middle School Combating Climate Change Presentation' {...{showDescription}}>
                <div className='d:flex'>
                    <div className='d:grid d:place-items-center'>
                        <Image width={380} height={205} src="/image/ccc/presenting/middle-school.jpg" alt="Presentation to the Middle School" />
                        <a className='m:hidden' href='/combating-climate-change/Combating Climate Change.pptx'>
                            <Button>
                                <svg className={Button.Icon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'><path fill='#dc4c2c' d='M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z'/><path fill='#f7a278' d='M26,6v18h18C44,14.059,35.941,6,26,6z'/><path fill='#c06346' d='M26,6C16.059,6,8,14.059,8,24h18V6z'/><path fill='#9b341f' d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'/><path fill='#fff' d='M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z'/></svg>
                                <span>Download Presentation</span>
                            </Button>
                        </a>
                    </div>
                    <div className='m:hidden'>
                        <PDF src='combating-climate-change/Combating Climate Change.pdf' height={260} />
                    </div>
                </div>
            </Action>
            <Action title='Upper School Climate Solutions Presentation' {...{showDescription}}>
                <div className='flex justify-around items-center'>
                    <a className='m:hidden' href='/combating-climate-change/Climate Solutions for Riverdale.pptx'>
                        <Button>
                            <svg className={Button.Icon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'><path fill='#dc4c2c' d='M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z'/><path fill='#f7a278' d='M26,6v18h18C44,14.059,35.941,6,26,6z'/><path fill='#c06346' d='M26,6C16.059,6,8,14.059,8,24h18V6z'/><path fill='#9b341f' d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'/><path fill='#fff' d='M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z'/></svg>
                            <span>Download Presentation</span>
                        </Button>
                    </a>
                    <div className='m:hidden'>
                        <PDF src='combating-climate-change/Climate Solutions for Riverdale.pdf' height={200} />
                    </div>
                </div>
            </Action>
            <Action title='Petition for Electric School Buses' {...{showDescription}}>
                Received <a href='https://api.joelgrayson.com/combating-climate-change/electric-school-buses-petition' target='_blank'>313 petition signatures</a> for SuperSelby&apos;s adoption of electric school buses, kicking off Students for Electric Buses.
            </Action>
            <Action title='The Need for a Nuclear Renaissance Presentation' {...{showDescription}}>
                {/* TODO: add download link */}
                <Link href='/combating-climate-change/the-need-for-a-nuclear-renaissance/index.html'>
                    Presented on the need for a nuclear renaissance
                </Link>
                &nbsp;at Brown University.
            </Action>
            <Action title='A Look into Climate Solutions Presentation' {...{showDescription}}>
                {/* TODO: add download link */}
                Presented A Look into Climate Solutions to advisors (small groups) using En-ROADS as an En-ROADS Ambassador.
            </Action>
            <Action title='Article on Nuclear Energy' {...{showDescription}}>
                {/* TODO: insert article */}
                <Link href='/blog/why-we-need-nuclear-energy'>Published an article</Link> in my school&apos;s newspaper about the need for supporting nuclear energy.
            </Action>
            {/* <Action title='Cohead of Riverdale Sustainability Club'> </Action> */}
        </Section>
        <Section title={'Mitigating Climate Change\'s Effects'}>
            <Action title='Urban Miniforest' {...{showDescription}}>
                Made a Community Board <a href='https://www.nyc.gov/assets/manhattancb1/downloads/pdf/resolutions/23-09-26.pdf#page=2' target='_blank'>resolution amendment</a> to recommend the developers of the Holland Rotary to create a Miyawaki forest to improve air quality, lessen the urban heating effect (which saves HVAC emissions), and act as a flood resiliency measure.
            </Action>
            {/* TODO: created a video explaining the resiliency projects in Lower Manhattan */}
            <Action title='Flood Resiliency' {...{showDescription}}>
                Part of discussions in the planning of resiliency projects in Lower Manhattan as a member of the Environmental Protection Committee of Manhattan Community Board 1.
            </Action>
            <br />
        </Section>
    </Page>;
}

export function Green({children}: { children: React.ReactNode }) {
    return <span className='bold text-green-700'>{children}</span>;
}

export function Savings({ children }: { children: React.ReactNode }) {
    return <p className='d:absolute d:top-0 d:right-0 text-right'>{children}</p>;
}
