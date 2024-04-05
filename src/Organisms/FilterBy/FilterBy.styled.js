import styled from 'styled-components';

export const FilterByWrapper = styled.div`
 .filterBy {
    &__container {
        box-shadow: 2px 4px 0 rgba(70,63,95,.1);
        background: #fff;
        margin-top: 47px;
        margin-right: 20px;
    }
    &__title {
        font-size: 20px;
        font-weight: 600;
        color: #463f5f;
        border-bottom: 0.1rem solid #c9baba;
        background-color: #fff;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__category {
        color: #FF0000;
        background-color: #fff;
        font-size: 20px;
        padding: 10px;
        font-weight: 500;
        border-bottom: 0.1rem solid #dee2e6;
    }
    &__category-container {
        padding: 10px 12px;
        border-bottom: 0.1rem solid #c9baba;
    }
    &__item {
        display:flex;
        gap: 30px;
    }
    &__category-name {
        font-size: 17px;
        color: #463f5f;
    }
    &__input {
            background-color: #fff;
            border-color: #ff0047;
            width: 20px;
            height: 27px;
    }
 }
`