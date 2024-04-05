import { useSelector, useDispatch } from 'react-redux'
import deleteImg from '../../icons/delete-icon.png'
import { CartListWrapper } from '../CartList/CartList.styled'
import { setDeletedData } from '../../redux/actions/productAction'
import { Link } from 'react-router-dom'
import { cartQuantity } from '../../redux/actions/productAction'
import Button from '../../Atoms/Button/Button'

const CartList = () => {
    const productData = useSelector((state) => state.allProducts.cartProducts)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(setDeletedData({ id }))
    }

    const handleQuantity = (id, value) => {
        dispatch(cartQuantity(id, value))
    }

    return (
        <CartListWrapper>
            <div className='cartList__container'>
                <ul className="cartList__header-container">
                    <li>Product</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total Price</li>
                    <li>Action</li>
                </ul>
                {
                    productData.length !== 0 ?
                        productData.map((product) => (
                            <ul className="cartList__list-container"
                                key={product.id}
                            >
                                <li>
                                    <img className="cartList__product-image" src={product.image[0]} alt='product-img' />
                                </li>
                                <li>{product.name}</li>
                                <li>{product.price}</li>
                                <li>
                                    <span
                                        className="cartList__quantity-button"
                                        onClick={() => handleQuantity(product.id, 'increase')}
                                    >
                                        +
                                    </span>
                                    <span
                                        className='cartList__quantity'
                                    >
                                        {product.quantity}
                                    </span>
                                    <span
                                        className="cartList__quantity-button"
                                        onClick={() => handleQuantity(product.id, 'decrease')}
                                    >
                                        -
                                    </span>
                                </li>
                                <li>{product.totalPrice}</li>
                                <li>
                                    <img className="cartList__product-delete" src={deleteImg} alt='delete-img' onClick={() => handleDelete(product.id)} />
                                </li>
                            </ul>
                        ))
                        :
                        <p className='cartList__empty-data'>Your Cart is empty</p>
                }
                <div className='cartList__button-container'>
                    <Link to='/'>
                        <Button
                            className='cartList__home-button'
                            type='secondary'
                        >
                            Home
                        </Button>
                    </Link>
                </div>

            </div>
        </CartListWrapper>
    )
}

export default CartList