import Page from 'src/components/page/DefaultPage';
import Question from 'src/components/nyc-government/TestQuestion';

export default function Test() {
    let questionNumber=1;
    return <Page bottomPadding>
        <h1 className='text-center'>Test</h1>
        <p>How well do you know NYC government? We shall see...</p>
        <br />
        
        <Question
            type='multiple choice'
            question='Whose opinion is more important to the state and federal government?'
            choices={['Mayor', 'City Council']}
            answer={0}
            extra={<p>See page 234 of <i>Berg</i></p>}
            number={questionNumber++}
        />
        <Question
            type='multiple choice'
            question='Who succeeds the mayor if he or she is unable to serve?'
            choices={['First deputy mayor', 'Public advocate', 'Council speaker', 'Comptroller']}
            answer={1}
            number={questionNumber++}
        />
        <Question
            type='text'
            question='What process do zoning map changes go through?'
            answer={['ULURP', 'ulurp', 'Uniform Land Use Review Procedure']}
            number={questionNumber++}
        />
        <Question
            type='reveal'
            question='What was the Act of Consolidation and why is it important?'
            answer={['It combined the five boroughs into one city and created the borough president position.']}
            number={questionNumber++}
        />
    </Page>;
}

