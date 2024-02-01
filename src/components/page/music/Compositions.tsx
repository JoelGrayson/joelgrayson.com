import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const compositions=[
    'Cadenza',
    'In Like a Lion, Out Like a Lamb',
    'Jogging Fury',
    'The Yearning Soul'
];

export default function Compositions() {
    return <>
        <h2>Compositions</h2>
        <div>
            {compositions.map((composition, i)=>{
                // const source=`/music/${composition}`;
                return <div key={i} className='grid grid-cols-[1fr_2fr] items-center my-3' style={{
                    border: '2px solid #0080b2',
                    padding: 10,
                    backgroundColor: '#f0f0f0',
                    borderRadius: 10
                }}>
                    <p>{composition}</p>
                    {/* <audio
                        src={source+'.mp3'}
                        controls

                    /> */}
                    <AudioPlayer
                        src={`/music/${composition}.mp3`}
                        // onPlay={e=>setPlayingComposition(i)}
                    />
                </div>;
            })}
        </div>
    </>;
}