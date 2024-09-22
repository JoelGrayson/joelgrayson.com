'use client';

import Page from '@/components/page/DefaultPage';
import { useState } from 'react';
import { getSignedUrl } from './create/addImage';
import { addItem } from './create/addItem';
import Modal from '@jcomponents/modal';

export default function ManageLibrary() {
    const [passwordSubmitted, setPasswordSubmitted]=useState(false);
    const [password, setPassword]=useState('');
    
    const [type, setType]=useState('book');
    const [title, setTitle]=useState('');
    const [date, setDate]=useState<string>();
    const [image, setImage]=useState<File | undefined>();
    const [author, setAuthor]=useState('');
    const [url, setUrl]=useState('');
    const [startedDate, setStartedDate]=useState<string>();

    const [status, setStatus]=useState<'loading' | ''>('');
    
    async function handleSubmit(e: any) {
        e.preventDefault();

        setStatus('loading');

        console.log('Submitting', { type, title, date, image, author, startedDate });
        
        const result=await addItem({
            type,
            title,
            author,
            url,
            date: date ? new Date(date) : '',
            startedDate: startedDate ? new Date(startedDate) : undefined
        }, password);
        if (!result) return alert('Not authenticated. Cannot add item.');
        const { id }=result;
        
        if (image) {
            const result=await getSignedUrl({ id, password });
            if (!result) return alert('Not authenticated. Cannot upload image.');

            const { signedUrl }=result;

            fetch(signedUrl, {
                method: 'PUT',
                body: image,
                headers: {
                    'Content-Type': image.type,
                }
            });

            setStatus('');
            // Reset form
            setType('book');
            setTitle('');
            setImage(undefined);
            setAuthor('');
            setUrl('');
            setDate('');

            alert('Successfully added item!');
        }
    }
    
    return <Page bottomPadding pathname='/library/manage' seo={{
        title: 'Manage library',
    }}>
        <h1 className='text-center'>Manage Library</h1>

        <Modal open={!passwordSubmitted} unclosable>
            <form onSubmit={e=>{
                e.preventDefault();
                setPasswordSubmitted(true);
            }}>
                <div className='text-center mb-2 font-bold'>Enter the password</div>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
                <button>Submit</button>

                <div>If you enter the wrong password, no actions will go through.</div>
            </form>
        </Modal>
        
        <form onSubmit={handleSubmit}>
            <h3>Add an Item</h3>
            
            <div>
                <label htmlFor="type">Type&emsp;</label>
                <select name="type" id="type" className='border border-black rounded' value={type} onChange={e=>setType(e.target.value)}>
                    <option value="book">Book</option>
                    <option value="movie">Movie</option>
                    <option value="interview">Interview</option>
                    <option value="audiobook">Audiobook</option>
                </select>
            </div>
        
            <div>
                <label htmlFor="title">Title<Mandatory />&emsp;</label>
                <input type="text" id='title' name='title' required value={title} onChange={e=>setTitle(e.target.value)} />
            </div>

            <div>
                <label htmlFor="author">Author{type==='book' && <Mandatory />}&emsp;</label>
                <input type="text" id='author' name='author' value={author} onChange={e=>setAuthor(e.target.value)} />
            </div>

            <div>
                <label htmlFor="date">Date Finished<Mandatory />&emsp;</label>
                <input type="date" id='date' value={date} onChange={e=>setDate(e.target.value)} />
            </div>

            <div>
                <label htmlFor="startedDate">Date Started&emsp;</label>
                <input type="date" id='startedDate' value={startedDate} onChange={e=>setStartedDate(e.target.value)} />
            </div>
            
            <div>
                <label htmlFor="url">URL&emsp;</label>
                <input type="text" id='url' value={url} onChange={e=>setUrl(e.target.value)} />
            </div>

            <div>
                <label htmlFor="image">Image<Mandatory />&emsp;</label>
                <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" required onChange={e=>{setImage(e.target.files?.[0]); console.log(e.target.files?.[0]);}} />
            </div>

            <button type='submit'>{status==='loading' ? 'Submitting...' : 'Submit'}</button>
        </form>
    </Page>;
}

export const Mandatory=()=><span style={{color: 'red'}}>*</span>;

/*
id          String    @id @default(cuid())
type        String //book | movie | interview | audiobook
name        String
author      String?
url         String?
date        DateTime //ended
startedDate DateTime?
*/
