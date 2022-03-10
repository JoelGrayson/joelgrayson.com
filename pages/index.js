import Image from 'next/image'
import Page from './components/Page';
import joelGraysonPortrait from './Home/Joel Grayson Portrait.webp';
import signature from './home/signature.gif';
import circle from './components/circle.png';

export default function Home() {
    return (<Page>
        <style jsx>{
            `
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
            `
        }</style>
        <div className='w-full p-0 m-0'>
            {/* top */}
            <div className='w-full h-[290px] p-0'
                style={{background: "linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%)"}}
            >
                <div className='max-w-[800px] relative mx-auto h-full'> {/* container for images same width as content */}
                    {/* signature gif */}
                    <div className='absolute bottom-8 left-11'>
                        <Image src={signature} alt='Joel Grayson' width='371px' height='150px' />
                    </div>

                    {/* portrait */}
                    <div className='absolute p-0 bottom-0 mb-[-6px] right-24' style={{clipPath: 'inset(0 0 6px 1px)'}}>
                        <Image src={joelGraysonPortrait} alt="Profile" id='profilePicture' height='270px' width='219px' />
                    </div>
                </div>
            </div>

            <article className='j_container'>
                <p>Hi friend! Thanks for stopping by. On this page, I will introduce myself. My intention is to share my projects.</p>
                <p>I love to create. My three main interests are engineering, entrepreneurship, and politics.</p>
                <p>I am passionate about engineering, Science, politics, and space. Since my Mom paints, and I like business, I
                decided to found <a href='https://lirongart.com'>Lirong Art</a>, a business selling canvas prints of my mom&apos;s paintings. Also, I am fascinated by
                how things work: biotech (CRISPR), astronomy, physics, the economy, electricity, and math. I hope that the world
                will unite and work on projects for humanity such as space exploration, scientific research, and ensuring
                humanity will not go extinct. To understand more cultures, I am fluent in English and Chinese and am working on
                Spanish. I enjoy chess, perform <a href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'>comedy with Dad</a>, and play the violin.</p>
                <p>Click below to explore some of my projects:</p>
                <div className='buttons'>
                    <li><a href='/art'><button className='btn-red'>Art</button></a></li>
                    <li><a href='/machines'><button className='btn-red'>Machines</button></a></li>
                    <li><a href='/performances'><button className='btn-red'>Performances</button></a></li>
                    <li><a href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'><button className='btn-red'>Comedy with Dad</button></a></li>
                    <li><button className='btn-red'>Student Council Campaigns</button></li>
                    <li><button className='btn-red'>My Flag</button></li>
                    <li><a href='https://lirongart.com'><button className='btn-red'>Lirong Art (Business)</button></a></li>
                </div>
            </article>
        </div>
    </Page>);
}
