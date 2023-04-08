import { useState } from 'react';
import Page from '../../components/Page';
// import styles from '../../styles/ccc/sections.module.css';
import SEBLogo from '../../components/pages/home/parts/SEB Logo';
import Image from 'next/image';
import Viewer from './Viewer';
import Link from 'next/link';
import { Section, Action } from '../../components/pages/combating-climate-change/helpers';
import { viewers } from './InfoRenderer';
// import { ButtonIcon,  } from '@jcomponents/button'
import Button from '@jcomponents/button';

export default function CCC() {
    const [viewer, setViewer]=useState<viewers>(viewers.none); //viewer status
    const wrap=(newViewerStatus: viewers)=>(_: any)=>setViewer(newViewerStatus); //wrap viewer change

    return <Page>
        <Viewer status={viewer} setStatus={setViewer} />

        <Section title='Producing Clean Electricity'>
            <Action title='Solar for Riverdale ' onMouseEnter={wrap(viewers.solar)}>
                <Image src='/image/ccc/solar.png' alt='solar panel' width={26} height={20} />
            </Action>
        </Section>
        <Section title='Transitioning to Clean Infrastructure'>
            <Action title='Students for Electric Buses' onMouseEnter={wrap(viewers.seb)}>
                <Link href='https://studentsforelectricbuses.org' target='_blank'>
                    <SEBLogo size={30} />
                </Link>
            </Action>
        </Section>
        <Section title='Raising Public Awareness'>
            <Action title='Middle School Combating Climate Change Presentation' onMouseEnter={wrap(viewers.msCCCPresentation)}>
                {/* TODO: Embed video */}
                <Link href='/combating-climate-change/Combating Climate Change.pptx'>
                    <Button>
                        <svg className={Button.Icon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'><path fill='#dc4c2c' d='M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z'/><path fill='#f7a278' d='M26,6v18h18C44,14.059,35.941,6,26,6z'/><path fill='#c06346' d='M26,6C16.059,6,8,14.059,8,24h18V6z'/><path fill='#9b341f' d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'/><path fill='#fff' d='M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z'/></svg>
                        <span>Download Presentation</span>
                    </Button>
                </Link>
            </Action>
            <Action title='Petition for Electric School Buses' onMouseEnter={wrap(viewers.petitionForElectricSchoolBuses)}>
                <Link href='/' target='_blank' className='styled'>
                    Petition for 
                </Link>
            </Action>
            <Action title='Presentation on a Nuclear Renaissance' onMouseEnter={wrap(viewers.presentationOnNuclearRenaissance)}>
                <Link href='/' target='_blank'>
                    TODO: Insert Video icon for recording
                    TODO: Link to the page
                </Link>
            </Action>
        </Section>
        <Section title='Energy Efficiency'>
            <Action title='Bus Idling Ban' onMouseEnter={wrap(viewers.busIdlingBan)}>
            </Action>
        </Section>
    </Page>;
}
