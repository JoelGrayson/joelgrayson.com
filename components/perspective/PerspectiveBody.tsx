import localFont from '@next/font/local';
import Link from 'next/link';
import JThreeDots from '../JThreeDots';
import Container from '@jcomponents/container';

const chomsky=localFont({ src: './chomsky/Chomsky.woff2' });

export default function PerspectiveBody({children, maxWidth=800}: {children: JSX.Element | any, maxWidth?: number}) {
    return <div>
        <header className='relative flex justify-between items-center px-5 py-0'>
            <JThreeDots />
            <h1 className={chomsky.className}>
                <Link href='/perspective'>
                    Joel&apos;s Perspective
                </Link>
            </h1>
            <div />
        </header>

        <hr />
        <div className='py-10'>
            <Container maxWidth={maxWidth}>
                {children}
            </Container>
        </div>
        <hr />
    </div>;
}
