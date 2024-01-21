// Header DOMEls
import HeaderItem from './parts/HeaderItem';
import HeaderGroup from './parts/HeaderGroup';
import HeaderGroupItem from './parts/HeaderGroupItem';
import HeaderSubGroup from './parts/HeaderSubGroup';

import ViolinBow from './parts/ViolinBow';
import JThreeDots from './parts/JThreeDots';
import HeaderSubGroupItem from './parts/HeaderSubGroupItem';

export default function DefaultHeader({ pathname='' }: { pathname?: string }) {
    return <header className={`
        ${/* Classname order: gradient, border, other */''}
        w-full
        border-solid border-b-[1px] border-black p-3
        bg-gradient-to-b from-[#fcd98b] to-[#faca62]
        m:pb-0
    `}>
        <nav className='j_max-w mx-auto'>
            <ul className='unstyled flex w-full j_container m:p-0 m:grid grid-cols-3 grid-rows-2'>
                <li className='m:order-3 m:relative m:bottom-[.3rem] m:right-1'><JThreeDots /></li>
                
                <HeaderItem pathname={pathname} link='/' className='m:order-1'>Home</HeaderItem>

                <HeaderGroup pathname={pathname} title='Projects' className='m:order-2' pixelOffset={0}>
                    <HeaderGroupItem pathname={pathname} link='/combating-climate-change'>
                        <span style={{whiteSpace: 'nowrap', display: 'inline'}}>
                            Climate Change&nbsp;
                            {/* leaf icon */}
                            <svg style={{width: '1em', display: 'inline', fill: '#00732E'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M512 165.4c0 127.9-70.05 235.3-175.3 270.1c-20.04 7.938-41.83 12.46-64.69 12.46c-64.9 0-125.2-36.51-155.7-94.47c-54.13 49.93-68.71 107-68.96 108.1C44.72 472.6 34.87 480 24.02 480c-1.844 0-3.727-.2187-5.602-.6562c-12.89-3.098-20.84-16.08-17.75-28.96c9.598-39.5 90.47-226.4 335.3-226.4C344.8 224 352 216.8 352 208S344.8 192 336 192C228.6 192 151 226.6 96.29 267.6c.1934-10.82 1.242-21.84 3.535-33.05c13.47-65.81 66.04-119 131.4-134.2c28.33-6.562 55.68-6.013 80.93-.0054c56 13.32 118.2-7.412 149.3-61.24c5.664-9.828 20.02-9.516 24.66 .8282C502.7 76.76 512 121.9 512 165.4z'/></svg>
                        </span>
                    </HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/machines'>Machines</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/art'>Art</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/research'>Research</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/nyc'>NYC</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/performances'>
                        Performances &emsp;&nbsp;&nbsp;
                        <ViolinBow />
                    </HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/slaphappy'>Slaphappy</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/learn'>Learning Resources</HeaderGroupItem>
                </HeaderGroup>

                <HeaderGroup pathname={pathname} title='Software' link='/software' className='m:order-5' pixelOffset={1}>
                    <HeaderGroupItem pathname={pathname} link='https://buseroo.com'>Buseroo</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='https://lirongart.com'>Lirong Art</HeaderGroupItem>
                    <HeaderGroupItem pathname={pathname} link='/zoom-timers'>Zoom Timers</HeaderGroupItem>
                    <HeaderSubGroup pathname={pathname} title='Tools'>
                        <HeaderSubGroupItem pathname={pathname} link='/drive-download-link-generator'>Drive Download Link Generator</HeaderSubGroupItem>
                        <HeaderSubGroupItem pathname={pathname} link='/chess'>Chess</HeaderSubGroupItem>
                        <HeaderSubGroupItem pathname={pathname} link='/learn/pi'>Memorize π</HeaderSubGroupItem>
                    </HeaderSubGroup>
                </HeaderGroup>

                <HeaderItem pathname={pathname} link='/blog' className='m:order-4'>Blog</HeaderItem>
                <HeaderItem pathname={pathname} link='/contact' className='m:order-6'>Contact</HeaderItem>
            </ul>
        </nav>
    </header>;
}

