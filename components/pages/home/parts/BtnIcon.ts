import styled from '@emotion/styled';

const BtnIcon=styled.button`
    border: 1px solid black;
    border-radius: 5px;
    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        background-color: #eee;
    }
`;

export default BtnIcon;
