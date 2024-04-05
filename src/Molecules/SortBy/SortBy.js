import React from 'react'
import { useDispatch } from 'react-redux'
import { setSortedData } from '../../redux/actions/productAction';
import { SortByWrapper } from './SortBy.styled';

const SortBy = () => {
    const dispatch = useDispatch();
    const handleSort = (e) => {
        const selectedOption = e.target.value;
        dispatch(setSortedData(selectedOption))
    }
    return (
        <SortByWrapper>
            <div className='sortBy__container'>
                <h3>Sort By Price:</h3>
                <div>
                    <select
                        onChange={(e) => handleSort(e)}
                        className='sortBy__dropdown'
                    >
                        <option
                            value="high"
                            className='sortBy__option'
                        >
                            Price: High to Low
                        </option>
                        <option
                            value="low"
                            className='sortBy__option'
                        >
                            Price: Low to High
                        </option>
                    </select>
                </div>
            </div>
        </SortByWrapper>
    )
}

export default SortBy