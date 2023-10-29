import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import { useState } from 'react';

export default function Test() {
    let questionNumber=1;
    return <Page>
        <h1 className='text-center'>Test</h1>
        <p>How well do you know NYC government? We shall see...</p>
        
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
            question='Through what process do zoning map changes go through?'
            answer={['ULURP', 'ulurp', 'Uniform Land Use Review Procedure']}
            number={questionNumber++}
        />
    </Page>;
}


export function Question({ type, question, answer, choices, extra=undefined, number }: {
    type: 'text' | 'reveal' | 'multiple choice';
    question: JSX.Element | string;
    choices?: Array<JSX.Element | string>;
    answer: JSX.Element | string | number /* index of multiple choice*/ | string[] /* multiple valid answers */;
    extra?: JSX.Element | string | Array<JSX.Element | string>;
    number: number;
}) {
    const [answered, setAnswered]=useState<boolean>(false);
    const [userInput, setUserInput]=useState<number | string>('');
    let correct=answer==userInput;
    if (type==='text' && Array.isArray(answer))
        correct=answer.includes(userInput as string);
    if (type==='multiple choice') {
        if (!choices)
            throw new Error('Multiple choice question must have choices');
    }
    
    return <form className='relative' onSubmit={e=>{
        setAnswered(true);
        e.preventDefault();
    }}>
        <div className='question'>{number}. {question}</div>
        {{
            'text': <>
                <input type="text"
                    value={userInput}
                    onChange={e=>setUserInput(e.target.value)}
                    disabled={answered}
                />
                {
                    answered
                    ? <>
                        <div className='answer'>{answer}</div>
                        { extra && <div className='extra'>{Array.isArray(extra) ? extra[0] : extra}</div> }
                    </>
                    : <Button type="submit">Submit</Button>
                }
            </>,
            'reveal': <>
                {
                    answered
                    ? <>
                        <div className='answer'>{answer}</div>
                    { extra && <div className='extra'>{extra}</div> }
                    </>
                    : <Button type="submit">Submit</Button>
                }
            </>,
            'multiple choice': <>
                {choices?.map((choice, i)=>{
                    const id=`question-${number}-choice-${i}`;
                    let className;
                    if (answered) {
                        if (answer===i) 
                            className='text-green-900 bg-green-200';
                        else
                            className='text-red-900 bg-red-200';
                    }
                    return <div key={i} className={className}>
                        <input type="radio"
                            value={i}
                            id={id}
                            checked={userInput==i}
                            onChange={e=>setUserInput(e.target.value)}
                            disabled={answered}
                        />
                        <label htmlFor={id} className='ml-3'>{choice}</label>
                    </div>;
                })}
                {
                    answered
                    ? <>
                        { extra && <div className='extra'>{extra}</div> }
                        { correct ?
                            // Checkmark
                            <svg className='absolute top-[-10px] left-[-40px] w-10 h-10' fill='green' version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"> <path d="m958.96 406.92-65.746-68.016-419.8 406.95-162.1-180.24-70.281 63.102 194.59 216.89c5.793 6.2969 12.848 10.832 21.16 13.602 8.3125 2.5195 16.625 2.7734 24.938 0.75781 8.3164-2.2695 15.621-6.3008 21.918-12.094z"/> </svg>
                            :
                            // X mark
                            <svg className='absolute top-[0px] left-[-35px] w-6 h-6' fill='red' version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"> <path d="m712.7 600 276.77-276.77c7.3242-7.3203 7.3242-19.195 0-26.516l-86.18-86.18c-7.3203-7.3242-19.195-7.3242-26.516 0l-276.77 276.77-276.77-276.77c-7.3242-7.3242-19.195-7.3242-26.516 0l-86.18 86.18c-7.3203 7.3203-7.3203 19.195 0 26.516l276.77 276.77-276.77 276.77c-7.3203 7.3242-7.3203 19.195 0 26.516l86.18 86.18c7.3242 7.3203 19.195 7.3203 26.516 0l276.77-276.77 276.77 276.77c7.3203 7.3203 19.195 7.3203 26.516 0l86.18-86.18c7.3242-7.3242 7.3242-19.195 0-26.516z"/> </svg>
                        }
                    </>
                    : <Button type="submit">Submit</Button>
                }
            </>,
            // 'multiple choice checkmarks': <>
            //     {choices?.map((choice, i)=>{
            //         const id=`question-${number}-choice-${i}`;
            //         let className;
            //         if (answered) {
            //             if (answer===i) 
            //                 className='text-green-900 bg-green-200';
            //             else
            //                 className='text-red-900 bg-red-200';
            //         }
            //         return <div key={i} className={className}>
            //             <input type="checkbox"
            //                 value={i}
            //                 id={id}
            //                 checked={userInput==i}
            //                 onChange={e=>setUserInput(e.target.value)}
            //                 disabled={answered}
            //             />
            //             <label htmlFor={id} className='ml-3'>{choice}</label>
            //         </div>;
            //     })}
            //     {
            //         answered
            //         ? <>
            //             { extra && <div className='extra'>{extra}</div> }
            //             { correct ?
            //                 // Checkmark
            //                 <svg className='absolute top-[-10px] left-[-40px] w-10 h-10' fill='green' version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"> <path d="m958.96 406.92-65.746-68.016-419.8 406.95-162.1-180.24-70.281 63.102 194.59 216.89c5.793 6.2969 12.848 10.832 21.16 13.602 8.3125 2.5195 16.625 2.7734 24.938 0.75781 8.3164-2.2695 15.621-6.3008 21.918-12.094z"/> </svg>
            //                 :
            //                 // X mark
            //                 <svg className='absolute top-[0px] left-[-35px] w-6 h-6' fill='red' version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"> <path d="m712.7 600 276.77-276.77c7.3242-7.3203 7.3242-19.195 0-26.516l-86.18-86.18c-7.3203-7.3242-19.195-7.3242-26.516 0l-276.77 276.77-276.77-276.77c-7.3242-7.3242-19.195-7.3242-26.516 0l-86.18 86.18c-7.3203 7.3203-7.3203 19.195 0 26.516l276.77 276.77-276.77 276.77c-7.3203 7.3242-7.3203 19.195 0 26.516l86.18 86.18c7.3242 7.3203 19.195 7.3203 26.516 0l276.77-276.77 276.77 276.77c7.3203 7.3203 19.195 7.3203 26.516 0l86.18-86.18c7.3242-7.3242 7.3242-19.195 0-26.516z"/> </svg>
            //             }
            //         </>
            //         : <Button type="submit">Submit</Button>
            //     }
            // </>
        }[type]}
    </form>;
}
