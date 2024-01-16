import React, { ReactNode } from 'react';
import Container from '@jcomponents/container';

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
            <Site addendum=' (startup)'>buseroo.com</Site>
            <Site addendum=' (startup)'>lirongart.com</Site>
            <Site addendum=' (Slaphappy)' href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'>youtube.com/@JoelGrayson</Site>
            <Site>studentsforelectricbuses.org</Site>
            <Site>luxpremierllc.com</Site>
            <Site>memorizethepresidents.com</Site>
            <Site addendum=' (startup)'>shirtocracy.com</Site>
            <Site addendum=' (my first site)' href='https://joelgrayson.wixsite.com/geography'>Geography learning site</Site>
        </ul>

        <h3 className='mt-3'>Coming Soon</h3>
        <ul>
            <Site addendum=' (startup)'>bulletbrainstorm.com</Site>
        </ul>
    </>;
}

export function Site({ children, href, addendum }: { children: string; href?: string; addendum?: string | ReactNode }) {
    return <li>
        <a href={href || `https://${children}`} target='_blank'>{children}</a>
        { addendum && <span>{addendum}</span> }
    </li>;
}
