import Image from 'next/image';
import machines from './machines.tsx';
import machinesStyle from './machines.module.css';
import Page from '../../components/Page';

export default function Machines() {
    return (<Page>
        <Image alt='machines banner' src='/images/machines banner.jpg' width='1440' height='900' />
        <div className={machinesStyle}>
            {
                machines.map(machine=>(<div key={machine.sortBy.title}>
                    <div className='machine'>
                        {machine.html}
                    </div>
                    <hr/>
                </div>))
            }
        </div>
    </Page>)
}