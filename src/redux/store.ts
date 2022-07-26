import { configureStore } from '@reduxjs/toolkit';
import currentReducer from './currentSlice';
import userReducer from './userSlice';
import contextReducer from './contextSlice';
import axiosReducer from './axiosProcess';

export const store = configureStore({
	reducer: {
		current: currentReducer,
		user: userReducer,
		axiosProcess: axiosReducer,
		context: contextReducer,
	},
});
