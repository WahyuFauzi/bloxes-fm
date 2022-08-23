import {createSlice} from '@reduxjs/toolkit';

const initPath: Array<string> = [];

const initFolder = {
    id: '', // id
    folder_name: '', // folder_name
    nested_folders: [
        {id: '01', folder_name: 'cat house 1'},
        {id: '02', folder_name: 'cat house 2'},
    ], // nested_folders
    items: [
        {id: '01', item_name: 'Jotaro'},
        {id: '02', item_name: 'Joseph'},
        {id: '03', item_name: 'Jonathan'},
    ], // items
    shared_user: [
        {id: '01', user_name: 'Bruce Wayne'},
        {id: '02', user_name: 'Clark Kent'},
    ], // shared_user
    created_at: '', // created_at
    update_at: 'string' // update_at//
}

export const currentSlice = createSlice({
    name: 'current',
    initialState: {
        currentPath: initPath,
        currentFolder: initFolder,
        folderInputCondition: 'hidden',
    },
    reducers: {
        setPath: (state, action) => {
            state.currentPath = action.payload;

        },

        setCurrentFolder: (state, action) => {
            state.currentFolder = action.payload;
        },

        setNestedFolders: (state, action) => {
            state.currentFolder.nested_folders =
                action.payload;
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
    setPath,
    showFolderNameInput,
    hideFolderNameInput,
} = currentSlice.actions;

export default currentSlice.reducer;
