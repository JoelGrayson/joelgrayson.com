import Page from '@/components/global/Page';
// import { Subject } from 'pages/maths';
// import { css } from '@emotion/css';
// import Sites from 'pages/sites';

export default function Software() {
    // const grid=css`
    //     display: grid;
    //     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    //     gap: 3px;
    // `;

    return <Page bottomPadding seo={{
        title: 'Software',
        description: 'Apps, extensions, resources, and developer tools that Joel has made'
    }}>
        <h1 className='text-center'>Software</h1>

        {/* TODO: create with bulletbrainstorm.com */}
        <ul>
            <li>
                Sites
                <ul>
                    <li><a className='styled' target='_blank' href='/'>joelgrayson.com</a></li>
                    <li><a className='styled' target='_blank' href='https://buseroo.com'>buseroo.com</a></li>
                    <li><a className='styled' target='_blank' href='https://lirongart.com'>lirongart.com</a></li>
                    <li><a className='styled' target='_blank' href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'>youtube.com/@JoelGrayson (Slaphappy)</a></li>
                    <li><a className='styled' target='_blank' href='https://studentsforelectricbuses.org'>studentsforelectricbuses.org</a></li>
                    <li><a className='styled' target='_blank' href='https://luxpremierllc.com'>luxpremierllc.com</a></li>
                    <li><a className='styled' target='_blank' href='https://memorizethepresidents.com'>memorizethepresidents.com</a></li>
                    <li><a className='styled' target='_blank' href='https://joelgrayson.wixsite.com/geography'>Geography learning site</a> (my first site)</li>
                    <li><a className='styled' target='_blank' href='https://bulletbrainstorm.com'>bulletbrainstorm.com</a> (coming soon)</li>
                    <li><a className='styled' target='_blank' href='https://shirtocracy.com'>shirtocracy.com</a> (coming soon)</li>
                </ul>
            </li>
            <li>
                Extensions
                <ul>
                    <li><a href="https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj" className="styled" target="_blank">Homework Checker</a></li>
                    <li><a href="https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf" className="styled" target="_blank">Focus</a></li>
                </ul>
            </li>
            {/* <li>
                Apps
                <ul>
                    <li><a href="" target="_blank" className="styled">Bullet Brainstorm Desktop</a></li>
                    <li><a href="" target="_blank" className="styled">Edit Time</a> (waiting for approval for publishing on App Store)</li>
                    <li><a href="/chess/index.html" target="_blank" className="styled">Chess</a></li>
                    <li><a href="" target="_blank" className="styled">Event Colorer</a> (waiting for approval for publishing on the Google App Store)</li>
                </ul>
            </li> */}
            <li>
                Developer Tools
                <ul>
                    <li><a href="/software/hide desktop.command" target="_blank" className="styled">Hide/Show Desktop Icons</a></li>
                    <li><a href="https://github.com/JoelGrayson/create-joel-app" target="_blank" className="styled">Create Joel App</a></li>
                    <li><a href="/software/processing-to-html-converter" target="_blank" className="styled">Processing to HTML Converter</a></li>
                    {/* TODO: Scripts */}
                </ul>
            </li>
            <li>
                Resources
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=Fi19NDsJB4E" target="_blank" className="styled">Zoom Timer</a></li>
                    <li><a href="/software/days-until" target="_blank" className="styled">Days Until</a></li>
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

