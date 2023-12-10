import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function Research() {
    return <Page bottomPadding>
        <h1 className='text-center'>Research</h1>

        <div className='grid grid-cols-[1fr_3fr]'>
            <p className='bold text-lg'>Subject</p>
            <p className='bold text-lg'>Study</p>
            <p>Social Science</p>
            <p><Link href='/research/how-do-cultures-combine/How Cultures Combine in Mixed-Race Families.pdf'>
                How Do Cultures Combine in Mixed-Race Families?
            </Link></p>
            <p>Material Science</p>
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
