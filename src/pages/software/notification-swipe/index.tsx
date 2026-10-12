import Image from 'next/image';
import Page from '@/components/page/DefaultPage';
import Link from 'next/link';
import { usePlausible } from 'next-plausible';

const download='/software/notification-swipe/NotificationSwipe.zip';

export default function NotificationSwipe() {
    const plausible=usePlausible();
    const trackDownload=()=>plausible('notificationSwipeDownloaded');

    return <Page bottomPadding seo={{
        title: 'Notification Swipe',
        description: 'A bell in the Mac menu bar that sweeps every notification off the screen without clearing it.',
    }}>
        <h1 className='text-center flex items-center justify-center gap-3'>
            <Image src='/image/software/notification-swipe/logo.png' width={60} height={60} alt='Notification Swipe icon' className='inline relative bottom-1' />
            Notification Swipe
        </h1>
        <p>A bell in your Mac&apos;s menu bar. Click it and every notification on screen slides away into Notification Center. They are dismissed, not cleared, so they are still there when you click the date.</p>

        <div className='flex justify-center my-8'>
            <Link download href={download} onClick={trackDownload}
                className='unstyled inline-flex items-center gap-3 rounded-2xl bg-black px-9 py-4 text-xl font-semibold text-white transition-colors hover:bg-neutral-800 active:bg-neutral-700'>
                <AppleLogo />
                Download for Mac
            </Link>
        </div>

        <h3>How to Install</h3>
        <ol>
            <li><Link download href={download} onClick={trackDownload}>Download</Link> and unzip it, then move <code>Notification Swipe.app</code> to your Applications folder.</li>
            <li>Open it. A bell appears in the menu bar.</li>
            <li>macOS asks for Accessibility access. Turn on Notification Swipe in System Settings → Privacy &amp; Security → Accessibility.</li>
        </ol>

        <h3>How to Use</h3>
        <ul>
            <li>Click the bell to dismiss every notification on screen.</li>
            <li>Right-click the bell to launch it at login or to quit.</li>
            <li>Hold ⌘ and drag the bell to move it along the menu bar.</li>
        </ul>

        <h3>How It Works</h3>
        <p>macOS has no way to dismiss a notification without clearing it, so the app does what you would do by hand: it finds each notification and drags it off to the right. Your cursor jumps for an instant and returns to where it was. That is why it needs Accessibility access.</p>

        <h3>Requirements</h3>
        <p>Made for macOS 26. It has not been tested on earlier versions.</p>

        <h3>Privacy</h3>
        <p>No data is collected. The app never connects to the internet.</p>
    </Page>;
}

function AppleLogo() {
    return <svg viewBox='0 0 24 24' className='h-7 w-7 fill-current relative bottom-[1px]' aria-hidden='true'>
        <path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />
    </svg>;
}
