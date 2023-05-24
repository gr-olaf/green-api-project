import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLogin: false,
	numbers: [],
	currentNumber: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLogin: (state) => {
			state.isLogin = !state.isLogin;
		},
		setNumber: (state, action) => {
			state.numbers.push(action.payload);
		},
		setCurrentNumber: (state, action) => {
			state.currentNumber = action.payload;
		},
	},
});

export const { setLogin, setNumber, setCurrentNumber } = userSlice.actions;

export default userSlice.reducer;
