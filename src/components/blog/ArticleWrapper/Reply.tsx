import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function Reply({ children, author, date, id, selected }: { children: any; author: string; date: string; id: string; selected: boolean }) {
    const ref=useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        ref.current?.scrollIntoView();
    }, [selected]);
    
    const comment=<div className='my-1 py-3 px-4 relative' style={{
        border: '1px solid black',
        borderRadius: 10
    }} id={`comment-${id}`}>
        <div className='mb-6'>{children}</div> {/* Content */}
        <div className='absolute right-3 bottom-2'>
            <div>Wrote <b>{author}</b> on {date}</div>
        </div>
    </div>;

    if (selected) {
        return <div className='relative'>
            <motion.div
                style={{ backgroundColor: '#f9c44d', borderRadius: 10, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                animate={{ opacity: 0 }}
                initial={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: 2, repeatType: 'reverse' }}
                ref={ref}
            />
            <div>{comment}</div>
        </div>;
    }
    else
        return comment;
}
