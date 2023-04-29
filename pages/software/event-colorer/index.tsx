import Page from '@/components/global/Page';
import Link from 'next/link';
import Image from 'next/image';

export default function EventColorer() {
    return <Page>
        <h1 className='text-center flex justify-center items-center'>
            <span>Event Colorer&nbsp;</span>
            <Image width='48' height='48' className='relative right-[-15px]' src='/image/software/event-colorer/logo.png' alt='Logo' />
        </h1>

        Change all events of a specific title to a color. Without this extension, you would need to manually select the color of each event. This extension gets all events of a given title and colors them for you. In a few clicks, you can color-code your calendar.
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ONW3zxBkW1M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

        <br />
        
        <h3>Support</h3>
        <p>For any questions or bug reports, please submit through <Link href='https://forms.gle/sgyM7G5c2wrXBu4A7'>this google form</Link></p>

        <h3>Terms of Service</h3>
        <p>Do not use this extension for illegal purposes. We are not responsible for any damages caused by this extension. You are allowed to modify the code and use it in your own projects, but do not simply republish this extension as your own.</p>

        <h3>Privacy Policy</h3>
        <p>We do not collect any data. We cannot sell your personal data or share it with a third-party service because we have no way of collecting data. Why am I using "we?" I'm just an indie dev. For any questions, email joel@joelgrayson.com</p>
        <br />

    </Page>;
}
