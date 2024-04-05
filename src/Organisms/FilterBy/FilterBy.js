import { variables } from '../../variables/variables'
import { useDispatch } from 'react-redux'
import { FilterByWrapper } from './FilterBy.styled';
import { applyFilter } from '../../redux/actions/productAction';

const FilterBy = () => {
    const handleFilter = (filterType, filterValue) => {
        dispatch(applyFilter(filterType, filterValue));
    };

    const dispatch = useDispatch();
    return (
        <FilterByWrapper>
            <div className='filterBy__container'>
                <h2 className='filterBy__title'>Filters</h2>
                <p className='filterBy__category'>Color</p>
                <div className='filterBy__category-container'>
                    {
                        variables.colors.map((color, index) => (
                            <div className='filterBy__item' key={index}>
                                <input
                                    className="filterBy__input"
                                    type="checkbox"
                                    name={color}
                                    value={color}
                                    onChange={() => handleFilter("color", color)}
                                />
                                <p className='filterBy__category-name'>{color}</p>
                            </div>
                        ))
                    }
                </div>
                <p className='filterBy__category'>Price</p>
                <div className='filterBy__category-container'>
                    {
                        variables.price.map((price, index) => (
                            <div className='filterBy__item' key={index}>
                                <input
                                    className="filterBy__input"
                                    type="checkbox" name={price.range}
                                    value={price.range}
                                    onChange={() => handleFilter("price", price)}
                                />
                                <p className='filterBy__category-name'>Rs. {price.range}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </FilterByWrapper>
    )
}

export default FilterBy