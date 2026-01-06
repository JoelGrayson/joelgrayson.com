import Image from 'next/image';
import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function EditTime() {
    return <Page bottomPadding seo={{
        title: 'Edit Time',
        description: 'The Mac app for changing a file\'s created and modified dates',
    }}>
        <h1 className='text-center flex items-center justify-center gap-3'>
            <Image src='/image/software/edit-time/logo.png' width={60} height={60} alt='Logo' className='inline relative bottom-1' />
            Edit Time
        </h1>
        <p className='italic text-center text-gray-400'>The Mac app for changing a file&apos;s created and modified dates. Edit Time is only way to change a file&apos;s date modified and date created without using the terminal.</p>

        <div className='flex justify-end'>
            <Link target='_blank' href='https://apps.apple.com/us/app/edit-time/id6464405876?pt=126612879&ct=web'>
                <Image src="/image/software/edit-time/download-on-the-mac-app-store.png" alt="Download on the Mac App Store" height={74.375} width={170} />
            </Link>
        </div>

        <br />

        <h3>Usage</h3>
        <Image src="/image/software/edit-time/usage.jpg" alt="Edit Time Usage"  width='0' height={0} style={{ width: '100%', height: 'auto' }} />
        <br />

        <h3>Demo</h3>
        {/* <Image src="/software/edit-time/demo.gif" alt="Demo" width='554' height='338' /> */}
        <video src="https://s3.amazonaws.com/joelgrayson.com/Edit+Time+Demo.mp4" controls autoPlay muted></video>


        <br />
        <h3>Support/Bugs</h3>
        <p>Submit a bug report here: <a href="https://forms.gle/MprXLj4iWBNYNQhQ8" target='_blank'>https://forms.gle/MprXLj4iWBNYNQhQ8</a>.</p>
        {/* {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeItHxBKJG1R8uA_ybo7kKlNxqcdUEMhMceqay1ZcqGYPrUOA/viewform?usp=sf_link" width='100%' height="708">Loading…</iframe> */}
        
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeItHxBKJG1R8uA_ybo7kKlNxqcdUEMhMceqay1ZcqGYPrUOA/viewform?embedded=true" width='100%' height="708">Loading…</iframe> */}


        <h3 id='privacy-policy'>Privacy Policy</h3>
        <p>No data is collected.</p>
        <p>This privacy policy may change in the future. Last updated 11.2.2024</p>


        <h3>Terms of Service</h3>
        <iframe src="/software/edit-time/Edit Time EULA.pdf" width='100%' height='708' />
        <Link href="/software/edit-time/Edit Time EULA.pdf" target='_blank' className='button'>Download PDF</Link>
    </Page>;
}

