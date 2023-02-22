import { machines } from '../../../components/pages/machines/data';
import Page from '../../../components/Page';
import Container from '@jcomponents/container';
import MiscellaneousBottom from '@/components/pages/machines/MiscellaneousBottom';

export default function Machines() {
    return (<Page>
        <div id='paralax' style={{
            backgroundImage: 'url("/image/machines/banner.jpg")',
            minHeight: '600px',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundPositionY: '-70px'
        }}></div>
        <Container>
            <>{
                machines.map(machine=><div key={machine.sortBy.title}>
                    <div className='machine'>{machine.html}</div>
                    <hr />
                </div>)
            }</>
            {/* Miscellaneous */}
            <MiscellaneousBottom></MiscellaneousBottom>
        </Container>
    </Page>);
}