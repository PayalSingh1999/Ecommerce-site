import { setDeletedData, cartQuantity } from "../../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deleteImg from '../../icons/delete.svg';
import Button from "../../Atoms/Button/Button";
import { MiniCartWrapper } from "./MiniCart.styled";

const MiniCart = ({ isCartOpen, setIsCartOpen }) => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.allProducts.cartProducts)
    const handleDelete = (id) => {
        dispatch(setDeletedData({ id }))
    }

    const handleQuantity = (id, value) => {
        dispatch(cartQuantity(id, value))
    }
    return (
        <MiniCartWrapper>
            {
                isCartOpen ?
                    <div className='miniCart__bag-container'>
                        {
                            cartData.map((product) => (
                                <div className='miniCart__bag-inner-container' key={product.id}>
                                    <img className="miniCart__image" src={product.image[0]} alt='product-img' />
                                    <p className='miniCart__bag-productName'>{product.name}</p>
                                    <div className='miniCart__bag-qty'>
                                        <span
                                            className="miniCart__quantity-button"
                                            onClick={() => handleQuantity(product.id, 'increase')}
                                        >
                                            +
                                        </span>
                                        {product.quantity > 0 ?
                                            <span
                                                className="miniCart__quantity-button"
                                            >
                                                Qty: {product.quantity}
                                            </span>
                                            :
                                            <></>
                                        }
                                        <span
                                            className="miniCart__quantity-button"
                                            onClick={() => handleQuantity(product.id, 'decrease')}
                                        >
                                            -
                                        </span>
                                    </div>
                                    <img className="miniCart__bag-deleteIcon" src={deleteImg} alt="delete-img" onClick={() => handleDelete(product.id)} />
                                </div>
                            ))
                        }
                        {
                            cartData.length !== 0 ?
                                <Link to='/cart'>
                                    <Button
                                        onClick={() => setIsCartOpen(false)}
                                        type="primary"
                                    >
                                        View Cart
                                    </Button>
                                </Link> :
                                <div>Cart is empty</div>
                        }

                    </div > :
                    <></>
            }
        </MiniCartWrapper>
    )
}

export default MiniCart