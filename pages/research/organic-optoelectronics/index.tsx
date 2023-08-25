import Page from '@/components/global/Page';
// import Button from '@jcomponents/button';
import Image from 'next/image';
import { Data } from './data';

export default function OrganicOptoelectronics() {
    return <Page bottomPadding>
        <h1 className='text-center'>Twisting Crystals</h1>

        <p>Studying the charge transfer complex between the CTC of bis(4-bromophenyl)amine and 4,4&quot;-azopyridine (abbreviated as BrDPA-AzoBipy). It looks like this:</p>
        <Image src='/research/organic-optoelectronics/BrDPA-AzoBipy Structure.png' width={150} height={230} alt='BrDPA-AzoBipy structure' />
        <br />
        
        <h3>Optimal Conditions for Twisting BrDPA-AzoBipy</h3>
        <ul>
            <li>Additive: damar 12 wt% gum</li>
            <li>Melting temperature: 140°C</li>
            <li>Cooling temperature: 70°C</li>
        </ul>
        <br />
        
        <h3>Characterization</h3>
        <ul>
            <li>Absorbance of a wide spectrum.</li>
            <li>Not good for photoluminescent. Not fluorescent.</li>
            <li><a className='styled' href="/research/organic-optoelectronics/X-ray-diffraction.zip">X-Ray diffraction (from UNAM)</a></li>
        </ul>
        <p>TODO: test it in more devices like photodetectors and, if successful, organic solar cells.</p>
        <br />

        <Data />
        <br />
        
        <h3>Weekly presentations</h3>
        <PDF src='/research/organic-optoelectronics/presentations/Week 1.pdf' height={464} />
        <PDF src='/research/organic-optoelectronics/presentations/Week 2.pdf' height={464} />
        <PDF src='/research/organic-optoelectronics/presentations/Week 3.pdf' height={464} />
        <PDF src='/research/organic-optoelectronics/presentations/Week 4.pdf' height={464} />
        <PDF src='/research/organic-optoelectronics/presentations/Week 5.pdf' height={464} />
        
        <br />        
        <h3>Learn More</h3>
        <p>Explaining stuff in the lab to a general audience</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AuM790sAzUc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <p>Presenting at the ARISE colloquium</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kJgvV70m3Jg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    
        <p>Poster</p>
        <PDF src='/research/organic-optoelectronics/Poster.pdf' height={464} />
        
        <p>This research was mentioned on <a href="https://ny1.com/nyc/all-boroughs/news/2023/08/17/students-work-on-real-world-problems-at-nyu-summer-stem-program" className='styled'>Spectrum NY1 at ny1.com/nyc/all-boroughs/news/2023/08/17/students-work-on-real-world-problems-at-nyu-summer-stem-program</a>.</p>
        <p>Research paper (coming soon)</p>
    </Page>;
}


export function PDF({ src, height }: { src: string; height: any }) {
    return <object data={src} type="application/pdf" width="100%" height={height}>
        <p>Unable to display PDF file. <a href={src} className='styled'>Download</a> instead.</p>
    </object>;
}

