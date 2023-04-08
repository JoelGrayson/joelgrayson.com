import Page from '../../components/Page';
import Link from 'next/link';
import { css } from '@emotion/css';
import Image from 'next/image';
import SASFormula from './joels-sas-formula/SASFormula';

export default function Maths() {
    return (
        <Page padding>
            <h1 className='text-center'>Maths</h1>
            <div
                className={css`
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 3px;
                `}
            >
                <Subject link='https://youtu.be/7BqbyixlSRU'>
                    <div style={{textAlign: 'center'}}>
                        Proving the Geometric Series Formula with a
                        Rectangle
                    </div>
                    <iframe width='280' height='158' src='https://www.youtube.com/embed/7BqbyixlSRU' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
                </Subject>
                <Subject link='/maths/joels-sas-formula/index.html'>
                    <div>
                        <div style={{textAlign: 'center'}}>
                            Joel&apos;s SAS Formula
                        </div>
                        <SASFormula />
                    </div>
                </Subject>
                <Subject link='/maths/icosahedron-navigation'>
                    <div>Icosahedron Navigation</div>
                    <Image
                        src='/maths/icosahedron-navigation/icosahedron.png'
                        alt='icosahedron'
                        width='200'
                        height='200'
                    />
                </Subject>
                <Subject link='/maths/crustless-pizza'>
                    <div>Crustless Pizza Pieces Recurrence Problem</div>
                </Subject>
            </div>
        </Page>
    );
}

export function Subject({children, link}: {children: any; link: string}) {
    return (
        <Link href={link}>
            <div
                className={css`
                    width: 300px;
                    height: 300px;
                    border: 1px solid black;
                    border-radius: 10px;
                    cursor: pointer;
                    background-color: #fefefe;
                    &:hover {
                        background-color: #eee;
                    }
                    &:active {
                        background-color: #ccc;
                    }

                    display: grid;
                    place-items: center;
                    font-size: 20px;
                    font-weight: bold;
                    font-family: 'Lato Semibold';
                `}
            >
                {children}
            </div>
        </Link>
    );
}
