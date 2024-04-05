import styled from 'styled-components';
export const HeaderWrapper = styled.div`
.header {
    &__container {
        background: #f2f2f2;
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        position: fixed;
        display:flex;
        top: 0;
        z-index: 2;
        width: 100%;
        justify-content:space-between;
        li {
            display: inline-block;
            padding: 5px 10px;
            margin: 10px;
            border-radius: 5px;
            font-size: 18px;
        }
        a {
            text-decoration: none;
            color: #000;
        }
        a.active {
            color: #fff;
            background: #2a2f3b;
            padding: 5px 10px;
            border-radius: 5px;
            opacity: 0.5;
          }
    }
    &__bag {
        position: relative;
        display:flex;
    }
    &__cart {
        width: 25px;
        height: 25px;
        cursor:pointer;
        margin-left: 70px;
    }
    &__cart-value {
        font-size: 12px;
        background: #ff0047;
        border-radius: 50%;
        line-height: 1.6rem;
        text-align: center;
        color: #fff;
        transform: translate(-3px,-14px);
        padding: 0 8px;
    }
    &__right-container {
        display:flex;
        justify-content: space-between;
        align-items:center;
    }
}
`