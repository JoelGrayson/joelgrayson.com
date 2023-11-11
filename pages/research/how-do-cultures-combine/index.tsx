import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import { P } from '@jcomponents/writing-components';
import Link from 'next/link';

export default function HowDoCulturesCombine() {
    return <Page bottomPadding>
        <h1 className='text-center'>How Do Cultures Combine?</h1>
        <P>The U.S. population has and will become more and more mixed race. I propose conducting a research project on how cultures combine in multiracial households as a way of exploring the trajectory of American culture. To what extent are both cultures preserved or diminished? Are some races&apos; cultures more compatible with each other?</P>
        <P>
            Data will be collected in this&nbsp;
            <Link href='/research/how-do-cultures-combine/survey' className='styled'>
                survey
            </Link>.
        </P>
        <P>The study results will come out in late November.</P>
    </Page>;
}

