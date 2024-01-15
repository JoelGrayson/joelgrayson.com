import Page from '@/components/page-client/DefaultPage';
import { P } from '@jcomponents/writing-components';
import Link from 'next/link';

export default function HowDoCulturesCombine() {
    return <Page bottomPadding>
        <h1 className='text-center text-4xl my-6 mt-10'>How Do Cultures Combine?</h1>
        <P>The U.S. population has and will become more and more mixed race. I propose conducting a research project on how cultures combine in multiracial households as a way of exploring the trajectory of American culture. To what extent are both cultures preserved or diminished? Are some races&apos; cultures more compatible with each other?</P>
        <P>
            Data is collected in <Link href='/research/how-do-cultures-combine/survey/'>this survey</Link>.
        </P>
        <P>The study results will come out in December.</P>
    </Page>;
}

