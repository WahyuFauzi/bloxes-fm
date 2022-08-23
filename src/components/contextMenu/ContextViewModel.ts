import { setRenderConditionFalse } from '@/redux/contextSlice';
import { setCurrentFolder, showFolderNameInput } from '@/redux/currentSlice';
import fileAxios from '@/logic/FileAxios';
import folderAxios from '@/logic/FolderAxios';
import CreateFileRequest from '../../entity/file/CreateFileRequest';

export default class ContextViewModel {
	constructor(store) {
		this.store = store;
	}
	store;

	uploadFile() {
		const currentFolder = this.store.getState().current.currentFolder;
		const selectedFile = this.store.getState().axiosProcess.selectedFile;
		fileAxios.postFile(selectedFile).then((response: any) => {
			const newItem = {
				id: response.data.data.id,
				item_name: response.data.data.item_name,
			};
			const newCurrentFolder = JSON.parse(JSON.stringify(currentFolder));
			newCurrentFolder.items.push(newItem);
			this.updateFolder(newCurrentFolder);
		});
	}

	updateFolder(updatedFolder) {
		// update current folder state
		this.store.dispatch(setCurrentFolder(updatedFolder));

		//update folder in database
		const newFolder = {
			folder_name: updatedFolder.folder_name,
			nested_folders: updatedFolder.nested_folders,
			items: updatedFolder.items,
		};
		folderAxios
			.updateFolder(updatedFolder.id, newFolder)
			.then((response) => console.log(response));
	}

	setRenderConditionFalse = () => {
		this.store.dispatch(setRenderConditionFalse());
	};

	// Main Context
	handlCreateFolderClick = () => {
		this.store.dispatch(showFolderNameInput());
		this.store.dispatch(setRenderConditionFalse());
	};

	handleInputChange = (e) => {
		const fileUpload = e.target.files[0];
		console.log(fileUpload);
		if (fileUpload !== undefined && fileUpload !== null) {
			const currentFolder = this.store.getState().current.currentFolder;
			fileAxios
				.postFile(new CreateFileRequest(fileUpload.name, fileUpload.size))
				.then((data: any) => {
					const newItem = {
						id: data.id,
						item_name: data.file_name,
					};
					console.log(newItem);
					const newCurrentFolder = JSON.parse(JSON.stringify(currentFolder));
					newCurrentFolder.items.push(newItem);
					this.updateFolder(newCurrentFolder);
				});
		}
	};

	// Folder Context
	handleDeleteFolderClick = () => {
		// get current data
		const currentFolder = this.store.getState().current.currentFolder;
		const selectedFile = this.store.getState().axiosProcess.selectedFile;
		const nestedFolders = currentFolder.nested_folders;
		const newArr = nestedFolders.filter((object) => {
			return object.id !== selectedFile.id;
		});

		// delete folder from database
		folderAxios.deleteFolder(selectedFile.id).then();

		// update folder in database
		const newCurrentFolder = JSON.parse(JSON.stringify(currentFolder));
		newCurrentFolder.nested_folders = newArr;
		this.updateFolder(newCurrentFolder);

		//update render condition state
		this.store.dispatch(setRenderConditionFalse());
	};

	// File Context
	handleDeleteFileClick = async () => {
		// get current data
		const currentFolder = this.store.getState().current.currentFolder;
		const selectedFile = this.store.getState().axiosProcess.selectedFile;
		const items = currentFolder.items;
		const newArr = items.filter((object) => {
			return object.id !== selectedFile.id;
		});

		// delete file from database
		fileAxios.deleteFile(selectedFile.id).then();

		// update folder in database
		const newCurrentFolder = JSON.parse(JSON.stringify(currentFolder));
		newCurrentFolder.items = newArr;
		const newFolder = {
			folder_name: newCurrentFolder.folder_name,
			nested_folders: newCurrentFolder.nested_folders,
			items: newCurrentFolder.items,
		};
		folderAxios
			.updateFolder(newCurrentFolder.id, newFolder)
			.then((response) => console.log(response));
		this.updateFolder(newCurrentFolder);

		//update render condition state
		this.store.dispatch(setRenderConditionFalse());
	};
}
