import Page from '../../components/Page';
import Button from '@jcomponents/button';
import { dateRegex, SignedMessage } from '../../components/verify/helpers';
import React, { useState, useRef } from 'react';
import Modal from '@jcomponents/modal';
import Link from 'next/link';

// Planning: https://docs.google.com/document/d/1hg9SUuCwXk_PzTEOq7oJTXakGg7oZRXB4trvmor_abY/edit

export default function Verify() {
    const messageRef=useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const dateRef=useRef() as React.MutableRefObject<HTMLInputElement>;
    const signatureRef=useRef() as React.MutableRefObject<HTMLInputElement>;;
    const [open, setOpen]=useState<boolean>(false);

    const [isValid, setIsValid]=useState<null | 'valid' | 'invalid'>(null);

    function verifyRequest() {
        console.log('Verifying');
        const message=messageRef.current.value;
        const date=dateRef.current.value;
        const signature=signatureRef.current.value;

        if (!message)   return alert('Please provide a message');
        if (!date)      return alert('Please provide a date');
        if (!signature) return alert('Please provide a signature');

        const sm: SignedMessage={ message, date, signature };
        console.log('Sending SignedMessage: ', sm);

        fetch('/api/verify/', {
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
        
    }
    
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
            <span style={{cursor: 'pointer'}} className='text-gray-500 underline hover:text-gray-400' onClick={_=>setOpen(true)}>
                Learn more
            </span>
            <span>.</span>
        </p>
        <Modal open={open} setOpen={setOpen}>
            <h1 className='text-2xl font-bold text-center'>How it works</h1>
            <p>I sign messages I approve of with OpenSSL&apos;s SHA1 using my private key. SHA1 is an asymetric cryptographic algorithm, so when I sign a message, it returns a signature. The message can then be verified using the signature and public key.</p>
            <br />
            <p>Below is my public key:</p>   
            <code>MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu/5vI2rS5T6bnelsyVegDDHeb4SYSxTC4gCdpCBZ7tFoKiq1rAleW6WmI9DNM+JGo8KsHVgacHq7yJDzXG1YOqqlnBp1lVyqgm+XS5uCmXjLE7rQKRU77H66UWGc7ZNxgqgRoGPekrUBWkn6bC1k3rdVZbVPrt1Qvdn87zVf/xD0SZy1Mn/SeeEig3Oaakerv7/i0JRY50ILQJsl+4EjMn2a24He+f0UGUMboRvLU7wjb1Kae3gmY8rfqKSBoPwiAEYod7Wn5cKrOOP3VC2lePx4iVLBNW4fcWocBRAQHmHPAxnn4WEqvWW6P7tXlTNUEYZJj4B0Ll03bV6sbvJ0/wIDAQAB</code>
        </Modal>
        <div>
            <div>
                <label htmlFor='message'>Message</label>
                <br />
                <textarea ref={messageRef} id='message' name='message' rows={10} cols={50}></textarea>
            </div>
            <div>
                <label htmlFor="date">Date&emsp;</label>
                <input ref={dateRef} type="text" name="date" id="date" pattern={dateRegex.toString().slice(1, -1)} />
            </div>
            <div>
                <label htmlFor="signature">Signature&emsp;</label>
                <input ref={signatureRef} type="text" name="signature" id="signature" />
            </div>

            <Button onClick={verifyRequest}>Verify</Button>

            {(()=>{
                switch (isValid) {
                    case null:
                        return <></>;
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
