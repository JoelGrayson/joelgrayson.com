import { useState } from 'react';
import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import Image from 'next/image';
import { produce } from 'immer';
import Loader from '@/components/global/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@jcomponents/modal';
import { type Culture, races, type Race, Circles, Missing } from '../..';
import Link from 'next/link';

const theme={
    primary: '#1255cc',
    secondary: '#cfe3f3',
    note: 'text-gray-800 text-xs'
};

export type SurveyData=Omit<Culture, 'relation'> & {
    dateSubmitted?: Date;
    email: string;
    emailMeResults: boolean;
}

export default function Survey() {
    const [formState, setFormState]=useState<'filling out' | 'error' | 'loading' | 'submitted'>('filling out');
    const [errorModalOpen, setErrorModalOpen]=useState(true);

    const [data, setData]=useState<SurveyData>({
        email: '',
        emailMeResults: true
    });

    function formSubmit() {
        // Validate that there is no missing data
        if (!data.name || !data.race || data.race==='Select a Race' || !data.parentConnected || !data.childConnected)
            return handleError(null, true);
        
        
        setFormState('loading');
        fetch('/api/research/how-do-cultures-combine/survey/single-culture/submit', {
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
        <h1 className='text-center text-4xl my-10 mb-8'>Single Culture Survey</h1>
        { formState!=='submitted' && <p className='mb-6'>If you are multicultural, please fill out <Link href='/research/how-do-cultures-combine/survey/multicultural' className='styled'>this survey</Link> instead.</p> }

        {
            formState==='filling out' || formState==='error'
            ? <div>
                {(()=>{
                    const id=(val: string)=>`culture-${val}`;

                    return <div className='mx-auto my-3 px-8 py-5 relative' style={{
                        border: '1px solid black',
                        borderRadius: 10,
                        backgroundColor: theme.secondary
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
                                <div className={`${theme.note} text-xs d:text-right`}>Which race is this culture?</div>
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
                                <Circles from={1} to={5} value={data.parentConnected} setValue={newValue=>setData(produce(data, draft=>{
                                    draft.parentConnected=newValue;
                                }))} />
                                { formState==='error' && data.parentConnected===undefined && <Missing /> }
                            </div>

                            <div className='d:text-right'>How connected are you to this culture?</div>
                            <div>
                                <Circles from={1} to={5} value={data.childConnected} setValue={newValue=>setData(produce(data, draft=>{
                                    draft.childConnected=newValue;
                                }))} />
                                { formState==='error' && data.childConnected===undefined && <Missing /> }
                            </div>

                            {/* How is the culture practiced in your family? Text area */}
                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                <label htmlFor={id('practicedAtHome')} className='d:text-right'>How is the culture practiced in your family? <span className={theme.note}>(optional)</span></label>
                                <div className={`${theme.note} text-xs d:text-right`}>e.g. food, language, holidays, religion, etc.</div>
                            </div>
                            <textarea id={id('practicedAtHome')}
                                rows={3}
                                style={{ width: '100%', maxWidth: 400}}
                                value={data.practicedAtHome}
                                onChange={e=>setData(produce(data, draft=>{
                                    draft.practicedAtHome=e.target.value;
                                }))}
                            />

                            {/* Additional Notes */}
                            <div className='d:justify-self-end mr-3 flex flex-col d:items-end'>
                                <label htmlFor={id('additional')} className='d:text-right'>Anything else you want to say about your relationship with this culture? <span className={theme.note}>(optional)</span></label>
                            </div>
                            <textarea id={id('additional')} style={{ width: '100%', maxWidth: 400}} rows={3} value={data.additional} onChange={e=>setData(produce(data, draft=>{
                                draft.additional=e.target.value;
                            }))}/>
                        </div>
                    </div>;
                })()}

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
