import Page from '@/components/global/Page';
import Image from 'next/image';
import Link from 'next/link';
import Flag from '@jcomponents/flag';
import { PDFIcon } from '@/components/icons';

export default function NYCGoverment() {
    return <Page bottomPadding>
        <div className='flex justify-center'>
            <div className='relative w-[48ch]'>
                <h1 className='m:text-4xl my-3'>NYC Government</h1>
                <Flag
                    src='/image/patriotism/nyc-flag.jpg'
                    style={{
                        position: 'absolute',
                        top: '5ch',
                        left: '125ch',
                        zoom: .4
                    }}
                    className='m:hidden'
                />
            </div>
        </div>

        <h2>Rationale</h2>
        {/* TODO: overarching course material */}
        <p>
            This course covers NYC government&apos;s organization and processes. I created it as a senior at Riverdale Country School in order to be a better informed citizen and community board member.
        </p>
        <p>Having benefited greatly from Khan Academy and other free online courses, I am publicizing NYC Government&apos;s curriculum here so you, dear reader, can benefit too.</p>

        <h3>Unit 0: Overview</h3>
        <p>This broad overview will help with making connections throughout the course.
        Take at <a className='styled' href='/nyc/nyc-government/NYC Government Structure.pdf'>this overview of NYC&apos;s goverment structure <PDFIcon /></a> and <a href="/nyc/nyc-government/NYS Government Structure.pdf" className="styled">this overview of the state&apos;s government structure <PDFIcon /></a>. Next, skim over <Link href='/nyc/nyc-government/timeline' className='styled'>this timeline of NYC <PDFIcon /></Link>.</p>
        <p>NYC&apos;s laws and rules are included in the Charter, Administrative Code, and Rules <a href="https://codelibrary.amlegal.com/codes/newyorkcity/latest/overview" className="styled" target="_blank">published here</a>. The state&apos;s laws are part of the <a className='styled' href='https://www.nysenate.gov/legislation/laws/CONSOLIDATED' target='_blank'>Consolidated Laws of New York</a>.</p>
        
        

        <h3>Unit 1: The Mayor & Departments</h3>
        <div>
        <p>
            Essential questions: How do departments interact with other government agencies? How do they evolve over time? How does their funding change from mayor to mayor?
        </p>
        <p>
            <strong>Module 1.1: Mayorship</strong>
        </p>
        <div>
            Learn about the mayor&apos;s powers, which include appointing and overseeing departments, acting during states of emergencies, and representing NYC outside of the city (e.g., Conference of Mayors). Read pages 19–24 in Kivelson on the roles of the mayor. Then, the mayoralties of Adams, De Blasio, Bloomberg, Giuliani, Dinkins, Koch, Beame, Lindsay, Wagner Jr., and La Guardia <a className='styled' href="/nyc/nyc-government/Meet the Mayors.pdf">in this compilation <PDFIcon /></a>. As you read, see if you can find examples of the Third Law of Historical Motion (i.e., which mayors succeeded each other because of a campaign contrasting their predecessor). When you have finished, 
            <details>
                <summary className='cursor-pointer'>click here for the examples we found</summary>
                <ul>
                    <li>Adam&apos;s was elected in response to the police violence and Black Lives Matter. Some mayors manage to take both sides, like Adams with the police and black protesters, and others manage to lose both sides by staying in the middle, like Dinkins with the Crown Heights rioters.</li>
                    <li>De Blasio was elected in response to five Republican terms (three terms of Bloomberg and two terms of Giuliani).</li>
                    <li>Bloomberg was elected in response to 9/11, as a need for a businessman to revive the city.</li>
                    <li>Dinkins was a reaction to Ed Koch, who created racial tension by being racially insensitive in his comments and closing down a hospital serving a Black neighborhood.</li>
                    <li>Ed Koch was a reaction to Tammany Hall. He helped to dismantle it.</li>
                </ul>
            </details>
        </div>
        <div>Skim over the mayor&apos;s <a href="https://www.nyc.gov/assets/omb/downloads/pdf/typ4-23.pdf" className='styled'>ten-year capital budget</a>.</div>
        
        <br />
        <p>
            <strong>Module 1.2: City Agencies</strong>
        </p>
        <p>
            Read Kivelson pages 79–99.
        </p>
        <p>
            Read through the about pages of departments and agencies and learn how the mayor oversees and interacts with them:
        </p>
        <ul>
            <li><a href="/nyc/nyc-government/Department of Education.pdf" className="styled">Department of Education (DOE) <PDFIcon /></a></li>
            <li><a href="/nyc/nyc-government/NYC DOT.pdf" className="styled">Department of Transportation (DOT) <PDFIcon /></a></li>
            <li><a href="/nyc/nyc-government/NYC Parks.pdf" className="styled">NYC Parks &amp; Recreation <PDFIcon /></a></li>
            <li>Department of Buildings (DOB) </li>
            <li>NYC Housing Authority (NYCHA)
            </li>
            <li>Department of Sanitation (DSNY)
            </li><li>NYC Police Department (NYPD)
            </li><li>Economic Development Cooperation (EDC)
            </li><li>Department of City Planning
            </li><li>Department of Housing Preservation and Development
            </li><li><a href="https://www.nyc.gov/nyc-resources/agencies.page">nyc.gov&apos;s agency page</a>
            </li><li>…
            </li>
        </ul>
        <p>
            Formative: Take note of which are well-funded or underfunded in addition to their importance and current issues. Why are some underfunded, and what is the effect?
        </p>
        </div>

        
        <p>Congratulations for making it to the end of unit 1. It&apos;s time for <Link className="styled" href='/nyc/nyc-government/unit-1-test'>a quiz</Link> to see if you were paying attention!</p>

        <h3 id='borough'>Unit 2: Within the Borough</h3>
        <Link href='/nyc/nyc-government/Unit 2 Essay Division of Power within NYC.pdf' className='styled'>
            Division of Power Essay
        </Link>


        {/* <h2>About</h2> */}
        {/* <Image width={262.5} height={350} src="/nyc/nyc-government/municipal-building.jpg" alt="Municipal Building" className='inline' /> */}
        <h3>Attribution</h3>
        <p>Thank you, Mr. Kildahl.</p>
        <Image width={262.5} height={350} src="/nyc/nyc-government/joel-and-mr-kildahl.jpg" alt="Municipal Building" />

    </Page>;
}

export function Markdown({ title, hyphenatedTitle }: { title: string, hyphenatedTitle: string }) {
    return <Link href={`/nyc/nyc-government/${hyphenatedTitle}`} className='styled'>
        {title}
    </Link>;
}
