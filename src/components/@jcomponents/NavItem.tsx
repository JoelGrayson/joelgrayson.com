import React, { ReactNode } from 'react';
import Button from '@jcomponents/button';
import Link from 'next/link';

export default function NavItem({children, href='#'}: {children: ReactNode, href: string}) {
    const isCurrentPage=(href===window.location.pathname);
    
    return <li style={{padding: 0}}>
        <Link href={href}>
            <Button color={isCurrentPage ? 'jyellow' : ''}>{children}</Button>
        </Link>
    </li>;
}
