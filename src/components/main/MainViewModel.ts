import { hideFolderNameInput, setCurrentFolder } from '@/redux/currentSlice';
import { setPosition, setRenderConditionTrue } from '@/redux/contextSlice';
import { setSelectedFile } from '@/redux/axiosProcess';
import folderAxios from '@/logic/FolderAxios';
import CreateFolderRequest from '../../entity/folder/CreateFolderRequest';

export default class MainViewModel {
	constructor(store) {
		this.store = store;
	}

	store;

	hideFolderNameInput() {
		this.store.dispatch(hideFolderNameInput());
	}

	handleContextMenu(e) {
		e.preventDefault();
		e.stopPropagation();
		let x;
		let y;
		this.store.dispatch(
			setSelectedFile({
				id: '',
				type: '',
			})
		);
		e.pageX + 120 > window.innerWidth
			? (x = window.innerWidth - 140)
			: (x = e.pageX);
		e.pageY + 80 > window.innerHeight
			? (y = window.innerHeight - 90)
			: (y = e.pageY - 20);
		this.store.dispatch(setPosition({ x: x, y: y }));
		this.store.dispatch(setRenderConditionTrue());
	}

	updateFolder(updatedFolder) {
		this.store.dispatch(setCurrentFolder(updatedFolder));
		const newFolder = {
			folder_name: updatedFolder.folder_name,
			nested_folders: updatedFolder.nested_folders,
			items: updatedFolder.items,
		};
		folderAxios
			.updateFolder(updatedFolder.id, newFolder)
			.then((response) => console.log(response));
	}

	createFolder(folderName) {
		const currentFolder = this.store.getState().current.currentFolder;
		folderAxios
			.createFolder(new CreateFolderRequest(folderName))
			.then((data: any) => {
				const newFolder = {
					id: data.id,
					folder_name: folderName,
				};
				const newCurrentFolder = JSON.parse(JSON.stringify(currentFolder));
				newCurrentFolder.nested_folders.push(newFolder);
				this.updateFolder(newCurrentFolder);
			});
	}

	backToParentFolder() {
		const currentPath = this.store.getState().current.currentPath;
		const parsedCurrentPath = JSON.parse(JSON.stringify(currentPath));
		if (parsedCurrentPath.length > 1) {
			parsedCurrentPath.pop();
		}
		const lastIndex = parsedCurrentPath.at(-1);
		folderAxios.getFolder(lastIndex).then((data: any) => {
			const newCurrentFolder = {
				id: data.id,
				folder_name: data.folder_name,
				nested_folders: data.nested_folders,
				items: data.items,
			};
			this.store.dispatch(setCurrentFolder(newCurrentFolder));
		});
	}
}
