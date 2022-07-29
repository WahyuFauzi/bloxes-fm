import { createSlice } from '@reduxjs/toolkit';

// NOTE redux or global state?
export const axiosProcessSlice = createSlice({
	name: 'axiosProcess',
	initialState: {
		fileUploaded: '',
		selectedFile: {
			id: '',
			type: '',
		},
	},
	reducers: {
		setFileUpload: (state, action) => {
			state.fileUploaded = action.payload;
		},
		emptyingFileUpload: (state) => {
			state.fileUploaded = '';
		},
		setSelectedFile: (state, action) => {
			state.selectedFile = action.payload;
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
	setFileUpload,
	emptyingFileUpload,
	setSelectedFile,
	emptyingSelectedFile,
} = axiosProcessSlice.actions;

export default axiosProcessSlice.reducer;
