import { useState } from "react";
import CorrectIncorrect from "./CorrectIncorrect";
import Button from "@jcomponents/button";

export default function Question({ type, question, answer, choices, extra=undefined, number }: {
    type: 'text' | 'reveal' | 'multiple choice';
    question: JSX.Element | string;
    choices?: Array<JSX.Element | string>;
    answer: JSX.Element | string | number /* index of multiple choice*/ | string[] /* multiple valid answers */;
    extra?: JSX.Element | string | Array<JSX.Element | string>;
    number: number;
}) {
    const [answered, setAnswered]=useState<boolean>(false);
    const [userInput, setUserInput]=useState<number | string>('');

    return <form className='relative' onSubmit={e=>{
        setAnswered(true);
        e.preventDefault();
    }}>
        <div className='question'>{number}. {question}</div>
        {(()=>{
            let correct=answer==userInput; //== not === because '1' (form submitted value) == 1 (answer)
            switch (type) {
                case 'text':
                    if (Array.isArray(answer))
                        correct=answer.includes(userInput as string);
                    
                    return <>
                        <input type="text"
                            value={userInput}
                            onChange={e=>setUserInput(e.target.value)}
                            disabled={answered}
                        />
                        {
                            answered
                            ? <>
                                <CorrectIncorrect correct={correct} />
                                { answer!==userInput && <div className='answer'>Answer: {Array.isArray(answer) ? answer.join(', ') : answer}</div> }
                            </>
                            : <Button type="submit">Submit</Button>
                        }
                    </>;
                case 'reveal':
                    return <>
                        {
                            answered
                            ? <div className='answer'>{answer}</div>
                            : <Button type="submit">Reveal</Button>
                        }
                    </>;
                case 'multiple choice':
                    if (!choices)
                        throw new Error('Multiple choice question must have choices');
        
                    return <>
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
                        ? <CorrectIncorrect correct={correct} />
                        : <Button type="submit">Submit</Button>
                    }
                </>;
                default:
                    throw new Error(`Unknown question type ${type}`);
            }
        })()}
        { answered && extra && <div className='extra'>{Array.isArray(extra) ? extra[0] : extra}</div> }
    </form>;
}

