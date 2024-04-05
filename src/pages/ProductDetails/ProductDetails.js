import React from 'react';
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { ProductDetailsWrapper } from './ProductDetails.styled';
import ProductDescription from '../../Organisms/ProductDescription/ProductDescription'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { shoes } from '../../data/shoes';
import { jeans } from '../../data/jeans';
import { setProducts } from '../../redux/actions/productAction';
const ProductDetails = () => {
    const [details, setDetails] = useState([]);
    const { productId, category } = useParams();
    console.log('productid', productId, category)
    const dispatch = useDispatch()
    const productData = useSelector((state) => state.allProducts.products);
    useEffect(() => {
        fetchProducts();
    }, [])

    useEffect(() => {
        const productDetails = productData.filter(data => data.id === parseInt(productId));
        setDetails(productDetails);
    }, [productId, productData, dispatch]);


    const fetchProducts = () => {
        try {
            const data = category === "shoes" ? shoes : category === "jeans" ? jeans : [];
            dispatch(setProducts(data));
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    return (
        <ProductDetailsWrapper>
            <div className="productdetails__container">
                {
                    details.map((product) => (
                        <React.Fragment key={product.id}>
                            <div className="productdetails__image-container">
                                {
                                    product.image.map((image, index) => (
                                        <div className='productdetails__images-inner-container'>
                                            <img
                                                src={image}
                                                className="productdetails__images"
                                                alt='product-img'
                                                key={index}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="productdetails__details">
                                <ProductDescription productDetails={details} />
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </ProductDetailsWrapper>
    )
}

export default ProductDetails