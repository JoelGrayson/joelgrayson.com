import Page from '@/components/page/DefaultPage';
import Link from 'next/link';
import Image from 'next/image';

export default function Worderoo() {
    return <Page
        seo={{
            title: 'Worderoo',
            description: 'Worderoo is a clone of the popular word game that rhymes with hurdle and starts with the letter “W.” It lets you play as many times as you want (not restricted to once a day), use a different word length (3–6 letters long, not just 5 letters), browse your previous games, and configure other settings about the game.'
        }}
        pathname='/software/dms-dd-converter'
        noPadding
    >
        <div className='j_container'>
            <h1 className='text-center flex items-center justify-center gap-3'>
                <Image src='/image/software/worderoo/logo.png' width={60} height={60} alt='Logo' className='inline relative bottom-1' />
                Worderoo
            </h1>
            <p className='indent-8'>Worderoo is a clone of the popular word game that rhymes with hurdle and starts with the letter “W.” It lets you play as many times as you want (not restricted to once a day), use a different word length (3–6 letters long, not just 5 letters), browse your previous games, and configure other settings about the game.</p>

            <div className='flex justify-end'>
                <Link target='_blank' href='https://apps.apple.com/us/app/edit-time/id6464405876'>
                    <Image src="/image/software/worderoo/download-on-the-app-store.png" alt="Download on the App Store" height={74.375} width={170} />
                </Link>
            </div>

            <h3 id='privacy-policy'>Privacy Policy</h3>
            <p>No data is collected. This privacy policy may change in the future. Last updated 6.15.2025</p>
        </div>
    </Page>;
}

