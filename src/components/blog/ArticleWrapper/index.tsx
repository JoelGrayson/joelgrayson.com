import { useEffect, useState } from 'react';
import BlogPage from '../BlogPage';
import { jdate } from 'joeldate';
import { ExposedComment } from 'src/data/prisma/TYPES';
import { Reply } from './Reply';
import AddComment from './AddComment';
import { useRouter } from 'next/router';

export default function Article({ hyphenatedTitle, title, date /** published date */, children, notitle=false, nodate=false }: { hyphenatedTitle: string; title: string; date: Date; children: React.ReactNode; notitle?: boolean; nodate?: boolean }) {
    const [comments, setComments]=useState<ExposedComment[]>([]);
    const [views, setViews]=useState<null | number>(null);
    const [commentId, setCommentId]=useState<null | string>(null);
    const router=useRouter();
    
    useEffect(()=>{ //load from prisma
        if (!hyphenatedTitle) return;
        
        fetch('/api/blog/comments-and-views', {
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

        if (router.query.state==='verifiedComment') {
            const commentId=router.query.commentId;
            if (!commentId) return;

            setCommentId(commentId as string);
        }
    }, [hyphenatedTitle, router.query.commentId, router.query.state]);
    
    return <BlogPage seo={{ title: title ? `${title} | Joel's Blog` : "Joel's Blog" }}>
        {/* Title & Date */}
        {!notitle && <h1 style={{fontSize: '2.5rem', textAlign: 'center'}}>{title}</h1>}
        <div className='text-right' title={date && `Published on ${jdate(date)}`}>{!nodate && date && jdate(date)}</div>
        <div className='text-right mb-6'>{views ? `${views} views` : <>&emsp;</>}</div>

        {/* Article Content */}
        {children}
        
        {/* Comments */}
        <br /><br />
        <div id='comments'>
            <h3>Comments</h3>
            {comments.map(comment=>
                <Reply key={comment.id} id={comment.id} author={comment.author} date={jdate(new Date(comment.postedAt))} selected={comment.id===commentId}>{comment.content}</Reply>
            )}
            <AddComment {...{hyphenatedTitle}} />
        </div>
    </BlogPage>;
}
