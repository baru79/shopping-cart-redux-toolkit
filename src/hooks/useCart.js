import { useDispatch, useSelector } from 'react-redux';
import {
	addProductToCart,
	removeProductFromCart,
	resetCart,
} from '../reducers/cartSlice';

export default function useCart() {
	const dispatch = useDispatch();
	const { products } = useSelector(state => state.cart);

	const checkProductInCart = id => {
		return products.some(product => product.id === id);
	};

	const addToCart = ({ id, title, price, category, thumbnail }) => {
		dispatch(addProductToCart({ id, title, price, category, thumbnail }));
	};

	const removeFromCart = ({ id }) => {
		dispatch(removeProductFromCart(id));
	};

	const cleanCart = () => {
		dispatch(resetCart());
	};

	return { products, checkProductInCart, addToCart, removeFromCart, cleanCart };
}
