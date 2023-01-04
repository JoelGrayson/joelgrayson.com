import Image from 'next/image';
import Page from '../../Page';

import SEBLogo from './parts/SEB Logo';
import BtnIcon from './parts/BtnIcon';
import Block from './parts/Block';
import Portrait from './portrait';

// TODO: add shadow to boxes
// TODO: add shading gradient in boxes


export default function Home() {
    return (<Page title='Joel Grayson'>
        <div className='w-full p-0 m-0'>
            {/* top */}
            <div className='w-full h-[290px] p-0' style={{background: "linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%)"}}>
                <div className='j_max-w relative mx-auto h-full'> {/* container for images same width as content */}
                    {/* signature gif */}
                    <div className='absolute bottom-8 left-11'>
                        <Image src='/images/signature.gif' alt='Joel Grayson Signature' width='371px' height='150px' />
                    </div>

                    <Portrait />
                </div>
            </div>

            <article className='j_container j_max-w'>
                <Block>
                    <h2 className='title'>Climate Change Projects</h2>
                    <div className={'flex'}>
                        <BtnIcon>
                            <Image alt='solar' height={50} width={50} src='/images/ccc/solar.png' />
                            <span>Solar</span>
                        </BtnIcon> {/* sunbeam going down when hover */}
                        <BtnIcon>
                            <SEBLogo size='75px' />
                            <span>Students for Electric Buses</span>
                        </BtnIcon> {/* sunbeam going down when hover */}
                        <BtnIcon>
                            <Image alt='buseroo-logo' height={50} width={50} src='/images/home/buseroo-logo.png' />
                            <span>Buseroo</span>
                        </BtnIcon>
                    </div>
                </Block>
                <Block>
                    <h2 className='title'>Software</h2>
                </Block>
            </article>
        </div>
    </Page>);
}
