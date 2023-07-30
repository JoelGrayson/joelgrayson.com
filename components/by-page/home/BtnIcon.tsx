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

export default function BtnIcon({href, children}: {href: string; children: any}) {
    return <Link target='_blank' href={href}>
        <StyledBtnIcon>{children}</StyledBtnIcon>
    </Link>;
}
