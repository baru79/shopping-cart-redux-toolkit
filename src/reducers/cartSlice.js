import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalCount: 0,
	products: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			const { payload } = action;
			const { id } = payload;
			const prod = state.products.find(product => product.id === id);
			if (!prod) {
				state.totalCount += 1;
				state.products = [...state.products, payload];
			}
		},
		removeProductFromCart: (state, action) => {
			const { payload: id } = action;
			state.totalCount -= 1;
			state.products = state.products.filter(prod => prod.id !== id);
		},
		resetCart: state => {
			state.totalCount = 0;
			state.products = [];
		},
	},
});

export const { addProductToCart, removeProductFromCart, resetCart } =
	cartSlice.actions;

export default cartSlice.reducer;
