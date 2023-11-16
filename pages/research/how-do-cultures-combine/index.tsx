import Page from '@/components/global/Page';
import { P } from '@jcomponents/writing-components';
import Link from 'next/link';

export default function HowDoCulturesCombine() {
    return <Page bottomPadding>
        <h1 className='text-center text-4xl my-6 mt-10'>How Do Cultures Combine?</h1>
        <P>The U.S. population has and will become more and more mixed race. I propose conducting a research project on how cultures combine in multiracial households as a way of exploring the trajectory of American culture. To what extent are both cultures preserved or diminished? Are some races&apos; cultures more compatible with each other?</P>
        <P>
            Data will be collected in&nbsp;
            <Link href='/research/how-do-cultures-combine/survey/multicultural' className='styled'>
                this survey for multicultural people
            </Link>
            &nbsp;and&nbsp;
            <Link href='/research/how-do-cultures-combine/survey/single-culture' className='styled'>
                this survey for people from a single cultural background
            </Link>
            .
        </P>
        <P>The study results will come out in late November.</P>
    </Page>;
}

