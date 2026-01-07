import Image from 'next/image';
// import VenderooCarousel from '@/components/by-page/portfolio/VenderooCarousel';
import Yt from '@/components/global/Yt';
import { GithubIcon } from '@/components/icons';
import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function Demo() {
    return <Page bottomPadding
        seo={{
            title: 'Demo | Joel Grayson',
            description: ''
        }}
        pathname='/demo'
    >
        <h1 className='text-center mb-3 mt-8 text-5xl'>Joel Grayson&apos;s Demos</h1>
        
        <div className='d:grid d:grid-cols-[2fr_3fr] gap-3 relative'>
            <div className='pt-4'>
                <Yt width='100%'>bHHk2FL5Ujs</Yt>
            </div>
            <div>
                <h3>Venderoo</h3>
                <p>Designed & built vending machine.</p>
                <p>Impact: over a hundred snacks sold</p>
                <p>Tech: Arduino, C++</p>
                <div className='flex justify-end absolute bottom-0 right-0'>
                    <Link href='https://github.com/JoelGrayson/Venderoo/blob/main/Venderoo.ino' target='_blank' className='flex justify-center items-center gap-2 button !px-1.5 !py-1'>
                        <GithubIcon width={30} className='fill-black' />
                        View code
                    </Link>
                </div>
            </div>
        </div>

        <hr />

        <h3>Apps/Websites</h3>

        <div className='d:grid d:grid-cols-[2fr_3fr] gap-3 relative'>
            <div className='pt-4'>
                <Yt width='100%'>EImxhXcVqFs</Yt>
            </div>
            <div>
                <h3>Edit Time</h3>
                <p>Desktop app that enables users to change files&apos; date creation properties, which was previously impossible without the terminal.</p>
                <p>Impact: <b>6,000</b> users and <b>$1,500</b> in revenue</p>
                <p>Tech: Swift/SwiftUI, StoreKit, Bash</p>
                <div className='flex justify-end items-center gap-2 absolute top-3 right-0'>
                    <Link href='https://apps.apple.com/us/app/edit-time/id6464405876?pt=126612879&ct=web' target='_blank'>
                        <Image src='/image/software/worderoo/download-on-the-app-store.png' alt={'Download on the App Store'} width={114} height={38} />
                    </Link>
                </div>
            </div>
        </div>

        <hr />

        <div className='d:grid d:grid-cols-[2fr_3fr] gap-3 relative'>
            <div className='pt-4'>
                <Yt width='100%'>ltKnFS1miEQ</Yt>
            </div>
            <div>
                <h3>Focus</h3>
                <p>Helps users enter the flow while writing in Google Docs.</p>
                <p>Impact: <b>1,000</b> users</p>
                <p>Tech: TypeScript, HTML/JS/CSS, Perl, Bash</p>
                <div className='flex justify-end items-center gap-2 absolute top-3 right-0'>
                    <Link target='_blank' className='button' style={{display: 'inline-flex', alignItems: 'center', gap: 6, marginRight: 10, width: 163}} href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf'>
                        <svg style={{ width: 25, height: 25 }} viewBox='0 0 192 192'><defs><path id='a' d='M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z' /></defs><clipPath id='b'><use xlinkHref='#a' overflow='visible' /></clipPath><path clipPath='url(#b)' fill='#eee' d='M8 20h176v152H8z' /><path fill='#fff' d='M116 36H76c-4.42 0-8 3.58-8 8s3.58 8 8 8h40c4.42 0 8-3.58 8-8s-3.58-8-8-8z' clipPath='url(#b)' /><g clipPath='url(#b)'><defs><circle id='c' cx={96} cy={160} r={76} /></defs><clipPath id='d'><use xlinkHref='#c' overflow='visible' /></clipPath><path d='M32.07 84v93.27h34.01L96 125.45h76V84zm0 0v93.27h34.01L96 125.45h76V84z' clipPath='url(#d)' fill='#DB4437' /><path d='M20 236h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24zm0 0h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24z' clipPath='url(#d)' fill='#0F9D58' /><path d='M96 125.45l29.92 51.82L92.35 236H172V125.45zm0 0l29.92 51.82L92.35 236H172V125.45z' clipPath='url(#d)' fill='#FFCD40' /><g clipPath='url(#d)'><circle fill='#F1F1F1' cx={96} cy={160} r='34.55' /><circle fill='#4285F4' cx={96} cy={160} r='27.64' /></g></g><path clipPath='url(#b)' fill='#212121' fillOpacity='.05' d='M8 20h176v76H8z' /><path fill='#212121' fillOpacity='.02' d='M8 95h176v1H8z' /><path fill='#fff' fillOpacity='.05' d='M8 96h176v1H8z' /><path fill='#212121' fillOpacity='.02' d='M116 52H76c-4.25 0-7.72-3.32-7.97-7.5-.02.17-.03.33-.03.5 0 4.42 3.58 8 8 8h40c4.42 0 8-3.58 8-8 0-.17-.01-.33-.03-.5-.25 4.18-3.72 7.5-7.97 7.5zM8 20v1h176v-1H8z' /><path fill='#231F20' fillOpacity='.1' d='M76 36h40c4.25 0 7.72 3.32 7.97 7.5.01-.17.03-.33.03-.5 0-4.42-3.58-8-8-8H76c-4.42 0-8 3.58-8 8 0 .17.01.33.03.5.25-4.18 3.72-7.5 7.97-7.5zm96 135H20c-6.6 0-12-5.4-12-12v1c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12v-1c0 6.6-5.4 12-12 12z' /><radialGradient id='e' cx='7.502' cy='19.344' r='227.596' gradientUnits='userSpaceOnUse'><stop offset={0} stopColor='#fff' stopOpacity='.1' /><stop offset={1} stopColor='#fff' stopOpacity={0} /></radialGradient><path fill='url(#e)' d='M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z' /><path fill='none' d='M0 0h192v192H0z' /></svg>
                        <span style={{width: 80, whiteSpace: 'nowrap'}}>Add to Chrome</span>
                    </Link>
                </div>
                <div className='flex justify-end absolute bottom-0 right-0'>
                    <Link href='https://github.com/JoelGrayson/Focus-for-Google-Docs/blob/main/developing/pomodoro/index.html' target='_blank' className='flex justify-center items-center gap-2 button !px-1.5 !py-1'>
                        <GithubIcon width={30} className='fill-black' />
                        View code
                    </Link>
                </div>
            </div>
        </div>

        <hr />

        <div className='d:grid d:grid-cols-[2fr_3fr] gap-3 relative'>
            <div className='pt-4'>
                <Yt width='100%'>MNnVqfHZyQU</Yt>
            </div>
            <div>
                <h3>Homework Checker</h3>
                <p>Helps students keep track of completed assignments, so they don&apos;t miss any.</p>
                <p>Impact: <b>3,000</b> users</p>
                <p>Tech: TypeScript, OOP, Gulp, HTML/JS/SASS</p>
                <div className='flex justify-end items-center gap-2 absolute top-3 right-0'>
                    <Link target='_blank' className='button' style={{display: 'inline-flex', alignItems: 'center', gap: 6, marginRight: 10, width: 163}} href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'>
                        <svg style={{ width: 25, height: 25 }} viewBox='0 0 192 192'><defs><path id='a' d='M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z' /></defs><clipPath id='b'><use xlinkHref='#a' overflow='visible' /></clipPath><path clipPath='url(#b)' fill='#eee' d='M8 20h176v152H8z' /><path fill='#fff' d='M116 36H76c-4.42 0-8 3.58-8 8s3.58 8 8 8h40c4.42 0 8-3.58 8-8s-3.58-8-8-8z' clipPath='url(#b)' /><g clipPath='url(#b)'><defs><circle id='c' cx={96} cy={160} r={76} /></defs><clipPath id='d'><use xlinkHref='#c' overflow='visible' /></clipPath><path d='M32.07 84v93.27h34.01L96 125.45h76V84zm0 0v93.27h34.01L96 125.45h76V84z' clipPath='url(#d)' fill='#DB4437' /><path d='M20 236h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24zm0 0h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24z' clipPath='url(#d)' fill='#0F9D58' /><path d='M96 125.45l29.92 51.82L92.35 236H172V125.45zm0 0l29.92 51.82L92.35 236H172V125.45z' clipPath='url(#d)' fill='#FFCD40' /><g clipPath='url(#d)'><circle fill='#F1F1F1' cx={96} cy={160} r='34.55' /><circle fill='#4285F4' cx={96} cy={160} r='27.64' /></g></g><path clipPath='url(#b)' fill='#212121' fillOpacity='.05' d='M8 20h176v76H8z' /><path fill='#212121' fillOpacity='.02' d='M8 95h176v1H8z' /><path fill='#fff' fillOpacity='.05' d='M8 96h176v1H8z' /><path fill='#212121' fillOpacity='.02' d='M116 52H76c-4.25 0-7.72-3.32-7.97-7.5-.02.17-.03.33-.03.5 0 4.42 3.58 8 8 8h40c4.42 0 8-3.58 8-8 0-.17-.01-.33-.03-.5-.25 4.18-3.72 7.5-7.97 7.5zM8 20v1h176v-1H8z' /><path fill='#231F20' fillOpacity='.1' d='M76 36h40c4.25 0 7.72 3.32 7.97 7.5.01-.17.03-.33.03-.5 0-4.42-3.58-8-8-8H76c-4.42 0-8 3.58-8 8 0 .17.01.33.03.5.25-4.18 3.72-7.5 7.97-7.5zm96 135H20c-6.6 0-12-5.4-12-12v1c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12v-1c0 6.6-5.4 12-12 12z' /><radialGradient id='e' cx='7.502' cy='19.344' r='227.596' gradientUnits='userSpaceOnUse'><stop offset={0} stopColor='#fff' stopOpacity='.1' /><stop offset={1} stopColor='#fff' stopOpacity={0} /></radialGradient><path fill='url(#e)' d='M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z' /><path fill='none' d='M0 0h192v192H0z' /></svg>
                        <span style={{width: 80, whiteSpace: 'nowrap'}}>Add to Chrome</span>
                    </Link>
                </div>
                <div className='flex justify-end absolute bottom-0 right-0'>
                    <Link href='https://github.com/JoelGrayson/Homework-Checker/blob/main/alter%20page/src/pages/SchoologyPage.ts' target='_blank' className='flex justify-center items-center gap-2 button !px-1.5 !py-1'>
                        <GithubIcon width={30} className='fill-black' />
                        View code
                    </Link>
                </div>
            </div>
        </div>

        <hr />

        <div className='d:grid d:grid-cols-[2fr_3fr] gap-3 relative'>
            <div className='pt-4'>
                <Yt width='100%'>G8awTY4mh2I</Yt>
            </div>
            <div>
                <h3>Buseroo</h3>
                <p>Website and mobile app for students and teachers to find which school bus leads to any address. Allows schools to sign up and manage their bus route data in admin page. Example use cases: finding a bus to doctor&apos;s appointment, aunt&apos;s house, or museum.</p>
                <p>Impact: <b>1,000</b> searches</p>
                <p>Tech: TypeScript, Next.js/React, Prisma, Swift/SwiftUI, GCP, OAuth</p>
                <div className='flex justify-end items-center gap-2 absolute top-3 right-0'>
                    <Link href='https://buseroo.com/app?institution=demo-institution&group=Early+Buses' target='_blank' className='flex justify-center items-center gap-2 button !px-1.5 !py-1'>
                        Try Web Demo
                    </Link>
                    <Link href='https://apps.apple.com/us/app/buseroo/id6736895918?pt=126612879&ct=web' target='_blank'>
                        <Image src='/image/software/worderoo/download-on-the-app-store.png' alt={'Download on the App Store'} width={114} height={38} />
                    </Link>
                </div>
                {/* <div className='flex justify-end absolute bottom-0 right-0'>
                    <Link href='https://github.com/JoelGrayson/Venderoo/blob/main/Venderoo.ino' target='_blank' className='flex justify-center items-center gap-2 button !px-1.5 !py-1'>
                        <GithubIcon width={30} className='fill-black' />
                        View code
                    </Link>
                </div> */}
            </div>
        </div>

        <hr className='my-3' />
        <p>Other projects include <Link target='_blank' href='https://apps.apple.com/us/app/techmap/id6748248815?pt=126612879&ct=web'>TechMap</Link>, <Link href='https://apps.apple.com/app/worderoo/id6745312298' target='_blank'>Worderoo</Link>, <Link target='_blank' href='https://memorizethepresidents.com'>memorizethepresidents.com</Link>, <Link target='_blank' href='https://shirtocracy.com'>shirtocracy.com</Link>, and <Link target='_blank' href='https://studentsforelectricbuses.org'>studentsforelectricbuses.org</Link>.</p>
    </Page>;
}

