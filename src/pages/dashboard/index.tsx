import Loader from '@/components/global/Loader';
import Page from '@/components/page/DefaultPage';
import Button from '@jcomponents/button';
import { useState } from 'react';
import { format } from 'date-fns';
import Info from '@/components/global/Info';
import { Error } from '@prisma/client';
import React from 'react';
import { Action } from '@/pages/api/dashboard';
import { ReloadIcon } from '@/components/icons';
import Link from 'next/link';

type DashboardError=Error & { ids: string[]; count: number }; //error for the dashboard

function getTopItems(errors: Error[]) {
    const out=new Map<string, DashboardError>(); //key is source, value is object with count

    for (let error of errors) {
        if (out.has(error.source)) {
            const old=out.get(error.source)!;
            out.set(error.source, {
                ...old,
                ids: [...old.ids, error.id],
                count: old.count+1,
            });
        } else {
            out.set(error.source, {
                ...error,
                ids: [error.id],
                count: 1,
            });
        }
    }

    return [...out.entries()].sort((a, b)=>b[1].count-a[1].count);
}

export default function Dashboard() {
    const [status, setStatus]=useState<'start-screen' | 'loading' | 'reloading' | 'error' | 'reloading' | 'authenticated'>('start-screen');
    const [errorMessage, setErrorMessage]=useState<string>(''); //error message to display
    const [password, setPassword]=useState<string>('');
    const [errors404, setErrors404]=useState<null | any>(null);
    const [otherErrors, setOtherErrors]=useState<null | any>(null);
    const [selectedErrors, setSelectedErrors]=useState<string[]>([]); //array of ids

    console.log(selectedErrors);
    
    function request(action: Action, selectedErrors?: string[]) {
        return fetch('/api/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password,
                action,
                ids: selectedErrors,
            })
        })
            .then(res=>res.json())
            .then(res=>{
                if (res.type==='error') {
                    setStatus('error');
                    setErrorMessage(res.message);
                    return Promise.reject(res);
                }
                return res;
            });
    }

    const formatDate=(date: string)=>format(new Date(date), 'MM/dd/yyyy HH:mm:ss');
    
    return <Page>
        <h1 className='text-center'>Dashboard</h1>

        {
            status==='start-screen' || status==='loading' || status==='error'
            ? <>
                <p>Please authenticate</p>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    setStatus('loading');
                    request('GET')
                        .then((res)=>{
                            setErrors404(res['404Errors']);
                            setOtherErrors(res.otherErrors);
                            setStatus('authenticated');
                        });
                }}>
                    <label htmlFor="password">Password: </label>
                    <input id='password' value={password} onChange={e=>setPassword(e.target.value)} type='password' />
                    <br />
                    <Button type='submit'>Submit</Button>
                </form>
                { status==='loading' && <Loader /> }
                { status==='error' && <div className='text-red-500'>{errorMessage}</div> }
            </>
            : <div className='relative j_max-w'>
                <div className='absolute right-0 top-0'>
                    <ReloadIcon onClick={()=>{
                        setStatus('reloading');
                        request('GET')
                            .then((res)=>{
                                setErrors404(res['404Errors']);
                                setOtherErrors(res.otherErrors);
                                setStatus('authenticated');
                            });
                    }} />
                    { status==='reloading' && <div>Reloading</div> }
                </div>
                <h2>404 Errors</h2>
                <h4>Top Results</h4>
                <div className='grid grid-cols-[1fr_10fr_1fr] border-[1px] border-black'>
                    <div className='bold text-center border-black border-b-[1px] border-r-[1px]'>Count</div>
                    <div className='bold text-center border-black border-b-[1px] border-r-[1px]'>Page</div>
                    <div className='bold text-center border-black border-b-[1px]'>Select</div>
                    {
                        getTopItems(errors404).map((error)=>{
                            const source=error[0] as string;
                            const dashboardError=error[1] as DashboardError;
                            return <React.Fragment key={source}>
                                <div className='border-r-[1px] border-black text-right border-b-[1px] px-2'>{dashboardError.count}</div>
                                <div className='border-b-[1px] border-black px-2 border-r-[1px]'>
                                    <Link href={`${dashboardError.source}?dont_report=true`} target='_blank' title='Visit link'>{dashboardError.source}</Link>
                                </div>
                                <div className='border-b-[1px] border-black px-2 flex justify-center items-center'>
                                    <input
                                        type="checkbox"
                                        checked={selectedErrors.some((id)=>dashboardError.ids.includes(id))}
                                        onChange={(e)=>{
                                            if (e.target.checked) {
                                                setSelectedErrors([...selectedErrors, ...dashboardError.ids]);
                                            } else {
                                                setSelectedErrors(selectedErrors.filter((id)=>!dashboardError.ids.includes(id)));
                                            }
                                        }}
                                    />
                                </div>
                            </React.Fragment>;
                        })
                    }
                </div>

                {
                    selectedErrors.length!==0 && <>
                        <Button onClick={()=>{
                            request('RESOLVE', selectedErrors)
                                .then(()=>{
                                    setErrors404(errors404.filter((error: any)=>!selectedErrors.includes(error.id)));
                                    setOtherErrors(otherErrors.filter((error: any)=>!selectedErrors.includes(error.id)));
                                    setSelectedErrors([]);
                                });
                        }}>Resolve</Button>
                        <Button onClick={()=>{
                            request('DELETE', selectedErrors)
                                .then(()=>{
                                    setErrors404(errors404.filter((error: any)=>!selectedErrors.includes(error.id)));
                                    setOtherErrors(otherErrors.filter((error: any)=>!selectedErrors.includes(error.id)));
                                    setSelectedErrors([]);
                                });
                        }}>Delete</Button>
                    </>
                }
                
                {/* TODO: FULL TABLE */}
                <h4>Log</h4>
                <table className='j_table_no_padding'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Page</th>
                            {/* <th>Message</th> */}
                            <th>View JSON</th>
                        </tr>
                    </thead>
                    <tbody>
                        {errors404.map((error: any)=>(
                            <tr key={error.id}>
                                <td style={{width: 200}}>{formatDate(error.date)}</td>
                                <td>
                                    <Link href={`${error.source}?dont_report=true`} target='_blank' title='Visit link'>{error.source}</Link>
                                </td>
                                <td>
                                    <Info>{JSON.stringify(error)}</Info>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <br />
                <h3>Other Errors</h3>
                <table className='j_table_no_padding'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Page</th>
                            {/* <th>Message</th> */}
                            <th>View JSON</th>
                        </tr>
                    </thead>
                    <tbody>
                        {otherErrors.map((error: any)=>(
                            <tr key={error.id}>
                                <td style={{width: 200}}>{formatDate(error.date)}</td>
                                <td>{error.source}</td>
                                {/* <td>{error.message}</td> */}
                                <td>
                                    <Info>{JSON.stringify(error)}</Info>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <br /><br />
                <Button onClick={()=>{
                    setPassword('');
                    setStatus('start-screen');
                    setOtherErrors([]);
                    setErrors404([]);
                }}>Log Out</Button>
            </div>
        }
    </Page>;
}
