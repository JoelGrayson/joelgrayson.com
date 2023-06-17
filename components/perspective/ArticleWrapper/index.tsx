import { useEffect, useState } from 'react';
import PerspectivePage from '../PerspectivePage';
import jdate from 'joeldate';
import { ExposedComment } from '@/components/data/TYPES';
import { Reply } from './Reply';
import AddComment from './AddComment';

export default function Article({ hyphenatedTitle, title, date /** published date */, children, notitle=false, nodate=false }: { hyphenatedTitle: string; title: string; date: Date; children: React.ReactNode; notitle?: boolean; nodate?: boolean }) {
    const [comments, setComments]=useState<ExposedComment[]>([]);
    const [views, setViews]=useState<null | number>(null);
    
    useEffect(()=>{ //load from prisma
        if (!hyphenatedTitle) return;

        fetch('/api/perspective/comments-and-views', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                hyphenatedTitle
            })
        })
            .then(res=>res.json())
            .then(res=>{
                if (res.views===-1) return; //data was not found

                console.log('Comments and views response', res);
                setViews(res.views);
                setComments(res.comments);
            });
    }, [hyphenatedTitle]);
    
    return <PerspectivePage seo={{ title: title ? `${title} | Joel's Perspective` : "Joel's Perspective" }}>
        {/* Title & Date */}
        {!notitle && <h1 style={{fontSize: '2.5rem', textAlign: 'center'}}>{title}</h1>}
        {!nodate && <div className='text-right' title={date && `Published on ${jdate(date)}`}>{date && jdate(date)}</div>}
        <div className='text-right mb-6'>{views ? `${views} views` : ''}</div>

        {/* Article Content */}
        {children}
        
        {/* Comments */}
        <br /><br />
        <div id='comments'>
            <h3>Comments</h3>
            {comments.map(comment=>
                <Reply key={comment.id} author={comment.author} date={jdate(new Date(comment.postedAt))}>{comment.content}</Reply>
            )}
            <AddComment {...{hyphenatedTitle}} />
        </div>
    </PerspectivePage>;
}
