import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	token: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { firstName, lastName, email, token } = action.payload;
			state.firstName = firstName;
			state.lastName = lastName;
			state.email = email;
			state.token = token;
		},
		resetUser: state => {
			state.firstName = initialState.firstName;
			state.lastName = initialState.lastName;
			state.email = initialState.email;
			state.token = initialState.token;
		},
	},
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
