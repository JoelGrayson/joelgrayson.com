import Page from "src/components/page/DefaultPage";

export default function Memorized() {
    return <Page bottomPadding>
        <h1 className="text-center">Memorized</h1>
        <ul>
            <li className=''>100 digits of pi</li>
            <li className=''>Drawing a map of the US from memory</li>
            <li className=''>In progress: Periodic Table of Elements</li>
            <li className=''>In progress: Presidents of the United States</li>
            <li className=''>In progress: All countries and capitals</li>
            <li className=''>In progress: Morse code</li>
            <li className=''>In progress: Sign language alphabet</li>
            <li className=''>In progress: Arabic alphabet</li>
            <li className=''>In progress: Korean alphabet</li>
            <li className=''>In progress: Cyrillic alphabet</li>
            <li className=''>In progress: Hebrew alphabet</li>
            <li className=''>In progress: Greek alphabet</li>
        </ul>


        <h1>Skills</h1>
        <li>Chess</li>
        <li>Juggling</li>
        <li>Rubiks cube</li>
        <li>1000 Chinese characters</li>
        <li>Identifying Hex Code of a Color - needs practice</li>
        <li>In progress: Type 110 wpm for one minute (get to 130)</li>
    </Page>;
}
