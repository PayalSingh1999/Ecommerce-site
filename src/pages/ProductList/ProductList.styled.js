import styled from 'styled-components';

export const ProductListWrapper = styled.div`
 .productList {
    display:block;
    margin-left: 78px;
    gap: 100px;
    @media screen and (min-width: 700px){
        display:flex;
    }
    &__filter {
        width:100%;
        @media screen and (min-width: 700px){
            width:23%;
        }
        @media screen and (min-width: 700px) and (max-width: 951px){
            width:40%;
        }

    }
    &__card {
        width: 100%;
        @media screen and (min-width: 700px){
            width:80%;
        }
        @media screen and (min-width: 700px) and (max-width: 951px){
            width:44%;
        }
    }
 }
`