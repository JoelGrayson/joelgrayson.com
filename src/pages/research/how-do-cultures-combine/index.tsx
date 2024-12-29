import Page from '@/components/page/DefaultPage';
import { P } from '@jcomponents/writing-components';
import Link from 'next/link';

export default function HowDoCulturesCombine() {
    return <Page bottomPadding seo={{
        title: 'How Do Cultures Combine?',
        description: 'A research project on how cultures combine in multiracial households as a way of exploring the trajectory of American culture.'
    }}>
        <h1 className='text-center text-4xl my-6 mt-10'>How Do Cultures Combine?</h1>
        <P>The U.S. population has and will become more and more mixed race. I propose conducting a research project on how cultures combine in multiracial households as a way of exploring the trajectory of American culture. To what extent are both cultures preserved or diminished? Are some races&apos; cultures more compatible with each other?</P>
        <P>
            Data is collected in <Link href='/research/how-do-cultures-combine/survey/'>this survey</Link>.
        </P>
        
        <div className='flex items-center justify-between gap-2'>
            <h3>Results</h3>
            <a href='/research/how-do-cultures-combine/How Cultures Combine in Mixed-Race Families.pdf'>
                {/* External link icon */}
                <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15,10 L15,14 C15,15.1045695 14.1045695,16 13,16 L2,16 C0.8954305,16 0,15.1045695 0,14 L0,3 C0,1.8954305 0.8954305,1 2,1 L6,1 L6,3 L2,3 L2,14 L13,14 L13,10 L15,10 Z M13.9971001,3.41421356 L7.70420685,9.70710678 L6.28999329,8.29289322 L12.5828865,2 L8.99710007,2 L8.99710007,0 L15.9971001,0 L15.9971001,7 L13.9971001,7 L13.9971001,3.41421356 Z" fillRule="evenodd"/></svg>
            </a>
        </div>
        {/* Embed PDF */}
        <iframe src='/research/how-do-cultures-combine/How Cultures Combine in Mixed-Race Families.pdf' width='100%' height='600px' />
    </Page>;
}

