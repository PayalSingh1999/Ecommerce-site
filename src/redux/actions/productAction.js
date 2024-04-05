import { actionTypes } from "../constants/actionTypes"
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products
  }
};

export const setCartData = (products) => {
  return {
    type: actionTypes.SET_CART_PRODUCTS,
    payload: products
  }
}

export const setDeletedData = (products) => {
  return {
    type: actionTypes.SET_DELETED_DATA,
    payload: products
  }
}

export const cartQuantity = (id, value) => {
  return {
    type: actionTypes.CART_QUANTITY,
    payload: { id, value }
  }
}

export const setSearchedProducts = (searchValue) => {
  return {
    type: actionTypes.SEARCHED_PRODUCTS,
    payload: searchValue
  }
}

export const applyFilter = (filterType, filterValue) => ({
  type: 'APPLY_FILTER',
  payload: { filterType, filterValue },
});

export const setSortedData = (selectedOption) => ({
  type: actionTypes.SORTED_DATA,
  payload: selectedOption
});