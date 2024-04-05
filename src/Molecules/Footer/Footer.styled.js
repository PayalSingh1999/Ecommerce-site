import styled from 'styled-components';

export const FooterWrapper = styled.div`
background: #000;
color: #fff;
bottom:0;
padding: 40px 80px;
margin-top:20px;
.footer {
    &__container {
          display:flex;
          justify-content: space-between;
          margin-left: 50px;
          margin-right: 50px;
          border-bottom: 1px solid #fff;
          padding-bottom: 40px;
          h3 {
            margin-bottom: 10px;
        }
        ul {
            padding:0;
        }
        li {
            margin-bottom: 10px;
            list-style:none;
        }
        a {
            color: #fff;
            text-decoration:none;
        }
    }
    &__bottom {
        display:flex;
        justify-content: space-between;
        li {
             list-style:none;
             margin-right: 50px;
        }
        a {
            text-decoration: none;
            color: #fff;
        }
    }
}
`