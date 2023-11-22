import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import Link from 'next/link';
import Image from 'next/image';

export default function EventColorer() {
    return <Page bottomPadding>
        <h1 className='text-center flex justify-center items-center'>
            <span>Event Colorer&nbsp;</span>
            <Image width='48' height='48' className='relative right-[-15px]' src='/image/software/event-colorer/logo.png' alt='Logo' />
        </h1>

        Change all events of a specific title to a color. Without this extension, you would need to manually select the color of each event. This extension gets all events of a given title and colors them for you. In a few clicks, you can color-code your calendar.
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ONW3zxBkW1M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

        {/* Buttons */}
        <div className='buttons'>
            {/* <Link target='_blank' href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'>
                <Button aria-label='Google App Store' style={{display: 'inline-flex', alignItems: 'center', gap: 4, marginRight: 10, width: 170}}>
                    <svg className={Button.Icon} viewBox='0 0 192 192'><defs><path id='a' d='M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z' /></defs><clipPath id='b'><use xlinkHref='#a' overflow='visible' /></clipPath><path clipPath='url(#b)' fill='#eee' d='M8 20h176v152H8z' /><path fill='#fff' d='M116 36H76c-4.42 0-8 3.58-8 8s3.58 8 8 8h40c4.42 0 8-3.58 8-8s-3.58-8-8-8z' clipPath='url(#b)' /><g clipPath='url(#b)'><defs><circle id='c' cx={96} cy={160} r={76} /></defs><clipPath id='d'><use xlinkHref='#c' overflow='visible' /></clipPath><path d='M32.07 84v93.27h34.01L96 125.45h76V84zm0 0v93.27h34.01L96 125.45h76V84z' clipPath='url(#d)' fill='#DB4437' /><path d='M20 236h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24zm0 0h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24z' clipPath='url(#d)' fill='#0F9D58' /><path d='M96 125.45l29.92 51.82L92.35 236H172V125.45zm0 0l29.92 51.82L92.35 236H172V125.45z' clipPath='url(#d)' fill='#FFCD40' /><g clipPath='url(#d)'><circle fill='#F1F1F1' cx={96} cy={160} r='34.55' /><circle fill='#4285F4' cx={96} cy={160} r='27.64' /></g></g><path clipPath='url(#b)' fill='#212121' fillOpacity='.05' d='M8 20h176v76H8z' /><path fill='#212121' fillOpacity='.02' d='M8 95h176v1H8z' /><path fill='#fff' fillOpacity='.05' d='M8 96h176v1H8z' /><path fill='#212121' fillOpacity='.02' d='M116 52H76c-4.25 0-7.72-3.32-7.97-7.5-.02.17-.03.33-.03.5 0 4.42 3.58 8 8 8h40c4.42 0 8-3.58 8-8 0-.17-.01-.33-.03-.5-.25 4.18-3.72 7.5-7.97 7.5zM8 20v1h176v-1H8z' /><path fill='#231F20' fillOpacity='.1' d='M76 36h40c4.25 0 7.72 3.32 7.97 7.5.01-.17.03-.33.03-.5 0-4.42-3.58-8-8-8H76c-4.42 0-8 3.58-8 8 0 .17.01.33.03.5.25-4.18 3.72-7.5 7.97-7.5zm96 135H20c-6.6 0-12-5.4-12-12v1c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12v-1c0 6.6-5.4 12-12 12z' /><radialGradient id='e' cx='7.502' cy='19.344' r='227.596' gradientUnits='userSpaceOnUse'><stop offset={0} stopColor='#fff' stopOpacity='.1' /><stop offset={1} stopColor='#fff' stopOpacity={0} /></radialGradient><path fill='url(#e)' d='M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z' /><path fill='none' d='M0 0h192v192H0z' /></svg>
                    <span style={{width: 80, whiteSpace: 'nowrap'}}>Install</span>
                </Button>
            </Link> */}
            <Link target='_blank' href='https://github.com/JoelGrayson/Event-Colorer'>
                <Button aria-label='GitHub source code' style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
                    <svg className={Button.Icon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'><path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' /></svg>
                    <span>Source Code</span>
                </Button>
            </Link>
        </div>

        <br />
        
        <h3>Support</h3>
        <p>For any questions or bug reports, please submit through <Link href='https://forms.gle/sgyM7G5c2wrXBu4A7'>this google form</Link>.</p>

        <h3>Terms of Service</h3>
        <p>Do not use this extension for illegal purposes. We are not responsible for any damages caused by this extension. You are allowed to modify the code and use it in your own projects, but do not simply republish this extension as your own.</p>

        <h3>Privacy Policy</h3>
        <p>We do not collect any data. We cannot sell your personal data or share it with a third-party service because we have no way of collecting data. Why am I using &quot;we?&quot; I&apos;m just an indie dev. For any questions, email joel@joelgrayson.com</p>

    </Page>;
}
