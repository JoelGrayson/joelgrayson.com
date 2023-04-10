import { useEffect, useState } from 'react';
import PerspectiveBody from './PerspectivePage';
import jdate from 'joeldate';
import { ExposedComment } from '@/components/data/TYPES';
import AddComment from '@/components/perspective/AddComment';

export default function Article({ hyphenatedTitle, title, date /** published date */, children, notitle=false, nodate=false }: { hyphenatedTitle: string; title: string; date: Date; children: React.ReactNode; notitle?: boolean; nodate?: boolean }) {
    const [comments, setComments]=useState<ExposedComment[]>([]);
    const [views, setViews]=useState<null | number>(null);
    
    useEffect(()=>{ //load from prisma
        if (!hyphenatedTitle) return;

        fetch('/api/perspective/comments-and-views', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hyphenatedTitle: hyphenatedTitle
            })
        })
            .then(res=>res.json())
            .then(res=>{
                if (res.views===-1) return; //data was not found

                setViews(res.views);
                setComments(res.comments);
            });
    }, [hyphenatedTitle]);
    
    return <PerspectiveBody seo={{ title: title ? `${title} | Joel's Perspective` : "Joel's Perspective" }}>
        {/* Title & Date */}
        {!notitle && <h1 style={{fontSize: '2.5rem', textAlign: 'center'}}>{title}</h1>}
        {!nodate && <div className='text-right mb-6'>{date && jdate(date)}</div>}

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
    </PerspectiveBody>;
}

export function Reply({children, author, date}: { children: any; author: string; date: string }) {
    return <div className='my-1 py-3 px-4 relative' style={{
        border: '1px solid black',
        borderRadius: 10
    }}>
        <div className='mb-6'>{children}</div> {/* Content */}
        <div className='absolute right-3 bottom-2'>
            <div>Wrote <b>{author}</b> on {date}</div>
        </div>
    </div>;
}
