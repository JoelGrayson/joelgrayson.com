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

export function P({noindent, ...props}: {noindent?: boolean; [key: string]: any}) {
    return <p {...props} style={{
        paddingBottom: '.5em',
        lineHeight: '1.65rem',
        textIndent: !noindent ? '4ch' : '0',
        ...props.style
    }}></p>;
}

export function H2({children, ...props}: any) {
    return <h2 style={{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: '8px',
        marginBottom: '10px'
    }} {...props}>{children}</h2>;
}
