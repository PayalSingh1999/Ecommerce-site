import styled from 'styled-components';

export const ButtonWrapper = styled.button`
        &.button__primary {
            margin-top: 10px;
            cursor: pointer;
            outline: none;
            border: none;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            background-color: #C41E3A;
            margin-bottom: 10px;
            &:hover {
                background: #FF0000;
            }
        }
        &.button__secondary {
            border: none;
            border-radius: 20px;
            padding: 10px 50px;
            font-size: 16px;
            background: #808080;
            color: #fff;
            margin-top: 10px;
            margin-left:20px;
            cursor:pointer;
        }
}
`