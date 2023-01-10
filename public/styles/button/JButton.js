// React implementation of JButton
import styled from '@emotion/styled';

// JButton
export default styled.button`
    border: 1.1px solid #000;
    border-radius: 3px;
    padding: 5px 10px;
    background-color: #e9e9e9;
    position: relative;
    top: 0;
    user-select: none;

    transition: top;
    transition-duration: .1s;

    &:hover {
        outline: 2.1px solid #111;
        outline-offset: -2px;
        filter: brightness(0.85) saturate(1.4);
    }
    &:active {
        border-radius: 2px;
        top: 1.1px;
        filter: brightness(0.8) saturate(1.4);
    }
    &:disabled {
        outline: none;
    }
    &.btn-red   { background-color: #ff8f8f; }
    &.btn-yellow{ background-color: #ffd472; }
    &.btn-green { background-color: #90ee90; }
    &.btn-blue  { background-color: #aed8fc; }
`;
