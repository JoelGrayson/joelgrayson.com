import Page from '@/components/global/Page';
import { Subject } from 'pages/maths';
import { css } from '@emotion/css';

export default function Software() {
    const grid=css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 3px;
    `;

    return <Page>
        <h1 className='text-center'>Software</h1>

        <h3>Extensions</h3>
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
        </div>
    </Page>;
}

