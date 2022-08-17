import { createSlice } from '@reduxjs/toolkit';
import SelectedItemEntity from '../entity/SelectedItemEntity';

const initSelectedFile = new SelectedItemEntity('', '');
export const axiosProcessSlice = createSlice({
	name: 'axiosProcess',
	initialState: {
		fileUploaded: '', // TODO implement entity for this
		selectedFile: initSelectedFile,
	},
	reducers: {
		setFileUpload: (state, action) => {
			state.fileUploaded = action.payload;
		},
		emptyingFileUpload: (state) => {
			state.fileUploaded = '';
		},
		setSelectedFile: (state, action) => {
			state.selectedFile = action.payload as SelectedItemEntity;
		},
		emptyingSelectedFile: (state, action) => {
			state.selectedFile = action.payload;
		},
	},
});

export const {
	setFileUpload,
	emptyingFileUpload,
	setSelectedFile,
	emptyingSelectedFile,
} = axiosProcessSlice.actions;

export default axiosProcessSlice.reducer;
