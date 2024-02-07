import Page from '@/components/page/DefaultPage';
// import { Subject } from 'pages/maths';
// import { css } from '@emotion/css';
// import Sites from 'pages/sites';
import Link from 'next/link';

export default function Software() {
    // const grid=css`
    //     display: grid;
    //     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    //     gap: 3px;
    // `;

    return <Page bottomPadding
        seo={{
            title: 'Software',
            description: 'Apps, extensions, resources, and developer tools that Joel has made'
        }}
        pathname='/software'
    >
        <h1 className='text-center'>Software</h1>

        {/* TODO: create with bulletbrainstorm.com */}
        <ul>
            <li>
                Sites
                <ul>
                    <li><Link target='_blank' href='/'>joelgrayson.com</Link></li>
                    <li><Link target='_blank' href='https://buseroo.com'>buseroo.com</Link></li>
                    <li><Link target='_blank' href='https://lirongart.com'>lirongart.com</Link></li>
                    <li><Link target='_blank' href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'>youtube.com/@JoelGrayson (Slaphappy)</Link></li>
                    <li><Link target='_blank' href='https://studentsforelectricbuses.org'>studentsforelectricbuses.org</Link></li>
                    <li><Link target='_blank' href='https://luxpremierllc.com'>luxpremierllc.com</Link></li>
                    <li><Link target='_blank' href='https://memorizethepresidents.com'>memorizethepresidents.com</Link></li>
                    <li><Link target='_blank' href='https://joelgrayson.wixsite.com/geography'>Geography learning site</Link> (my first site)</li>
                    <li><Link target='_blank' href='https://bulletbrainstorm.com'>bulletbrainstorm.com</Link> (coming soon)</li>
                    <li><Link target='_blank' href='https://shirtocracy.com'>shirtocracy.com</Link> (coming soon)</li>
                </ul>
            </li>
            <li>
                Extensions
                <ul>
                    <li><Link href="https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj" target="_blank">Homework Checker</Link></li>
                    <li><Link href="https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf" target="_blank">Focus</Link></li>
                </ul>
            </li>
            <li>
                Apps
                <ul>
                    <li><Link href="/software/edit-time">Edit Time</Link> (waiting for approval for publishing on App Store)</li>
                    {/*
                    <li><Link href="" target="_blank">Bullet Brainstorm Desktop</Link></li>
                    <li><Link href="" target="_blank">Buseroo Mobile</Link></li>
                    <li><Link href="/chess/index.html" target="_blank">Chess</Link></li>
                    <li><Link href="" target="_blank">Event Colorer</Link> (waiting for approval for publishing on the Google App Store)</li>
                    */}
                </ul>
            </li>
            <li>
                Developer Tools
                <ul>
                    <li><Link href="/software/hide desktop.command" target="_blank">Hide/Show Desktop Icons</Link></li>
                    <li><Link href="https://github.com/JoelGrayson/create-joel-app" target="_blank">Create Joel App</Link></li>
                    <li><Link href="/software/processing-to-html-converter" target="_blank">Processing to HTML Converter</Link></li>
                    {/* TODO: Scripts */}
                </ul>
            </li>
            <li>
                Resources
                <ul>
                    <li><Link href="https://www.youtube.com/watch?v=Fi19NDsJB4E" target="_blank">Zoom Timer</Link></li>
                    <li><Link href="/software/days-until" target="_blank">Days Until</Link></li>
                </ul>
            </li>
        </ul>

        {/* <h3>Extensions</h3>
        <div className={grid}>
            <Subject link='/software/homework-checker'>Homework Checker</Subject>
            <Subject link='/software/focus'>Focus</Subject>
        </div>

        <h3>Resources</h3>        
        <div className={grid}>
            <Subject link='/software/zoom-timer'>Zoom Timer</Subject>
            <Subject link='/software/days-until'>Days Until</Subject>
        </div>

        <h3>Developer Tools</h3>
        <div className={grid}>
            <Subject link='/software/hide-show-desktop-icons'>Hide/Show Desktop Icons</Subject>
            <Subject link='/software/create-joel-app'>Create Joel App</Subject>
            <Subject link='/software/run-processing-in-web'>Run Processing in Web</Subject>
        </div>
        
        <h3>Apps</h3>
        <div className={grid}>
            <Subject link='/software/edit-time'>Edit Time</Subject>
            <Subject link='/software/chess'>Chess</Subject>
            <Subject link='/software/event-colorer'>Event Colorer</Subject>
        </div> */}
    </Page>;
}

