import styled from 'styled-components';

export const NewLaunchWrapper = styled.div`
.newLaunch {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 30px;
    h1 {
        font-weight: 500;
        text-transform: uppercase;
    }
    &__container {
       display:flex;
       flex-wrap: wrap;
       margin-top: 20px;
    }
    &__product {
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