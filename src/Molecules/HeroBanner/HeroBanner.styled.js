import styled from 'styled-components';

export const HeroBannerWrapper = styled.div`
.swiper {
    margin-top: 50px;
    img {
        width: 100%;
        height: 600px;
        background-size:cover;
    }
    .swiper-button-next {
        color: #000;
        border:1px solid #787878;
        border-radius: 15px;
        background: #fff;
    }
    .swiper-button-next:after {
            font-size: 20px;
        }

    .swiper-button-prev {
        color: #000;
        border:1px solid #787878;
        border-radius: 15px;
        background: #fff;
        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination {
          .swiper-pagination-bullet {
            background: #fff;
            border: 1px solid #000;
          }
          .swiper-pagination-bullet-active {
            background: #fff;
          }
    }
}
`