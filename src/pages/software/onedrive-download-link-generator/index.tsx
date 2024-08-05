import OtherGenerators from '@/components/by-page/download-link-generators/other-generators';
import BlueCircleOl from '@/components/global/BlueCircleOl';
import { GoogleAdsenseScriptTag } from '@/components/GoogleAdsense';
import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function OneDriveDownloadLinkGenerator() {
    const [visits, setVisits]=useState(0);
    
    useEffect(()=>{
        fetch('/api/page-visits/get-and-add')
            .then(res=>res.json())
            .then(res=>setVisits(res.visits));
    }, []);
    
    return <Page
        seo={{
            title: 'OneDrive Download Link Generator',
            description: 'Want a link that downloads a drive file immediately? This tool generates a direct download link for Google Drive files.'
        }}
        pathname='/software/dropbox-download-link-generator'
        noPadding
    >
        <GoogleAdsenseScriptTag />

        <div className='relative max-w-[900px] mx-auto'>
            <div className='flex justify-center items-center gap-4 py-8'>
                <Image src='/image/software/download-link-generators/dropbox.webp' alt='Box' width={60} height={60} className='relative bottom-1' />
                <h1 className='text-[40px]'>OneDrive Direct Download Link Generator</h1>
            </div>

            <p className='j_max-w pb-10'>
                This tool generates a direct download link for OneDrive files. Upon searching the generated URL, the download will start immediately.
            </p>
            
            <div className="d:grid d:grid-cols-[2fr_1fr]">
                <iframe src="/software/onedrive-download-link-generator/embedded.html" style={{
                    width: '100%',
                    height: '100%'
                }} />
            
                <div className='border border-black p-4 rounded-lg shadow-lg shadow-gray-500'>
                    <h3 className='text-center'>Instructions</h3>
                    <BlueCircleOl>
                        <li>Select a file and click <img src='/image/software/download-link-generators/share.webp' alt='Share' className='inline' /></li>
                        <li>Click <img src='/image/software/download-link-generators/copy-link.webp' alt='copy link' className='inline' /></li>
                        <li>Paste link in tool</li>
                    </BlueCircleOl>
                </div>
            </div>

            <p className='my-12'>Note: as of June 2024, this tool no longer works because OneDrive had a major API rehaul that no longer allows permanent file download links to be created as far as I am aware. Bummer!</p>

            <div className='flex justify-around items-center mt-2 mb-1'>
                <p className={!visits ? 'invisible' : ''}>This page has {visits} visits</p>
                <OtherGenerators currentGenerator='box' />
            </div>
        </div>
    </Page>;
}
