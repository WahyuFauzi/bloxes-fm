import { createSlice } from '@reduxjs/toolkit';
import PositionEntity from '@/entity/PositionEntity';

const initPosition: PositionEntity = {
	x: 0,
	y: 0
}

export const contextSlice = createSlice({
	name: 'context',
	initialState: {
		position: initPosition,
		renderCondition: false,
	},
	reducers: {
		setPosition: (state, action) => {
			state.position = action.payload as PositionEntity;
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
