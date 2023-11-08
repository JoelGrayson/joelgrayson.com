import Page from '@/components/global/Page';
import Image from 'next/image';
import Flag from '@jcomponents/flag';
import { Tooltip } from 'antd';
import { PlayAudioIcon } from '@/components/Icons';

export default function NYC() {
    function playGraysonYes() {
        new Audio('/audio/patriotism/grayson-yes.mp3').play();
    }
    return <Page bottomPadding>
        <div className='flex justify-center'>
            <div className='relative w-[10ch]'>
                <h1>NYC</h1>
                <Flag
                    src='/image/patriotism/nyc-flag.jpg'
                    style={{
                        position: 'absolute',
                        top: '5ch',
                        left: '30ch',
                        zoom: .4
                    }}
                />
            </div>
        </div>

        {/* Play Inner City Blues https://www.youtube.com/watch?v=u77d7P486Sc */}
        <div className='flex items-center gap-3 p-3'>
            <div style={{
                width: '200',
                height: '271',
                position: 'relative'
            }}>
                <Image src='/image/patriotism/City Hall Rotunda.jpg' width='200' height='271' alt='Portrait in City Hall Rotunda' />
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
    </Page>;
}
