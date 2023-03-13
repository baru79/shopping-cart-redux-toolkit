import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser, setUser } from '../reducers/userSlice';

export default function useUser() {
	const [users, setUsers] = useState([]);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:3000/users')
			.then(res => res.json())
			.then(data => {
				setUsers(data);
			});
	}, []);

	const login = ({ inputEmail, inputPassword }) => {
		const user = users.find(user => user.email === inputEmail);
		if (user && user.password === inputPassword) {
			dispatch(
				setUser({
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					token: crypto.randomUUID(),
				})
			);
			navigate('/home');
		}
	};

	const logout = () => {
		dispatch(resetUser());
		navigate('/');
	};

	return { login, logout };
}
