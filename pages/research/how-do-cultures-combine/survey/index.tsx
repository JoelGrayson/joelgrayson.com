import BlankPage from '@/components/page/BlankPage';
import Link from 'next/link';

export default function Survey() {
    const box='p-10 h-80 text-xl border-2 border-black rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-300 text-center';

    return <BlankPage bottomPadding seo={{
        title: 'Survey on Cultural Identity',
        og: {
            image: '/image/ucjg/joel-forms.png'
        }
    }}>
        <h1 className='text-center text-4xl my-10'>Survey</h1>
        <p className='text-center mb-6'>Select below:</p>

        <div className="grid grid-cols-2 relative gap-3">
            <Link href='/research/how-do-cultures-combine/survey/multicultural' className={box+' unstyled'}>
                I am multicultural
            </Link>
            <Link href='/research/how-do-cultures-combine/survey/single-culture' className={`${box} unstyled`}>
            My parents are both from the same culture
            </Link>
        </div>
    </BlankPage>;
}
