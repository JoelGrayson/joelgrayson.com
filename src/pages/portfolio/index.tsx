import VenderooCarousel from '@/components/by-page/portfolio/VenderooCarousel';
import { GithubIcon } from '@/components/icons';
import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function Portfolio() {
    return <Page bottomPadding
        seo={{
            title: 'Portfolio | Joel Grayson',
            description: ''
        }}
        pathname='/portfolio'
    >
        <h1 className='text-center mb-3 mt-8 text-5xl'>Joel Grayson&apos;s Portfolio</h1>

        <p className='text-center pt-4 pb-7'>Here are my top five of my projects:</p>

        <div className='grid grid-cols-[3fr_2fr]'>
            <VenderooCarousel />
            <div>
                <h3>Venderoo</h3>
                <p>Designed & built vending machine that sold over a hundred snacks in school hallway.</p>
                <div className='flex justify-end'>
                    <Link href='https://github.com/JoelGrayson/Venderoo/blob/main/vending_machine.ino' target='_blank' className='flex justify-center items-center gap-2 button'>
                        <GithubIcon width={30} className='fill-black' />
                        View code
                    </Link>
                </div>
            </div>
        </div>

        <div>
            
        </div>
        



        <ul>
            <li>
                Chrome Extensions
                <ul>
                    <li><Link href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj' target='_blank'>Homework Checker</Link></li>
                    <li><Link href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf' target='_blank'>Focus for Google Docs</Link></li>
                </ul>
            </li>
            <li>
                Apps
                <ul>
                    <li><Link href='/software/edit-time' target='_blank'>Edit Time</Link> (<Link target='_blank' href='https://apps.apple.com/us/app/edit-time/id6464405876'>App Store Link</Link>)</li>
                    <li><Link href='/techmap' target='_blank'>TechMap</Link> (<Link target='_blank' href='https://apps.apple.com/us/app/techmap/id6748248815'>App Store Link</Link>)</li>
                    <li><Link href='https://apps.apple.com/app/worderoo/id6745312298' target='_blank'>Worderoo</Link></li>
                    <li><Link href='https://apps.apple.com/us/app/buseroo/id6736895918' target='_blank'>Buseroo App</Link></li>

                    {/*
                    Not including/failed:
                    <li><Link href='' target='_blank'>Bullet Brainstorm Desktop</Link></li>
                        If I had finished BulletBrainstorm, I would have published this as a BulletBrainstorm embedded here
                    <li><Link href='/chess/index.html' target='_blank'>Chess</Link></li>
                    */}
                </ul>
            </li>
            <li>
                Sites
                <ul>
                    <li><Link target='_blank' href='/'>joelgrayson.com</Link></li>
                    <li><Link target='_blank' href='https://buseroo.com'>buseroo.com</Link></li>
                    <li><Link target='_blank' href='https://lirongart.com'>lirongart.com</Link></li>
                    <li><Link target='_blank' href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'>youtube.com/@JoelGrayson (Slaphappy)</Link></li>
                    <li><Link target='_blank' href='https://studentsforelectricbuses.org'>studentsforelectricbuses.org</Link></li>
                    <li><Link target='_blank' href='https://luxpremierllc.com'>luxpremierllc.com</Link></li>
                    <li><Link target='_blank' href='https://memorizethepresidents.com'>memorizethepresidents.com</Link></li>
                    <li><Link target='_blank' href='https://shirtocracy.com'>shirtocracy.com</Link></li>
                    <li><Link target='_blank' href='/muffin'>The Muffin Game</Link></li>
                    <li><Link target='_blank' href='https://joelgrayson.wixsite.com/geography'>Geography learning site</Link> (my first site)</li>
                    {/* <li><Link target='_blank' href='https://bulletbrainstorm.com'>bulletbrainstorm.com</Link> (coming soon)</li> */}
                </ul>
            </li>
            <li>
                GIS
                <ul>
                    {/* TODO: coming soon: MapRecord and MapNotate */}
                    <li><Link href='/software/dms-dd-converter' target='_blank'>DMS DD Converter</Link></li>
                </ul>
            </li>
            <li>
                Developer Tools
                <ul>
                    <li><Link href='/software/hide desktop.command' target='_blank'>Hide/Show Desktop Icons</Link></li>
                    <li><Link href='https://github.com/JoelGrayson/create-joel-app' target='_blank'>Create Joel App</Link></li>
                    <li><Link href='/software/processing-to-html-converter' target='_blank'>Processing to HTML Converter</Link></li>
                    <li><Link href='https://github.com/JoelGrayson/jredirects' target='_blank'>JRedirects</Link></li>
                    <li><Link href='/software/drive-download-link-generator' target='_blank'>Drive Download Link Generator</Link></li>
                    <li><Link href='/software/box-download-link-generator' target='_blank'>Box Download Link Generator</Link></li>
                    <li><Link href='/software/dropbox-download-link-generator' target='_blank'>Dropbox Download Link Generator</Link></li>
                    {/*
                    No longer works:
                    <li><Link href='/software/onedrive-download-link-generator' target='_blank'>Onedrive Download Link Generator</Link></li>
                    */}
                </ul>
            </li>
            <li>
                Resources
                <ul>
                    <li><Link href='/software/cite/mla' target='_blank'>MLA Citation Generator</Link></li>
                    <li><Link href='https://www.youtube.com/watch?v=Fi19NDsJB4E' target='_blank'>Zoom Timer</Link></li>
                    <li><Link href='/software/days-until' target='_blank'>Days Until</Link></li>
                    <li><Link href='/learn/pi' target='_blank'>Memorize π</Link></li>
                    <li><Link href='/learn/number?name=tau' target='_blank'>Memorize τ</Link></li>
                </ul>
            </li>
        </ul>
    </Page>;
}

