import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useUser from '../hooks/useUser';

export default function Layout({ children }) {
	const { totalCount } = useSelector(state => state.cart);
	const { logout } = useUser();
	const { cleanCart } = useCart();
	const location = useLocation();

	const handleLogout = () => {
		logout();
		cleanCart();
	};

	const { pathname } = location;
	const isLoginPage = pathname === '/';
	return (
		<>
			<div className='sticky-top d-flex py-4 bg-light px-4'>
				<div className='container d-flex'>
					<Link className='btn btn-info mx-2' to='/home'>
						Home
					</Link>
					<div className='ms-auto'>
						<Link className='btn btn-primary position-relative mx-4' to='/cart'>
							Cart
							<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
								{totalCount}
								<span className='visually-hidden'>products in cart</span>
							</span>
						</Link>
						{!isLoginPage && (
							<button className='btn btn-danger' onClick={handleLogout}>
								Log out
							</button>
						)}
					</div>
				</div>
			</div>
			<div className='container'>{children}</div>
		</>
	);
}
