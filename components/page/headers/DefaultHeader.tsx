import { useRouter } from 'next/router';
import { PathContext } from './parts/PathContext';

// Header DOMEls
import HeaderItem from './parts/HeaderItem';
import HeaderGroup from './parts/HeaderGroup';
import HeaderGroupItem from './parts/HeaderGroupItem';
import HeaderSubGroup from './parts/HeaderSubGroup';

import ViolinBow from './parts/ViolinBow';
import JThreeDots from './parts/JThreeDots';

export default function DefaultHeader() {
    const { route }=useRouter(); //the path (window object cannot be used)
    
    return (
        // Classname order: gradient, border, other
        <header className='
            w-full
            border-solid border-b-[1px] border-black p-3
            bg-gradient-to-b from-[#fcd98b] to-[#faca62]
            m:pb-0
        '>
            <nav className='j_max-w mx-auto'>
                <PathContext.Provider value={route}>
                    <ul className='unstyled flex w-full j_container m:p-0 m:grid grid-cols-3 grid-rows-2'>
                            <li className='m:order-3 m:relative m:bottom-[.3rem] m:right-1'><JThreeDots /></li>
                            
                            <HeaderItem link='/' className='m:order-1'>Home</HeaderItem>

                            <HeaderGroup title='Projects' className='m:order-2'>
                                <HeaderGroupItem link='/combating-climate-change'>
                                    <span style={{whiteSpace: 'nowrap', display: 'inline'}}>
                                        Climate Change&nbsp;
                                        {/* leaf icon */}
                                        <svg style={{width: '1em', display: 'inline', fill: '#00732E'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M512 165.4c0 127.9-70.05 235.3-175.3 270.1c-20.04 7.938-41.83 12.46-64.69 12.46c-64.9 0-125.2-36.51-155.7-94.47c-54.13 49.93-68.71 107-68.96 108.1C44.72 472.6 34.87 480 24.02 480c-1.844 0-3.727-.2187-5.602-.6562c-12.89-3.098-20.84-16.08-17.75-28.96c9.598-39.5 90.47-226.4 335.3-226.4C344.8 224 352 216.8 352 208S344.8 192 336 192C228.6 192 151 226.6 96.29 267.6c.1934-10.82 1.242-21.84 3.535-33.05c13.47-65.81 66.04-119 131.4-134.2c28.33-6.562 55.68-6.013 80.93-.0054c56 13.32 118.2-7.412 149.3-61.24c5.664-9.828 20.02-9.516 24.66 .8282C502.7 76.76 512 121.9 512 165.4z'/></svg>
                                    </span>
                                </HeaderGroupItem>
                                <HeaderGroupItem link='/machines'>Machines</HeaderGroupItem>
                                <HeaderGroupItem link='/art'>Art</HeaderGroupItem>
                                <HeaderGroupItem link='/research'>Research</HeaderGroupItem>
                                <HeaderGroupItem link='/nyc'>NYC</HeaderGroupItem>
                                <HeaderGroupItem link='/performances'>
                                    Performances &emsp;&nbsp;&nbsp;
                                    <ViolinBow />
                                </HeaderGroupItem>
                                <HeaderGroupItem link='/slaphappy'>Slaphappy</HeaderGroupItem>
                            </HeaderGroup>

                            <HeaderGroup title='Software' link='/software' className='m:order-5'>
                                <HeaderGroupItem link='https://buseroo.com'>Buseroo</HeaderGroupItem>
                                <HeaderGroupItem link='https://lirongart.com'>Lirong Art</HeaderGroupItem>
                                <HeaderGroupItem link='/zoom-timers'>Zoom Timers</HeaderGroupItem>
                                <HeaderSubGroup title='Tools'>
                                    <HeaderGroupItem arrow={false} link='/drive-download-link-generator'>Drive Download Link Generator</HeaderGroupItem>
                                    <HeaderGroupItem arrow={false} link='/chess'>Chess</HeaderGroupItem>
                                    <HeaderGroupItem arrow={false} link='/memorize-pi'>Memorize π</HeaderGroupItem>
                                </HeaderSubGroup>
                            </HeaderGroup>

                            <HeaderItem link='/blog' className='m:order-4'>Blog</HeaderItem>
                            <HeaderItem link='/contact' className='m:order-6'>Contact</HeaderItem>
                        {/* </span> */}
                    </ul>
                </PathContext.Provider>
            </nav>
        </header>
    );
}
