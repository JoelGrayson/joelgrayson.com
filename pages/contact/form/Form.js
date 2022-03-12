export default function Form() {
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
        `}</style>

        <div className='border-black border-solid border-2 w-[540px] h-[540px] mx-auto rounded-3xl my-[100px]
            flex flex-col items-center justify-around max-w-[540px]
            leading-loose bg-[#fff0d4]'> {/*Box*/}
            <h2>I&apos;d Love to Talk with You</h2>
            <p>Fill out the form below or email <a href='mailto:joel@joelgrayson.com'>joel@joelgrayson.com</a></p>
            <form id='contactForm' method='POST' className='flex flex-col items-center'>
                <div className='w-full flex justify-around'>
                    <input type="text" name="name" id="name" placeholder='Name' />
                    <input type="email" name="email" id="email" placeholder='Email' />
                </div>
                <textarea name="message" id="message" cols="50" rows="8" placeholder="Type your message here" form='contactForm'></textarea>
                <br/>
                {/* Captcha? */}
                <input className='blue-btn w-fit' type="submit" value="Send" />
            </form>
        </div>
    </>);
}