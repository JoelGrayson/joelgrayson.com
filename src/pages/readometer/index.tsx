import Image from 'next/image';
import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function Readometer() {
    return <Page bottomPadding seo={{
        title: 'Readometer',
        description: 'The Mac app for changing a file\'s created and modified dates',
    }}>
        <h1 className='text-center flex items-center justify-center gap-3'>
            <Image src='/image/software/readometer/logo.png' width={60} height={60} alt='Logo' className='inline relative bottom-1' />
            Readometer
        </h1>
        <p className='italic text-center text-gray-400'>The app for tracks how quickly you are reading</p>

        {/* TODO: update */}
        <div className='flex justify-end'>
            <Link target='_blank' href='https://apps.apple.com/us/app/edit-time/id6464405876'>
                <Image src="/image/software/edit-time/download-on-the-mac-app-store.png" alt="Download on the Mac App Store" height={74.375} width={170} />
            </Link>
        </div>

        <p className='indent-8'>Readometer is built for people who want to pace themselves while reading or see how fast they can read. For example, a student who wants to finish 90 pages of reading HW in 2 hours can pace themselves in Readometer&apos;s Structured mode. Or, a person who wants to read faster can track their current reading speed while reading a physical book, with a goal of getting down to 1:00 per page.</p>

        <p className='indent-8'>Readometer tracks how quickly you are reading (minutes and seconds per page). In the Structured mode, enter the page range you plan to read and how quickly you plan to read. Then, it will show you which page you should be on throughout your reading session so you can pace yourself. In the Freestyle mode, you can just start reading and tap when you turn the page. It will tell you how quickly you have been reading.</p>
        

        <br />
        <h3>Support/Bugs</h3>
        <p>Submit a bug report here: <a href="https://forms.gle/xXZcRVpEmH6vQJJV6" target='_blank'>https://forms.gle/xXZcRVpEmH6vQJJV6</a>.</p>
        {/* {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeItHxBKJG1R8uA_ybo7kKlNxqcdUEMhMceqay1ZcqGYPrUOA/viewform?usp=sf_link" width='100%' height="708">Loading…</iframe> */}
        
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeItHxBKJG1R8uA_ybo7kKlNxqcdUEMhMceqay1ZcqGYPrUOA/viewform?embedded=true" width='100%' height="708">Loading…</iframe> */}


        <h3 id='privacy-policy'>Privacy Policy</h3>
        <p>No data is collected.</p>
        <p>This privacy policy could change in the future. Last updated 1.2.2026</p>
    </Page>;
}

