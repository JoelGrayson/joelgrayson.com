import { useState } from 'react';
import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import Image from 'next/image';
import { produce } from 'immer';
import Loader from '@/components/global/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme={
    primary: '#1255cc',
    secondary: '#cfe3f3',
    note: 'text-gray-800 text-xs'
}

const races=['White', 'Asian', 'Black', 'Hispanic', 'Native', 'Other'] as const;
type raceT=typeof races[number];
const relations=['Father', 'Mother', 'Grandfather', 'Grandmother', 'Other'] as const;
type relationT=typeof relations[number];
type culture={
    name?: string;
    race?: raceT;
    relation?: relationT;
    parentConnected?: number;
    childConnected?: number;
    practicedAtHome?: string;
    additional?: string;
};

export default function Survey() {
    // const [numberOfCultures, setNumberOfCultures]=useState<number | null>(null);
    const [cultures, setCultures]=useState<culture[]>([
        {
            relation: 'Mother',
        },
        {
            relation: 'Father',
        }
    ]);
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

    const [email, setEmail]=useState<string>('');
    const [emailMeResults, setEmailMeResults]=useState<boolean>(true);
    
    const [formState, setFormState]=useState<'filling out' | 'loading' | 'submitted'>('filling out');
    function formSubmit(e: any) {
        console.log(cultures);
        setFormState('loading');
        fetch('/api/research/how-do-cultures-combine/survey/submit', {
            method: 'POST',
            body: JSON.stringify({
                cultures,
                email,
                emailMeResults
            })
        })
            .then(res=>res.json())
            .then(res=>{
                if (res.status!=200)
                    return handleError(res.message);

                setFormState('submitted');

            })
            .catch(handleError);
        
        function handleError(message: any) {
            setFormState('filling out');
            toast.error(`Error submitting form${message ? ' ('+JSON.stringify(message)+')' : ''}. Please try again.`);
        }
    }

    
    return <Page bottomPadding>
        <h1 className='text-center'>Survey</h1>

        {
            formState=='filling out'
            ? <>
                <div>
                    <span>Select number of cultures in your household:&emsp;</span>
                    <div className='d:inline'>
                        <Circles from={1} to={5} value={numberOfCultures} setValue={setNumberOfCultures} />
                    </div>
                    <p className={`my-3 text-xs ${theme.note} mb-6`}>If your parent is mixed, you can list their cultures separately.</p>
                </div>

                {cultures.map((culture, i)=>{
                    const id=(val: string)=>`culture-${i}-${val}`;

                    return <div key={i} className='mx-auto my-3 px-8 py-5' style={{
                        border: '1px solid black',
                        borderRadius: 10,
                        backgroundColor: theme.secondary
                    }}>
                        <div className='bold text-center mb-3'>Culture {i+1}</div>
                        <div className='grid gap-y-3' style={{
                            gridTemplateColumns: '1fr 2fr'
                        }}>
                            <div className='mr-3 justify-self-end flex flex-col items-end'>
                                <label htmlFor={id('name')}>
                                    Culture Name
                                </label>
                                {i==0 && //detailed instructions if first
                                    <div className={`${theme.note} text-xs text-right`}>e.g. Jewish, Italian, Chinese, African American, mixed European</div>
                                }
                            </div>
                            <input type="text" id={id('name')} className='h-fit w-fit' value={culture.name || ''} onChange={e=>{
                                setCultures(produce(cultures, draft=>{
                                    const newName=e.target.value;
                                    draft[i].name=newName;
                                }));
                            }} />
                            
                            <div className='justify-self-end mr-3 flex flex-col items-end'>
                                <label htmlFor={id('race')} className='text-right'>Race</label>
                                {i==0 &&
                                    <div className={`${theme.note} text-xs text-right`}>Which race is this culture?</div>
                                }
                            </div>
                            <select id={id('race')} className='border-black border-[1px] rounded w-fit h-fit' value={culture.race || 'Select a Race'} onChange={e=>{
                                const newRace=e.target.value as raceT;
                                setCultures(produce(cultures, draft=>{
                                    draft[i].race=newRace;
                                }))
                            }}>
                                <option value="Select a Race">---Select a Race---</option>
                                {races.map(race=>
                                    <option key={race} value={race}>{race}</option>
                                )}
                            </select>

                            <div className='justify-self-end mr-3 flex flex-col items-end'>
                                <label htmlFor={id('relation')} className='text-right'>Relation</label>
                                {i==0 &&
                                    <div className={`${theme.note} text-right`}>From whom did you inherit this culture?</div>
                                }
                            </div>
                            <select id={id('relation')} className='border-black border-[1px] rounded w-fit h-fit' value={culture.relation || 'Select a Relation'} onChange={e=>{
                                const newRelation=e.target.value as relationT;
                                setCultures(produce(cultures, draft=>{
                                    draft[i].relation=newRelation;
                                }))
                            }}>
                                <option value="Select a Relation">---Select a Relation---</option>
                                {relations.map(relation=>
                                    <option key={relation} value={relation}>{relation}</option>
                                )}
                            </select>

                            <div className='text-right'>How connected is your parent to this culture?</div>
                            <Circles from={1} to={5} value={culture.parentConnected} setValue={newValue=>setCultures(produce(cultures, draft=>{
                                draft[i].parentConnected=newValue;
                            }))} />

                            <div className='text-right'>How connected are you to this culture?</div>
                            <Circles from={1} to={5} value={culture.childConnected} setValue={newValue=>setCultures(produce(cultures, draft=>{
                                draft[i].childConnected=newValue;
                            }))} />

                            {/* How is the culture practiced at home? Text area */}
                            <div className='justify-self-end mr-3 flex flex-col items-end'>
                                    <label htmlFor={id('practicedAtHome')} className='text-right'>How is the culture practiced at home?</label>
                                    {i==0 &&
                                        <div className={`${theme.note} text-xs text-right`}>e.g. food, language, holidays, religion, etc.</div>
                                    }
                            </div>
                            <textarea id={id('practicedAtHome')} cols={40} rows={3} className='w-fit h-fit' value={culture.practicedAtHome} onChange={e=>setCultures(produce(cultures, draft=>{
                                draft[i].practicedAtHome=e.target.value;
                            }))} />

                            {/* Additional Notes */}
                            <div className='justify-self-end mr-3 flex flex-col items-end'>
                                <label htmlFor={id('additional')} className='text-right'>Anything else you want to say about your relation with this culture?</label>
                            </div>
                            <textarea id={id('additional')} cols={40} rows={3} className='w-fit h-fit' value={culture.additional} onChange={e=>setCultures(produce(cultures, draft=>{
                                draft[i].additional=e.target.value;
                            }))}/>
                        </div>
                    </div>;
                })}

                {/* Email Survey Sign Up */}
                {cultures.length!==0 && <div>
                    <div>
                        <label htmlFor='email' className='mr-3'>Email (optional)</label>
                        <input type="email" id='email' value={email} onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <p className={theme.note}>Note: your email will stay confidential with me and will not be published with the study. I may reach out to you if I have clarifying questions about something you said.</p>

                    <div>
                        <input type="checkbox" id='emailedResults' checked={emailMeResults} onChange={e=>setEmailMeResults(e.target.checked)} />
                        <label className='ml-2' htmlFor='emailedResults'>I want to be emailed the the study&apos;s results (coming out in late November 2023).</label>
                    </div>
                </div>}

                <div className="flex justify-center">
                    <Button color={theme.secondary} onClick={formSubmit}>Submit</Button>
                </div>
            </>
            : formState==='loading'
            ? <Loader />
            : formState==='submitted' && <div>
                <div className='flex justify-center items-center gap-5'>
                    <Image src='/image/miscellaneous/checkmark.gif' width={30} height={30} alt='Checkmark' />
                    <div className='text-2xl'>Thank you for your submission!</div>
                </div>
                {
                    emailMeResults && <div className='text-center mt-8'>I (jgrayson24@riverdale.edu) will email you the study results in late November.</div>
                }
            </div>
        }



        <ToastContainer />
        {/* Make sure all Tailwind classes are enabled for theme bg color */}
        <div
            style={{ display: 'none' }}
            className='bg-[#1255cc] justify-end text-gray-800 text-xs'
        />
        <div
            style={{ display: 'none' }}
            className='text-white'
        />
    </Page>;
}

export function Circles({ from, to, value, setValue }: { from: number; /** lower bound */ to: number; /** upper bound */ value?: number; setValue: (newValue: number)=>void; }) {
    let indices=[];
    for (let i=from; i<=to; i++)
        indices.push(i);

    return <span>
        {indices.map(i=>
            <div
                className={
                    'p-2 mx-1 cursor-pointer rounded-3xl w-10 h-10 inline-flex justify-center items-center'+
                    (i===value
                        ? ` bg-[${theme.primary}] text-white`
                        : ' '
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

