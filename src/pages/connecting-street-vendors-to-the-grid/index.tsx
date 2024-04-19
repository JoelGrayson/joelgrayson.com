import { Footnote as JFootnote } from '@jcomponents/writing-components';
import Link from 'next/link';

export function Footnote({ number, title, href }: { number: string | number; title?: string; href?: string }) {
    if (href)
        return <JFootnote number={number}>
            <Link href={href} target='_blank'>{title || href}</Link>
        </JFootnote>;
    else
        return <JFootnote number={number}>{title}</JFootnote>;
}


export { default } from './ConnectingStreetVendorsToTheGrid';

// // Blockquote from mayor's office
//<blockquote className='' style={{
//            border: '1px solid black',
//            borderRadius: 15,
//            padding: 10,
//            width: 'fit-content',
//            maxWidth: 400,
//            height: 'fit-content'
//        }}>
//            {/* Quote Icon */}
//            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: 16, height: 16, display: 'inline', marginRight: 8, position: 'relative', bottom: 4 }}><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
//
//            {/* Text */}
//            <span className=''>Food carts&apos; portable generators emit twenty times more asthma-causing pollution per unit of energy than the city&apos;s electricity supply</span>
//            
//            {/* Author */}
//            <p className='text-gray-600 text-sm mt-3'>&mdash;Sergej Mahnovski (Director of Mayor&apos;s Office of Long-Term Planning and Sustainability)</p>
//        </blockquote>
//        <br /><br />
