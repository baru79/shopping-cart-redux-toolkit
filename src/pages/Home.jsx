import useProducts from '../hooks/useProducts';
import ProductsList from '../components/ProductsList';
import Layout from '../components/Layout';

export default function Home() {
	const { products } = useProducts();

	return (
		<Layout>
			<ProductsList products={products} />
		</Layout>
	);
}
