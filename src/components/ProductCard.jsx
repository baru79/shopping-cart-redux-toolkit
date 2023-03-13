import useCart from '../hooks/useCart';

export default function ProductCard({ id, title, price, category, thumbnail }) {
	const { checkProductInCart, addToCart, removeFromCart } = useCart();

	const handleClick = id => {
		!checkProductInCart(id)
			? addToCart({ id, title, price, category, thumbnail })
			: removeFromCart({ id });
	};

	const buttonColor = checkProductInCart(id) ? 'danger' : 'success';

	const buttonText = checkProductInCart(id)
		? 'Remove from cart'
		: 'Add to cart';

	return (
		<div className='card col-3 m-2 pt-2 bg-warning'>
			<img
				className='card-img-top img-fluid rounded-3'
				style={{
					height: '200px',
					objectFit: 'cover',
				}}
				src={thumbnail}
				alt={title}
			/>
			<div className='card-body'>
				<h5 className='card-title'> {title}</h5>
				<span className='badge bg-secondary text-light p-2 mb-4'>
					{category}
				</span>
				<div className='d-flex justify-content-between align-items-center'>
					<button
						href='#'
						className={`btn btn-${buttonColor}`}
						onClick={() => handleClick(id)}
					>
						{buttonText}
					</button>
					<p className='card-text bold' style={{ fontWeight: 'bold' }}>
						${price}
					</p>
				</div>
			</div>
		</div>
	);
}
