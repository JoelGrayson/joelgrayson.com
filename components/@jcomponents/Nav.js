import React from 'react';

export default function Nav({children}) {
    return (<nav>
        <ul style={{
            display: 'flex',
            listStyleType: 'none',
            padding: 0
        }}>
            {children}
        </ul>
    </nav>);
}
