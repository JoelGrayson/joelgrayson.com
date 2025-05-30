import OtherGenerators from '@/components/by-page/download-link-generators/other-generators';
import FancyOl from '@jcomponents/fancyol';
import Yt from '@/components/global/Yt';
import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function DropboxDownloadLinkGenerator() {
    const [visits, setVisits]=useState(0);
    
    useEffect(()=>{
        if (process.env.NODE_ENV!=='development')
            fetch('/api/page-visits/get-and-add')
                .then(res=>res.json())
                .then(res=>setVisits(res.visits));
    }, []);
    
    return <Page
        seo={{
            title: 'Dropbox Download Link Generator',
            description: 'Want a link that downloads a Dropbox file immediately? This tool generates a direct download link for Dropbox files.'
        }}
        pathname='/software/dropbox-download-link-generator'
        noPadding
    >
        <div className='relative max-w-[900px] mx-auto'>
            <div className='flex justify-center items-center gap-4 py-8'>
                <Image src='/image/software/download-link-generators/dropbox.webp' alt='Dropbox' width={60} height={60} className='relative bottom-1' />
                <h1 className='text-[40px]'>Dropbox Download Link Generator</h1>
            </div>

            <p className='j_max-w pb-10'>
                This tool generates a direct download link for dropbox files. Upon searching the generated URL, the download will start immediately.
            </p>
            
            <div className="d:grid d:grid-cols-[2fr_1fr]">
                <iframe src="/software/dropbox-download-link-generator/embedded.html" style={{
                    width: '100%',
                    height: '100%'
                }} />
            
                <div className='border border-black p-4 rounded-lg shadow-lg shadow-gray-500'>
                    <h3 className='text-center'>Instructions</h3>
                    <FancyOl>
                        <li>Click Share & <Image src='/image/software/download-link-generators/create-then-copy-link.webp' alt='create then copy link' className='inline' width={202} height={22} /> </li>
                        <li>Make sure the permissions are <b>Anyone with this link can view</b></li>
                        <li>Paste link in tool</li>
                    </FancyOl>
                    <h3 className='text-center'>Demo</h3>
                    <Yt width={300}>t9WfJ-y7Wzg</Yt>
                </div>
            </div>

            <div className='flex justify-around items-center mt-2 mb-1'>
                <p className={!visits ? 'invisible' : ''}>This page has {visits} visits</p>
                <OtherGenerators currentGenerator='dropbox' />
            </div>
        </div>
    </Page>;
}
