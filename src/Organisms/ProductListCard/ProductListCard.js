import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ProductListCardWrapper } from './ProductListCard.styled';
import { setCartData } from '../../redux/actions/productAction';
import Button from '../../Atoms/Button/Button';

const ProductListCard = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.allProducts.products);

  const handleCart = (id) => {
    const filteredCartData = productData.find((product) => product.id === id)
    dispatch(setCartData(filteredCartData))
  }

  return (
    <ProductListCardWrapper>
      <div className="productListCard__container">
        {
          productData.map((product) => (
            <div className="productListCard__product row" key={product.id}>
              <Link
                to={`/product/${product.category}/${product.id}`}
                className="productListCard__link"
              >
                <div>
                  <img src={product.image[0]}
                    className="productListCard__image"
                    alt='product-img'
                  />
                  <div className="productListCard__details">
                    <h4>{product.brand}</h4>
                    <p>{product.name}</p>
                    <span className='productListCard__price'>Rs. {product.price}</span>
                    <span className="productListCard__discount">({product.discount})</span>
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
    </ProductListCardWrapper>
  )
}

export default ProductListCard