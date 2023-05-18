import { machines } from '@/components/pages/machines/data';
import Page from '@/components/global/Page';
import Container from '@jcomponents/container';
import MiscellaneousBottom from '@/components/pages/machines/MiscellaneousBottom';

export default function Machines() {
    return <Page seo={{
        title: 'Machines | Joel Grayson',
        description: `Ever since I can remember, I've always loved to build. Here are some machines I've created over the years (including pinball machines, vending machines, and a Tesla coil).`
    }} nopadding>
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
        </Container>
    </Page>;
}
