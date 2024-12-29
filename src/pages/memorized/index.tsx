import Page from "@/components/page/DefaultPage";

export default function Memorized() {
    return <Page bottomPadding seo={{
        title: 'Memorized',
        description: 'A list of things I have memorized.'
    }}>
        <h1 className="text-center">Memorized</h1>
        <h2>Facts</h2>
        <ul>
            <li>100 digits of pi</li>
            <li>Drawing a map of the US from memory</li>
            <li>In progress: Periodic Table of Elements</li>
            <li>In progress: Presidents of the United States</li>
            <li>In progress: All countries and capitals</li>
            <li>In progress: Morse code</li>
            <li>In progress: Sign language alphabet</li>
            <li>In progress: Arabic alphabet</li>
            <li>In progress: Korean alphabet</li>
            <li>In progress: Cyrillic alphabet</li>
            <li>In progress: Hebrew alphabet</li>
            <li>In progress: Greek alphabet</li>
        </ul>


        <h2>Skills</h2>
        <ul>
            <li>Chess</li>
            <li>Juggling</li>
            <li>Rubiks cube</li>
            <li>1000 Chinese characters</li>
            <li>Identifying Hex Code of a Color - needs practice</li>
            <li>In progress: Type 110 wpm for one minute (get to 130)</li>
        </ul>
    </Page>;
}
