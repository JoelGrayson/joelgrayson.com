import Image from 'next/image'
import Page from './components/Page';
import joelGraysonPortrait from './Home/Joel Grayson Portrait.webp';
import signature from './home/signature.gif';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (<Page>
        <div className='w-full h-[300px] bg-white flex justify-center items-end'
            style={{background: "linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%)"}}>
                <h1 className='text-center pr-[118px] pb-[48px] relative'>
                    <Image src={signature} alt='Joel Grayson' width='371px' height='150px' /> {/* signature gif */}
                </h1>
                <Image src={joelGraysonPortrait} alt="Profile" id='profilePicture' height='270px' width='219px' /> {/* profile photo */}
            </div>
            <div id="main" className='j_container'>
                <p>Hi friend! Thanks for stopping by. On this page, I will introduce myself. My intention is to share my projects.</p>
                <p>I love to create. My three main interests are engineering, entrepreneurship, and politics.</p>
                <p>I am passionate about engineering, Science, politics, and space. Since my Mom paints, and I like business, I
                decided to found <a href='https://lirongart.com'>Lirong Art</a>, a business selling canvas prints of my mom's paintings. Also, I am fascinated by
                how things work: biotech (CRISPR), astronomy, physics, the economy, electricity, and math. I hope that the world
                will unite and work on projects for humanity such as space exploration, scientific research, and ensuring
                humanity will not go extinct. To understand more cultures, I am fluent in English and Chinese and am working on
                Spanish. I enjoy chess, perform <a href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'>comedy with Dad</a>, and play the violin.</p>
                <p>Click below to explore some of my projects:</p>
                <div className={styles.buttons}>
                    <li><a href='/art'><button>Art</button></a></li>
                    <li><a href='/machines'><button>Machines</button></a></li>
                    <li><a href='/performances'><button>Performances</button></a></li>
                    <li><a href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'><button>Comedy with Dad</button></a></li>
                    <li><button>Student Council Campaigns</button></li>
                    <li><button>My Flag</button></li>
                    <li><a href='https://lirongart.com'><button>Lirong Art (Business)</button></a></li>
                </div>
            </div>
    </Page>);
}
