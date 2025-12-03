import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function Impact() {
    return <Page bottomPadding seo={{
        title: "Joel's Impact",
        description: "Joel's impact on the world"
    }}>
        <h1 className='text-center'>Impact</h1>
        <ul>
            <li>
                <b>My climate initiatives reduce emissions by an estimated 340 metric tons of CO₂ equivalent (MTCO₂e) per year.</b>
                <ul>
                    <li>Bringing a 109 kW solar installation, producing enough electricity to power 55 households</li>
                    <li>Founded Students for Electric Buses to bring electric buses to Riverdale and its neighboring schools</li>
                    <li>Presented to middle and upper schools on climate solutions</li>
                </ul>
            </li>
            <li>
                <b>Machines Sitting on Riverdale&apos;s Campus</b>
                <ul>
                    <li>Vending machine selling snacks to ~7 students per day</li>
                    <li>Buseroo helps ~5 people a day</li>
                </ul>
            </li>

            <li>
                <b>Software</b>
                <ul>
                    <li><Link href="https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj" target='_blank'>Homework Checker</Link> helping 1,000 students daily</li>
                    <li><Link href="https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf" target='_blank'>Focus for Google Docs</Link> helps 436 users enter the writing flow</li>
                    <li>Created software tools used 34,000 times</li>
                    <li>Online businesses: <Link href="https://lirongart.com" target='_blank'>lirongart.com</Link> and <Link href="https://bulletbrainstorm.com" target='_blank'>bulletbrainstorm.com</Link></li>
                </ul>
            </li>

            <li>
                <b>Government</b>
                <ul>
                    <li>
                        <span>NYC Government: Manhattan Community Board 1 member</span>
                        {/* <details>
                            <summary>NYC Government: Manhattan Community Board 1 member</summary> */}
                        <ul>
                            <li>Amended resolution to turn proposed park into Miyawaki forest.</li>
                            <li>Created budget request for electric ferry.</li>
                            <li>Part of the Lower Manhattan climate resiliency planning discussions</li>
                            <li>Proposed resolution to open new maker spaces in middle schools.</li>
                            <li>Advocated for connecting street vendors to the electrical grid, which would save 4 MTCO₂e per year per vendor.</li>
                        </ul>
                        {/* </details> */}
                    </li>
                    <li>
                        <span>Student government: served as grade representative for five years</span>
                        {/* <details>
                            <summary>Student government: served as grade representative for five years</summary> */}
                        <ul>
                            <li>Stopped bus idling</li>
                            <li>Switched from gas to electric leaf blowers</li>
                            <li>Created Chemistry help desk</li>
                            <li>Built picnic tables</li>
                            <li>Ran dodgeball tournament and talent shows</li>
                            <li>Helped administrators plan upcoming school year schedule.</li>
                        </ul>
                        {/* </details> */}
                    </li>
                </ul>
            </li>
        </ul>
    </Page>;
}
