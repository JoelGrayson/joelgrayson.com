export default function Cursor() {
    return <div className='animate-blink' style={{
        width: 3,
        height: '1.2rem',
        backgroundColor: 'black',
        display: 'inline-block',
        position: 'relative',
        margin: '0 3px',
        top: 3,
    }} />;
}

/*
export function Cursor() {
    return <>
        <div id='cursor' className='h-1 w-1 bg-black absolute' style={{top: 0, left: 0}} />
        <style jsx>{`
            #cursor {
                height: 1px;
                width: 1px;
                background-color: black;
                position: absolute;
                animation: blink 1s infinite;
            }
            @keyframes blink {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        `}</style>
    </>;
}
*/