import Image from 'next/image';
import { machines } from './machines';
import machinesStyle from '../../../styles/machines/machines.module.css';
import Page from '../../../components/Page';

export default function Machines() {
    return (<Page>
        <Image alt='machines banner' src='/image/machines banner.jpg' width='1440' height='900' />
        <div>
            {
                machines.map(machine=>(<div key={machine.sortBy.title}>
                    <div className='machine'>
                        {machine.html}
                    </div>
                    <hr/>
                </div>))
            }
        </div>
    </Page>);
}