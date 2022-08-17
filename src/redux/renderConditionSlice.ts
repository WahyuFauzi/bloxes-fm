import { createSlice } from '@reduxjs/toolkit';

export const renderConditionSlice = createSlice({
	name: 'render',
	initialState: {
		folderInputCondition: 'hidden',
		contextRenderCondition: false,
	},
	reducers: {
		showFolderNameInput: (state) => {
			state.folderInputCondition = 'w-screen h-screen top-0 left-0 absolute';
		},
		hideFolderNameInput: (state) => {
			state.folderInputCondition = 'hidden';
		},
		setRenderConditionTrue: (state) => {
			state.contextRenderCondition = true;
		},
		setRenderConditionFalse: (state) => {
			state.contextRenderCondition = false;
		},
	},
});

export const {
	showFolderNameInput,
	hideFolderNameInput,
	setRenderConditionTrue,
	setRenderConditionFalse,
} = renderConditionSlice.actions;

export default renderConditionSlice.reducer;
