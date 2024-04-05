import React from 'react'
import { useDispatch } from 'react-redux'
import { homeData } from '../../data/homeData'
import { Link } from 'react-router-dom'
import { NewLaunchWrapper } from './NewLaunch.styled'
import { setCartData } from '../../redux/actions/productAction'
import Button from '../../Atoms/Button/Button'
const NewLaunch = () => {
    const dispatch = useDispatch();
    const handleCart = (id) => {
        const filteredCartData = homeData.newLaunchData.find((product) => product.id === id)
        dispatch(setCartData(filteredCartData))
    }
    return (
        <NewLaunchWrapper>
            <div className='newLaunch'>
                <h1>New Launch</h1>
                <div className="newLaunch__container">
                    {
                        homeData.newLaunchData.map((product) => (
                            <div className="newLaunch__product" key={product.id}>
                                <Link
                                    to={`/product/${product.category}/${product.id}`}
                                    className="newLaunch__link"
                                >
                                    <div>
                                        <img src={product.image[0]}
                                            className="newLaunch__image"
                                            alt='product-img'
                                        />
                                        <div className="newLaunch__details">
                                            <h4>{product.brand}</h4>
                                            <p>{product.name}</p>
                                            <span className='newLaunch__price'>Rs. {product.price}</span>
                                            <span className="newLaunch__discount">({product.discount})</span>
                                        </div>
                                    </div>
                                </Link>
                                <Button
                                    onClick={() => handleCart(product.id)}
                                    type="primary"
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </NewLaunchWrapper>
    )
}

export default NewLaunch