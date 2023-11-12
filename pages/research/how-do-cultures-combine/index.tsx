import Page from '@/components/global/Page';
import { P } from '@jcomponents/writing-components';
import Link from 'next/link';

export default function HowDoCulturesCombine() {
    return <Page bottomPadding>
        <h1 className='text-center text-4xl my-6 mt-10'>How Do Cultures Combine?</h1>
        <P>The U.S. population has and will become more and more mixed race. I propose conducting a research project on how cultures combine in multiracial households as a way of exploring the trajectory of American culture. To what extent are both cultures preserved or diminished? Are some races&apos; cultures more compatible with each other?</P>
        <P>
            Data will be collected in&nbsp;
            <Link href='/research/how-do-cultures-combine/survey/multicultural' className='styled'>
                this survey for multicultural people
            </Link>
            &nbsp;and&nbsp;
            <Link href='/research/how-do-cultures-combine/survey/single-culture' className='styled'>
                this survey for people of a single culture
            </Link>
            .
        </P>
        <P>The study results will come out in late November.</P>
    </Page>;
}


// Helpers for Both Surveys
export type Culture={
    name?: string;
    race?: Race;
    otherRace?: string; //only filled out if 'Other' is selected for race
    relation?: Relation;
    parentConnected?: number;
    childConnected?: number;
    practicedAtHome?: string;
    additional?: string;
};

export const races=['White', 'Asian', 'Black', 'Hispanic', 'Native', 'Other'] as const;
export type Race=typeof races[number] | 'Select a Race';
export const relations=['Father', 'Mother', 'Other'] as const; //'Father\'s Father', 'Father\'s Mother', 'Mother\'s Father', 'Mother\'s Mother'
export type Relation=typeof relations[number] | 'Select a Relation';

export const theme={
    primary: '#1255cc',
    secondary: '#cfe3f3',
    note: 'text-gray-800 text-xs'
};

export function Circles({ from, to, value, setValue }: { from: number; /** lower bound */ to: number; /** upper bound */ value?: number; 
    // eslint-disable-next-line
    setValue: (newValue: number)=>void;
}) {
    let indices=[];
    for (let i=from; i<=to; i++)
        indices.push(i);

    return <span>
        {indices.map(i=>
            <div
                className={
                    'p-2 mx-1 cursor-pointer rounded-3xl w-10 h-10 inline-flex justify-center items-center border-[1px]'+
                    (i===value
                        ? ` bg-[${theme.primary}] text-white border-[darkblue]`
                        : ' border-gray-600'
                    )
                }
                onClick={()=>setValue(i)}
                key={i}
            >
                {i}
            </div>
        )}
    </span>;
}

export function Missing() { //bouncing red box that says 'Missing'
    return <div className='justify-self-end bg-red-500 w-fit h-fit p-2 bold rounded-2xl inline right-10 absolute animate-bounce'>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={20} height={20} className='inline mr-2'><g><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/></g></svg>
        Missing
    </div>;
}


