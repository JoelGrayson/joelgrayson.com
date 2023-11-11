import { useState } from 'react';
import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import Image from 'next/image';
import { produce } from 'immer';
import Loader from '@/components/global/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@jcomponents/modal';

const theme={
    primary: '#1255cc',
    secondary: '#cfe3f3',
    note: 'text-gray-800 text-xs'
};

const races=['White', 'Asian', 'Black', 'Hispanic', 'Native', 'Other'] as const;
type Race=typeof races[number] | 'Select a Race';
const relations=['Father', 'Mother', 'Other'] as const; //'Father\'s Father', 'Father\'s Mother', 'Mother\'s Father', 'Mother\'s Mother'
type Relation=typeof relations[number] | 'Select a Relation';
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
export type SurveyData={
    dateSubmitted?: Date;
    mother: Culture;
    father: Culture;
    additionalCultures: Culture[];
    email: string;
    emailMeResults: boolean;
}
const maxNumCultures=4;

export default function 
Survey() {
    const [formState, setFormState]=useState<'filling out' | 'error' | 'loading' | 'submitted'>('filling out');
    const [errorModalOpen, setErrorModalOpen]=useState(true);

    const [data, setData]=useState<SurveyData>({
        mother: {
            relation: 'Mother',
        },
        father: {
            relation: 'Father',
        },
        additionalCultures: [],
        email: '',
        emailMeResults: true
    });

    function formSubmit() {
        // Validate that there is no missing data
        for (let culture of [data.father, data.mother, ...data.additionalCultures]) {
            if (!culture.name || !culture.race || culture.race==='Select a Race' || !culture.relation || culture.relation==='Select a Relation' || !culture.parentConnected || !culture.childConnected)
                return handleError(null, true);
        }
        
        
        setFormState('loading');
        fetch('/api/research/how-do-cultures-combine/survey/submit', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res=>res.json())
            .then(res=>{
                if (res.status==='error')
                    return handleError(res.message);

                setFormState('submitted');
            })
            .catch(handleError);
        
        function handleError(message: any, quiet=false) {
            setFormState('error');
            setErrorModalOpen(true);
            if (!quiet)
                toast.error(`Error submitting form${message ? ' ('+JSON.stringify(message)+')' : ''}. Please try again.`);
        }
    }

    
    return <Page bottomPadding>
        <h1 className='text-center'>Survey</h1>

        {
            formState==='filling out' || formState==='error'
            ? <div>
                {[data.father, data.mother, ...data.additionalCultures].map((culture, i)=>{
                    const id=(val: string)=>`culture-${i}-${val}`;
                    const additionalCultureI=i-2;
                    const getCulture=(draft: SurveyData)=>{ //gets culture from draft for editing
                        if (i==0)
                            return draft.father;
                        if (i==1)
                            return draft.mother;
                        return draft.additionalCultures[additionalCultureI];
                    };

                    if (!culture) return;

                    return <div key={i} className='mx-auto my-3 px-8 py-5 relative' style={{
                        border: '1px solid black',
                        borderRadius: 10,
                        backgroundColor: {
                            0: theme.secondary,
                            1: '#f3cfcf',
                            'other': '#f9f2b6'
                        }[i>1 ? 'other' : i]
                    }}>
                        <div className='bold text-center mb-3'>{
                            i==0
                            ? 'Father\'s Culture'
                            : i==1
                            ? 'Mother\'s Culture'
                            : 'Culture '+(i+1)
                        }</div>
                        { i>=2 && <>
                            {/* eslint-disable */}
                            <link rel='stylesheet' href='/styles/icon-close.v2.css'/>
                            {/* eslint-enable */}
                            <div className='icon-close' onClick={()=>setData(produce(data, draft=>{
                                draft.additionalCultures.splice(additionalCultureI, 1);
                            }))} />
                        </> }

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
                            <div>
                                <input type="text" id={id('name')} className='h-fit w-fit' value={culture.name || ''} onChange={e=>{
                                    setData(produce(data, draft=>{
                                        const newName=e.target.value;
                                        getCulture(draft).name=newName;
                                    }));
                                }} />
                                { formState==='error' && !culture.name && <Missing /> }
                            </div>
                            
                            <div className='justify-self-end mr-3 flex flex-col items-end'>
                                <label htmlFor={id('race')} className='text-right'>Race</label>
                                {i==0 &&
                                    <div className={`${theme.note} text-xs text-right`}>Which race is this culture?</div>
                                }
                            </div>
                            <div>
                                <select id={id('race')} className='border-black border-[1px] rounded w-fit h-fit' value={culture.race || 'Select a Race'} onChange={e=>{
                                    const newRace=e.target.value as Race;
                                    setData(produce(data, draft=>{
                                        getCulture(draft).race=newRace;
                                    }));
                                }}>
                                    <option value="Select a Race">---Select a Race---</option>
                                    {races.map(race=>
                                        <option key={race} value={race}>{race}</option>
                                    )}
                                </select>
                                { culture.race==='Other' && <div>
                                    {/* <span>Specify your race:</span> */}
                                    <input type="text" placeholder='Specify your race' className='ml-1' value={culture.otherRace || ''} onChange={e=>setData(produce(data, draft=>{
                                        getCulture(draft).otherRace=e.target.value;
                                    }))} />
                                </div> }
                                { formState==='error' && (!culture.race || culture.race==='Select a Race') && <Missing /> }
                            </div>

                            {i>=2 && <> {/* hide for mother and father */}
                                <div className='justify-self-end mr-3 flex flex-col items-end'>
                                    <label htmlFor={id('relation')} className='text-right'>Relation</label>
                                    {i==2 &&
                                        <div className={`${theme.note} text-right`}>Who did you inherit this culture from?<br />You can put down mother twice for both of your mother&apos;s cultures if your mother is biracial.</div>
                                    }
                                </div>
                                <div>
                                    <select id={id('relation')} className='border-black border-[1px] rounded w-fit h-fit' value={culture.relation || 'Select a Relation'} onChange={e=>{
                                        const newRelation=e.target.value as Relation;
                                        setData(produce(data, draft=>{
                                            getCulture(draft).relation=newRelation;
                                        }));
                                    }}>
                                        <option value="Select a Relation">---Select a Relation---</option>
                                        {relations.map(relation=>
                                            <option key={relation} value={relation}>{relation}</option>
                                        )}
                                    </select>
                                    { formState==='error' && (!culture.relation || culture.relation==='Select a Relation') && <Missing /> }
                                </div>
                            </> }

                            <div className='text-right'>How connected is your parent to this culture?</div>
                            <div>
                                <Circles from={1} to={5} value={culture.parentConnected} setValue={newValue=>setData(produce(data, draft=>{
                                    getCulture(draft).parentConnected=newValue;
                                }))} />
                                { formState==='error' && culture.parentConnected===undefined && <Missing /> }
                            </div>

                            <div className='text-right'>How connected are you to this culture?</div>
                            <div>
                                <Circles from={1} to={5} value={culture.childConnected} setValue={newValue=>setData(produce(data, draft=>{
                                    getCulture(draft).childConnected=newValue;
                                }))} />
                                { formState==='error' && culture.childConnected===undefined && <Missing /> }
                            </div>

                            {/* How is the culture practiced at home? Text area */}
                            <div className='justify-self-end mr-3 flex flex-col items-end'>
                                    <label htmlFor={id('practicedAtHome')} className='text-right'>How is the culture practiced (or not) at home? <span className={theme.note}>(optional)</span></label>
                                    {i==0 &&
                                        <div className={`${theme.note} text-xs text-right`}>e.g. food, language, holidays, religion, etc.</div>
                                    }
                            </div>
                            <textarea id={id('practicedAtHome')}
                                rows={3}
                                style={{ width: '100%', maxWidth: 400}}
                                value={culture.practicedAtHome}
                                onChange={e=>setData(produce(data, draft=>{
                                    getCulture(draft).practicedAtHome=e.target.value;
                                }))}
                            />

                            {/* Additional Notes */}
                            <div className='justify-self-end mr-3 flex flex-col items-end'>
                                <label htmlFor={id('additional')} className='text-right'>Anything else you want to say about your relationship with this culture? <span className={theme.note}>(optional)</span></label>
                            </div>
                            <textarea id={id('additional')} style={{ width: '100%', maxWidth: 400}} rows={3} value={culture.additional} onChange={e=>setData(produce(data, draft=>{
                                getCulture(draft).additional=e.target.value;
                            }))}/>
                        </div>
                    </div>;
                })}

                {
                    data.additionalCultures.length<maxNumCultures-2 &&
                        <div className="flex flex-col justify-center my-5 mt-6 gap-2">
                            <p className={`text-center ${theme.note}`}>If there are {data.additionalCultures.length+2  +1} cultures in your household because a parent is multicultural, click below to add {
                                {
                                    3: 'your third',
                                    4: 'your fourth'
                                }[data.additionalCultures.length+2+1] || 'another'
                            } culture:</p>
                            <Button color='jgreen' style={{ width: 'fit-content', margin: '0 auto' }} onClick={()=>setData(produce(data, draft=>{draft.additionalCultures.push({});}))}>+ Add Another Culture</Button>
                        </div>
                }

                {/* Email Survey Sign Up */}
                <div className='grid gap-y-3 gap-6 relative' style={{
                    gridTemplateColumns: '1fr 1fr'
                }}>
                    <div className='justify-self-end'>
                        <p className='text-right'>
                            <label htmlFor='email'>Email <span className={theme.note}>(optional)</span></label>
                        </p>
                        <p className={theme.note+' text-right'}>Note: your email will stay confidential with me and will not be published with the study. I may reach out to you if I have clarifying questions about something you said.</p>
                    </div>
                    <div>
                        <input type="email" id='email' className='h-fit w-fit' value={data.email} onChange={e=>setData(produce(data, draft=>{draft.email=e.target.value;}))} />
                    </div>
                </div>

                <div className="flex justify-center my-3">
                    <input type="checkbox" id='emailedResults' className='justify-self-end' checked={data.emailMeResults} onChange={e=>setData(produce(data, draft=>{draft.emailMeResults=e.target.checked;}))} />
                    <label className='ml-2' htmlFor='emailedResults'>I want to be emailed the the study&apos;s results (coming out in late November 2023).</label>
                </div>
                
                <div className="flex justify-center">
                    <Button color={theme.secondary} onClick={formSubmit}>Submit</Button>
                </div>
            </div>
            : formState==='loading'
            ? <Loader />
            : formState==='submitted' && <div>
                <div className='flex justify-center items-center gap-5'>
                    <Image src='/image/miscellaneous/checkmark.gif' width={30} height={30} alt='Checkmark' />
                    <div className='text-2xl'>Thank you for your submission!</div>
                </div>
                {
                    data.emailMeResults && <div className='text-center mt-8'>I (jgrayson24@riverdale.edu) will email you the study results in late November.</div>
                }
            </div>
        }



        <ToastContainer />
        { formState==='error' &&
            <Modal open={errorModalOpen} setOpen={setErrorModalOpen}>
                Please fill out the missing fields and click Submit again.
            </Modal>
        }
        
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

export function Missing() { //bouncing red box that says 'Missing'
    return <div className='justify-self-end bg-red-500 w-fit h-fit p-2 bold rounded-2xl inline right-10 absolute animate-bounce'>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={20} height={20} className='inline mr-2'><g><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/></g></svg>
        Missing
    </div>;
}

