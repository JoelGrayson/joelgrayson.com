import Image from 'next/image';
import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function EditMacAddress() {
    return <Page bottomPadding seo={{
        title: 'Edit MAC Address',
        description: 'The Mac app for changing a mac\'s MAC address for MAC spoofing.',
    }}>
        <h1 className='text-center flex items-center justify-center gap-3'>
            {/* <Image src='/image/software/edit-time/logo.png' width={60} height={60} alt='Logo' className='inline relative bottom-1' /> */}
            Edit MAC Address
        </h1>
        <p className='italic text-center text-gray-400'>The Mac app for changing a mac&apos;s MAC address. It is useful for MAC spoofing. Edit MAC Address lets you change MAC addresses in one click without having to use many commands in the terminal.</p>

        {/* <div className='flex justify-end'>
            <Link target='_blank' href='https://apps.apple.com/us/app/edit-time/id6464405876?pt=126612879&ct=web'>
                <Image src="/image/software/edit-time/download-on-the-mac-app-store.png" alt="Download on the Mac App Store" height={74.375} width={170} />
            </Link>
        </div> */}

        <br />

        <h3>Usage</h3>
        {/* <Image src="/image/software/edit-time/usage.jpg" alt="Edit Time Usage"  width='0' height={0} style={{ width: '100%', height: 'auto' }} /> */}
        <p>TODO</p>
        <br />

        <h3>Demo</h3>
        <p>TODO</p>
        {/* <Image src="/software/edit-time/demo.gif" alt="Demo" width='554' height='338' /> */}
        {/* <video src="https://s3.amazonaws.com/joelgrayson.com/Edit+Time+Demo.mp4" controls autoPlay muted></video> */}


        <br />
        <h3>Support/Bugs</h3>
        <p>Submit a bug report here: <a href="https://forms.gle/npGL1ZfBehF9wC1dA" target='_blank'>https://forms.gle/npGL1ZfBehF9wC1dA</a>.</p>

        <h3 id='privacy-policy'>Privacy Policy</h3>
        {/* <p>No personally identifiable information is collected.</p> */}
        <p>This privacy policy may change in the future. Last updated 12.31.2024</p>


        <h3>Terms of Service</h3>
        <iframe src="/software/edit-mac-address/Edit MAC Address EULA.pdf" width='100%' height='708' />
        <Link href="/software/edit-mac-address/Edit MAC Address EULA.pdf" target='_blank' className='button'>Download PDF</Link>
    </Page>;
}

