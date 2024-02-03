import Link from 'next/link';

const compositions: [string, string, string][]=[
    ['In Like a Lion, Out Like a Lamb', '2 Violins, Viola, Cello', 'February 2024'],
    ['The Yearning Soul', '2 Violins', 'August 2022'],
    ['Jogging Fury', 'Violin', 'May 2021'],
    ['Cadenza', 'Violin', 'May 2021'],
];

export default function Compositions() {
    return <>
        <h2>Compositions</h2>
        <div>
            {compositions.map((composition, i)=>{
                const [name, instruments, date]=composition;
                return <div key={i} className='d:grid d:grid-cols-[1fr_2fr] items-center my-3' style={{
                    border: '2px solid #0080b2',
                    padding: 10,
                    backgroundColor: '#fefefe',
                    borderRadius: 10
                }}>
                    <div>
                        <p className='bold'>{name}</p>
                        <p>{instruments}</p>
                        <p>{date}</p>
                        {
                            name==='In Like a Lion, Out Like a Lamb'
                            ? <div>
                                <span>Sheet Music 🎼: </span>
                                <Link href={`/music/${name}.pdf`}>All</Link>,&nbsp;
                                <Link href={`/music/${name}-Violin I.pdf`}>Violin 1</Link>,&nbsp;
                                <Link href={`/music/${name}-Violin II.pdf`}>Violin 2</Link>,&nbsp;
                                <Link href={`/music/${name}-Viola.pdf`}>Viola</Link>,&nbsp;
                                <Link href={`/music/${name}-Cello.pdf`}>Cello</Link>
                            </div>
                            : <Link href={`/music/${name}.pdf`}>Sheet Music 🎼</Link>
                        }
                    </div>
                    <audio
                        src={`/music/${name}.mp3`}
                        style={{ width: '-webkit-fill-available' }}
                        controls
                    />
                </div>;
            })}
        </div>
    </>;
}
