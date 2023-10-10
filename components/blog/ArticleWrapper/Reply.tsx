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
