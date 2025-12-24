import React, { ReactNode } from 'react';
import Container from '@jcomponents/container';
import Link from 'next/link';

export default function SitesPage() {
    return <Container>
        <Sites />
    </Container>;
}

export function Sites() { /* bullet points of all sites */
    return <>
        <h1 className='text-center'>Sites</h1>
        <ul>
            <Site>joelgrayson.com</Site>
            <Site>buseroo.com</Site>
            <Site>lirongart.com</Site>
            <Site>studentsforelectricbuses.org</Site>
            <Site>shirtocracy.com</Site>
            <Site>memorizethepresidents.com</Site>
            <Site>luxpremierllc.com</Site>
            <Site>joelkit.com</Site>
            <Site>stanfordlaunches.com</Site>
            <Site addendum=' (Slaphappy)' href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'>youtube.com/@JoelGrayson</Site>
            <Site addendum=' (my first site)' href='https://joelgrayson.wixsite.com/geography'>Geography learning site</Site>
        </ul>
    </>;
}

export function Site({ children, href, addendum }: { children: string; href?: string; addendum?: string | ReactNode }) {
    return <li>
        <Link href={href || `https://${children}`} target='_blank'>{children}</Link>
        { addendum && <span>{addendum}</span> }
    </li>;
}
