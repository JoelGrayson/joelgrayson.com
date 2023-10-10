import { machines } from '@/data/machines';
import Image from 'next/image';
import Page from '@/components/global/Page';
import Container from '@jcomponents/container';
import MiscellaneousBottom from '@/components/by-page/machines/MiscellaneousBottom';

export default function Machines() {
    return <Page seo={{
        title: 'Machines | Joel Grayson',
        description: `Ever since I can remember, I've always loved to build. Here are some machines I've created over the years (including pinball machines, vending machines, and a Tesla coil).`
    }} noPadding bottomPadding>
        <div id='paralax' style={{
            backgroundImage: `url('/image/machines/banner.jpg')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            minHeight: '550px',
            backgroundPositionY: '-90px'
        }} />

        <Container>
            { machines.map(machine=><div key={machine.sortBy.title} className='my-5'>
                <div className='machine'>{machine.html}</div>
                <hr />
            </div>) }
            <MiscellaneousBottom />
            <div className='flex items-center gap-3 mt-10'>
                <Image src='/image/machines/robot.jpg' height='335' width='250' alt='Dressed in Robot Hat' style={{borderRadius: 13}} />
                <p>Thanks to mom for making with me since I was young. I would not have my creative spirit without her.</p>
            </div>
        </Container>
    </Page>;
}
