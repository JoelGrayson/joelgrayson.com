import Link from 'next/link';
import styled from '@emotion/styled';

const StyledBtnIcon=styled.button`
    border: 1px solid black;
    border-radius: 12px;
    padding: 12px 17px;
    margin: 3px 10px;
    width: 150px;
    height: 150px;
    user-select: none;

    &:hover {
        background-color: #eee;
    }
`;

export default function BtnIcon({ href, children, target='_blank' }: { href: string; children: any; target?: string }) {
    return <StyledBtnIcon role='link' tabIndex={-1} className='unstyled'>
        <Link {...{href, target}} className='unstyled' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }} tabIndex={0}>
            {children}
        </Link>
    </StyledBtnIcon>;
}
