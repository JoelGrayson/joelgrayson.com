import { useState } from 'react';
import onFormSubmit from './onFormSubmit';

export default function Form() {
    const [submitted, setSubmitted]=useState(false);

    return (<>
        <style jsx>{`
            input, textarea {
                border: 1px solid black;
                background-color: #dde5ff;
                border-radius: 0.4rem;
                padding: 0.2rem 0.8rem;
            }
            
            input:invalid, textarea:invalid {
                background-color: #fde2f0;
            }
              
            input:hover, textarea:hover {
                background-color: #c4c9f2;
            }
              
            input:focus, textarea:focus {
                background-color: #d4e0fd;
            }

            #name, #email {
                width: 214px;
            }
            
            #message {
                max-width: 440px;
            }
        `}</style>

        {/* justify-around */}

        <div className='border-black border-solid border-2 mx-auto rounded-3xl my-[100px]
            flex flex-col items-center
            w-[540px] max-w-[540px] min-h-[500px]
            leading-loose bg-[#fff0d4]'> {/* Box */}
            <h2 className='pt-6'>I&apos;d Love to Talk with You</h2>
            <p>Fill out the form below or email <a href='mailto:joel@joelgrayson.com'>joel@joelgrayson.com</a></p>
            {
                submitted
                ? <div className='text-green-500 font-bold'>Message received. Thanks for getting in touch!</div>
                : (<form id='contactForm' method='POST' className='flex flex-col items-center' action='#' onSubmit={onFormSubmit(setSubmitted)}>
                    <div className='w-full flex justify-center gap-[12px]'>
                        <input type="text" name="name" id="name" placeholder='Name' />
                        <input type="email" name="email" id="email" placeholder='Email' />
                    </div>
                    <textarea name="message" id="message" placeholder="Type your message here" form='contactForm'
                        cols={50} rows={8}
                        className='mx-8 resize-none'
                    />
                    <br/>
                    {/* Captcha? */}
                    <input className='blue-btn w-fit mb-6' type="submit" value="Send" />
                </form>)
            }
        </div>
    </>);
}