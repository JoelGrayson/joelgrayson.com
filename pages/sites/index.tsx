import React from 'react';
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
            <Site>buseroo.com</Site>
            <Site>lirongart.com</Site>
            <Site href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'>youtube.com/@JoelGrayson (Slaphappy)</Site>
            <Site>studentsforelectricbuses.org</Site>
            <Site>luxpremierllc.com</Site>
            <Site>memorizethepresidents.com</Site>
            <li><a className='styled' target='_blank' href='https://joelgrayson.wixsite.com/geography'>Geography learning site</a> (my first site)</li>

            <br />
            <h3>Coming Soon</h3>
            <Site>bulletbrainstorm.com</Site>
            <Site>shirtocracy.com</Site>
        </ul>
    </>;
}

export function Site({children, href}: {children: string, href?: string}) {
    return <li>
        <a href={href || `https://${children}`} className='styled' target='_blank'>{children}</a>
    </li>;
}
