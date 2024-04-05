import React from 'react'
import { ProductDescriptionWrapper } from './ProductDescription.styled';
import { useDispatch } from 'react-redux';
import { setCartData } from '../../redux/actions/productAction';
import Button from '../../Atoms/Button/Button';
const ProductDescription = ({ productDetails }) => {
  const dispatch = useDispatch();
  const handleCart = (product) => {
    dispatch(setCartData(product))
  }
  return (
    <ProductDescriptionWrapper>
      <div className="productdescription__details">
        {
          productDetails.map((product) => (
            <div key={product.id}>
              <h2>{product.brand}</h2>
              <p className="productdescription__name">{product.name}</p>
              <p className="productdescription__rating">{product.rating} rating</p>
              <div className='productdescription__price-container'>
                <span className="productdescription__price">Rs. {product.price}</span>
                <span>{product.discount}</span>
              </div>
              <h3>Product Details</h3>
              <pre className="productdescription__description">{product.description}</pre>
              <div className='productdescription__select-size'>
                <p className='productdescription__size-title'>Select Size</p>
                <div className='productdescription__size-container'>
                  {
                    product.size.map((size, index) => (
                      <button className='productdescription__size' key={index}>
                        <div className='productdescription__size-no'>{size}</div>
                      </button>
                    ))
                  }
                </div>
              </div>
              <Button
                className='productdescription__addCart'
                onClick={() => handleCart(product)}
                type="primary"
              >
                Add to Cart
              </Button>
            </div>
          ))
        }
      </div>
    </ProductDescriptionWrapper>
  )
}

export default ProductDescription