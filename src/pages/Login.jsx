import { useRef } from 'react';
import useUser from '../hooks/useUser';

export default function Login() {
	const { login } = useUser();
	const emailField = useRef(null);
	const passwordField = useRef(null);

	const handleSubmit = event => {
		event.preventDefault();
		const inputEmail = emailField.current.value;
		const inputPassword = passwordField.current.value;
		login({ inputEmail, inputPassword });
	};

	return (
		<div className='row m-auto w-50 vh-100 align-items-center justify-content-center'>
			<div className='col-6'>
				<h2 className='mb-4'>LOGIN FORM</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-3'>
						<label className='form-label'>Email address</label>
						<input type='email' className='form-control' ref={emailField} />
					</div>
					<div className='mb-3'>
						<label className='form-label'>Password</label>
						<input
							type='password'
							className='form-control'
							ref={passwordField}
						/>
					</div>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
