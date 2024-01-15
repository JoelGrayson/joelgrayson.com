import Prototype from 'src/components/by-page/connecting-street-vendors-to-the-grid/Prototype';
import { Yt } from 'src/components/by-page/machines/helpers';
import ConnectingStreetVendorstotheGridPage from '@/components/page-client/ConnectingStreetVendorstotheGridPage';
import { P, Citation, Footnote as JFootnote } from '@jcomponents/writing-components';
import Image from 'next/image';

export default function ConnectingStreetVendorsToTheGrid() {
    return <ConnectingStreetVendorstotheGridPage bottomPadding seo={{
        title: 'Connecting Street Vendors to the Grid',
        keywords: ['food vendor', 'street vendor']
    }}>
        <h1 className='text-center text-4xl my-10 mb-8'>Connecting Street Vendors to the Grid {/* TODO: insert logo */}</h1>
        <P>There are thousands of street vendors in NYC using gas generators for their electricity. Each vendor burns 2000 gallons of gas per year on average, releasing 18 metric tons of CO2 equivalent.<Citation number={1} /></P>
        <P>This pollutes our air with CO2, nitrous oxides, particulate matter, volatile organic compounds, and other toxic gases, hurting public health and contributing to climate change.</P>
        <P>By enabling vendors to connect to the grid, the city&apos;s air quality will improve, we will reduce emissions to meet the state&apos;s ambitious target of reducing emissions by 60% by 2030<Citation number={2} />, and improve the lives of street vendors.</P>
        <P>Vendors are often parked right next to street lamps, so we can install an outlet box for around $5000 with a meter. Using an app, vendors can unlock the outlets and be charged for the electricity they use. Electricians have said that this is feasible as long as DOT and ConEd approve.</P>
        <P className='mb-3'>This initiative is endorsed by the Street Vendor Project, and there are vendors eager to be in this pilot.</P>
        <Prototype />
        <Yt>Y50nhH18HH4</Yt>
        <p>
            {/* <Image src='/image/connecting-street-vendors-to-the-grid/svp-logo.png' alt='SVP' width={25} height={25} style={{
                borderRadius: 5,
                display: 'inline',
                position: 'relative',
                bottom: 2,
                marginRight: 5,
            }} /> */}
            <span></span>
        </p>

        <h3 className='mt-5'>Timeline</h3>
        <ul>
            <li>10/23/23 Feasibility assessed with electricians</li>
            <li>10/31/23 Meeting Mohamed Attia (Street Vendor Project&apos;s Managing Director)</li>
            <li>Meeting with MOCEJ</li>
            <li>12/18/23 Manhattan Community Board 1 Environmental Protection Committee meeting with DOT, ConEdison, and MOCEJ</li>
            <li>
                12/1/2023 Speaking with vendors and Councilmember Krishnan&apos;s office in Jackson Heights, Queens
                <Image src='/image/connecting-street-vendors-to-the-grid/speaking-with-vendors.jpg' alt='Connecting Street Vendors to the Grid' width={280} height={210} />
            </li>
        </ul>



        <h3 className='mt-12'>Citations</h3>
        <Footnote number={1} title={`12 hours × 3 kWh × 300 days a year=10,800 kWh × 0.00171 MTCO₂e / kWh →
18.5 MTCO₂e saved per converted vendor per year`} />
        <Footnote number={2} title='New York State Department of Environmental Conservation' href='https://www.dec.ny.gov/energy/99223.html' />
    </ConnectingStreetVendorstotheGridPage>;
}

export function Footnote({ number, title, href } :{ number: string | number; title?: string; href?: string }) {
    if (href)
        return <JFootnote number={number}>
            <a href={href} target='_blank'>{title || href}</a>
        </JFootnote>;
    else
        return <JFootnote number={number}>{title}</JFootnote>;
}


// // Blockquote from mayor's office
//<blockquote className='' style={{
//            border: '1px solid black',
//            borderRadius: 15,
//            padding: 10,
//            width: 'fit-content',
//            maxWidth: 400,
//            height: 'fit-content'
//        }}>
//            {/* Quote Icon */}
//            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: 16, height: 16, display: 'inline', marginRight: 8, position: 'relative', bottom: 4 }}><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
//
//            {/* Text */}
//            <span className=''>Food carts&apos; portable generators emit twenty times more asthma-causing pollution per unit of energy than the city&apos;s electricity supply</span>
//            
//            {/* Author */}
//            <p className='text-gray-600 text-sm mt-3'>&mdash;Sergej Mahnovski (Director of Mayor&apos;s Office of Long-Term Planning and Sustainability)</p>
//        </blockquote>
//        <br /><br />
