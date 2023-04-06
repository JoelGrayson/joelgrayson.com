import Page from '../../components/Page';
import Button from '@jcomponents/button';
import { dateRegex, SignedMessage } from '../../components/verify/helpers';
import React, { useState, useCallback, useEffect } from 'react';
import Modal from '@jcomponents/modal';
import Router, { useRouter } from 'next/router';

// Planning: https://docs.google.com/document/d/1hg9SUuCwXk_PzTEOq7oJTXakGg7oZRXB4trvmor_abY/edit

export default function Verify() {
    const router=useRouter();
    const { query }=router;

    // DOM El Values
    const [message, _setMessage]=useState<string>(query.message as string || '');
    const [date, _setDate]=useState<string>(query.date as string || '');
    const [signature, _setSignature]=useState<string>(query.signature as string || '');

    // Proper setState updates the query params
    function setMessage(newMsg: string) {
        _setMessage(newMsg);
        router.replace({query: {...query, message: encodeURIComponent(newMsg)}});
    }
    function setDate(newDate: string) {
        _setDate(newDate);
        router.replace({query: {...query, date: encodeURIComponent(newDate)}});
    }
    function setSignature(newSignature: string) {
        _setSignature(newSignature);
        router.replace({query: {...query, signature: encodeURIComponent(newSignature)}});
    }
    
    const [isValid, setIsValid]=useState<null | 'verifying...' | 'valid' | 'invalid'>(null);
    const [open, setOpen]=useState<boolean>(false);
    
    const verifyRequest=useCallback((suppressWarnings=false)=>{
        const dateRegex=/(\d{1,2}\.\d{1,2}\.\d{2,4}|\d{4}(\.\d{1,2})?(\.\d{1,2})?)/;

        // Warnings
        if (!date || !dateRegex.test(date)) {
            if (suppressWarnings) return;
            return alert('Invalidly formed date. Must be of format `YEAR.MONTH.DAY`.');
        }
        if (!message) {
            if (suppressWarnings) return;
            return alert('Please provide a message');
        }
        if (!signature || signature.length<=8) {
            if (suppressWarnings) return;
            return alert('Please provide a signature at least 9 letters long.');
        }

        const sm: SignedMessage={ message, date, signature };
        console.log('Verifying: ', sm);

        fetch('https://api.joelgrayson.com/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sm)
        })
            .then(res=>res.json())
            .then(res=>{
                console.log('Res', res);
                if (res.status!=='Success' || res.valid===undefined)
                    alert('The verification server is not working');

                if (res.valid===true) //explicitly true
                    setIsValid('valid');
                else if (res.valid===false) //explicitly false
                    setIsValid('invalid');
                else
                    setIsValid(null);
            });
    }, [date, message, signature]);
    
    // Use query values
    useEffect(()=>{ //if valid query, use its values
        if(!router.isReady) return;
        
        console.log('query', query);

        if (query.message) _setMessage(query.message as string);
        if (query.date) _setDate(query.date as string);
        if (query.signature) _setSignature(query.signature as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.isReady]); //only run once
    
    useEffect(()=>{ //automatically update validity when user types something
        if (message && date && signature)
            verifyRequest(true);
    }, [message, date, signature, verifyRequest]);

    return (<Page padding>
        <h1 className='flex justify-center items-center'>
            <span>
                Verify
            </span>
            {/* Lock Icon */}
            <svg width={51*0.7} height={69*0.7} className='relative bottom-2 ml-4' viewBox="0 0 51 69" fill="none">
                <path d="M13 28H7C5.34315 28 4 29.3431 4 31V62C4 63.6569 5.34315 65 7 65H44C45.6569 65 47 63.6569 47 62V31C47 29.3431 45.6569 28 44 28H38M13 28V11C13.3333 8.33333 18.6882 3.5 25.5 3.5C33.5 3.5 38 8.66667 38 11V28M13 28H38" stroke="#0A673A" strokeWidth="7" />
                <rect x="4" y="29" width="43" height="36" fill="#0A673A"/>
            </svg>
        </h1>
        <p>
            <span>See if a message was indeed signed by Joel Grayson on a certain date. In this era of misinformation, how can you trust if someone actually said something? This page is intended to prevent someone from forging my name on a message by using asymmetric cryptography with OpenSSL. </span>
            <span style={{cursor: 'pointer'}} className='text-gray-500 underline hover:text-gray-400' onClick={()=>setOpen(true)}>
                Learn more
            </span>
            <span>.</span>
        </p>
        <Modal open={open} setOpen={setOpen}>
            <h1 className='text-2xl font-bold text-center'>How it works</h1>
            <p>I sign messages I approve of with OpenSSL&apos;s SHA1 using my private key. SHA1 is an asymetric cryptographic algorithm, so when I sign a message, it returns a signature. The message can then be verified using the signature and public key.</p>
            <br />
            <p>Below is my public key:</p>   
            <code>MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAN1x/1tamFGc/vdJMnXEM1HrMBxFyJavnMkl7GLsdMe9hfuadYZUsCDEp8KoVuYyPwWL1e4IEScfd9UaDoKSKUUCAwEAAQ==</code>
        </Modal>
        <div>
            <div>
                <label htmlFor='message'>Message</label>
                <br />
                <textarea 
                    id='message' name='message' rows={10} cols={50}
                    value={message} onChange={e=>setMessage(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="date">Date&emsp;</label>
                <input
                    type="text" name="date" id="date" pattern={dateRegex.toString().slice(1, -1)} 
                    value={date} onChange={e=>setDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="signature">Signature&emsp;</label>
                <input
                    type="text" name="signature" id="signature" className='w-[300px]'
                    value={signature} onChange={e=>setSignature(e.target.value)}
                />
            </div>

            <Button onClick={e=>verifyRequest()}>Verify</Button>

            {(()=>{
                // Verification status:
                switch (isValid) {
                    case null:
                        return <></>;
                    case 'verifying...':
                        return <p className='italic'>Verifying...</p>;
                    case 'valid':
                        return <p className='text-green-800'>Verified ✅. Joel Grayson signed/authorized this message.</p>;
                    case 'invalid':
                        return <p className='text-red-800'>Invalid. Joel did not sign this message on the given date with the given signature. Either the message, date, or signature is mistyped, or someone forged the signature or changed the message or date without Joel&apos;s permission.</p>;
                    default:
                        return <span>Invalid isValid state: {JSON.stringify(isValid)}</span>;
                }
            })()}
        </div>
        <br /><br />
    </Page>);
}
