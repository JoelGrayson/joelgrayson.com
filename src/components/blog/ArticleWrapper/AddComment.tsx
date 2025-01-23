import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function AddComment({ hyphenatedTitle }: { hyphenatedTitle: string }) { //form for submitting a comment
    const [name, setName]=useState<string>('');
    const [email, setEmail]=useState<string>('');
    const [comment, setComment]=useState<string>();
    const [submitted, setSubmitted]=useState<boolean>(false);

    function submitHandler() {
        console.log(JSON.stringify({ name, email, comment, hyphenatedTitle }));

        fetch('/api/blog/add-comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, comment, hyphenatedTitle })
        })
            .then(res=>res.json())
            .then(res=>{
                if (res.type==='error') 
                    return toast.error(res.message);
                
                console.log('Add comment response', res);
            })
            .catch(res=>{
                if (res.type==='error') 
                    toast.error(res.message);
                else
                    console.error('Add comment error', res);
            });
        
        setSubmitted(true);
        // toast.success('Click the verification link sent to your email to post the comment.', {
        //     autoClose: false
        // });
    }
    
    return <>
        <ToastContainer />
        <div className='p-5 flex flex-col items-center' style={{
            border: '1px solid black',
            borderRadius: 10
        }}>
            {
            submitted 
            ? <div>
                <p>Please click the verification link sent to <span className='bold text-blue-800'>{email}</span> to post the comment <small>(this extra step is for security reasons to prevent spammer bots)</small></p>
                {/* Open email providers */}
                <Link href="https://mail.google.com" target='_blank'>
                    <div className='flex justify-center items-center gap-3 w-fit py-3 px-10 mx-auto mt-6 mb-3' style={{
                        border: '1px solid black',
                        borderRadius: 10
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" style={{
                            width: 30,
                            height: 30,
                            display: 'inline'
                        }}>
                            <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                            <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                            <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                            <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                            <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                        </svg>
                        <div>Open Gmail</div>
                        <svg style={{
                            display: 'inline',
                            width: 20,
                            height: 20
                        }} version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"> <path d="m909.46 216-350.69 350.69c-20.586 20.586-20.617 54.047 0.003907 74.668 20.574 20.578 54.047 20.621 74.664 0.003906l350.56-350.56v117.24c0 26.43 21.492 47.961 48 47.961 26.457 0 48-21.473 48-47.961v-240.08c0-13.207-5.3672-25.195-14.047-33.879-8.6914-8.6992-20.676-14.082-33.914-14.082h-240.08c-26.43 0-47.961 21.492-47.961 48 0 26.457 21.473 48 47.961 48zm170.54 480v-228.18 492.54c0 66.078-47.605 119.64-106.41 119.64h-747.19c-58.766 0-106.41-53.672-106.41-119.64v-720.71c0-66.078 47.605-119.64 106.41-119.64h512.39-234.8c26.508 0 48 21.492 48 48s-21.492 48-48 48h-260.67c-15.27 0-27.332 14.336-27.332 32.023v703.95c0 17.367 12.238 32.023 27.332 32.023h713.34c15.27 0 27.332-14.336 27.332-32.023v-255.98c0-26.508 21.492-48 48-48s48 21.492 48 48z" fillRule="evenodd"/> </svg>
                    </div>
                </Link>
            </div>
            : <>
                <div>
                    <div id='row1' style={{ display: 'flex', gap: 5, marginBottom: 5 }}>
                        <div className='w-[50%]'>
                            <label htmlFor="name">Name (Public)</label>
                            <input type='text' id='name' name='name' placeholder='Name'  value={name} onChange={e=>setName(e.target.value)} className='w-full' />
                        </div>
                        <div className='w-[50%]'>
                            <label htmlFor="email">Email (Not public. For verification purposes)</label>
                            <input type='email' id='email' name='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} className='w-full' />
                        </div>
                    </div>
                    <div id='row2' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',  }}>
                        <label htmlFor="comment">Comment</label>
                        <textarea name='comment' id='comment' className='mb-2' placeholder='Leave a comment...' value={comment} rows={3} onChange={e=>setComment(e.target.value)} />
                    </div>
                </div>
                <button onClick={submitHandler} className='btn-blue dark:btn-gray'>
                    <span>Comment</span>
                    <svg stroke='currentColor' fill='none' strokeWidth='2' viewBox='0 0 24 24' strokeLinecap='round' strokeLinejoin='round' height='1em' width='1em' className='ml-1 inline' xmlns='http://www.w3.org/2000/svg'><line x1='22' y1='2' x2='11' y2='13'></line><polygon points='22 2 15 22 11 13 2 9 22 2'></polygon></svg>
                </button>
            </>
            }
        </div>
    </>;
}
