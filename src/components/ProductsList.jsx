import ProductCard from './ProductCard';

export default function ProductsList({ products }) {
	return (
		<>
			<h1 className='d-flex justify-content-center align-items-center'>
				Lista de productos
			</h1>
			<ul className='row justify-content-center'>
				{products.map(product => {
					const { id, title, price, category, thumbnail } = product;
					return (
						<ProductCard
							key={id}
							id={id}
							title={title}
							price={price}
							category={category}
							thumbnail={thumbnail}
						/>
					);
				})}
			</ul>
		</>
	);
}
