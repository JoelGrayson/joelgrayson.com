import React from 'react';

export default function Nav({children}: {children: React.ReactNode}) {
    return (<nav>
        <ul style={{
            display: 'flex',
            listStyleType: 'none',
            padding: 0
        }} className='unstyled'>
            {children}
        </ul>
    </nav>);
}
