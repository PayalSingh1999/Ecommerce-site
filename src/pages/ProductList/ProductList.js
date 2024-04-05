import { useEffect } from 'react'
import { shoes } from '../../data/shoes';
import { jeans } from '../../data/jeans';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/productAction';
import ProductListCard from '../../Organisms/ProductListCard/ProductListCard';
import { useParams } from 'react-router-dom';
import FilterBy from '../../Organisms/FilterBy/FilterBy';
import { ProductListWrapper } from './ProductList.styled';
import SortBy from '../../Molecules/SortBy/SortBy';

const ProductList = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  useEffect(() => {
    fetchProducts();
  }, [category])


  const fetchProducts = async () => {
    try {
      const data = category === "shoes" ? shoes : category === "jeans" ? jeans : [];
      dispatch(setProducts(data));
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  return (
    <ProductListWrapper>
      <SortBy />
      <div className='productList'>
        <div className='productList__filter'>
          <FilterBy />
        </div>
        <div className='productList__card'>
          <ProductListCard />
        </div>
      </div>
    </ProductListWrapper>
  )
}

export default ProductList