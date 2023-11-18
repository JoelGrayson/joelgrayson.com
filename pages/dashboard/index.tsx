import Loader from '@/components/global/Loader';
import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import { useState } from 'react';
import { format } from 'date-fns';
import Info from '@/components/global/Info';
import { Error } from '@prisma/client';
import React from 'react';

function getTopItems(errors: Error[]) {
    const out=new Map<string, number>();

    for (let error of errors) {
        if (out.has(error.source))
            out.set(error.source, out.get(error.source)!+1);
        else
            out.set(error.source, 1);
    }

    return [...out.entries()].sort((a, b)=>b[1]-a[1]);
}

export default function Dashboard() {
    const [status, setStatus]=useState<'start-screen' | 'loading' | 'wrong-password' | 'authenticated'>('start-screen');
    const [password, setPassword]=useState<string>('');
    const [errors404, setErrors404]=useState<null | any>(null);
    let topErrors404=errors404.reduce((acc: any, e: any) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
    console.log('top', topErrors404);
    const [otherErrors, setOtherErrors]=useState<null | any>(null);

    async function submitPassword(e: any) {
        e.preventDefault();

        setStatus('loading');
        fetch('/api/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password
            })
        })
            .then(res=>res.json())
            .then(res=>{
                if (!res.authenticated)
                    return setStatus('wrong-password');

                console.log(res);
                setErrors404(res['404Errors']);
                setOtherErrors(res.otherErrors);
                setStatus('authenticated');
            });
    }

    const formatDate=(date: string)=>format(new Date(date), 'MM/dd/yyyy HH:mm:ss');
    
    return <Page>
        <h1 className='text-center'>Dashboard</h1>

        {
            status!=='authenticated'
            ? <>
                <p>Please authenticate</p>
                <form onSubmit={submitPassword}>
                    <label htmlFor="password">Password: </label>
                    <input id='password' value={password} onChange={e=>setPassword(e.target.value)} type='password' />
                    <br />
                    <Button type='submit'>Submit</Button>
                </form>
                { status==='loading' && <Loader /> }
                { status==='wrong-password' && <div className='text-red-500'>Wrong password</div> }
            </>
            : <>
                <h2>404 Errors</h2>
                <h4>Top Results</h4>
                <div className='grid grid-cols-[1fr_10fr] border-2 border-black'>
                    {
                        getTopItems(errors404).map((item: any)=>(<React.Fragment key={item[0]}>
                            <div className='border-r-2 border-black text-right border-b-2 px-2'>{item[1]}</div>
                            <div className='border-b-2 border-black px-2'>{item[0]}</div>
                        </React.Fragment>))
                    }
                </div>
                
                <h4>Log</h4>
                <table className='j_table'>
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
                                <td>{formatDate(error.date)}</td>
                                <td>{error.source}</td>
                                {/* <td>{error.message}</td> */}
                                <td>
                                    <Info>{JSON.stringify(error)}</Info>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <h3>Other Errors</h3>
                <table className='j_table'>
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
                                <td>{formatDate(error.date)}</td>
                                <td>{error.source}</td>
                                {/* <td>{error.message}</td> */}
                                <td>
                                    <Info>{JSON.stringify(error)}</Info>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Button onClick={()=>{
                    setPassword('');
                    setStatus('start-screen');
                    setOtherErrors([]);
                    setErrors404([]);
                }}>Log Out</Button>
            </>
        }
    </Page>;
}
