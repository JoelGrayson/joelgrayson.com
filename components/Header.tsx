import { useRouter } from 'next/router';
import { createContext } from 'react';

export const PathContext=createContext<string>('');

// Header DOMEls
import HeaderItem from './header/HeaderItem';
import HeaderGroup from './header/HeaderGroup';
import HeaderGroupItem from './header/HeaderGroupItem';
import HeaderSubGroup from './header/HeaderSubGroup';

import ViolinBow from './header/ViolinBow';
import Signature from './header/Signature';

export default function Header() {
    const { asPath }=useRouter(); //the path (window object cannot be used)
    
    return (
        //Classname order: gradient, border, other
        <header className='w-full
            border-solid border-b-[1px] border-black p-3
            bg-gradient-to-b from-[#fcd98b] to-[#faca62]'
        >
            <nav className='j_max-w mx-auto'>
                <ul className='flex list-none items-center unstyled'>
                    <Signature />
                    <PathContext.Provider value={asPath}>
                        <div className='flex flex-row justify-between w-full'>
                            <div className='flex'> {/* left */}
                                <HeaderItem link='/'>Home</HeaderItem>
                                <HeaderItem link='/combating-climate-change'>
                                    <span className='flex' style={{whiteSpace: 'nowrap'}}>
                                        Climate Change&nbsp;
                                        {/* leaf icon */} <svg style={{width: "1em", fill: '#00732E'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 165.4c0 127.9-70.05 235.3-175.3 270.1c-20.04 7.938-41.83 12.46-64.69 12.46c-64.9 0-125.2-36.51-155.7-94.47c-54.13 49.93-68.71 107-68.96 108.1C44.72 472.6 34.87 480 24.02 480c-1.844 0-3.727-.2187-5.602-.6562c-12.89-3.098-20.84-16.08-17.75-28.96c9.598-39.5 90.47-226.4 335.3-226.4C344.8 224 352 216.8 352 208S344.8 192 336 192C228.6 192 151 226.6 96.29 267.6c.1934-10.82 1.242-21.84 3.535-33.05c13.47-65.81 66.04-119 131.4-134.2c28.33-6.562 55.68-6.013 80.93-.0054c56 13.32 118.2-7.412 149.3-61.24c5.664-9.828 20.02-9.516 24.66 .8282C502.7 76.76 512 121.9 512 165.4z"/></svg>
                                    </span>
                                </HeaderItem>
                                <HeaderGroup title='Projects'>
                                    <HeaderGroupItem link='/art'>Art</HeaderGroupItem>
                                    <HeaderGroupItem link='/machines'>Machines</HeaderGroupItem>
                                    <HeaderGroupItem link='/performances'>
                                        <span className='relative'>
                                            Performances &emsp;&nbsp;&nbsp;
                                            <ViolinBow/>
                                        </span>
                                    </HeaderGroupItem>
                                    <HeaderGroupItem link='/slaphappy'>Slaphappy</HeaderGroupItem>
                                </HeaderGroup>
                                <HeaderGroup title='Software'>
                                    <HeaderGroupItem link='https://buseroo.com'>Buseroo</HeaderGroupItem>
                                    <HeaderGroupItem link='https://lirongart.com'>Lirong Art</HeaderGroupItem>
                                    <HeaderGroupItem link='/zoom-timers'>Zoom Timers</HeaderGroupItem>
                                    <HeaderSubGroup title='Tools'>
                                        <HeaderGroupItem arrow={false} link='/drive-download-link-generator'>Drive Download Link Generator</HeaderGroupItem>
                                        <HeaderGroupItem arrow={false} link='/chess-app'>Chess App</HeaderGroupItem>
                                    </HeaderSubGroup>
                                </HeaderGroup>
                            </div>
                            <div className='flex'> {/* right */}
                                <HeaderItem link='/contact'>Contact</HeaderItem>
                            </div>
                        </div>
                    </PathContext.Provider>
                </ul>
            </nav>
        </header>
    );
}