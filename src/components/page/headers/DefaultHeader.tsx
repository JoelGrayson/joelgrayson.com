// Header DOMEls
import HeaderItem from './parts/HeaderItem';
import HeaderGroup from './parts/HeaderGroup';
import HeaderGroupItem from './parts/HeaderGroupItem';
import HeaderSubGroup from './parts/HeaderSubGroup';

import ViolinBow from './parts/ViolinBow';
import JThreeDots from './parts/JThreeDots';
import HeaderSubGroupItem from './parts/HeaderSubGroupItem';
import { LeafIcon } from '@/components/icons';

export default function DefaultHeader({ pathname='' }: { pathname?: string }) {
    return <header className={`
        ${/* Classname order: gradient, border, other */''}
        w-full
        border-solid border-b-[1px] border-black p-3
        bg-gradient-to-b from-[#fcd98b] to-[#faca62]
        dark:from-[#333] dark:to-[#1a1a1a]
        m:pb-0
    `}>
        <nav className='j_max-w mx-auto'>
            <ul className='unstyled flex w-full j_container m:p-0 m:grid grid-cols-3 grid-rows-2'>
                <li className='m:order-3 m:relative m:bottom-[.3rem] m:right-1'><JThreeDots /></li>
                
                <HeaderItem pathname={pathname} link='/' className='m:order-1'>Home</HeaderItem>

                <HeaderGroup pathname={pathname} title='Projects' link='/portfolio' className='m:order-2' pixelOffset={0}>
                    <HeaderGroupItem pathname={pathname} link='/combating-climate-change'>
                        <span style={{whiteSpace: 'nowrap', display: 'inline'}}>
                            Climate Change&nbsp;
                            <LeafIcon />
                        </span>
                    </HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/nyc'>NYC Government</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/research'>Research</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/machines'>Machines</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/art'>Art</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/music'>
                        <span>Music &emsp;&nbsp;&nbsp;</span>
                        <div style={{
                            position: 'absolute',
                            right: -12,
                            bottom: -8,
                        }}>
                            <ViolinBow />
                        </div>
                    </HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/slaphappy'>Slaphappy</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/learn'>Learning Resources</HeaderGroupItem>
                </HeaderGroup>

                <HeaderGroup pathname={pathname} title='Software' link='/software' className='m:order-5' pixelOffset={1}>
                    <HeaderGroupItem pathname={pathname} link='https://apps.apple.com/us/app/edit-time/id6464405876'>Edit Time</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf?hl=en'>Focus for Google Docs</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='https://buseroo.com'>Buseroo</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/techmap'>TechMap</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='https://lirongart.com'>Lirong Art</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'>Homework Checker</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='https://shanghaidictionary.com'>ShanghaiDictionary.com</HeaderGroupItem>
                    <HeaderSubGroup pathname={pathname} title='Tools'>
                        <HeaderSubGroupItem pathname={pathname} link='/software/drive-download-link-generator'>Drive Download Link Generator</HeaderSubGroupItem>
                        <HeaderSubGroupItem pathname={pathname} link='/learn/pi'>Memorize π</HeaderSubGroupItem>
                        <HeaderSubGroupItem pathname={pathname} link='/learn/number?name=tau'>Memorize τ</HeaderSubGroupItem>
                        <HeaderSubGroupItem pathname={pathname} link='/software/cite/mla'>MLA Citation Generator</HeaderSubGroupItem>
                        <HeaderSubGroupItem pathname={pathname} link='/zoom-timers'>Zoom Timers</HeaderSubGroupItem>
                        {/* <HeaderSubGroupItem pathname={pathname} link='/chess'>Chess</HeaderSubGroupItem> */}
                    </HeaderSubGroup>
                </HeaderGroup>

                <HeaderItem pathname={pathname} link='/blog' className='m:order-4'>Blog</HeaderItem>
                <HeaderItem pathname={pathname} link={`/contact?referrer=${pathname}`} className='m:order-6'>Contact</HeaderItem>
            </ul>
        </nav>
    </header>;
}

