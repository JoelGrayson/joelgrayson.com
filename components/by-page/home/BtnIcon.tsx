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

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #eee;
    }
`;

export default function BtnIcon({ href, children, target='_blank' }: { href: string; children: any; target?: string }) {
    return <StyledBtnIcon role='link'>
        <Link {...{href, target}}>
            {children}
        </Link>
    </StyledBtnIcon>;
}
