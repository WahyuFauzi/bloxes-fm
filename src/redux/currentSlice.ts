import { createSlice } from '@reduxjs/toolkit';

export const currentSlice = createSlice({
	name: 'current',
	initialState: {
		currentPath: [],
		currentFolder: {
			id: '',
			folder_name: '',
			nested_folders: [
				{ id: '01', folder_name: 'cat house 1' },
				{ id: '02', folder_name: 'cat house 2' },
			],
			items: [
				{ id: '01', item_name: 'jotaro' },
				{ id: '02', item_name: 'joseph' },
				{ id: '03', item_name: 'jonathan' },
			],
		},
		folderInputCondition: 'hidden',
	},
	reducers: {
		setPath: (state, action) => {
			state.currentPath = action.payload;
		},

		setCurrentFolder: (state, action) => {
			state.currentFolder.id = action.payload.id;
			state.currentFolder.folder_name = action.payload.folder_name;
			state.currentFolder.nested_folders = action.payload.nested_folders;
			state.currentFolder.items = action.payload.items;
		},

		setNestedFolders: (state, action) => {
			state.currentFolder.nested_folders = action.payload;
		},

		setItems: (state, action) => {
			state.currentFolder.items = action.payload;
		},

		showFolderNameInput: (state) => {
			state.folderInputCondition = 'w-screen h-screen top-0 left-0 absolute';
		},

		hideFolderNameInput: (state) => {
			state.folderInputCondition = 'hidden';
		},
	},
});

export const {
	setCurrentFolder,
	setNestedFolders,
	setItems,
	setPath,
	showFolderNameInput,
	hideFolderNameInput,
} = currentSlice.actions;

export default currentSlice.reducer;
