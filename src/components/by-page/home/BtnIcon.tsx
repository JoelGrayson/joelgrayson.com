import Link from 'next/link';

export default function BtnIcon({ href, children, target='_blank' }: { href: string; children: any; target?: string }) {
    return <Link
        className='unstyled relative shadow-md hover:shadow-lg transition duration-100'
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #333',
            borderRadius: 12,
            padding: '12px 17px',
            margin: '3px 10px',
            width: '150px',
            height: 150,
            userSelect: 'none',
            textAlign: 'center',
        
            background: 'linear-gradient(180deg, #fff, #fafafa)'
            // background: linear-gradient(180deg, #fcfcfc, #f0f0f0)
        }}
        tabIndex={0}
        {...{href, target}}
    >
        {children}
    </Link>;
}
