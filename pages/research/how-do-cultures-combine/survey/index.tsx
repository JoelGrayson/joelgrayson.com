import { useEffect, useState, useCallback } from 'react';
import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import Link from 'next/link';
import { produce } from 'immer';

const theme={
    primary: '#1255cc',
    secondary: '#cfe3f3'
}

const races=['white', 'asian', 'black', 'hispanic', 'native', 'other'];
type raceT='white' | 'asian' | 'black' | 'hispanic' | 'native' | 'other';
type culture={
    name?: string;
    race?: raceT;
    parentConnected?: number;
    childrenConnected?: number;
    practicedAtHome?: string;
    additional?: string;
};

export default function Survey() {
    // const [numberOfCultures, setNumberOfCultures]=useState<number | null>(null);
    const [cultures, setCultures]=useState<culture[]>([]);
    const numberOfCultures=cultures.length;
    function setNumberOfCultures(newNumberOfCultures: number) {
        if (newNumberOfCultures<numberOfCultures)
            setCultures(cultures.slice(0, newNumberOfCultures));
        else {
            const numToAdd=newNumberOfCultures-numberOfCultures;
            let newCultures=cultures;
            for (let i=0; i<numToAdd; i++)
                newCultures=newCultures.concat({});
            setCultures(newCultures);
        }
    }
    function formSubmit(e: any) {
        console.log(cultures);
    }
    
    return <Page bottomPadding>
        <h1 className='text-center'>Survey</h1>

        <div>
            <span>Select number of cultures in your household:&emsp;</span>
            <div className='d:inline'>
                {
                    new Array(5).fill(0).map((_, i)=>i+1)
                        .map(num=>
                            <Circle num={num} />
                        )
                }
            </div>
            <p className='my-3'>If your parent is mixed, you can list the different cultures and link it to the same parent.</p>
        </div>
        {/* {JSON.stringify(cultures)} */}
        {cultures.map((culture, i)=>{
            const id=(val: string)=>`culture-${i}-${val}`;

            return <div key={i} className='mx-auto my-3 px-8 py-5 flex flex-col gap-3' style={{
                border: '1px solid black',
                borderRadius: 10
            }}>
                <div>
                    <label htmlFor={id('name')}>Name&emsp;</label>
                    <input type="text" id={id('name')} value={culture.name || ''} onChange={e=>{
                        setCultures(produce(cultures, draft=>{
                            const newName=e.target.value;
                            draft[i].name=newName;
                        }));
                    }} />
                </div>
                <div>
                    <label htmlFor={id('race')}>Race&emsp;</label>
                    {/* <input type="text" value={culture.race} id={id('race')} /> */}
                    <select id={id('race')} className='border-black border-[1px] rounded' value={culture.race} onChange={e=>{
                        const newRace=e.target.value as raceT;
                        setCultures(produce(cultures, draft=>{
                            draft[i].race=newRace;
                        }))
                    }}>
                        {races.map(race=>
                            <option value={race}>{race}</option>
                        )}
                    </select>
                </div>
            </div>;
        })}

        <Button onClick={formSubmit}>Submit</Button>
        

        {/* Make sure all tailwind classes are enabled for when selected */}
        <div
            style={{ display: 'none' }}
            className={`bg-[${theme.primary}] text-white`}
        />
    </Page>;

    function Circle({ num }: { num: number }) {
        return <div
            className={
                'p-2 mx-1 cursor-pointer rounded-3xl w-10 h-10 inline-flex justify-center items-center'+
                (numberOfCultures===num
                    ? ` bg-[${theme.primary}] text-white`
                    : ' '
                )
            }
            onClick={()=>{
                setNumberOfCultures(num);
            }}
        >
            {num}
        </div>;
    }
}
