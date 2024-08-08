import { useState } from 'react';
import Image from 'next/image';
import { produce } from 'immer';
import Loader from '@/components/global/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@jcomponents/modal';
import { races, relations, type Strength, type MulticulturalSurveyData } from '@/components/research/survey/types';
import Missing from '@/components/research/survey/Missing';
import Circles from '@/components/research/survey/Circles';
import { theme } from '@/components/research/survey/config';

export default function PrintableSurvey() {
    const [formState]=useState<'filling out' | 'error' | 'loading' | 'submitted'>('filling out');
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

    
    return <div className='j_container' style={{
        maxWidth: 830
    }}>
        <h1 className='text-center my-5 text-4xl mt-8'>Survey for Multicultural Individuals</h1>

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
                                { i==0 && <div className='ml-16'>Circle one:</div> }
                                <div className='flex justify-between'>
                                    {races.map(race=>
                                        <div key={race}>{race}</div>
                                    )}
                                </div>
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
                                    { i==0 && <div className='ml-16'>Circle one:</div> }
                                    <div className='flex'>
                                        {relations.map(relation=>
                                            <div key={relation}>{relation}</div>
                                        )}
                                    </div>
                                    { formState==='error' && (!culture.relation || culture.relation==='Select a Relation') && <Missing /> }
                                </div>
                            </> }

                            <div className='d:text-right'>
                                How connected is your parent to this culture?
                                { i===0 && <div className={theme.note}>1 for not connected at all. 5 for very connected.</div> }
                            </div>
                            <div>
                                { i==0 && <div className='ml-16'>Circle one:</div> }
                                <Circles from={1} to={5} value={culture.parentConnected} transparent setValue={newValue=>setData(produce(data, draft=>{
                                    getCulture(draft).parentConnected=newValue as Strength;
                                }))} />
                                { formState==='error' && culture.parentConnected===undefined && <Missing /> }
                            </div>

                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                    <label htmlFor={id('parentConnectedText')} className='d:text-right'>In what ways is your parent connected to this culture?</label>
                                    {i==0 &&
                                        <div className={`${theme.note} text-xs d:text-right`}>e.g. food, language, holidays, religion, etc.</div>
                                    }
                            </div>
                            <textarea id={id('parentConnectedText')}
                                rows={3}
                                style={{ width: '100%', height: 'fit-content', transition: 'none' }}
                                value={culture.parentConnectedText}
                                onChange={e=>setData(produce(data, draft=>{
                                    getCulture(draft).parentConnectedText=e.target.value;
                                }))}
                            />

                            <div className='d:text-right'>
                                How connected are you to this culture?
                            </div>
                            <div>
                                <Circles transparent from={1} to={5} value={culture.childConnected} setValue={newValue=>setData(produce(data, draft=>{
                                    getCulture(draft).childConnected=newValue as Strength;
                                }))} />
                                { formState==='error' && culture.childConnected===undefined && <Missing /> }
                            </div>

                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                <label htmlFor={id('childConnectedText')} className='d:text-right'>In what ways are you connected to this culture?</label>
                            </div>
                            <textarea id={id('childConnectedText')}
                                rows={3}
                                style={{ width: '100%', height: 'fit-content', transition: 'none' }}
                                value={culture.childConnectedText}
                                onChange={e=>setData(produce(data, draft=>{
                                    getCulture(draft).childConnectedText=e.target.value;
                                }))}
                            />

                            

                            {/* In what ways are you less connected to the {culture.name e.g. Chinese} culture than your {relationship e.g. mom}? */}
                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                <label htmlFor={id('childConnectedText')} className='d:text-right'>In what ways are you more or less connected to this culture than your {culture.relation ? culture.relation.toLowerCase() : 'parent'}?</label>
                            </div>
                            <textarea id={id('childConnectedText')}
                                rows={3}
                                style={{ width: '100%' }}
                            />

                            {/* How do you define "being connected" with a culture? How can you increase your connection with that culture? */}
                        </div>
                    </div>;
                })}

            </div>
            : formState==='loading'
            ? <Loader />
            : formState==='submitted' && <div>
                <div className='flex justify-center items-center gap-5'>
                    <Image src='/image/miscellaneous/checkmark.gif' width={30} height={30} alt='Checkmark' />
                    <div className='text-2xl'>Thank you for your submission!</div>
                </div>
                {
                    // data.emailMeResults && <div className='text-center mt-8'>I (jgrayson24@riverdale.edu) will email you the study results in late November.</div>
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
    </div>;
}
