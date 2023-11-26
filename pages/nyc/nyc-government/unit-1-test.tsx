import Page from '@/components/page/DefaultPage';
import Question from '@/components/nyc-government/TestQuestion';

export default function Unit1Quiz() {
    let questionNumber=1;
    return <Page bottomPadding>
        <h1 className='text-center'>Unit 1 Quiz</h1>
        <p>How well do you know the mayor and mayoral departments? We shall see...</p>
        <br />
        
        <Question
            type='reveal'
            question='What NYC-wide officials are elected every 4 years?'
            choices={['Mayor', 'City Council']}
            answer={'Mayor, comptroller, and public advocate'}
            number={questionNumber++}
        />
        <Question
            type='reveal'
            question='Give an overview of the powers and responsibilities of the mayor’s office.'
            answer={'budget, overseeing agencies and departments (appointments), planning for city’s short and long-term goals, ex officio member of many groups and organizations, crisis management, public relations outside the city'}
            number={questionNumber++}
        />
        <Question
            type='reveal'
            question='What groups run the NYC Department of Education?'
            answer={'mayor, chancellor, panel on education policy, superintendents and community district education councils, PTA, NYS Board of Regents creates tests and standards for the city'}
            number={questionNumber++}
        />
        <Question
            type='reveal'
            question='Describe the demographics (largest socioeconomic class, racial percentages, and % non-English speakers) of public school students.'
            answer={`73% live in poverty, 42% Hispanic, 26% African American, 15% white, 16% Asian. 13% are non-English speakers`}
            number={questionNumber++}
        />
        <Question
            type='reveal'
            question={<span>
                <span>Which of the following city agencies that are not mayoral agencies:</span>
                <ul>
                    <li>MTA</li>
                    <li>NYC Department of Education</li>
                    <li>NYPD</li>
                    <li>CUNY</li>
                    <li>NYC Health + Hospitals</li>
                </ul>
            </span>}
            answer={`MTA, CUNY, NYC Health + Hospitals`}
            number={questionNumber++}
        />
        <Question
            type='reveal'
            question='Describe the range of social services offered by the NYC government.'
            answer={`health care; school; aid to the aging, children, the disabled, HIV/AIDS, homeless, domestic violence victims, small businesses, veterans, immigrants, workers, among others`}
            number={questionNumber++}
        />
        <Question
            type='reveal'
            question='Describe the demographics (largest socioeconomic class, racial percentages, and % non-English speakers) of public school students.'
            answer={`73% live in poverty, 42% Hispanic, 26% African American, 15% white, 16% Asian. 13% are non-English speakers`}
            number={questionNumber++}
        />
        <Question
            type='multiple choice'
            question='What month is the City Council on recess?'
            choices={['July', 'August', 'September', 'October', 'Never']}
            answer={4}
            number={questionNumber++}
        />
        <Question
            type='reveal'
            question='Give an overview of NYC’s outdoor recreational facilities.'
            answer={`Parks and open spaces, beaches, pools, other playing fields, golf courses, open streets, bicycle lanes, among others`}
            number={questionNumber++}
        />
        <Question
            type='reveal'
            question='Describe the function of community boards.'
            answer={`community boards are a way for local residents to have an impact on city policy. They are consulted by developers and government agencies for input on local projects because they are considered experts in their neighborhoods`}
            number={questionNumber++}
        />
    </Page>;
}

