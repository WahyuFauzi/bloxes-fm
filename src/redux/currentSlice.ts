import { createSlice } from '@reduxjs/toolkit';

export const currentSlice = createSlice({
	name: 'current',
	initialState: {
		currentPath: [],
		currentFolder: {
			_id: '',
			folder_name: '',
			nested_folders: [
				{ _id: '01', folder_name: 'cat house 1' },
				{ _id: '02', folder_name: 'cat house 2' },
			],
			items: [
				{ _id: '01', item_name: 'jotaro' },
				{ _id: '02', item_name: 'joseph' },
				{ _id: '03', item_name: 'jonathan' },
			],
		},
	},
	reducers: {
		addPath: (state, action) => {
			let currentPath = state.currentPath;
			currentPath.push(action.payload);
			state.currentPath = currentPath;
		},
		backPath: (state, action) => {
			let currentPath = state.currentPath;
			var index = currentPath.indexOf(action.payload);
			if (index !== -1) {
				currentPath.splice(index, 1);
			}
			state.currentPath = currentPath;
		},
		setCurrentFolder: (state, action) => {},
		setCurrentItems: (state, action) => {},
		setCurrentNestedFolder: (state, action) => {},
	},
});

export const { setCurrentItems, setCurrentNestedFolder, addPath, backPath } =
	currentSlice.actions;

export default currentSlice.reducer;
