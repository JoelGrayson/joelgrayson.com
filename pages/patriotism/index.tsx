import Page from '@/components/global/Page';
import { useState } from 'react';
import NextImage from 'next/image';
import { PlayAudioIcon } from '@/components/Icons';
import { Tooltip } from 'antd';
import Flag from '@jcomponents/flag';

export default function Patriotism() {
    const [selectedFlag, setSelectedFlag]=useState<null | 'usa' | 'nyc' | 'ucjg'>(null);

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
                <SelectableFlag src='/image/patriotism/usa-flag.jpg'  onMouseEnter={()=>setSelectedFlag('usa')}  selected={selectedFlag==='usa'} />
                <SelectableFlag src='/image/patriotism/nyc-flag.jpg'  onMouseEnter={()=>setSelectedFlag('nyc')}  selected={selectedFlag==='nyc'} />
                <SelectableFlag src='/image/patriotism/ucjg-flag.jpg' onMouseEnter={()=>setSelectedFlag('ucjg')} selected={selectedFlag==='ucjg'} />
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


export function SelectableFlag({ selected, ...props }: { selected: boolean, [key: string]: any }) {
    return <Flag
        src={props.src}
        style={{
            borderTop: selected ? '1px solid black' : '1px solid transparent',
            borderRight: selected ? '1px solid black' : '1px solid transparent',
            borderLeft: selected ? '1px solid black' : '1px solid transparent',
            borderBottom: 'none',
            backgroundColor: selected ? 'white' : undefined,
        }}
        {...props}
    />;
}
