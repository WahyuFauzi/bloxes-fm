import { createSlice } from '@reduxjs/toolkit';
import UserEntity from '../entity/user/UserEntity';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
	},
	reducers: {
		setUser: (state, action) => {
			const user: UserEntity = action.payload;
			state.user = user;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
