import styled from 'styled-components';

export const SearchWrapper = styled.div`
.search {
    &__button {
        border: none;
        border-radius: 5px;
        padding: 7px 10px;
        font-size: 15px;
        background: #C41E3A;
        color: #fff;
        cursor:pointer;
        &:hover {
            background: #FF0000;
        }
    }
    &__input {
        padding: 8px 25px;
        border-radius: 5px;
        border: 1px solid gray;
    }
}
`