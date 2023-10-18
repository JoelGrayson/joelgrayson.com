import Loader from '@/components/global/Loader';
import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import { useState } from 'react';
import { format } from 'date-fns';
import Info from '@/components/global/Info';

export default function Dashboard() {
    const [status, setStatus]=useState<'start-screen' | 'loading' | 'wrong-password' | 'authenticated'>('start-screen');
    const [password, setPassword]=useState<string>('');
    const [errors404, setErrors404]=useState<null | any>(null);
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
                <h3>404 Errors</h3>
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
