import Prototype from 'src/components/by-page/connecting-street-vendors-to-the-grid/Prototype';
// import { Yt } from 'src/components/by-page/machines/helpers';
import ConnectingStreetVendorstotheGridPage from '@/components/page/ConnectingStreetVendorstotheGridPage';
import { P, Citation } from '@jcomponents/writing-components';
import Image from 'next/image';
import { Footnote } from '.';
import Info from '@/components/global/Info';


export default function ConnectingStreetVendorsToTheGrid() {
    return <ConnectingStreetVendorstotheGridPage bottomPadding seo={{
        title: 'Connecting Street Vendors to the Grid',
        keywords: ['food vendor', 'street vendor']
    }}>
        <h1 className='text-4xl my-10 mb-8 text-center'>
            Connecting Street Vendors to the Grid
            <Image src="/image/connecting-street-vendors-to-the-grid/logo.png" alt="Logo" className='inline relative bottom-1 left-2' width={32} height={32} />
        </h1>
        <p>Every year, an average street vendor burns 450 gallons of gas, emitting 4 tons of CO₂ equivalent and the same amount of smog as 180 cars driving coast to coast. This smog is localized to the one area the vendor operates, single-handedly making the neighborhood&apos;s air quality worse. Given that NYC has bad air quality (D according to the American Lung Association) and New York State plans to cut emissions by 85% by 2050 (based on 1990 levels)<Citation number={2} />, it is essential that we electrify street vendors. Doing so will not only fight climate change and improve air quality, it also has the following benefits for vendors:</p>
        <ul>
            <li>protects their heart & lung health
                <p className="indent-4">
                    They will not have to inhale particulate matter, volatile organic compounds, and other toxic gases.
                </p>
            </li>
            <li>
                saves them money.
                <p className='indent-4'>
                    They currently pay ~32¢ in gas costs per kWh whereas the grid&apos;s electricity costs 2–20¢. This would save them $583–1458<Info>4860 kWh*(32¢-20¢)/100=$583.20 or 4860 kWh*(32¢-2¢)/100=$1,458</Info> each year. Additionally, they do not have to pay to buy a generator, which costs $1,400 upfront.
                </p>
            </li>
            <li>makes them not have to listen to the loud generators all day.
                <p className="indent-4">
                    <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(13)61613-X/abstract?rss=yes" target='_blank'>This health study </a>shows that listening to the generators is bad for your health
                </p>
            </li>
            <li>
                saves them time and frustration from repairing the generator.
            </li>
        </ul>

        <h3>Equity</h3>
        <p>This issue is much about climate change as equity. Almost all vendors are immigrants, so giving them access to electricity like every other storefront has is an important step in making opportunity equal to all.</p>


        <P>Vendors are often parked right next to street lamps, so we can install an outlet box for around $5,000 with a meter. Using an app, vendors can unlock the outlets and be charged for the electricity they use. Electricians have said that this is feasible as long as DOT and ConEd approve.</P>
        <P className='mb-3'>This initiative is endorsed by the Street Vendor Project, and there are vendors eager to be in this pilot.</P>
        <Prototype />
        {/* <Yt>Y50nhH18HH4</Yt> */}
        {/* TODO: get new YT */}


        <h3 className='mt-5'>Timeline</h3>
        <ul>
            <li>10/23/23 Feasibility assessed with electricians</li>
            <li>10/31/23 Meeting Mohamed Attia (Street Vendor Project&apos;s Managing Director)</li>
            <li>
                12/1/23 Speaking with vendors and Councilmember Krishnan&apos;s office in Jackson Heights, Queens
                <Image src='/image/connecting-street-vendors-to-the-grid/speaking-with-vendors.jpg' alt='Connecting Street Vendors to the Grid' width={280} height={210} />
            </li>
            <li>12/18/23 Manhattan Community Board 1 Environmental Protection Committee meeting with DOT, ConEdison, and MOCEJ.</li>
            <li>1/17/24 Meeting with the Mayor&apos;s Office of Climate and Environmental Justice (MOCEJ) and DOT.</li>
            <li>2/8/24 Meeting with MOCEJ to finalize an application for an EPA&apos;s grant from the Infrastructure Reduction Act.</li>
        </ul>


        

        <h3 className='mt-12'>Citations</h3>
        {/* <Footnote number={1} title={`12 hours × 3 kWh × 300 days a year=10,800 kWh × 0.00171 MTCO₂e / kWh →
18.5 MTCO₂e saved per converted vendor per year`} /> */}
        <Footnote number={2} title='New York State Department of Environmental Conservation' href='https://www.dec.ny.gov/energy/99223.html' />


        <Image className='inline mt-6 mr-4' src='/image/connecting-street-vendors-to-the-grid/svp-logo-text.jpg' alt='SVP Logo' height={100} width={66} />
        <Image className='inline mt-6' src='/image/connecting-street-vendors-to-the-grid/mocej-logo.png' alt='MOCEJ Logo' height={100} width={292} />
        
        
    </ConnectingStreetVendorstotheGridPage>;
}
