import { useState } from 'react';
import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import Image from 'next/image';
import { produce } from 'immer';
import Loader from '@/components/global/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@jcomponents/modal';
import { races, type Race, relations, type Relation, type Strength, type MulticulturalSurveyData } from '@/components/research/survey/types';
import Missing from '@/components/research/survey/Missing';
import Circles from '@/components/research/survey/Circles';
import { theme, MAX_NUM_CULTURES } from '@/components/research/survey/config';

export default function Survey() {
    const [formState, setFormState]=useState<'filling out' | 'error' | 'loading' | 'submitted'>('filling out');
    const [errorModalOpen, setErrorModalOpen]=useState(true);

    const [data, setData]=useState<MulticulturalSurveyData>({
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
        console.log('Submitting', data);
        fetch('/api/research/how-do-cultures-combine/survey/multicultural/submit', {
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
        <h1 className='text-center my-5 text-4xl mt-8'>Survey for Multicultural Individuals</h1>
        { formState!=='submitted' && <p>This survey is part of a study of how cultures combine in multicultural families.{/* The goal is to find out to what extent both cultures are preserved or diminished when combined.*/}</p> }

        {
            formState==='filling out' || formState==='error'
            ? <div>
                {[data.father, data.mother, ...data.additionalCultures].map((culture, i)=>{
                    const id=(val: string)=>`culture-${i}-${val}`;
                    const additionalCultureI=i-2;
                    const getCulture=(draft: MulticulturalSurveyData)=>{ //gets culture from draft for editing
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

                        <div className='grid gap-y-3 d:grid-cols-[20fr_42fr] gap-x-2'>
                            <div className='mr-3 d:justify-self-end flex flex-col d:items-end'>
                                <label htmlFor={id('name')}>
                                    Culture Name
                                </label>
                                {i==0 && //detailed instructions if first
                                    <div className={`${theme.note} text-xs d:text-right`}>e.g. Jewish, Italian, Chinese, African American, mixed European</div>
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
                            
                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                <label htmlFor={id('race')} className='d:text-right'>Race</label>
                                {i==0 &&
                                    <div className={`${theme.note} text-[.7rem] d:text-right`}>What race does this culture belong to?</div>
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
                                <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                    <label htmlFor={id('relation')} className='d:text-right'>Relation</label>
                                    {i==2 &&
                                        <div className={`${theme.note} d:text-right`}>Who did you inherit this culture from?<br />You can put down mother twice for both of your mother&apos;s cultures if your mother is biracial.</div>
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

                            <div className='d:text-right'>How connected is your parent to this culture?</div>
                            <div>
                                <Circles from={1} to={5} value={culture.parentConnected} setValue={newValue=>setData(produce(data, draft=>{
                                    getCulture(draft).parentConnected=newValue as Strength;
                                }))} />
                                { formState==='error' && culture.parentConnected===undefined && <Missing /> }
                            </div>

                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                    <label htmlFor={id('parentConnectedText')} className='d:text-right'>In what ways is your parent connected to this culture? <span className={theme.note}>(optional)</span></label>
                                    {i==0 &&
                                        <div className={`${theme.note} text-xs d:text-right`}>e.g. food, language, holidays, religion, etc.</div>
                                    }
                            </div>
                            <textarea id={id('parentConnectedText')}
                                rows={3}
                                style={{ width: '100%', maxWidth: 400, height: 'fit-content', transition: 'none' }}
                                value={culture.parentConnectedText}
                                onChange={e=>setData(produce(data, draft=>{
                                    getCulture(draft).parentConnectedText=e.target.value;
                                }))}
                            />

                            <div className='d:text-right'>How connected are you to this culture?</div>
                            <div>
                                <Circles from={1} to={5} value={culture.childConnected} setValue={newValue=>setData(produce(data, draft=>{
                                    getCulture(draft).childConnected=newValue as Strength;
                                }))} />
                                { formState==='error' && culture.childConnected===undefined && <Missing /> }
                            </div>

                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                    <label htmlFor={id('childConnectedText')} className='d:text-right'>In what ways are you connected to this culture? <span className={theme.note}>(optional)</span></label>
                                    {i==0 &&
                                        <div className={`${theme.note} text-xs d:text-right`}>e.g. food, language, holidays, religion, etc.</div>
                                    }
                            </div>
                            <textarea id={id('childConnectedText')}
                                rows={3}
                                style={{ width: '100%', maxWidth: 400, height: 'fit-content', transition: 'none' }}
                                value={culture.childConnectedText}
                                onChange={e=>setData(produce(data, draft=>{
                                    getCulture(draft).childConnectedText=e.target.value;
                                }))}
                            />

                            { culture.childConnected!==undefined && culture.parentConnected!==undefined && culture.childConnected!==culture.parentConnected && <> {/*only if there is a difference*/}
                                {/* In what ways are you less connected to the {culture.name e.g. Chinese} culture than your {relationship e.g. mom}? */}
                                <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                    <label htmlFor={id('childConnectedText')} className='d:text-right'>In what ways are you {culture.childConnected>culture.parentConnected ? 'more' : 'less'} connected to {culture.name ? `the ${culture.name} culture` : 'this culture' } than your {culture.relation ? culture.relation.toLowerCase() : 'parent'}? <span className={theme.note}>(optional)</span></label>
                                    {i==0 &&
                                        <div className={`${theme.note} text-xs d:text-right`}>e.g. food, language, holidays, religion, etc.</div>
                                    }
                                </div>
                                <textarea id={id('childConnectedText')}
                                    rows={3}
                                    style={{ width: '100%', maxWidth: 400}}
                                    value={(()=>{
                                        if (culture.childConnected>culture.parentConnected)
                                            return culture.childMoreConnected;
                                        if (culture.childConnected<culture.parentConnected)
                                            return culture.childLessConnected;
                                    })()}
                                    onChange={e=>setData(produce(data, draft=>{
                                        if (culture.childConnected===undefined || culture.parentConnected===undefined) return; //should never happen
                                        
                                        if (culture?.childConnected>culture?.parentConnected)
                                            getCulture(draft).childMoreConnected=e.target.value;
                                        else if (culture?.childConnected<culture?.parentConnected)
                                            getCulture(draft).childLessConnected=e.target.value;
                                    }))}
                                />
                            </> }

                            {/* How do you define "being connected" with a culture? How can you increase your connection with that culture? */}
                        </div>
                    </div>;
                })}

                {
                    data.additionalCultures.length<MAX_NUM_CULTURES-2 &&
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
                    <div className='d:justify-self-end'>
                        <p className='d:text-right'>
                            <label htmlFor='email'>Email <span className={theme.note}>(optional)</span></label>
                        </p>
                        <p className={theme.note+' d:text-right'}>Note: your email will stay confidential with me and will not be published with the study. I may reach out to you if I have clarifying questions about something you wrote.</p>
                    </div>
                    <div>
                        <input type="email" id='email' className='h-fit w-fit' value={data.email} onChange={e=>setData(produce(data, draft=>{draft.email=e.target.value;}))} />
                    </div>
                </div>

                <div className="flex justify-center my-3">
                    <input type="checkbox" id='emailedResults' className='d:justify-self-end' checked={data.emailMeResults} onChange={e=>setData(produce(data, draft=>{draft.emailMeResults=e.target.checked;}))} />
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
