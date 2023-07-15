import { machines } from '@/components/pages/machines/data';
import Image from 'next/image';
import Page from '@/components/global/Page';
import Container from '@jcomponents/container';
import MiscellaneousBottom from '@/components/pages/machines/MiscellaneousBottom';

export default function Machines() {
    return <Page seo={{
        title: 'Machines | Joel Grayson',
        description: `Ever since I can remember, I've always loved to build. Here are some machines I've created over the years (including pinball machines, vending machines, and a Tesla coil).`
    }} noPadding>
        <div id='paralax' style={{
            backgroundImage: `url('/image/machines/banner.jpg')`,
            minHeight: '600px',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundPositionY: '-70px'
        }} />

        <Container>
            { machines.map(machine=><div key={machine.sortBy.title}>
                <div className='machine'>{machine.html}</div>
                <hr />
            </div>) }
            <MiscellaneousBottom />
            <div className='flex items-center gap-3'>
                <Image src='/image/machines/robot.jpg' height='335' width='250' alt='Dressed in Robot Hat' style={{borderRadius: 13}} />
                <p>Thanks to my mom, Lirong, for making with me since I was young. I would not have this creative spirit without you.</p>
            </div>
        </Container>
    </Page>;
}
