import MathsReturnButton from '@/components/MathsReturnButton';
import Page from '@/components/page/DefaultPage';

export default function CrustlessPizza() {
    return <Page seo={{
        title: 'Crustless Pizza'
    }}>
        <MathsReturnButton />
        <h1 className='text-center'>Crustless Pizza</h1>
        <iframe src='/maths/crustless-pizza/Crustless Pizza Pieces Recurrence Problem.pdf' width='100%' style={{height: '90dvh'}} />
    </Page>;
}
