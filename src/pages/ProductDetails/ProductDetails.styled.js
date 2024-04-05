import styled from 'styled-components';

export const ProductDetailsWrapper = styled.div`
  .productdetails {
    &__container {
        @media screen and (min-width: 768px){
            display:flex;
        }
        display:block;
        margin-top: 110px;
        margin-left: 20px;
        margin-right: 20px;
        gap:30px;
    }
    &__image-container {
        width:100%;
        @media screen and (min-width: 768px){
            width:55%;
        }
    }
    &__images-inner-container {
        display:flex;
    }
    &__images {
        height: 500px;
        margin-right:5px;
    }
    &__details {
        width:100%;
        @media screen and (min-width: 768px){
            width: 50%;
        }
        h2 {
            color: #C41E3A;
            padding: 0 20px 0 0;
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
        }
        span {
            color: #fff;
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
        padding: 5px 20px 14px 0;
        font-size: 20px;
        opacity: .8;
        font-weight: 400;
    }
    &__rating {
        color: #fff;
        margin-top:10px;
    }
    &__description {
        color: #fff;
        line-height: 1.4;
        font-size: 16px;
        margin-top: 12px;
        width: 84%;
    }
  }
`