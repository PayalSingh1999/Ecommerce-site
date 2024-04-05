import styled from 'styled-components';

export const MiniCartWrapper = styled.div`
.miniCart {
    &__bag-container {
        background: gray;
        color: #fff;
        list-style: none;
        position:absolute;
        right:0;
        z-index: 1;
        top: 0;
        margin-top: 40px;
        padding: 15px 15px;
        position: absolute;
        margin-right: 10px;
    }
    &__bag-inner-container {
        display:flex;
        margin-bottom: 10px;
        align-items: center;
    }
    &__image {
        height: 40px;
        width: 40px;
    }
    &__bag-productName {
        text-overflow: ellipsis;
        width: 12rem;
        white-space: nowrap;
        overflow: hidden;
        flex-grow: 1;
        margin-left: 10px;
        margin-right: 10px;
    }
    &__bag-qty {
        margin-right: 10px;
    }
    &__quantity-button {
        border-radius: unset;
        height: 3.4rem;
        min-width: auto;
        padding: 5px;
        border: 1px solid #e8e9ea;
        cursor:pointer;
    }
    &__bag-deleteIcon {
        width: 20px;
        height: 20px;
        display:flex;
        align-items:center;
        cursor:pointer;
    }
}
`