import { store } from '../redux/store';
import axiosHelper from './axiosHelper.js';
import axios from 'axios';

import { setCurrentFolder, setPath } from '../redux/currentSlice';

class StateHelper {
	constructor(store) {
		this.store = store;
	}
	store: any;

	updateFolder(updatedFolder) {
		this.store.dispatch(setCurrentFolder(updatedFolder));
		const newFolder = {
			folder_name: updatedFolder.folder_name,
			nested_folders: updatedFolder.nested_folders,
			items: updatedFolder.items,
		};
		axiosHelper
			.updateFolder(updatedFolder.id, newFolder)
			.then((response) => console.log(response));
	}

	onInit() {
		let initFolderId = localStorage.getItem('init_folder_id');

		if (initFolderId === undefined || initFolderId === null) {
			axiosHelper.createFolder('init folder').then((response) => {
				localStorage.setItem('init_folder_id', response.data.data.id);
				this.store.dispatch(setPath([response.data.data.id]));
				this.store.dispatch(setCurrentFolder(response.data.data));
			});
		} else {
			axiosHelper.getFolder(initFolderId).then((response) => {
				this.store.dispatch(setPath([response.data.data.id]));
				this.store.dispatch(setCurrentFolder(response.data.data));
			});
		}
	}

	createFolder(folderName) {
		let currentFolder = this.store.getState().current.currentFolder;
		axiosHelper.createFolder(folderName).then((response) => {
			const newFolder = {
				id: response.data.data.id,
				folder_name: folderName,
			};
			const newCurrentFolder = JSON.parse(JSON.stringify(currentFolder));
			newCurrentFolder.nested_folders.push(newFolder);
			this.updateFolder(newCurrentFolder);
		});
	}

	deleteFolder(folderId) {
		let currentFolder = this.store.getState().current.currentFolder;
		let nestedFolders = currentFolder.nested_folders;
		const newArr = nestedFolders.filter((object) => {
			return object.id !== folderId;
		});
		const newCurrentFolder = JSON.parse(JSON.stringify(currentFolder));
		newCurrentFolder.nested_folders = newArr;
		this.updateFolder(newCurrentFolder);
	}

	uploadFile(newFile) {
		let currentFolder = this.store.getState().current.currentFolder;
		axiosHelper.postItem(newFile).then((response) => {
			const newItem = {
				id: response.data.data.id,
				item_name: response.data.data.item_name,
			};
			const newCurrentFolder = JSON.parse(JSON.stringify(currentFolder));
			newCurrentFolder.items.push(newItem);
			this.updateFolder(newCurrentFolder);
		});
	}

	deleteFile(fileId) {
		let currentFolder = this.store.getState().current.currentFolder;
		let items = currentFolder.items;
		const newArr = items.filter((object) => {
			return object.id !== fileId;
		});
		axiosHelper.deleteFile(fileId).then((response) => {});
		const newCurrentFolder = JSON.parse(JSON.stringify(currentFolder));
		newCurrentFolder.items = newArr;
		this.updateFolder(newCurrentFolder);
	}

	openFolder(folderId) {
		let currentPath = this.store.getState().current.currentPath;
		let parsedCurrentPath = JSON.parse(JSON.stringify(currentPath));
		parsedCurrentPath.push(folderId);
		this.store.dispatch(setPath(parsedCurrentPath));
		axiosHelper.getFolder(folderId).then((response) => {
			const newCurrentFolder = {
				id: response.data.data.id,
				folder_name: response.data.data.folder_name,
				nested_folders: response.data.data.nested_folders,
				items: response.data.data.items,
			};
			this.store.dispatch(setCurrentFolder(newCurrentFolder));
		});
	}

	backToParentFolder() {
		let currentPath = this.store.getState().current.currentPath;
		let parsedCurrentPath = JSON.parse(JSON.stringify(currentPath));
		if (parsedCurrentPath.length > 1) {
			parsedCurrentPath.pop();
		}
		const lastIndex = parsedCurrentPath.at(-1);
		axiosHelper.getFolder(lastIndex).then((response) => {
			const newCurrentFolder = {
				id: response.data.data.id,
				folder_name: response.data.data.folder_name,
				nested_folders: response.data.data.nested_folders,
				items: response.data.data.items,
			};
			this.store.dispatch(setCurrentFolder(newCurrentFolder));
		});
	}
}

const stateHelper = new StateHelper(store);

export default stateHelper;
