import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Page from '../../components/Page';
import SEBLogo from './SEB Logo';

import { css } from '@emotion/css';
import styled from '@emotion/styled'

// TODO: add shadow to boxes
// TODO: add shading gradient in boxes

const Block=styled.div`
    border: 1px solid black;
    border-radius: 5px;
`;
const BtnIcon=styled.button`
    border: 1px solid black;
    border-radius: 5px;
    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        background-color: #eee;
    }
`;


export default function Home() {
    return (<Page>
        <style jsx>{`
            .buttons { /* button grid */
                display: -ms-grid;
                display: grid;
                -ms-grid-columns: 1fr 1fr 1fr;
                    grid-template-columns: 1fr 1fr 1fr;
            }
            .buttons li {
                list-style-type: none;
                margin: 0 auto;
            }
        `}</style>
        <Head>
            <title>Joel Grayson</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        </Head>
        <div className='w-full p-0 m-0'>
            {/* top */}
            <div className='w-full h-[290px] p-0'
                style={{background: "linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%)"}}
            >
                <div className='j_max-w relative mx-auto h-full'> {/* container for images same width as content */}
                    {/* signature gif */}
                    <div className='absolute bottom-8 left-11'>
                        <Image src='/images/signature.gif' alt='Joel Grayson Signature' width='371px' height='150px' />
                    </div>

                    {/* portrait */}
                    <div className='absolute p-0 bottom-0 mb-[-6px] right-24' style={{clipPath: 'inset(0 0 6px 1px)'}}>
                        <Image src='/images/Joel Grayson Transparent.png' alt='Profile' id='profilePicture' height='270px' width='209px' />
                    </div>
                </div>
            </div>

            <article className='j_container j_max-w'>
                <Block>
                    <h2 className='title'>Climate Change Projects</h2>
                    <div className={css`
                        display: flex;
                    `}>
                        <BtnIcon>
                            <Image alt='solar' height={50} width={50} src='/images/home/solar.png' />
                            <span>Solar</span>
                        </BtnIcon> {/* sunbeam going down when hover */}
                        <BtnIcon>
                            {/* <Image alt='students-for-electric-buses' height={50} width={50} src='/images/home/students-for-electric-buses-logo.png' /> */}
                            <SEBLogo/>
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
