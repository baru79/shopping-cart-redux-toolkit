import { useEffect, useState } from 'react';

export default function useProducts() {
	const [products, setProducts] = useState([]);

	const getProducts = () =>
		fetch('http://localhost:3001/products')
			.then(res => res.json())
			.then(data => {
				setProducts(data);
			});

	useEffect(() => {
		getProducts();
	}, []);

	return { products };
}
