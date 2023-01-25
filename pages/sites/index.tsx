import React from 'react';
import Link from 'next/link';
import Container from '@jcomponents/container';

export default function Sites() { /* bullet points of all sites */
    return (<Container>
        <h1 className='text-center'>Sites</h1>
        <ul>
            <Site>joelgrayson.com</Site>
            <Site>buseroo.com</Site>
            <Site>lirongart.com</Site>
            <Site href='https://youtube.com/SonAndFather'>youtube.com/SonAndFather (Slaphappy)</Site>
            <Site>studentsforelectricbuses.org</Site>
            <Site>memorizethepresidents.com</Site>

            <br />
            <h3>Coming Soon</h3>
            <Site>bulletbrainstorm.com</Site>
            <Site>shirtocracy.com</Site>
        </ul>
    </Container>);
}

export function Site({children, href}: {children: string, href?: string}) {
    return (<li>
        <Link href={href || `https://${children}`}><a>{children}</a></Link>
    </li>);
}
