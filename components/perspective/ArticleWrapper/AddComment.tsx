import { useState } from 'react';
import Button from '@jcomponents/button';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddComment({ hyphenatedTitle }: { hyphenatedTitle: string }) { //form for submitting a comment
    const [name, setName]=useState<string>('');
    const [email, setEmail]=useState<string>('');
    const [comment, setComment]=useState<string>();

    const style={
        width: '95%',
        maxWidth: '800px'
    };

    function submitHandler() {
        console.log(JSON.stringify({ name, email, comment, hyphenatedTitle }));
        fetch('/api/perspective/add-comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, comment, hyphenatedTitle })
        });
        toast.success('Click the verification link sent to your email to post the comment.');
    }
    
    return <div className='px-5 py-3 flex flex-col items-center' style={{
        border: '1px solid black',
    }}>
        <div style={{...style, display: 'flex', gap: 5, marginBottom: 5}}>
            <input type='text'  placeholder='Name'  value={name} onChange={e=>setName(e.target.value)} className='w-full' />
            <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} className='w-full' />
        </div>
        <textarea name='add-comment' id='add-comment' className='mb-2' placeholder='Leave a comment...' value={comment} rows={1} onChange={e=>setComment(e.target.value)} style={style} />
        <ToastContainer />
        <Button onClick={submitHandler} color='jblue'>
            <span>Comment</span>
            <svg stroke='currentColor' fill='none' strokeWidth='2' viewBox='0 0 24 24' strokeLinecap='round' strokeLinejoin='round' height='1em' width='1em' className='ml-1 inline' xmlns='http://www.w3.org/2000/svg'><line x1='22' y1='2' x2='11' y2='13'></line><polygon points='22 2 15 22 11 13 2 9 22 2'></polygon></svg>
        </Button>
    </div>;
}
