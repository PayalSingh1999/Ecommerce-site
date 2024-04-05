import styled from 'styled-components';

export const CartListWrapper = styled.div`
.cartList {
    &__container {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(70,63,95,.102);
        margin: 50px 0;
        padding-bottom: 10px;
        width:100%;
        @media screen and (min-width: 768px){
            margin: 130px 50px;
            width:unset;
        }
    }
    &__product-image {
        width: 84px;
        height: 84px;
        object-fit:cover;
    }
    &__list-container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        margin: 1rem auto;
        padding: 10px;
        list-style: none;
        font-size: 15px;
        color: #000;
        border-bottom: 1px solid #f2f2f2;
        grid-gap:20px;
    }
    &__header-container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        margin: 0 auto;
        background-color: #f2f2f2;
        padding: 1rem;
        color: #000;
        list-style: none;
        font-weight: bold;
        font-size: 18px;
        grid-gap: 20px;
        border-bottom: 1px solid #f2f2f2;
    }
    &__product-delete {
        width: 20px;
        height: 20px;
        cursor:pointer;
    }
    &__home-button {
        border: none;
        border-radius: 20px;
        padding: 12px 70px;
        font-size: 16px;
        background: #C41E3A;
        color: #fff;
        margin-top: 20px;
        cursor:pointer;
        margin-right: 10px;
        &:hover {
            background: #FF0000;
        }
    }
    &__button-container {
        text-align:center;
    }
    &__quantity-button {
        background-color: #fff;
        border-radius: unset;
        height: 3.4rem;
        min-width: auto;
        padding: 0.4rem 1.2rem;
        border: 1px solid #e8e9ea;
        cursor:pointer;
    }
    &__quantity {
        border: 1px solid #333;
        max-width: 6rem;
        min-width: 3rem;
        height: 3.4rem;
        font-size: 1.3rem;
        padding: 0 10px 5px 10px;
    }
    &__empty-data {
        font-size: 18px;
        color: #212529;
        text-align:center;
        margin: 20px;
    }
}
}
`