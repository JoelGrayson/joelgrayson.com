import OtherGenerators from '@/components/by-page/download-link-generators/other-generators';
import FancyOl from '@jcomponents/fancyol';
import Yt from '@/components/global/Yt';
import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import JBlue from '@/components/global/JBlue';

export default function DriveDownloadLinkGenerator() {
    const [visits, setVisits]=useState(0);
    
    useEffect(()=>{
        fetch('/api/page-visits/get-and-add')
            .then(res=>res.json())
            .then(res=>setVisits(res.visits));
    }, []);
    
    return <Page
        seo={{
            title: 'Drive Download Link Generator',
            description: 'Want a link that downloads a Google Drive file immediately? This tool generates a direct download link, so users do not need to click to download.'
        }}
        pathname='/software/drive-download-link-generator'
        noPadding
    >
        <div className='relative max-w-[900px] mx-auto'>
            <div className='flex justify-center items-center gap-4 py-8'>
                <Image src='/image/software/download-link-generators/drive.webp' alt='drive' width={53*.8} height={48*.8} className='relative bottom-0.5' />
                <h1 className='text-[40px]'>Drive Download Link Generator</h1>
            </div>

            <p className='j_max-w pb-10'>
                This tool generates a <b>direct download </b>link for Google drive files. When visiting the generated URL, the download will start immediately instead of having the user click a few buttons.
            </p>
            
            <div className="d:grid d:grid-cols-[2fr_1fr]">
                <iframe src="/software/drive-download-link-generator/embedded.html" style={{
                    width: '100%',
                    height: '100%'
                }} />
            
                <div className='border border-black p-4 rounded-lg shadow-lg shadow-gray-500'>
                    <h3 className='text-center'>Instructions</h3>
                    <FancyOl>
                        <li>Go to the file&apos;s share settings by clicking <Image src='/image/software/download-link-generators/drive-share.jpg' alt='share' width={20} height={20} className='inline' /></li>
                        <li>Change <JBlue>General Access</JBlue> permissions from <JBlue>Restricted</JBlue> to <JBlue>Anyone with the link</JBlue> can view</li>
                        <li>Click <JBlue>Copy Link</JBlue> and paste it in this tool</li>
                    </FancyOl>
            
                    <h3 className='text-center'>Compatibility</h3>
                    <p>This tool only works for files. To use folder, Google doc, slides, or sheets:</p>
                    <FancyOl>
                        <li>Download folder/document</li>
                        <li>Compress it</li>
                        <li>Upload compressed file to Drive</li>
                    </FancyOl>
                    <div>Video demo ↓</div>
                    <Yt width={300}>xb3P7M9u-M4</Yt>
                </div>
            </div>

            <div className='flex justify-around items-center mt-2 mb-1'>
                <p className={!visits ? 'invisible' : ''}>This page has {visits} visits</p>
                <OtherGenerators currentGenerator='drive' />
            </div>
        </div>
    </Page>;
}
