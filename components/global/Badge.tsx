export default function Badget({ children, color='#db4343' }: { children: React.ReactNode; color?: string }) {
    return <span className='ml-3 px-2 py-0' style={{
        backgroundColor: color,
        color: 'white',
        borderRadius: '4px',
    }}>
        {children}
    </span>;
}
