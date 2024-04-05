import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { TrendingWrapper } from './Trending.styled'
import { setCartData } from '../../redux/actions/productAction'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from '../../Atoms/Button/Button'
import { homeData } from '../../data/homeData'
const Trending = () => {
    const dispatch = useDispatch();
    const handleCart = (id) => {
        const filteredCartData = homeData.trendingData.find((product) => product.id === id)
        dispatch(setCartData(filteredCartData))
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <TrendingWrapper>
            <div className='trending'>
                <h1>Trending Now</h1>
                <div className="trending__container">
                    <Carousel
                        responsive={responsive}
                        itemClass="carousel-item-padding-40-px"
                    >
                        {
                            homeData.trendingData.map((product) => (
                                <div className="trending__product row" key={product.id}>
                                    <Link
                                        to={`/product/${product.category}/${product.id}`}
                                        className="trending__link"
                                    >
                                        <div>
                                            <img src={product.image[0]}
                                                className="trending__image"
                                                alt='product-img'
                                            />
                                            <div className="trending__details">
                                                <h4>{product.brand}</h4>
                                                <p>{product.name}</p>
                                                <span className='trending__price'>Rs. {product.price}</span>
                                                <span className="trending__discount">({product.discount})</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Button
                                        className='trending__button'
                                        onClick={() => handleCart(product.id)}
                                        type="primary"
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </TrendingWrapper>
    )
}

export default Trending