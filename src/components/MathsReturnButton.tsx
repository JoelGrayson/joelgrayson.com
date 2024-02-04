import Link from 'next/link';

export default function MathsReturnButton() {
    return <Link href='/maths' className='btn unstyled' style={{
        position: 'absolute',
        top: '1rem',
        left: '2rem'
    }}>
        ⏎ Return to all maths
    </Link>;
}