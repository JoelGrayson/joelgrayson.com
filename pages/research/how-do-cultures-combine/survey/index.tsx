import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function Survey() {
    const box='p-10 h-80 text-xl border-2 border-black rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-200 text-center';

    return <Page bottomPadding>
        <h1 className='text-center text-4xl my-10'>Survey</h1>
        <p className='text-center mb-6'>Select below:</p>

        <div className="grid grid-cols-2 relative gap-3">
            <Link href='/research/how-do-cultures-combine/survey/multicultural'>
                <div className={box}>
                    I am multicultural
                </div>
            </Link>
            <Link href='/research/how-do-cultures-combine/survey/single-culture'>
                <div className={box}>
                    My parents are both from the same culture
                </div>
            </Link>
        </div>
    </Page>;
}
