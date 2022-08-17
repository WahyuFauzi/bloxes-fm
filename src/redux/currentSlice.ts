import { createSlice } from '@reduxjs/toolkit';
import SampleItemEntity from '@/entity/file/SampleFileEntity';
import FolderEntity from '@/entity/folder/FolderEntity';
import SampleFolderEntity from '@/entity/folder/SampleFolderEntity';

const initPath: Array<string> = [];

const initFolder = new FolderEntity(
	'string', // id
	'string', // folder_name
	[
		{ id: '01', folder_name: 'cat house 1' },
		{ id: '02', folder_name: 'cat house 2' },
	], // nested_folders
	[
		{ id: '01', item_name: 'Jotaro' },
		{ id: '02', item_name: 'Joseph' },
		{ id: '03', item_name: 'Jonathan' },
	], // items
	[
		{ id: '01', user_name: 'Bruce Wayne' },
		{ id: '02', user_name: 'Clark Kent' },
	], // shared_user
	'string', // created_at
	'string' // update_at
);

export const currentSlice = createSlice({
	name: 'current',
	initialState: {
		currentPath: initPath,
		currentFolder: initFolder,
		folderInputCondition: 'hidden',
	},
	reducers: {
		setPath: (state, action) => {
			state.currentPath = action.payload as Array<string>;
		},

		setCurrentFolder: (state, action) => {
			state.currentFolder = action.payload as FolderEntity;
		},

		setNestedFolders: (state, action) => {
			state.currentFolder.nested_folders =
				action.payload as Array<SampleFolderEntity>;
		},

		setItems: (state, action) => {
			state.currentFolder.items = action.payload as Array<SampleItemEntity>;
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
