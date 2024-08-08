import { useState } from 'react';
// import Page from '@/components/page/DefaultPage';
// import Button from '@jcomponents/button';
import Image from 'next/image';
import { produce } from 'immer';
import Loader from '@/components/global/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@jcomponents/modal';
// import Link from 'next/link';
import { races, type Race, type Strength, type SingleCultureSurveyData } from '@/components/research/survey/types';
import Missing from '@/components/research/survey/Missing';
import Circles from '@/components/research/survey/Circles';
import { theme } from '@/components/research/survey/config';
import BlankPage from '@/components/page/BlankPage';

export default function PrintableSurvey() {
    const [formState]=useState<'filling out' | 'error' | 'loading' | 'submitted'>('filling out');
    const [errorModalOpen, setErrorModalOpen]=useState(true);

    const [data, setData]=useState<SingleCultureSurveyData>({
        email: '',
        emailMeResults: true
    });
    
    return <BlankPage bottomPadding>
        <h1 className='text-center text-4xl my-10 mb-8'>Single Culture Survey</h1>
        
        {
            formState==='filling out' || formState==='error'
            ? <div>
                {(()=>{
                    const id=(val: string)=>`culture-${val}`;

                    return <div className='mx-auto my-3 px-8 py-5 relative' style={{
                        border: '1px solid black',
                        borderRadius: 10,
                    }}>
                        <div className='d:grid gap-y-3' style={{
                            gridTemplateColumns: '1fr 2fr'
                        }}>
                            <div className='mr-3 d:justify-self-end flex flex-col d:items-end'>
                                <label htmlFor={id('name')}>
                                    Culture Name
                                </label>
                                {true && //detailed instructions if first
                                    <div className={`${theme.note} text-xs d:text-right`}>e.g. Jewish, Italian, Chinese, African American, mixed European</div>
                                }
                            </div>
                            <div>
                                <input type="text" id={id('name')} className='h-fit w-fit' value={data.name || ''} onChange={e=>{
                                    setData(produce(data, draft=>{
                                        const newName=e.target.value;
                                        draft.name=newName;
                                    }));
                                }} />
                                { formState==='error' && !data.name && <Missing /> }
                            </div>
                            
                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                <label htmlFor={id('race')} className='d:text-right'>Race</label>
                                <div className={`${theme.note} text-[.7rem] d:text-right`}>What race does this culture belong to?</div>
                            </div>
                            <div>
                                <select id={id('race')} className='border-black border-[1px] rounded w-fit h-fit' value={data.race || 'Select a Race'} onChange={e=>{
                                    const newRace=e.target.value as Race;
                                    setData(produce(data, draft=>{
                                        draft.race=newRace;
                                    }));
                                }}>
                                    <option value="Select a Race">---Select a Race---</option>
                                    {races.map(race=>
                                        <option key={race} value={race}>{race}</option>
                                    )}
                                </select>
                                { data.race==='Other' && <div>
                                    {/* <span>Specify your race:</span> */}
                                    <input type="text" placeholder='Specify your race' className='ml-1' value={data.otherRace || ''} onChange={e=>setData(produce(data, draft=>{
                                        draft.otherRace=e.target.value;
                                    }))} />
                                </div> }
                                { formState==='error' && (!data.race || data.race==='Select a Race') && <Missing /> }
                            </div>

                            <div className='d:text-right'>How connected are your parents to this culture?</div>
                            <div>
                                <div className='ml-16'>Circle one:</div>
                                <Circles from={1} to={5} value={data.parentConnected} setValue={newValue=>setData(produce(data, draft=>{
                                    if ([1, 2, 3, 4, 5].includes(newValue))
                                        draft.parentConnected=newValue as Strength;
                                    else
                                        console.log('Invalid parentConnected', newValue, '. It must be a strength (1, 2, 3, 4, 5).');
                                }))} />
                                { formState==='error' && data.parentConnected===undefined && <Missing /> }
                            </div>


                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                <label htmlFor={id('parentConnectedText')} className='d:text-right'>In what ways is your parent connected to this culture? <span className={theme.note}>(optional)</span></label>
                            </div>
                            <textarea id={id('parentConnectedText')}
                                rows={3}
                                style={{ width: '100%', maxWidth: 400, height: 'fit-content', transition: 'none' }}
                                value={data.parentConnectedText}
                                onChange={e=>setData(produce(data, draft=>{
                                    draft.parentConnectedText=e.target.value;
                                }))}
                            />

                            
                            <div className='d:text-right'>How connected are you to this culture?</div>
                            <div>
                                <div className='ml-16'>Circle one:</div>
                                <Circles from={1} to={5} value={data.childConnected} setValue={newValue=>setData(produce(data, draft=>{
                                    if ([1, 2, 3, 4, 5].includes(newValue))
                                        draft.childConnected=newValue as Strength;
                                    else
                                        console.log('Invalid childConnected', newValue, '. It must be a strength (1, 2, 3, 4, 5).');
                                }))} />
                                { formState==='error' && data.childConnected===undefined && <Missing /> }
                            </div>

                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                    <label htmlFor={id('childConnectedText')} className='d:text-right'>In what ways are you connected to this culture? <span className={theme.note}>(optional)</span></label>
                                    <div className={`${theme.note} text-xs d:text-right`}>e.g. food, language, holidays, religion, etc.</div>
                            </div>
                            <textarea id={id('childConnectedText')}
                                rows={3}
                                style={{ width: '100%', maxWidth: 400, height: 'fit-content', transition: 'none' }}
                                value={data.childConnectedText}
                                onChange={e=>setData(produce(data, draft=>{
                                    draft.childConnectedText=e.target.value;
                                }))}
                            />


                                {/* In what ways are you less connected to the {culture.name e.g. Chinese} culture than your {relationship e.g. mom}? */}
                                <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                    <label htmlFor={id('childConnectedText')} className='d:text-right'>In what ways are you more or less connected to this culture than your parents? <span className={theme.note}>(optional)</span></label>
                                    <div className={`${theme.note} text-xs d:text-right`}>e.g. food, language, holidays, religion, etc.</div>
                                </div>
                                <textarea id={id('childConnectedText')}
                                    rows={3}
                                    style={{ width: '100%', maxWidth: 400}}
                                />
                        </div>
                    </div>;
                })()}

            </div>
            : formState==='loading'
            ? <Loader />
            : formState==='submitted' && <div>
                <div className='flex justify-center items-center gap-5'>
                    <Image src='/image/miscellaneous/checkmark.gif' width={30} height={30} alt='Checkmark' />
                    <div className='text-2xl'>Thank you for your submission!</div>
                </div>
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
    </BlankPage>;
}
