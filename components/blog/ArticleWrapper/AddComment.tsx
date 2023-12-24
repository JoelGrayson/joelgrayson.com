import { useState } from 'react';
import Button from '@jcomponents/button';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddComment({ hyphenatedTitle }: { hyphenatedTitle: string }) { //form for submitting a comment
    const [name, setName]=useState<string>('');
    const [email, setEmail]=useState<string>('');
    const [comment, setComment]=useState<string>();

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
        
        toast.success('Click the verification link sent to your email to post the comment.', {
            autoClose: false
        });
    }
    
    return <>
        <ToastContainer />
        <div className='p-5 flex flex-col items-center' style={{
            border: '1px solid black',
            borderRadius: 10
        }}>
            <div>
                <div id='row1' style={{ display: 'flex', gap: 5, marginBottom: 5 }}>
                    <div className='w-[50%]'>
                        <label htmlFor="name">Name (public)</label>
                        <input type='text' id='name' name='name' placeholder='Name'  value={name} onChange={e=>setName(e.target.value)} className='w-full' />
                    </div>
                    <div className='w-[50%]'>
                        <label htmlFor="email">Email (for verification, will not be shown)</label>
                        <input type='email' id='email' name='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} className='w-full' />
                    </div>
                </div>
                <div id='row2' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',  }}>
                    <label htmlFor="comment">Comment</label>
                    <textarea name='comment' id='comment' className='mb-2' placeholder='Leave a comment...' value={comment} rows={1} onChange={e=>setComment(e.target.value)} />
                </div>
            </div>
            <Button onClick={submitHandler} color='jblue'>
                <span>Comment</span>
                <svg stroke='currentColor' fill='none' strokeWidth='2' viewBox='0 0 24 24' strokeLinecap='round' strokeLinejoin='round' height='1em' width='1em' className='ml-1 inline' xmlns='http://www.w3.org/2000/svg'><line x1='22' y1='2' x2='11' y2='13'></line><polygon points='22 2 15 22 11 13 2 9 22 2'></polygon></svg>
            </Button>
        </div>
    </>;
}
