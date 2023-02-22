import Link from 'next/link';

export function Citation({number}: { number: string | number }) {
    return <Link href={`#footnote-${number}`} className='text-blue-700'>
        <sup id={`citation-${number}`}>
            [{number}]
        </sup>
    </Link>;
}

export function Footnote({ number, children }: { number: string | number; children: any }) {
    return <div id={`footnote-${number}`} style={{
        fontSize: '.8em',
        textIndent: '4ch'
    }}>
        <Link href={`#citation-${number}`}>
            <sup>{number} </sup>
        </Link>
        {children}
    </div>;
}

export function BU({children}: any) {
    return <span style={{fontFamily: 'AvenirMedium'}}>
        <u>{children}</u>
    </span>;
}
