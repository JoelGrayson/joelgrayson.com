import Page from "../../components/Page";
import Link from 'next/link';

export default function Maths() {
    return (<Page padding>
        <h1 className='text-center'>Maths</h1>
        <MathSubject link='joels-sas-formula/index.html' >
            <div>Joel's SAS Formula</div>
        </MathSubject>
        <MathSubject link='icosahedron-navigation' >
            <div>Icosahedron Navigation</div>
        </MathSubject>
    </Page>);
}

export function MathSubject({ children, link }: { children: any; link: string }) {
    return (<Link href={`/maths/${link}`}><div style={{
        width: '400px',
        height: '300px',
        border: '1px solid black',
    }}>
        {children}
    </div></Link>);
}
