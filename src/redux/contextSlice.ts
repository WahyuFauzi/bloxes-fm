import { createSlice } from '@reduxjs/toolkit';

export const contextSlice = createSlice({
	name: 'context',
	initialState: {
		position: { x: 0, y: 0 },
		renderCondition: false,
	},
	reducers: {
		setPosition: (state, action) => {
			state.position.x = action.payload.x;
			state.position.y = action.payload.y;
			console.log(state.position.x);
			console.log(state.position.y);
		},
		setRenderConditionTrue: (state) => {
			state.renderCondition = true;
		},
		setRenderConditionFalse: (state) => {
			state.renderCondition = false;
		},
	},
});

export const { setPosition, setRenderConditionTrue, setRenderConditionFalse } =
	contextSlice.actions;

export default contextSlice.reducer;
