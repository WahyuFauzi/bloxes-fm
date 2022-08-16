import { createSlice } from '@reduxjs/toolkit';

export const renderConditionSlice = createSlice({
	name: 'render',
	initialState: {
		folderInputCondition: 'hidden',
	},
	reducers: {
		showFolderNameInput: (state) => {
			state.folderInputCondition = 'w-screen h-screen top-0 left-0 absolute';
		},
		hideFolderNameInput: (state) => {
			state.folderInputCondition = 'hidden';
		},
	},
});

export const { showFolderNameInput, hideFolderNameInput } =
	renderConditionSlice.actions;

export default renderConditionSlice.reducer;
