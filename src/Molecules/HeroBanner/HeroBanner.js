import React from 'react'
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'
import banner4 from '../../images/banner4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import { HeroBannerWrapper } from './HeroBanner.styled';

const HeroBanner = () => {
    return (
        <HeroBannerWrapper>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                effect={"cube"}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
            >
                <SwiperSlide>
                    <img src={banner1} alt="banner-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="banner-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="banner-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} alt="banner-img" />
                </SwiperSlide>
            </Swiper>
        </HeroBannerWrapper>
    )
}

export default HeroBanner