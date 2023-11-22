import Page from '@/components/global/Page';
import Link from 'next/link';

export default function Research() {
    return <Page bottomPadding>
        <h1 className='text-center'>Research</h1>

        <div className='grid grid-cols-[1fr_3fr]'>
            <p className='bold text-lg'>Subject</p>
            <p className='bold text-lg'>Study</p>
            <p>Anthropology</p>
            <p>
                <Link href='/research/how-do-cultures-combine'>How Do Cultures Combine?</Link>
                <span className='ml-3 px-2 py-0' style={{
                    backgroundColor: '#db4343',
                    color: 'white',
                    borderRadius: '4px',
                }}>In Progress</span>
            </p>
            <p>Renewable Energy</p>
            <p><Link href='/research/organic-optoelectronics'>
                Twisting Crystal Charge Transfer Complexes for Organic Optoelectronics
            </Link></p>
            <p>History</p>
            <p><Link href='/blog/chinas-brutal-road-to-socialism'>
                China&apos;s Brutal Road to Socialism
            </Link></p>
        </div>
    </Page>;
}
