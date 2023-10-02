import Page from '@/components/global/Page';
import { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { PlayAudioIcon } from '@/components/Icons';
import { Tooltip } from 'antd';

const size=141;
const poleWidth=5;
const poleLeftOffset=3;

export default function Patriotism() {
    const [selectedFlag, setSelectedFlag]=useState<null | 'usa' | 'nyc' | 'ucjg'>('nyc');

    function playGraysonYes() {
        console.log('playGraysonYes');
        new Audio('/audio/patriotism/grayson-yes.mp3').play();
    }
    
    return <Page>
        {/* <div onMouseLeave={()=>setSelectedFlag(null)}> */}
        <div>
            <h1 className='text-center'>Patriotism</h1>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                // borderBottom: '1px solid black'
            }}>
                <Flag src='/image/patriotism/usa-flag.jpg'  onMouseEnter={()=>setSelectedFlag('usa')}  selected={selectedFlag==='usa'} />
                <Flag src='/image/patriotism/nyc-flag.jpg'  onMouseEnter={()=>setSelectedFlag('nyc')}  selected={selectedFlag==='nyc'} />
                <Flag src='/image/patriotism/ucjg-flag.jpg' onMouseEnter={()=>setSelectedFlag('ucjg')} selected={selectedFlag==='ucjg'} />
            </div>
            { selectedFlag && <div style={{
                border: '1px solid black',
                position: 'relative',
                top: -1,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: selectedFlag==='usa' ? 0 : 15,
                borderTopRightRadius: selectedFlag==='ucjg' ? 0 : 15,
                padding: 3
            }}>
                {
                    selectedFlag==='usa'
                    ? <div className='p-3 flex gap-3 items-center'>
                        <span className='vertical'>My grandfather, Captain David Grayson, flying supplies from India over the Himalayas to China in the Hump airlift during WWII.</span>
                        <NextImage
                            src='/image/patriotism/David Grayson in WWII.jpg' alt='David Grayson in WWII'
                            width='300' height='315'
                        />
                    </div>
                    : selectedFlag==='nyc'
                    ? <div className='flex items-center gap-3 p-3'>
                        <div style={{
                            width: '200',
                            height: '271',
                            position: 'relative'
                        }}>
                            <NextImage src='/image/patriotism/City Hall Rotunda.jpg' width='200' height='271' alt='Portrait in City Hall Rotunda' />
                            <Tooltip title='Voting in community board'>
                                <PlayAudioIcon
                                    style={{
                                        position: 'absolute',
                                        bottom: 8,
                                        right: 8,
                                    }}
                                    onClick={playGraysonYes}
                                />
                            </Tooltip>
                        </div>
                        <div>
                            <p>I am a proud product of the Financial District of Lower Manhattan.</p>
                        </div>
                    </div>
                    : selectedFlag==='ucjg'
                    ? <div className='p-3 flex items-center flex-col gap-2'>
                        <NextImage
                            src='/image/patriotism/SCOTUCJG.jpg' alt='David Grayson in WWII'
                            width='300' height='161'
                        />
                        Supreme Court of the United Cells of Joel Grayson
                    </div>
                    : null
                }
            </div> }
        </div>
    </Page>;
}

export function Flag({ src, selected, ...props }: { src: string; selected: boolean; [key: string]: any }) {
    const canvasRef=useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        const canvas=canvasRef.current;
        const c=canvas?.getContext('2d');
        if (!c) return;

        // Adapted from http://bucarotechelp.com/design/jseasy/81071103.asp
        const pattern=new Image();
        pattern.src=src;
        
        var ph=pattern.height;
        
        const intervalId=setInterval(()=>{
            var iw=pattern.width;
            var ih=pattern.height;
            c.clearRect(0, 0, size*2, size*2);

            if (ph<=0)
                ph=ih;
            else
                ph-=20;

            const waveHeight=4, frequency=18, verticalOffset=10;

            c.fillStyle='#303030';
            c.strokeStyle='#303030';
            c.rect(poleLeftOffset, verticalOffset-5, poleWidth, size*.85);
            c.fill();
            // circle
            c.strokeStyle='#dbaf42';
            c.fillStyle='#dbaf42';
            c.beginPath();
            c.arc(poleLeftOffset+poleWidth/2, verticalOffset-5, 4, 0, 2*Math.PI);
            c.stroke();
            c.fill();

            for (var x=0; x<iw; x++) {
                var y=waveHeight*Math.sin((x+ph)/frequency)+verticalOffset;
                c.drawImage(pattern, x, 0, 1, ih, x+poleLeftOffset+poleWidth, y, 1, ih);
            }
        }, 80);

        return ()=>clearInterval(intervalId);
    }, [src]);
    
    return <canvas
        style={{
            padding: '30px 33px',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            paddingBottom: '0',
            borderTop: selected ? '1px solid black' : '1px solid transparent',
            borderRight: selected ? '1px solid black' : '1px solid transparent',
            borderLeft: selected ? '1px solid black' : '1px solid transparent',
            borderBottom: 'none',
            backgroundColor: selected ? 'white' : undefined,
            zIndex: 1
        }}
        width={size+2*poleWidth+poleLeftOffset} height={size*.85}
        ref={canvasRef} {...props}
    />;
}

