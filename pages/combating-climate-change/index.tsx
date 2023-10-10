import { useState } from 'react';
import Page from '@/components/global/Page';
import SEBLogo from '@/components/by-page/home/SEB Logo';
import Image from 'next/image';
import Viewer from './Viewer';
import Link from 'next/link';
import { Section, Action } from '@/components/by-page/combating-climate-change/helpers';
import { viewers } from './InfoRenderer';
import Button from '@jcomponents/button';
import IdlingEngine from '@/components/by-page/combating-climate-change/IdlingEngine';
import PDF from '@/components/global/PDF';

export default function CCC() {
    const [viewer, setViewer]=useState<viewers>(viewers.none); //viewer status
    const wrap=(newViewerStatus: viewers)=>()=>setViewer(newViewerStatus); //wrap viewer change

    return <Page noPadding>
        <Viewer status={viewer} setStatus={setViewer} />

        <Section title='Producing Clean Electricity'>
            <Action title='Solar for Riverdale' onMouseEnter={wrap(viewers.solar)} icon={
                <Image src='/image/ccc/solar-for-riverdale/solar-panel.png' alt='solar panel' width={26} height={20} className='ml-3 inline' />
            }>
                <p>While learning about different energy sources, I realized that my school&apos;s empty rooftops had great potential for solar energy. I measured the rooftops, created solar models in HelioScope (image below), calculated savings, and gathered quotes from two companies. I presented to the administration and board of trustees, who agreed to a 410 kW solar PPA arrangement (enough to power 40+ households) that will cover six buildings, promote renewable energy, and save the school tens of thousands of dollars every year.</p>
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
            </Action>
        </Section>
        <Section title='Electrification'>
            <Action title='Students for Electric Buses' onMouseEnter={wrap(viewers.seb)} icon={
                <Link href='https://studentsforelectricbuses.org' target='_blank'>
                    <SEBLogo size={30} inline style={{ position: 'relative', top: 9 }} />
                </Link>
            }>
                I formed a coalition of students, faculty, and administrators at Riverdale and Fieldston to integrate electric school buses into SuperSelby&apos;s all-diesel fleet, improving passenger health and city air quality and combating climate change.
            </Action>
            <Action title='Electric Leaf Blowers' onMouseEnter={wrap(viewers.seb)} icon={
                <Image src='/image/ccc/electric-leaf-blowers/electric-leaf-blower.png' alt='leaf blower' width={20} height={14} className='ml-3 inline' />
            }>
                I convinced Riverdale&apos;s facilities to transition from gas to electric leaf blowers. Not only is it better for the environment, but it also reduces noise pollution and improves workers&apos; health.
            </Action>
        </Section>
        <Section title='Raising Public Awareness'>
            <Action title='Middle School Combating Climate Change Presentation' onMouseEnter={wrap(viewers.msCCCPresentation)}>
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
            <Action title='Upper School Climate Solutions Presentation' onMouseEnter={wrap(viewers.msCCCPresentation)}>
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
            <Action title='Petition for Electric School Buses' onMouseEnter={wrap(viewers.petitionForElectricSchoolBuses)}>
                Received <a href='https://api.joelgrayson.com/combating-climate-change/electric-school-buses-petition' target='_blank' className='styled'>313 petition signatures</a> for SuperSelby&apos;s adoption of electric school buses, kicking off Students for Electric Buses.
            </Action>
            <Action title='The Need for a Nuclear Renaissance Presentation' onMouseEnter={wrap(viewers.presentationOnNuclearRenaissance)}>
                {/* TODO: add download link */}
                <Link href='/combating-climate-change/the-need-for-a-nuclear-renaissance/index.html' className='styled'>
                    Presented on the need for a nuclear renaissance
                </Link>
                &nbsp;at Brown University.
            </Action>
            <Action title='A Look into Climate Solutions Presentation' onMouseEnter={wrap(viewers.presentationOnNuclearRenaissance)}>
                {/* TODO: add download link */}
                Presented A Look into Climate Solutions to advisors (small groups) using En-ROADS as an En-ROADS Ambassador.
            </Action>
            <Action title='Article on Nuclear Energy' onMouseEnter={wrap(viewers.msCCCPresentation)}>
                {/* TODO: insert article */}
                <Link className='styled' href='/perspective/why-we-need-nuclear-energy'>Published an article</Link> in my school&apos;s newspaper about the need for supporting nuclear energy.
            </Action>
        </Section>
        <Section title='Energy Efficiency'>
            <Action title='Bus Idling Ban' onMouseEnter={wrap(viewers.busIdlingBan)}>
                <IdlingEngine />
                Wrote to my school&apos;s bus contractor to enforce <a className='styled' href="https://portal.311.nyc.gov/article/?kanumber=KA-02222">NYC&apos;s law banning bus idling</a>.
            </Action>
            <Action title='Stone House Group Internship' onMouseEnter={wrap(viewers.busIdlingBan)}>
                Researched building retrocomissioning for energy efficiency and NYC energy efficiency Local Laws.
            </Action>
            <Action title='Buseroo' onMouseEnter={wrap(viewers.busIdlingBan)}>
                Encourages public transportation
                Easier for students to go places
                Students save money on car services and more equitable transportation
            </Action>
        </Section>
        <Section title='Resiliency'>
            <Action title='Flood Resiliency' onMouseEnter={wrap(viewers.busIdlingBan)}>
                Part of discussions in the planning of resiliency projects in Lower Manhattan as a member of the Environmental Protection Committee of Manhattan Community Board 1.
            </Action>
            {/* TODO: created a video explaining the resiliency projects in Lower Manhattan */}
        </Section>
    </Page>;
}
