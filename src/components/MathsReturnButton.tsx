import Button from '@jcomponents/button';
import Link from 'next/link';

export default function MathsReturnButton() {
    return <Link href='/maths'>
        <Button style={{
            position: 'absolute',
            top: '1rem',
            left: '2rem'
        }}>
            ⏎ Return to all maths
        </Button>
    </Link>;
}