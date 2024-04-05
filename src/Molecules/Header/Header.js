import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { HeaderWrapper } from './Header.styled';
import cartImg from '../../icons/shopping-cart.png';
import Search from '../Search/Search';
import MiniCart from '../MiniCart/MiniCart';

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const ref = useRef(null)
    const cartCount = useSelector((state) => state.allProducts.count)
    useEffect(() => {
        const menuRef = ref.current;
        const handleOutsideClick = (event) => {
            if (menuRef && !menuRef.contains(event.target)) {
                setIsCartOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isCartOpen]);
    const handleBag = () => {
        setIsCartOpen(true);
    }

    return (
        <HeaderWrapper ref={ref}>
            <div className='header__container'>
                <ul>
                    <li>
                        <NavLink to='/'
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/productlist/shoes'
                        >
                            Shoes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='productlist/jeans'
                        >
                            Jeans
                        </NavLink>
                    </li>
                </ul>
                <div className='header__right-container'>
                    <Search />
                    <div className='header__cart-container'>
                        <div className="header__bag" onClick={handleBag}>
                            <img className="header__cart" src={cartImg} alt="cart-img" />
                            <div className='header__cart-value'>{cartCount}</div>
                        </div>
                    </div>
                    <MiniCart
                        isCartOpen={isCartOpen}
                        setIsCartOpen={setIsCartOpen}
                    />
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header