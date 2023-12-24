import cn from 'classnames';

export function Reply({ children, author, date, id, highlighted }: { children: any; author: string; date: string; id: string; highlighted: boolean }) {
    return <div className={cn('my-1 py-3 px-4 relative', highlighted && 'bg-yellow-300')} style={{
        border: '1px solid black',
        borderRadius: 10
    }} id={`comment-${id}`}>
        <div className='mb-6'>{children}</div> {/* Content */}
        <div className='absolute right-3 bottom-2'>
            <div>Wrote <b>{author}</b> on {date}</div>
        </div>
    </div>;
}
