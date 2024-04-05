import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSearchedProducts } from '../../redux/actions/productAction';
import { SearchWrapper } from './Search.styled';
import Button from '../../Atoms/Button/Button';

const Search = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue)
        if (!inputValue) {
            dispatch(setSearchedProducts(''))
        }
    }
    const handleSearch = () => {
        const inputData = search.toLowerCase();
        dispatch(setSearchedProducts(inputData))
    }
    return (
        <SearchWrapper>
            <input type='text' className='search__input'
                onChange={(e) => handleChange(e)}
                placeholder='Search product'
                value={search}
            />
            <Button
                className="search__button"
                onClick={handleSearch}
                type="primary"
            >
                Search
            </Button>
        </SearchWrapper>
    )
}

export default Search