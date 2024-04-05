import styled from 'styled-components';

export const ProductListCardWrapper = styled.div`
.productListCard {
    &__container {
       display:flex;
       flex-wrap: wrap;
       margin-top: 28px;
       button {
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
    }
    &__product {
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        width: 290px;
        background: #fff;
        padding: 10px;
        cursor: pointer;
        margin-top:20px;
        margin-right:20px;
    }
    &__product-name {
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        margin-top: 10px;
        color: #000;
        flex-grow: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    &__link {
        text-decoration: none;
    }
    &__price {
        color: #0000EE;
    }
    &__category {
        font-size: 14px;
        line-height: 19px;
        color: #000;
    }
    &__image {
        height: 300px;
        width:100%;
        object-fit: cover;
    }
    &__discount {
        color: #FF0000;
        margin-left: 10px;
    }
    &__details {
        span {
            margin-top: 10px;
            font-weight: bold;
        }
        p {
            color: #000;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            line-height: 23px;
        }
        h4 {
            color: #0000EE;
        }
    }
}
`