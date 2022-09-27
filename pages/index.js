import Link from 'next/link';
import Image from 'next/image';
import Page from '../components/Page';
import styles from './home/home.module.css';

export default function Home() {
    return (<Page>
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
            <p>Hi friend! Thanks for stopping by. On this page, I will introduce myself. My intention is to share my projects.</p>
            <p>I love to create. My three main interests are engineering, entrepreneurship, and politics.</p>
            <p>I am passionate about engineering, Science, politics, and space. Since my Mom paints, and I like business, I
            decided to found <a href='https://lirongart.com' target='_blank' rel="noopener noreferrer">Lirong Art</a>, a business selling canvas prints of my mom&apos;s paintings. Also, I am fascinated by
            how things work: biotech (CRISPR), astronomy, physics, the economy, electricity, and math. I hope that the world
            will unite and work on projects for humanity such as space exploration, scientific research, and ensuring
            humanity will not go extinct. To understand more cultures, I am fluent in English and Chinese and am working on
            Spanish. I enjoy chess, perform <a href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A' target='_blank' rel="noopener noreferrer">comedy with Dad</a>, and play the violin.</p>
            <p>Click below to explore some of my projects:</p>

            <div className={styles.buttons}>
                <li><Link href='/art'><a><button className='btn-red'>Art</button></a></Link></li>
                <li><Link href='/machines'><a><button className='btn-red'>Machines</button></a></Link></li>
                <li><Link href='/performances'><a><button className='btn-red'>Performances</button></a></Link></li>
                <li><Link href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'><a><button className='btn-red'>Comedy with Dad</button></a></Link></li>
                <li><button className='btn-red'>Student Government Campaigns</button></li>
                <li><button className='btn-red'>My Flag</button></li>
                <li><Link href='https://lirongart.com'><a><button className='btn-red'>Lirong Art (Business)</button></a></Link></li>
            </div>

        </article>
        {/* Recent Projects */}
        <article className='bg-slate-400 w-[100vw] pb-12 pt-4'>
            <section className='j_container j_max-w'>
                <h2 className='text-center'>Recent Projects</h2>
                {/* Homework Checker Video */}
                <div>
                    <h3>Homework Checker</h3>
                    
                </div>
                <iframe width="320" height="180" src="https://www.youtube.com/embed/MNnVqfHZyQU" title="Homework Checker" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </section>
        </article>
    </Page>);
}
