import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/home' element={<Home />} />
			<Route path='/cart' element={<Cart />} />
		</Routes>
	);
}

export default App;
