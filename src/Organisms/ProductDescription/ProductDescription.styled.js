import styled from 'styled-components';

export const ProductDescriptionWrapper = styled.div`
 .productdescription {
    &__details {
        h2 {
            color: #C41E3A;
            padding: 0 20px 0 0;
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
        }
        span {
            color: #000;
            font-weight: 700;
            margin-top:20px;
            margin-right: 20px;
        }
        h3 {
            margin-top: 20px;
            color: #C41E3A;
        }
        hr {
            color: #535665;
        }
    }
    &__name {
        color: #535665;
        padding: 5px 20px 10px 0;
        font-size: 20px;
        opacity: .8;
        font-weight: 400;
    }
    &__rating {
        color: #000;
        margin-bottom:5px;
    }
    &__description {
        color: #000;
        line-height: 1.4;
        font-size: 16px;
        margin-top: 12px;
        width: 84%;
        font-family: inherit;
        white-space: pre-wrap;
    }
    &__price-container {
        border-bottom: 0.1rem solid #c9baba;
        padding-bottom: 20px;
        span {
            color: #000;
        }
    }
    &__size-container {
        display:flex;
        margin-top: 20px;
    }
    &__size {
        margin-right: 10px;
        background: #fff;
        padding: 10px;
        border: 1px solid #bfc0c6;
        border-radius: 50px;
        padding: 0;
        min-width: 50px;
        height: 50px;
        text-align: center;
        cursor: pointer;
        color: #282c3f;
    }
    &__size-no {
        text-align:center;
    }
    &__select-size {
        margin: 20px 0;
    }
    &__size-title {
        font-weight: bold;
    }
    &__addCart {
        border: none;
        border-radius: 5px;
        padding: 12px 50px;
        font-size: 16px;
        background: #C41E3A;
        color: #fff;
        margin-top: 30px;
        cursor:pointer;
        &:hover {
            background: #FF0000;
        }
    }
 }
`