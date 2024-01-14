import Page from '@/components/page/DefaultPage';

export default function Impact() {
    return <Page seo={{title: 'Impact'}}>
        <h1 className='text-center'>Impact</h1>
        <p>My climate initiatives reduce emissions by an estimated 340 metric tons of CO₂ equivalent (MTCO₂e) per year.</p>

        <h3>Machines Sitting on Riverdale&apos;s Campus</h3>
        <p>Vending machine selling snacks to ~7 students per day</p>
        <p>Buseroo helping ~10 people a day</p>
    
        <h3>Software</h3>
        <p>Homework Checker helping 1,000 students daily</p>
        <p></p>

        <h3>Government</h3>
        <details>
            <summary>Community board 1 member</summary>
            <ul>
                <li>Amended resolution to turn proposed park into Miyawaki forest.</li>
                <li>Created budget request for electric ferry.</li>
                <li>Proposed resolution to open new maker spaces in middle schools.</li>
            </ul>
        </details>
        <details>
            <summary>Served as grade representative in student government for five years</summary>
            <ul>
                <li>Stopped bus idling</li>
                <li>Switched from gas to electric leaf blowers</li>
                <li>Created Chemistry help desk</li>
                <li>Built picnic tables</li>
                <li>Ran dodgeball tournament and talent shows</li>
                <li>Helped administrators plan upcoming school year schedule.</li>
            </ul>
        </details>
    </Page>;
}
