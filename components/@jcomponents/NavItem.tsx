import React, { ReactNode } from 'react';
import Button from '@jcomponents/button';

export default function NavItem({children, href='#'}: {children: ReactNode, href: string}) {
    const isCurrentPage=(href===window.location.pathname);
    
    return (<li style={{padding: 0}}>
        <a href={href}>
            <Button color={isCurrentPage ? 'jyellow' : ''}>{children}</Button>
        </a>
    </li>);
}
