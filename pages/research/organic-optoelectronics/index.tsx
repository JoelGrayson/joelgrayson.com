import Page from '@/components/global/Page';
import Image from 'next/image';
import { Data } from './data';
import PDF from '@/components/global/PDF';

export default function OrganicOptoelectronics() {
    return <Page bottomPadding seo={{
        title: 'Organic Optoelectronics Research | Joel Grayson',
    }}>
        <style jsx>{`
            h3 {
                margin-top: 1.5rem;
            }
        `}</style>
        <h1 className='text-center'>Organic Optoelectronics</h1>

        <Image src='/research/organic-optoelectronics/BrDPA-AzoBipy Structure.png' width={150} height={230} alt='BrDPA-AzoBipy structure' className='float-right' />
        <p>This research studied the charge transfer complex of bis(4-bromophenyl)amine and 4,4&quot;-azopyridine (abbreviated as BrDPA-AzoBipy), shown to the right:</p>
        <p>The goal was to find optimal twisting conditions so it can be used in organic optoelectronics&apos;s active layer.</p>

        <h3>Results</h3>
        <ul>
            <li>Speaking at the ARISE Colloquium about Organic Optoelectronics</li>
            <li>Feature on Spectrum NY1</li>
            <li>Lab report</li>
            <li>12 papers read</li>
            <li>20 pages of notes</li>
            <li>17 experiments</li>
            <li>445 captured pictures</li>
        </ul>
        
        
        <h3>Conclusion: Optimal Conditions for Twisting BrDPA-AzoBipy</h3>
        <ul>
            <li>Additive: damar 12 wt% gum</li>
            <li>Melting temperature: 140°C</li>
            <li>Cooling temperature: 70°C</li>
        </ul>
                
        <h3>Characterization</h3>
        <ul>
            <li>Absorbance of a wide spectrum.</li>
            <li>Not good for photoluminescent. Not fluorescent.</li>
            <li><a className='styled' href="/research/organic-optoelectronics/X-ray-diffraction.zip">X-Ray diffraction (from UNAM)</a></li>
        </ul>
        {/* <p>TODO: test it in more devices like photodetectors and, if successful, organic solar cells.</p> */}
        
        <Data />

        <h3>Explaining stuff in the lab to a general audience</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AuM790sAzUc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        
        <h3>Presenting at the ARISE colloquium</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kJgvV70m3Jg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <p>This research was featured on <a href="https://ny1.com/nyc/all-boroughs/news/2023/08/17/students-work-on-real-world-problems-at-nyu-summer-stem-program" className='styled'>Spectrum NY1&apos; local news</a>.</p>
    
        <h3>Poster</h3>
        <PDF src='/research/organic-optoelectronics/Poster.pdf' height={464} />
        
        <h3>Research Paper</h3>
        <PDF src='/research/organic-optoelectronics/Twisting Charge Transfer Complex Crystals for Organic Optoelectronics Paper.pdf' height={700} />
        <br />
        
        <h3>Weekly Presentations</h3>
        <PDF src='/research/organic-optoelectronics/presentations/Week 1.pdf' height={464} />
        <PDF src='/research/organic-optoelectronics/presentations/Week 2.pdf' height={464} />
        <PDF src='/research/organic-optoelectronics/presentations/Week 3.pdf' height={464} />
        <PDF src='/research/organic-optoelectronics/presentations/Week 4.pdf' height={464} />
        <PDF src='/research/organic-optoelectronics/presentations/Week 5.pdf' height={464} />
        
        <br />
    </Page>;
}

