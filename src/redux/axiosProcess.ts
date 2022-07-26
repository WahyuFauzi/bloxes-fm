import { createSlice } from '@reduxjs/toolkit';

// NOTE redux or global state?
export const axiosProcessSlice = createSlice({
	name: 'axiosProcess',
	initialState: {
		process: false,
		fileUploaded: '',
		selectedFile: {
			id: '',
			type: '',
		},
	},
	reducers: {
		setProcessTrue: (state) => {
			state.process = true;
		},
		setProcessFalse: (state) => {
			state.process = false;
		},
		setFileUpload: (state, action) => {
			state.fileUploaded = action.payload;
		},
		emptyingFileUpload: (state) => {
			state.fileUploaded = '';
		},
		setSelectedFile: (state, action) => {
			state.selectedFile = action.payload;
			console.log(state.selectedFile);
		},
		emptyingSelectedFile: (state) => {
			state.selectedFile = {
				id: '',
				type: '',
			};
		},
	},
});

export const {
	setProcessTrue,
	setProcessFalse,
	setFileUpload,
	emptyingFileUpload,
	setSelectedFile,
	emptyingSelectedFile,
} = axiosProcessSlice.actions;

export default axiosProcessSlice.reducer;
