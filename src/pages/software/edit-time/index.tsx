import Image from 'next/image';
import Page from '@/components/page/DefaultPage';
import Link from 'next/link';
// import Button from '@jcomponents/button';

export default function EditTime() {
    return <Page bottomPadding seo={{
        title: 'Edit Time',
        description: 'The Mac app for changing a file\'s created and modified dates',
    }}>
        <h1 className='text-center flex items-center justify-center gap-3'>
            <Image src='/image/software/edit-time/logo.png' width={60} height={60} alt='Logo' className='inline relative bottom-1' />
            Edit Time
        </h1>
        <p className='italic text-center text-gray-400'>The Mac app for changing a file&apos;s created and modified dates</p>
        <br />
        {/* <p>Available on the Mac App Store</p> */}
        <Link target='_blank' href='https://apps.apple.com/us/app/edit-time/id6464405876'>
            <Image src="/image/software/edit-time/download-on-the-mac-app-store.png" alt="Download on the Mac App Store" height={74.375} width={170} style={{
                position: 'absolute',
                right: '40px',
                top: '130px'
            }} />
        </Link>
        {/* <a className='button' href=''>Download for Mac</a> */}
        <br />

        <h3>Usage</h3>
        {/* <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            placeItems: 'center'
        }}>
            <Image src="/software/edit-time/screen-1.png" alt="Screen 1" width={300} height={158} />
            <Image src="/software/edit-time/screen-2.png" alt="Screen 2" width='300' height='191' />
            <p className='h-fit'>1. Choose the file</p>
            <p className='h-fit'>2. Edit the file&apos;s name</p>
        </div> */}
        <img src="/image/software/edit-time/usage.jpg" alt="Edit Time Usage" />
        <br />

        <h3>Demo</h3>
        {/* <Image src="/software/edit-time/demo.gif" alt="Demo" width='554' height='338' /> */}
        <video src="https://s3.amazonaws.com/joelgrayson.com/Edit+Time+Demo.mp4" controls autoPlay muted></video>

        <br />
        <h3>Support/Bugs</h3>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSePFBfxJWYugRXSpnNXFOmJdlxzNqd4MeIxQFUkxl-rQDJBrQ/viewform?embedded=true" width="640" height="708">Loading…</iframe>

        <h3>Privacy Policy</h3>
        <p>No data is collected.</p>
    </Page>;
}

