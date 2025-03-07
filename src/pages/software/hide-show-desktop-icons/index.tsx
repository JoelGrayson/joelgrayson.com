import Page from '@/components/page/DefaultPage';
import Button from '@jcomponents/button';
import Link from 'next/link';

export default function HideShowDesktopIcons() {
    return <Page bottomPadding>
        <h1>Hide/Show Desktop Icons</h1>
        <p>Lets you easily hide and show desktop icons on MacOS.</p>
        
        <Link download href="/software/hide desktop.command">
            <Button color='jblue'>Download</Button>
        </Link>
        
        <h3>How to Use</h3>
        <p><Link download href="/software/hide desktop.command">Download</Link> the <code>hide desktop.command</code> & move it to your Desktop.</p>
        <p>Double click the `hide desktop` executable to hide desktop icons.</p>
        <p>After doing so, a `show desktop` file will appear in your downloads folder. Double click this file to restore the desktop icons.</p>

        <h3>Demo</h3>
        <iframe width='560' height='315' src='https://youtube.com/embed/DkhdgAGMLx4' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
    </Page>;
}

