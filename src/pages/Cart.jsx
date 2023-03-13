import Layout from '../components/Layout';
import useCart from '../hooks/useCart';

export default function Cart() {
	const { products, removeFromCart } = useCart();

	return (
		<Layout>
			<table className='table container'>
				<thead>
					<tr>
						<th scope='col'>Product</th>
						<th scope='col'>Name</th>
						<th scope='col'>Price</th>
						<th scope='col'>Category</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => {
						const { id, title, price, category, thumbnail } = product;
						return (
							<tr key={product.id}>
								<td className='d-flex flex-column justify-content-center'>
									<img
										className='card-img-top img-fluid align-items-center rounded-3'
										style={{
											height: '50px',
											width: '50px',
											objectFit: 'cover',
										}}
										src={thumbnail}
										alt={title}
									/>
								</td>
								<td>
									<div
										className='d-flex flex-column justify-content-center'
										style={{ lineHeight: '3' }}
									>
										{title}
									</div>
								</td>
								<td>
									<div
										className='d-flex flex-column justify-content-center'
										style={{ lineHeight: '3' }}
									>
										${price}
									</div>
								</td>
								<td>
									<div
										className='d-flex flex-column justify-content-center'
										style={{ lineHeight: '3' }}
									>
										{category}
									</div>
								</td>
								<td>
									<button
										className='btn btn-danger'
										onClick={() => removeFromCart({ id })}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Layout>
	);
}
