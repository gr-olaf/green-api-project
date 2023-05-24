import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	messages: [],
};

export const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		setCurrentMessage: (state, action) => {
			state.messages.push(action.payload);
		},
	},
});

export const { setCurrentMessage } = messageSlice.actions;

export default messageSlice.reducer;
