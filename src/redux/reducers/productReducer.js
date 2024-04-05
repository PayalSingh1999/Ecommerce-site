import { actionTypes } from "../constants/actionTypes"

const initialState = {
    products: [],
    cartProducts: [],
    count: 0,
    searchProducts: [],
    originalProducts: [],
    colorFilter: [],
    priceFilter: [],
}
export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload, originalProducts: payload }
        case actionTypes.APPLY_FILTER:
            const { filterType, filterValue } = payload;

            const updatedColorFilter = [...state.colorFilter];
            const updatedPriceFilter = [...state.priceFilter];

            if (filterType === 'color') {
                updatedColorFilter.includes(filterValue)
                    ? updatedColorFilter.splice(updatedColorFilter.indexOf(filterValue), 1)
                    : updatedColorFilter.push(filterValue);
            } else if (filterType === 'price') {
                updatedPriceFilter.includes(filterValue)
                    ? updatedPriceFilter.splice(updatedPriceFilter.indexOf(filterValue), 1)
                    : updatedPriceFilter.push(filterValue);
            }

            const filteredData = state.originalProducts.filter((product) => {
                const colorFilterPassed = updatedColorFilter.length === 0 || updatedColorFilter.includes(product.color);
                const priceFilterPassed = updatedPriceFilter.length === 0 ||
                    (product.price >= filterValue.minPrice && product.price <= filterValue.maxPrice);

                return colorFilterPassed && priceFilterPassed;
            });

            return {
                ...state,
                products: filteredData,
                colorFilter: updatedColorFilter,
                priceFilter: updatedPriceFilter,
            };
        case actionTypes.SET_CART_PRODUCTS:
            const existingProduct = state.cartProducts.find((p) => p.id === payload.id);

            if (existingProduct) {
                return {
                    ...state,
                    cartProducts: state.cartProducts.map((p) =>
                        p.id === payload.id ? { ...p, quantity: p.quantity + 1, totalPrice: (p.quantity + 1) * p.price } : p
                    ),
                    count: state.count + 1,
                };
            } else {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, { ...payload, quantity: 1, totalPrice: payload.price }],
                    count: state.count + 1,
                };
            }
        case actionTypes.SET_DELETED_DATA:
            const deletedProductId = payload.id;
            const updatedCartProducts = state.cartProducts.filter((p) => p.id !== deletedProductId);
            const updatedCount = updatedCartProducts.reduce((total, product) => total + product.quantity, 0);
            return {
                ...state,
                cartProducts: updatedCartProducts,
                count: updatedCount,
            };
        case actionTypes.CART_QUANTITY:
            if (payload.value === 'increase') {
                const updatedData = state.cartProducts.map((p) =>
                    p.id === payload.id ? { ...p, quantity: p.quantity + 1, totalPrice: (p.quantity + 1) * p.price } : p
                )
                const countValue = updatedData.reduce((total, product) => total + product.quantity, 0);
                return {
                    ...state,
                    cartProducts: updatedData,
                    count: countValue,
                }
            } else {
                const updatedValue = state.cartProducts.map((p) =>
                    p.id === payload.id ?
                        { ...p, quantity: Math.max(p.quantity - 1, 0), totalPrice: Math.max((p.quantity - 1) * p.price, 0) } : p

                )

                const countCart = updatedValue.reduce((total, product) => total + product.quantity, 0)
                return {
                    ...state,
                    cartProducts: updatedValue,
                    count: countCart
                }
            }
        case actionTypes.SEARCHED_PRODUCTS:
            const searchProducts = state.products.filter((product) => product.name.toLowerCase().includes(payload))
            return {
                ...state,
                products: payload ? searchProducts : state.originalProducts
            }
        case actionTypes.SORTED_DATA:
            let sortedData;
            const sortedProducts = [...state.products];
            if (payload === 'high') {
                sortedData = sortedProducts.sort((a, b) => b.price - a.price)
            } else if (payload === 'low') {
                sortedData = sortedProducts.sort((a, b) => a.price - b.price)
            }
            return {
                ...state,
                products: sortedData
            }
        default:
            return state;
    }
}